/**
 * Rebuilds the "Homestay Information & Digital Support" Google Form
 * for the OTT Launch, 26 September 2026.
 *
 * HOW TO RUN
 *   1. Open the form -> three-dot menu -> "Make a copy"  (backup, do this first)
 *   2. Go to https://script.google.com -> New project
 *   3. Delete the sample code, paste this whole file in, Save
 *   4. Project Settings -> Script Properties -> Add script property
 *        Property: FORM_ID
 *        Value:    the id from the form's edit URL, the long string between
 *                  /forms/d/ and /edit
 *      (The id is NOT stored in this file — this repository is public.)
 *   5. Press Run. Google will ask you to authorise once -> Review permissions -> Allow
 *   6. Reload the form. Done.
 *
 * NOTE: this DELETES all existing questions and rebuilds them.
 * That is safe right now because the form has 0 responses.
 * If responses have come in before you run this, STOP and make a copy first.
 */

// ---------------------------------------------------------------------------
// CONFIG -- check these before running
// ---------------------------------------------------------------------------

// !! CONFIRM THE BILLING PERIOD. These are guesses -- the original form gave
// !! no period at all, and the package option ended in a bare "/".
var PRICES = [
  'Google Business Profile setup & management — ₹999/month',
  'Local SEO — ₹1,499/month',
  'Website creation & management — ₹1,999/month',
  'Google + SEO + Website package — from ₹5,000/month'
];

// Trim to the districts you actually cover.
var DISTRICTS = [
  'Darjeeling', 'Kalimpong', 'Siliguri', 'Jalpaiguri',
  'Alipurduar', 'Cooch Behar', 'Gangtok (Sikkim)', 'Namchi (Sikkim)', 'Other'
];

var EVENT_NAME = 'OTT Launch — 26 September 2026';

// ---------------------------------------------------------------------------

function getFormId_() {
  var id = PropertiesService.getScriptProperties().getProperty('FORM_ID');
  if (!id) {
    throw new Error(
      'FORM_ID script property is not set. Project Settings -> Script Properties -> ' +
      'add FORM_ID with the id from the form edit URL (between /forms/d/ and /edit).'
    );
  }
  return id;
}

