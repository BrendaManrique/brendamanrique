/**
 * Single source of truth for site identity.
 *
 * Everything that used to hardcode a domain, an owner name or a contact link
 * reads from here, so the identity of the site lives in exactly one file.
 */

export const SITE_URL = 'https://brendamanrique.com'
export const SITE_NAME = 'brendamanrique.com'

export const AUTHOR_NAME = 'Brenda Manrique'
export const AUTHOR_HEADLINE = 'Agentic AI Systems Builder'
export const AUTHOR_JOB_TITLE = 'Agentic AI Systems Engineer'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/brendastephanie/'
export const GITHUB_URL = 'https://github.com/BrendaManrique'

/** Portrait used for avatars and author cards. */
export const AVATAR_SM = '/brenda-archive-sm.jpg'
export const AVATAR = '/brenda-archive.jpg'
export const AVATAR_ALT = 'Brenda Manrique archival portrait'

/**
 * No personal email is published. Contact happens through the LinkedIn and
 * GitHub links — the chat agent and every CTA must respect this.
 */
export const HAS_PUBLIC_EMAIL = false
