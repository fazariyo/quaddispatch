/**
 * Relays a form submission to Web3Forms.
 *
 * GitHub Pages is a static host, so there is no server of ours left to receive
 * submissions — Web3Forms forwards them to the inbox tied to the access key.
 *
 * Set NEXT_PUBLIC_WEB3FORMS_KEY in the build environment:
 *   repo Settings > Secrets and variables > Actions > Variables.
 * The key is public by design — it only ever delivers to its owner's inbox —
 * which is why it can safely live in a NEXT_PUBLIC_ var baked into the bundle.
 */
const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

export async function submitForm({ subject, values }) {
  if (!ACCESS_KEY) {
    throw new Error('This form is not connected to an inbox yet.');
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject,
      from_name: 'Quad Dispatch website',
      ...values,
    }),
  });

  // Web3Forms answers with { success: boolean, message: string }.
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Something went wrong on our end.');
  }
  return data;
}

export default submitForm;