function rebuildHomestayForm() {
  var form = FormApp.openById(getFormId_());

  // Wipe existing questions (iterate backwards so indices stay valid)
  var items = form.getItems();
  for (var i = items.length - 1; i >= 0; i--) {
    form.deleteItem(items[i]);
  }

  form.setTitle('Homestay Information & Digital Support — Sargvision');
  form.setDescription(
    'Sargvision helps homestays in the region get found online — on Google, in search, ' +
    'and through direct bookings instead of agent commission.\n\n' +
    'This takes about 2 minutes. Tell us about your homestay and what you already have ' +
    'online, and we will send you a free check of how your homestay currently appears ' +
    'on Google — no cost, no commitment.\n\n' +
    'Any questions, please ask anyone at our desk.'
  );

  // =========================================================================
  // SECTION 1 -- ask at the event
  // =========================================================================

  form.addTextItem()
    .setTitle('Homestay Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Owner / Manager Name')
    .setRequired(true);

  var phoneRule = FormApp.createTextValidation()
    .setHelpText('Please enter a 10-digit mobile number.')
    .requireTextMatchesPattern('^(\\+?91[\\- ]?)?[6-9]\\d{9}$')
    .build();

  form.addTextItem()
    .setTitle('WhatsApp Number')
    .setHelpText('We will send your free Google check to this number.')
    .setRequired(true)
    .setValidation(phoneRule);

  var emailRule = FormApp.createTextValidation()
    .setHelpText('Please enter a valid email address.')
    .requireTextIsEmail()
    .build();

  form.addTextItem()
    .setTitle('Email Address')
    .setHelpText('Only needed if you would like us to manage your Google listing — ' +
                 'Google requires the email your listing is linked to.')
    .setValidation(emailRule);

  form.addTextItem()
    .setTitle('Village / Town')
    .setRequired(true);

  form.addListItem()
    .setTitle('District')
    .setChoiceValues(DISTRICTS)
    .setRequired(true);

  form.addTextItem()
    .setTitle('Google Maps link (if you have one)')
    .setHelpText('Open Google Maps, search your homestay, tap Share, and paste the link ' +
                 'here. Leave blank if you are not sure — we will find it.');

  form.addListItem()
    .setTitle('How many rooms do you have?')
    .setChoiceValues(['1–2 rooms', '3–5 rooms', '6–10 rooms', 'More than 10 rooms'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Where do your bookings come from today?')
    .setHelpText('Tick all that apply.')
    .setChoiceValues([
      'Walk-in guests',
      'Phone call / WhatsApp from the guest',
      'Local agent, taxi driver or tour operator',
      'MakeMyTrip / Goibibo',
      'Booking.com / Agoda',
      'Airbnb',
      'Instagram or Facebook',
      'My own website',
      'Repeat guests / word of mouth'
    ])
    .showOtherOption(true)
    .setRequired(true);

  // SargAtithi hard dependency: the guest signs in with the phone number on their
  // booking. A homestay that does not capture it cannot be migrated to the platform.
  form.addMultipleChoiceItem()
    .setTitle("Do you note down the guest's mobile number when they book?")
    .setHelpText('Just so we know which guest details you already collect.')
    .setChoiceValues(['Yes, always', 'Sometimes', 'No'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Which of these does your homestay already have?')
    .setHelpText('Tick all that apply. "I am not sure" is a perfectly good answer.')
    .setChoiceValues([
      'A Google listing (shows on Google Maps)',
      'A website',
      'Instagram page',
      'Facebook page',
      'Listed on a booking site (MakeMyTrip, Booking.com, Airbnb, etc.)',
      'WhatsApp Business profile',
      'None of these',
      'I am not sure'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Do you have good photos of your homestay?')
    .setHelpText('Photos are the first thing we need to put your homestay online.')
    .setChoiceValues([
      'Yes, plenty of good photos',
      'A few, taken on a phone',
      'No, or very few'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('What is special about your homestay or its surroundings?')
    .setChoiceValues([
      'River / lake view',
      'Mountain / valley view',
      'Tea garden',
      'Forest or wildlife nearby',
      'Near a well-known tourist spot',
      'Home-cooked local food',
      'Organic farm / kitchen garden',
      'Bonfire / outdoor seating',
      'Trekking or birdwatching base',
      'Village or cultural experience',
      'Pet friendly'
    ])
    .showOtherOption(true);

  form.addParagraphTextItem()
    .setTitle('Describe your homestay in one line — the way you would describe it to a guest')
    .setHelpText('We will use your own words when we write your Google listing.');

  form.addCheckboxItem()
    .setTitle('What would you like help with?')
    .setChoiceValues([
      'Getting found on Google when tourists search',
      'Getting more direct bookings (less agent / OTA commission)',
      'A website for my homestay',
      'Better photos',
      'Getting more reviews',
      'Instagram / social media',
      'Not sure yet — please explain it to me'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('May we contact you on WhatsApp about this?')
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Anything you would like to ask us?');

  form.addListItem()
    .setTitle('Where did you meet us?')
    .setChoiceValues([EVENT_NAME, 'Other event', 'Online']);

  // =========================================================================
  // SECTION 2 -- follow-up detail (optional)
  // =========================================================================

  form.addPageBreakItem()
    .setTitle('A few more details (optional)')
    .setHelpText('Only if you have a minute — this helps us prepare before we call you.');

  form.addCheckboxItem()
    .setTitle('What meals do you provide?')
    .setChoiceValues([
      'Breakfast', 'Lunch', 'Dinner', 'Tea / snacks', 'We do not provide meals'
    ]);

  form.addCheckboxItem()
    .setTitle('What facilities do you provide?')
    .setChoiceValues([
      'Wi-Fi',
      'Hot water',
      'Parking',
      'Housekeeping / room cleaning',
      'Pickup & drop',
      'Power backup',
      'Heater / extra blankets',
      'Attached bathroom'
    ])
    .showOtherOption(true);

  form.addListItem()
    .setTitle('What do you charge per night, roughly?')
    .setChoiceValues([
      'Under ₹1,000',
      '₹1,000 – ₹2,000',
      '₹2,000 – ₹3,500',
      '₹3,500 – ₹5,000',
      'Above ₹5,000'
    ]);

  form.addCheckboxItem()
    .setTitle('Which months are busiest for you?')
    .setChoiceValues([
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]);

  // --- How the property runs day to day (SargAtithi readiness) ---

  form.addMultipleChoiceItem()
    .setTitle('Who looks after the property day to day?')
    .setChoiceValues([
      'I do, myself',
      'A family member',
      'A manager or staff member',
      'A caretaker who lives on site'
    ]);

  form.addCheckboxItem()
    .setTitle('How do guests reach you during their stay?')
    .setChoiceValues([
      'They call my mobile',
      'WhatsApp',
      'They come and find me',
      'We have staff on duty',
      'No fixed way'
    ])
    .showOtherOption(true);

  form.addMultipleChoiceItem()
    .setTitle('How do you keep track of guest requests and complaints today?')
    .setChoiceValues([
      'Guest tells me and I remember it',
      'Written in a register',
      'WhatsApp messages',
      'We do not get many requests'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('How comfortable are you (or your manager) with using apps on a smartphone?')
    .setChoiceValues([
      'Very — I use apps every day',
      'Somewhat — mainly WhatsApp and calls',
      'Not much — someone else would handle it'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Is there mobile network and Wi-Fi in the guest rooms?')
    .setChoiceValues([
      'Yes, both',
      'Wi-Fi in common areas only',
      'Network is weak',
      'No Wi-Fi'
    ]);

  form.addCheckboxItem()
    .setTitle('Which of these would you consider for your homestay?')
    .setHelpText('Ticking a box is not a commitment — it just tells us what to explain ' +
                 'when we call.')
    .setChoiceValues(PRICES.concat([
      'None right now — I just want information',
      'I would like someone to call me and explain the options'
    ]));

  // =========================================================================
  // Form settings
  // =========================================================================

  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Thank you! We will send your free Google check to your WhatsApp number shortly.'
  );

  // Must stay off: owners share one tablet at the desk, and many have no Google account.
  try { form.setLimitOneResponsePerUser(false); } catch (e) {}
  try { form.setCollectEmail(false); } catch (e) {}
  try { form.setRequireLogin(false); } catch (e) {}

  Logger.log('Done. Rebuilt form: ' + form.getPublishedUrl());
}
