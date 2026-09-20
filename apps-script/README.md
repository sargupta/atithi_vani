# Apps Script

Google Apps Script sources. These are **not** deployed from this repo — they are pasted
into a script project at https://script.google.com by hand. The copy here is the one of
record; if you edit the script in the browser, paste it back here and commit.

## `homestay-form-rebuild.gs`

Rebuilds the *Homestay Information & Digital Support* Google Form used at the
OTT Launch on 26 September 2026. It captures homestay owners in the Darjeeling,
Kalimpong, Siliguri, Dooars and Sikkim belt, and doubles as the SargAtithi readiness
screen.

**It deletes every existing question and rebuilds the form from scratch.** Make a copy of
the form before running it if any responses have come in.

### Setup

The form id is read from a **script property**, not from the source — this repository is
public and the id should not be in it.

1. Project Settings → Script Properties → Add script property
2. Property `FORM_ID`, value = the long string in the form's edit URL between
   `/forms/d/` and `/edit`
3. Run `rebuildHomestayForm`

Without the property the script throws with instructions rather than touching a form.

### Still to confirm

- `PRICES` — the billing period is a guess. The original form gave no period at all and
  the package option ended in a bare `/`. Confirm before the next event.
- `DISTRICTS` — trim to the districts actually covered.

### Deliberate choices, don't "fix" them

- `setRequireLogin(false)`, `setCollectEmail(false)` and
  `setLimitOneResponsePerUser(false)` must stay off: owners share one tablet at the desk
  and many have no Google account.
- The guest-mobile-number question is a SargAtithi hard dependency — the guest signs in
  with the phone number on their booking, so a homestay that doesn't capture it cannot be
  migrated to the platform.
