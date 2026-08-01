import { NextResponse } from 'next/server';

const REQUIRED = ['name', 'email', 'message'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

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
    name: value('name'),
    email: value('email'),
    phone: value('phone'),
    message: value('message'),
  };

  console.log('[contact] new message:', JSON.stringify(submission, null, 2));

  /*
   * TODO: deliver this somewhere real — same pattern as
   * app/api/carrier-setup/route.js. Send the email (or push to your CRM)
   * here, keep credentials in .env.local, and return a 502 on failure so the
   * form surfaces its error state rather than a false success.
   */

  return NextResponse.json({
    ok: true,
    message: 'Message received.',
  });
}
