'use client';

import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY = { name: '', email: '', phone: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Your name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'That email address does not look valid.';
  }
  if (values.phone.trim() && (values.phone.match(/\d/g) || []).length < 10) {
    errors.phone = 'Enter a full phone number including area code.';
  }
  if (!values.message.trim()) {
    errors.message = 'Tell us how we can help.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail helps us route your message.';
  }
  return errors;
}

/** Same submit/validate/success pattern as CarrierSetupForm, smaller field set. */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [serverError, setServerError] = useState('');

  const update = (key) => (event) => {
    const next = { ...values, [key]: event.target.value };
    setValues(next);
    if (touched[key] || errors[key]) setErrors(validate(next));
  };

  const blur = (key) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const invalid = (key) => (touched[key] && errors[key] ? ' invalid' : '');

  async function onSubmit(event) {
    event.preventDefault();
    setServerError('');

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setTouched(Object.fromEntries(Object.keys(EMPTY).map((k) => [k, true])));
      const firstBad = Object.keys(EMPTY).find((key) => found[key]);
      if (firstBad) document.getElementById(`c-${firstBad}`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong on our end.');
      }
      setStatus('done');
    } catch (err) {
      setStatus('idle');
      setServerError(`${err.message} Please call dispatch — the phone is always answered.`);
    }
  }

  if (status === 'done') {
    return (
      <div className="form-wrap">
        <div className="form-ok">
          <div className="ok-mark">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3>Message Sent</h3>
          <p>
            Thanks, {values.name.split(' ')[0] || 'friend'} — we have your message and will reply to{' '}
            {values.email} shortly. Need an answer right now? The dispatch line is staffed 24/7.
          </p>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setValues(EMPTY);
              setErrors({});
              setTouched({});
              setStatus('idle');
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrap">
      {serverError ? (
        <p className="form-error" role="alert">
          {serverError}
        </p>
      ) : null}

      <form onSubmit={onSubmit} noValidate>
        <div className="form-grid">
          <div className={`field${invalid('name')}`}>
            <label htmlFor="c-name">
              Your Name <span className="req">*</span>
            </label>
            <input
              id="c-name"
              name="name"
              value={values.name}
              onChange={update('name')}
              onBlur={blur('name')}
              aria-invalid={Boolean(invalid('name'))}
              aria-describedby={invalid('name') ? 'c-name-msg' : undefined}
              autoComplete="name"
            />
            {invalid('name') ? (
              <span className="msg" id="c-name-msg">
                {errors.name}
              </span>
            ) : null}
          </div>

          <div className={`field${invalid('email')}`}>
            <label htmlFor="c-email">
              Email <span className="req">*</span>
            </label>
            <input
              id="c-email"
              name="email"
              type="email"
              value={values.email}
              onChange={update('email')}
              onBlur={blur('email')}
              aria-invalid={Boolean(invalid('email'))}
              aria-describedby={invalid('email') ? 'c-email-msg' : undefined}
              autoComplete="email"
            />
            {invalid('email') ? (
              <span className="msg" id="c-email-msg">
                {errors.email}
              </span>
            ) : null}
          </div>

          <div className={`field full${invalid('phone')}`}>
            <label htmlFor="c-phone">Phone</label>
            <input
              id="c-phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={update('phone')}
              onBlur={blur('phone')}
              aria-invalid={Boolean(invalid('phone'))}
              aria-describedby={invalid('phone') ? 'c-phone-msg' : undefined}
              autoComplete="tel"
            />
            {invalid('phone') ? (
              <span className="msg" id="c-phone-msg">
                {errors.phone}
              </span>
            ) : (
              <span className="hint">Optional — leave it if you would rather we call you back.</span>
            )}
          </div>

          <div className={`field full${invalid('message')}`}>
            <label htmlFor="c-message">
              Message <span className="req">*</span>
            </label>
            <textarea
              id="c-message"
              name="message"
              value={values.message}
              onChange={update('message')}
              onBlur={blur('message')}
              aria-invalid={Boolean(invalid('message'))}
              aria-describedby={invalid('message') ? 'c-message-msg' : undefined}
              placeholder="What do you run, where do you run it, and how can we help?"
            />
            {invalid('message') ? (
              <span className="msg" id="c-message-msg">
                {errors.message}
              </span>
            ) : null}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'} <span className="arr">→</span>
          </button>
          <span className="note">Fields marked * are required.</span>
        </div>
      </form>
    </div>
  );
}
