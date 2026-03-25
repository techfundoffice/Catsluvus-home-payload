/**
 * Payload CMS - Home 3 Page Seed Data
 * This file contains the complete page data for "Home 3" using the Lexical rich-text editor format.
 * To use: import and call seedHome3Page(payload) from your seed script.
 */

import type { Payload } from 'payload'

// ---------------------------------------------------------------------------
// Helper builders for Lexical nodes
// ---------------------------------------------------------------------------

function textNode(text: string, bold = false, italic = false): object {
  return {
    detail: 0,
    format: (bold ? 1 : 0) | (italic ? 2 : 0),
    mode: 'normal',
    style: '',
    text,
    type: 'text',
    version: 1,
  }
}

function paragraphNode(children: object[], indent = 0): object {
  return {
    children,
    direction: 'ltr',
    format: '',
    indent,
    type: 'paragraph',
    version: 1,
    textFormat: 0,
    textStyle: '',
  }
}

function headingNode(children: object[], tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): object {
  return {
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    tag,
    type: 'heading',
    version: 1,
  }
}

function listItemNode(children: object[], value = 1): object {
  return {
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'listitem',
    value,
    version: 1,
  }
}

function listNode(items: object[], listType: 'bullet' | 'number' = 'bullet'): object {
  return {
    children: items,
    direction: 'ltr',
    format: '',
    indent: 0,
    listType,
    start: 1,
    tag: listType === 'bullet' ? 'ul' : 'ol',
    type: 'list',
    version: 1,
  }
}

function horizontalRuleNode(): object {
  return {
    type: 'horizontalrule',
    version: 1,
  }
}

function emptyParagraph(): object {
  return paragraphNode([])
}

// ---------------------------------------------------------------------------
// Build the complete Lexical editor state for the Home 3 page
// ---------------------------------------------------------------------------

