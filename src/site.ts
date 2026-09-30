/**
 * Single source of truth for site identity.
 *
 * Everything that used to hardcode a domain, an owner name or a contact link
 * reads from here, so the identity of the site lives in exactly one file.
 */

export const SITE_URL = 'https://brendamanrique.com'
export const SITE_NAME = 'brendamanrique.com'

export const AUTHOR_NAME = 'Brenda Manrique'
export const AUTHOR_HEADLINE = 'Senior Software Engineer'
export const AUTHOR_JOB_TITLE = 'Senior Software Engineer'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/brendastephanie/'
export const GITHUB_URL = 'https://github.com/BrendaManrique'

/**
 * Where the chat sends people once they have used their questions for the day.
 * Mirrored in api/_shared/ratelimit.js, which cannot import this module.
 */
export const BOOKING_URL = 'https://cal.com/brendamanrique'

/** Portrait used for avatars and author cards. */
export const AVATAR_SM = '/brenda-portrait-sm.jpg'
export const AVATAR = '/brenda-portrait.jpg'
export const AVATAR_ALT = 'Portrait of Brenda Manrique'

/**
 * No personal email is published. Contact happens through the LinkedIn and
 * GitHub links — the chat agent and every CTA must respect this.
 */
export const HAS_PUBLIC_EMAIL = false

/**
 * Set once per session when a non-Spanish browser is redirected from "/" to
 * "/en" (see useBrowserLanguageRedirect in App.tsx). Read by the language
 * banner too: English has already been offered, so a visitor who walks back to
 * Spanish has chosen it and should not be asked again.
 */
export const LANG_REDIRECT_KEY = 'lang-redirected'
