/**
 * Shared values for the Terms of Service and Privacy Policy pages.
 *
 * IMPORTANT: the copy on those two pages is a generic starting template, not
 * legal advice. Have a lawyer review both before you rely on them, and bump
 * LEGAL_EFFECTIVE_DATE whenever the wording changes.
 *
 * Kept as a hard-coded string on purpose — deriving it from new Date() would
 * bake the build date into a statically exported page.
 */
export const LEGAL_EFFECTIVE_DATE = 'August 1, 2026';

/** Where disputes are handled. Match this to where the business is registered. */
export const GOVERNING_STATE = 'Texas';

export default LEGAL_EFFECTIVE_DATE;