function buildLexicalContent(): object {
  const nodes: object[] = []

  // ── Hero / Title Block ──────────────────────────────────────────────────
  nodes.push(headingNode([textNode('Welcome to Cats Luv Us Boarding Hotel & Grooming', true)], 'h1'))
  nodes.push(headingNode([textNode("South Orange County's Premier Cat-Only Hotel, Cattery & Grooming Spa")], 'h2'))
  nodes.push(headingNode([textNode('Trusted by Orange County Cat Lovers Since 1996')], 'h3'))
  nodes.push(emptyParagraph())

  // ── Tagline ──────────────────────────────────────────────────────────────
  nodes.push(paragraphNode([textNode('Your cat deserves more than a kennel. They deserve a vacation.', true, true)]))
  nodes.push(emptyParagraph())

  // ── About paragraph ──────────────────────────────────────────────────────
  nodes.push(
    paragraphNode([
      textNode(
        'For over 30 years, Cats Luv Us Boarding Hotel has been the most trusted name in cat care throughout South Orange County. From the moment we opened our doors in 1996, we made a promise that has never wavered — to provide every feline guest with a safe, calm, and genuinely enriching experience in an environment designed exclusively for cats. No dogs. No chaos. Just exceptional, personalized care for the animal you love most.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // ── Location ─────────────────────────────────────────────────────────────
  nodes.push(
    paragraphNode([
      textNode(
        'We serve cat owners throughout Laguna Niguel, Mission Viejo, Lake Forest, and all of South Orange County from our convenient location at ',
      ),
      textNode('27601 Forbes Rd, Suite 25, Laguna Niguel, CA 92677', true),
      textNode(' — in the Three Flags Center near Costco on Cabot Road at Crown Valley.'),
    ]),
  )
  nodes.push(emptyParagraph())

  // ── CTAs ─────────────────────────────────────────────────────────────────
  nodes.push(
    paragraphNode([
      textNode('Book Your Cat\'s Stay', true),
      textNode(' | '),
      textNode('Book Cat Grooming', true),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── First Night Free ─────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('FIRST NIGHT FREE FOR NEW CUSTOMERS', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'We are so confident your cat will love staying with us that new customers receive their very first night absolutely free. No gimmicks, no fine print — just our way of introducing you to the Cats Luv Us experience and earning your trust from day one. New customers and refer-a-friend guests are both welcome. We simply ask that you try to book a minimum of three nights so your cat has time to truly settle in and enjoy themselves.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(paragraphNode([textNode('Call today to reserve and claim your First Night Free.', true)]))

  nodes.push(horizontalRuleNode())

  // ── A Different Kind of Cat Hotel ─────────────────────────────────────────
  nodes.push(headingNode([textNode('A DIFFERENT KIND OF CAT HOTEL', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'Most boarding facilities are built for dogs and adapted for cats as an afterthought. Cats Luv Us was built for cats and cats alone — and your feline companion will feel the difference the moment they arrive.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        'Since 1996, our facility has been 100% dog-free. There is no barking echoing down hallways, no unfamiliar canine scents drifting through the air, and no unnecessary stress placed on animals that are hardwired to be sensitive to their environment. What there is, instead, is quiet. Calm. Safety. And a team of deeply experienced cat caretakers who have spent over three decades learning exactly what cats need to thrive away from home.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        'Whether your cat is a confident, curious explorer or a shy, anxious homebody — whether they are a healthy young kitten or a senior cat managing a complex medical regimen — we have the experience, the facilities, and the genuine love for cats to give them an exceptional stay every single time.',
      ),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Suites / Accommodations ───────────────────────────────────────────────
  nodes.push(headingNode([textNode('SPACIOUS SUITES, PLAY AREAS & ACCOMMODATIONS YOUR CAT WILL LOVE', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'We believe a stay at a cat boarding hotel should feel like a genuine vacation — not a waiting room. Every detail of our facility has been thoughtfully designed to keep your cat comfortable, stimulated, and content from the first day to the last.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Private Luxury Suites
  nodes.push(headingNode([textNode('PRIVATE LUXURY SUITES', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'Every guest at Cats Luv Us is provided with their own private, clean, and fully ventilated suite. Your cat will never share a space with a stranger. Their suite is their sanctuary — a quiet, personal space where they can eat, sleep, and relax entirely on their own terms. Our suites are available in three sizes to accommodate every cat and every family:',
      ),
    ]),
  )
  nodes.push(
    listNode([
      listItemNode([textNode('Single Suite: '), textNode('16 cubic feet', true), textNode(' — perfect for one cat')], 1),
      listItemNode([textNode('Double Suite: '), textNode('32 cubic feet', true), textNode(' — ideal for cats that love extra room')], 2),
      listItemNode([textNode('Family Suite: '), textNode('48 cubic feet', true), textNode(' — designed for bonded pairs and multi-cat families')], 3),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(paragraphNode([textNode('[ ADD SUITE IMAGES HERE ]', italic(true))]))
  nodes.push(emptyParagraph())

  // Connecting Family Suites
  nodes.push(headingNode([textNode('CONNECTING FAMILY SUITES', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'Bonded cats and multi-cat families deserve to stay together. We offer double and triple adjoining suites so your cats can remain side by side throughout their entire stay, providing the comfort and familiarity that makes all the difference. Bedrooms with connecting doors are available for families of two or more.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(paragraphNode([textNode('[ ADD FAMILY SUITE IMAGES HERE ]', italic(true))]))
  nodes.push(emptyParagraph())

  // Play Areas
  nodes.push(headingNode([textNode('THREE LARGE DEDICATED PLAY AREAS', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'Exercise and exploration are essential to a happy, healthy cat. Our facility features three large, dedicated play areas where cats enjoy supervised time to roam, stretch, climb, and engage in a safe and stimulating environment. These are not small cages or cramped enclosures — they are generous, airy spaces designed with the natural behaviors and instincts of cats in mind.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(paragraphNode([textNode('[ ADD PLAY AREA IMAGES HERE ]', italic(true))]))
  nodes.push(emptyParagraph())

  // Cat TV
  nodes.push(headingNode([textNode('CAT TV — LIVE BIRD ENTERTAINMENT', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        "Boredom is the enemy of a happy cat. To keep our guests mentally stimulated and entertained throughout the day, we move mobile birdcages housing live parakeets through the facility — providing hours of natural, instinct-driven entertainment without any risk to the birds. Think of it as Netflix, curated specifically for cats.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Daily Updates
  nodes.push(headingNode([textNode('DAILY PHOTO & VIDEO UPDATES', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'You should never have to wonder how your cat is doing. We send daily photo and video updates directly to you so you can see for yourself that your cat is relaxed, happy, and well cared for — no matter where in the world you happen to be.',
      ),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Guarantee ─────────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('100% PURRFECT OR YOUR MONEY BACK GUARANTEE', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'Every stay at Cats Luv Us is backed by our 100% Satisfaction Guarantee. If for any reason your experience does not meet your expectations, we will make it right — no questions asked. Our staff is always just a phone call away before, during, and after your cat\'s stay to address any questions or concerns you may have. Your peace of mind matters to us as much as your cat\'s comfort does.',
      ),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Testimonials ──────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('WHAT OUR CUSTOMERS ARE SAYING', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode('4.5 out of 5.0', true),
      textNode(' — Based on 120 Verified Yelp Reviews'),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        '"Wow, you are amazing! Thank you for taking such great care of Smokey. What a wonderful experience. I loved receiving updates on Smokey while we were on vacation. We will definitely be back!"',
        false,
        true,
      ),
    ]),
  )
  nodes.push(paragraphNode([textNode('— Deborah R.', true)]))
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        '"The best. Absolutely the best. I had a groomer come to my house who put a muzzle on my cat unnecessarily, and I was so upset I went searching for someone better. I found Cats Luv Us and I am never going back."',
        false,
        true,
      ),
    ]),
  )
  nodes.push(paragraphNode([textNode('— Susan G.', true)]))

  nodes.push(horizontalRuleNode())

  // ── When You Need Us ──────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('WE ARE HERE WHEN YOU NEED US MOST', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'Life is unpredictable. Cats Luv Us is here to provide a safe, reliable solution whenever circumstances require professional cat care, including when you are:',
      ),
    ]),
  )
  nodes.push(
    listNode([
      listItemNode([textNode('Traveling out of town for work or vacation')], 1),
      listItemNode([textNode('Relocating, remodeling, or dealing with construction at home')], 2),
      listItemNode([textNode('Having your home tented for termites')], 3),
      listItemNode([textNode('Visiting Orange County and unable to leave your cat behind')], 4),
      listItemNode([textNode('Managing a cat that requires daily medications such as insulin or subcutaneous fluids')], 5),
      listItemNode([textNode('Caring for an anxious, difficult, or medically complex cat')], 6),
      listItemNode([textNode('Protecting your privacy and valuables while service professionals are in your home')], 7),
      listItemNode([textNode('In need of expert grooming, a nail trim, or a full spa day for your cat')], 8),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Medical Care ──────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('SPECIALIZED MEDICAL CARE & LONG-TERM BOARDING', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'Cats with medical needs deserve attentive, knowledgeable care — and that is precisely what we provide. Our staff has extensive hands-on experience administering a full spectrum of treatments and medications, including:',
      ),
    ]),
  )
  nodes.push(
    listNode([
      listItemNode([textNode('Insulin injections')], 1),
      listItemNode([textNode('Subcutaneous fluid therapy')], 2),
      listItemNode([textNode('Inhaler and respiratory support')], 3),
      listItemNode([textNode('Oral medications')], 4),
      listItemNode([textNode('Liquid medications')], 5),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        "We also have an on-call veterinarian available to ensure your cat has access to professional medical support whenever it is needed — giving you complete peace of mind throughout your cat's entire stay.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        "Simply provide us with your cat's instructions and medical history at check-in and we will execute their care routine with the same precision and consistency you provide at home. Not a single dose will be missed.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        'For cats requiring long-term boarding due to an extended trip, relocation, or home renovation, we offer a stable, nurturing environment with the close personal attention that long stays require. Senior cats and cats with complex needs are always welcome — and always in exceptionally capable hands.',
      ),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Services ──────────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('OUR SERVICES', true)], 'h2'))

  // Cat Boarding
  nodes.push(headingNode([textNode('CAT BOARDING', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        "Our private boarding suites provide a safe, calm, and comfortable home away from home for your cat. We follow your cat's exact feeding schedule — just bring their regular food — and provide close personal attention throughout their stay. Suites can be doubled or tripled for multi-cat families or cats that benefit from extra space.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Day Care
  nodes.push(headingNode([textNode('CAT DAY CARE', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'Need a safe and stimulating environment for your cat during the day? Our cat day care service keeps your feline companion entertained and cared for while you handle work or daytime commitments.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Long-term Boarding
  nodes.push(headingNode([textNode('LONG-TERM BOARDING', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'Whether you are relocating, renovating, or embarking on an extended trip, we provide the consistency, stability, and individualized care that long-term guests require.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Medication
  nodes.push(headingNode([textNode('MEDICATION ADMINISTRATION', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        "From insulin and subcutaneous fluids to inhalers and oral medications, our trained staff handles your cat's full medical routine with care, accuracy, and compassion.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // On-call Vet
  nodes.push(headingNode([textNode('ON-CALL VETERINARIAN', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        "For your complete peace of mind, we have an on-call veterinarian available throughout your cat's stay. In the event of any health concern, professional veterinary guidance is never far away.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Vet Emergency
  nodes.push(headingNode([textNode('VETERINARY EMERGENCY PROTOCOL', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        "In the unlikely event that your cat becomes ill during their stay, we will contact you and your veterinarian immediately using the emergency information provided at check-in. Your cat's health and safety are our absolute top priority at every moment.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Adjoining Suites
  nodes.push(headingNode([textNode('ADJOINING SUITE OPTIONS', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'For multi-cat households or cats that simply need more room, we offer secure, private suites in configurations of one, two, or three adjoining rooms. All suites prevent contact between unrelated cat guests.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Vaccination
  nodes.push(headingNode([textNode('VACCINATION REQUIREMENTS', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'To protect the health of every guest in our care, all cats must have a current FRCP vaccination — covering feline rhinotracheitis, calici, and panleukopenia — administered within the past three years. Proof of vaccination is required at check-in.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  // Grooming
  nodes.push(headingNode([textNode('CAT GROOMING', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'Our grooming team works exclusively with cats — and the dog-free environment of our facility means that even the most sensitive and anxious cats remain calm and relaxed throughout their entire grooming appointment. Our professional cat grooming services include:',
      ),
    ]),
  )
  nodes.push(
    listNode([
      listItemNode([textNode('Lion Cuts')], 1),
      listItemNode([textNode('De-shedding treatments')], 2),
      listItemNode([textNode('De-matting')], 3),
      listItemNode([textNode('Waterless baths — a gentle, low-stress alternative for cats who dislike traditional bathing')], 4),
      listItemNode([textNode('Precision nail trims')], 5),
      listItemNode([textNode('Nail caps — a humane, safe, and effective alternative to declawing')], 6),
      listItemNode([textNode('Calming shampoos')], 7),
      listItemNode([textNode('Flea treatments')], 8),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(paragraphNode([textNode('Click here to book a cat grooming appointment.', true)]))

  nodes.push(horizontalRuleNode())

  // ── Why Choose Us ─────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('WHY CAT OWNERS AROUND THE WORLD CHOOSE CATS LUV US', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'The cat boarding industry is full of facilities that treat feline guests as an afterthought. Cats Luv Us was built from the ground up with one animal in mind — the cat — and that singular focus is evident in everything we do.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        'Since 1996, we have welcomed cats from across Orange County and from around the world, earning a reputation for excellence, reliability, and genuine compassion. Our clients return year after year not simply because we provide a service, but because they trust us completely with the animals they love. That trust is something we work every single day to deserve.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    listNode([
      listItemNode([textNode('Cat-only facility, 100% dog-free since 1996')], 1),
      listItemNode([textNode('Over 30 years of experience in professional cat care')], 2),
      listItemNode([textNode('Private luxury suites in single, double, and family sizes')], 3),
      listItemNode([textNode('Suite dimensions from 16 to 48 cubic feet')], 4),
      listItemNode([textNode('Three large dedicated play areas for exercise and exploration')], 5),
      listItemNode([textNode('Connecting family suites for bonded cats and multi-cat households')], 6),
      listItemNode([textNode('Full medication administration including insulin, subcutaneous fluids, and inhalers')], 7),
      listItemNode([textNode('On-call veterinarian for complete peace of mind')], 8),
      listItemNode([textNode('Cat TV with live parakeet entertainment throughout the day')], 9),
      listItemNode([textNode('Daily photo and video updates for every owner')], 10),
      listItemNode([textNode('Long-term boarding available for extended stays')], 11),
      listItemNode([textNode('Professional on-site cat grooming')], 12),
      listItemNode([textNode('Walk-ins welcome')], 13),
      listItemNode([textNode('Woman owned and operated')], 14),
      listItemNode([textNode('Budget friendly rates')], 15),
      listItemNode([textNode('New customers receive their first night free')], 16),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── How It Works ──────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('HOW IT WORKS', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode('Getting started at Cats Luv Us is simple. Here is what to expect.'),
    ]),
  )
  nodes.push(emptyParagraph())

  nodes.push(headingNode([textNode('1. BOOK YOUR DATES', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        'Contact us to check availability, ask about our amenities, and secure your cat\'s reservation. We recommend booking in advance, particularly around holidays and peak travel periods when suites fill quickly.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  nodes.push(headingNode([textNode('2. ARRIVAL & CHECK-IN', true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        "When you arrive, a member of our team will welcome you and your cat and walk you through the brief check-in process. You will provide your cat's feeding schedule, vaccination records, emergency contact information, and any medication or special care instructions.",
      ),
    ]),
  )
  nodes.push(emptyParagraph())

  nodes.push(headingNode([textNode("3. YOUR CAT'S PERSONAL TOUR", true)], 'h3'))
  nodes.push(
    paragraphNode([
      textNode(
        "We will personally show you your cat's private suite, walk you through our facility, and explain in detail exactly how we will care for your cat during their stay. We encourage you to ask questions, look around, and leave feeling completely at ease.",
      ),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Tours ─────────────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('SEE IT FOR YOURSELF — PERSONAL TOURS ALWAYS WELCOME', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'We believe the best way to understand what makes Cats Luv Us special is to come and see it for yourself. We warmly invite prospective clients to stop by for a personal tour of our facility before booking. Call us today to schedule a visit.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        'When you walk through our doors, you will see firsthand the private suites, the three large play areas, the Cat TV entertainment, and the team of caring professionals who make Cats Luv Us the most trusted cat boarding hotel in South Orange County. You will leave with the peace of mind that comes from knowing exactly where your cat will be — and exactly how well they will be treated.',
      ),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Trust / Legacy ────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('TRUSTED FOR OVER 30 YEARS', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'We have been in business since 1996. In that time, we have cared for thousands of cats, earned hundreds of five-star reviews, and built relationships with Orange County cat owners that span decades. Our five-star rated cat caretakers are passionate about what they do, deeply experienced in feline care, and genuinely devoted to the well-being of every animal in their charge.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode(
        'When you board your cat at Cats Luv Us, you are not handing them over to a stranger. You are entrusting them to a team that has been doing this for over 30 years — and that takes that responsibility seriously every single day.',
      ),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Contact / CTA ─────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('HAVE QUESTIONS? WE WOULD LOVE TO HEAR FROM YOU', true)], 'h2'))
  nodes.push(
    paragraphNode([
      textNode(
        'Whether you have questions about boarding availability, grooming services, medication administration, long-term stays, or anything else, we are here to help. Fill out the form below and we will respond within 24 hours — or call us directly and we will be happy to speak with you right away.',
      ),
    ]),
  )
  nodes.push(emptyParagraph())
  nodes.push(paragraphNode([textNode('(949) 582-1732', true)]))

  nodes.push(horizontalRuleNode())

  // ── Hours ─────────────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('HOURS OF OPERATION', true)], 'h2'))
  nodes.push(
    listNode([
      listItemNode([textNode('Monday – Friday: '), textNode('9:00 AM – 5:00 PM', true)], 1),
      listItemNode([textNode('Saturday: '), textNode('9:00 AM – 12:00 PM', true)], 2),
      listItemNode([textNode('Sunday: '), textNode('Closed', true)], 3),
    ]),
  )

  nodes.push(horizontalRuleNode())

  // ── Footer Info ───────────────────────────────────────────────────────────
  nodes.push(headingNode([textNode('Cats Luv Us Boarding Hotel & Grooming', true)], 'h3'))
  nodes.push(paragraphNode([textNode('27601 Forbes Rd, Suite 25')]))
  nodes.push(paragraphNode([textNode('Laguna Niguel, CA 92677')]))
  nodes.push(paragraphNode([textNode('(949) 582-1732', true)]))
  nodes.push(emptyParagraph())
  nodes.push(
    paragraphNode([
      textNode('Located in the Three Flags Center near Costco on Cabot Road at Crown Valley', false, true),
    ]),
  )

  return {
    root: {
      children: nodes,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

// tiny helper so inline italic(true) reads clearly
function italic(_v: boolean): boolean {
  return _v
}

// ---------------------------------------------------------------------------
// Page seed function
// ---------------------------------------------------------------------------

export async function seedHome3Page(payload: Payload): Promise<void> {
  console.log('Seeding Home 3 page...')

  const lexicalContent = buildLexicalContent()

  // Check if the page already exists
  const existing = await payload.find({
    collection: 'pages',
    where: { title: { equals: 'Home 3' } },
  })

  if (existing.docs.length > 0) {
    console.log('Home 3 page already exists — updating...')
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: {
        title: 'Home 3',
        content: lexicalContent,
      },
    })
    console.log('Home 3 page updated successfully.')
    return
  }

  await payload.create({
    collection: 'pages',
    data: {
      title: 'Home 3',
      content: lexicalContent,
    },
  })

  console.log('Home 3 page created successfully.')
}

// ---------------------------------------------------------------------------
// Export the raw page data object (useful for direct REST/API seeding)
// ---------------------------------------------------------------------------

export const home3PageData = {
  title: 'Home 3',
  content: buildLexicalContent(),
}

export default home3PageData
