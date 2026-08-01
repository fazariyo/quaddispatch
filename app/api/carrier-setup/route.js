import { NextResponse } from 'next/server';

const REQUIRED = ['companyName', 'mcDot', 'contactName', 'phone', 'email', 'truckType'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // Re-validate server side — never trust the client-side checks alone.
  const value = (key) => String(payload?.[key] ?? '').trim();
  const missing = REQUIRED.filter((key) => !value(key));
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: 'Some required fields are missing.', fields: missing },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(value('email'))) {
    return NextResponse.json(
      { ok: false, error: 'That email address does not look valid.', fields: ['email'] },
      { status: 400 }
    );
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    companyName: value('companyName'),
    mcDot: value('mcDot'),
    contactName: value('contactName'),
    phone: value('phone'),
    email: value('email'),
    truckType: value('truckType'),
    trailerSize: value('trailerSize'),
    notes: value('notes'),
  };

  // For now the submission just goes to the server log.
  console.log('[carrier-setup] new submission:', JSON.stringify(submission, null, 2));

  /*
   * TODO: deliver this somewhere real. Drop your integration in here — e.g.
   *
   *   await resend.emails.send({
   *     from: 'website@quaddispatchers.com',
   *     to: process.env.DISPATCH_INBOX,
   *     subject: `Carrier setup — ${submission.companyName}`,
   *     text: JSON.stringify(submission, null, 2),
   *   });
   *
   * ...or write it to your CRM / database. Keep the API key in an env var
   * (.env.local), never in this file. If the send throws, return a 502 so the
   * form shows its error state instead of a false success.
   */

  return NextResponse.json({
    ok: true,
    message: 'Carrier setup request received.',
  });
}
