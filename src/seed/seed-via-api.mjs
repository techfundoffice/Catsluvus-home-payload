#!/usr/bin/env node
/**
 * REST API Seed Script — Home 3 Page
 * ====================================
 * Uses the Payload CMS REST API to create the "Home 3" page.
 *
 * Usage:
 *   node src/seed/seed-via-api.mjs --url http://localhost:3000 --email admin@example.com --password yourpassword
 *
 * Or set environment variables:
 *   PAYLOAD_URL=http://localhost:3000
 *   PAYLOAD_EMAIL=admin@example.com
 *   PAYLOAD_PASSWORD=yourpassword
 *   node src/seed/seed-via-api.mjs
 */

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// ── Config ────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const getArg = (flag) => {
  const i = args.indexOf(flag)
  return i !== -1 ? args[i + 1] : undefined
}

const BASE_URL   = getArg('--url')      || process.env.PAYLOAD_URL      || 'http://localhost:3000'
const EMAIL      = getArg('--email')    || process.env.PAYLOAD_EMAIL    || 'admin@example.com'
const PASSWORD   = getArg('--password') || process.env.PAYLOAD_PASSWORD || 'changeme'

// ── Load lexical content ──────────────────────────────────────────────────────
const lexicalContent = JSON.parse(
  readFileSync(join(__dirname, 'home3-lexical.json'), 'utf8')
)

// ── Helpers ───────────────────────────────────────────────────────────────────
async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  const text = await res.text()
  let data
  try { data = JSON.parse(text) } catch { data = text }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${path}: ${JSON.stringify(data)}`)
  }
  return data
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\nConnecting to Payload CMS at ${BASE_URL}...`)

  // 1. Login
  const loginRes = await request('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  const token = loginRes.token
  console.log('✓ Authenticated successfully.')

  const authHeaders = { Authorization: `JWT ${token}` }

  // 2. Check if "Home 3" page already exists
  const existing = await request(
    '/api/pages?where[title][equals]=Home%203&limit=1',
    { headers: authHeaders }
  )

  const pageData = {
    title: 'Home 3',
    content: lexicalContent,
  }

  if (existing.docs && existing.docs.length > 0) {
    const id = existing.docs[0].id
    console.log(`Page "Home 3" already exists (id: ${id}) — updating...`)
    const updated = await request(`/api/pages/${id}`, {
      method: 'PATCH',
      headers: authHeaders,
      body: JSON.stringify(pageData),
    })
    console.log(`✓ Page "Home 3" updated successfully. ID: ${updated.doc?.id || updated.id}`)
  } else {
    console.log('Creating new "Home 3" page...')
    const created = await request('/api/pages', {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify(pageData),
    })
    console.log(`✓ Page "Home 3" created successfully. ID: ${created.doc?.id || created.id}`)
  }

  console.log('\nDone! Navigate to your Payload admin panel to view the page.')
}

main().catch((err) => {
  console.error('\n✗ Error:', err.message)
  process.exit(1)
})
