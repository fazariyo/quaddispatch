'use client';

import { useState } from 'react';
import Link from 'next/link';
import { truckTypes } from '@/lib/pricing';

const TRAILER_SIZES = [
  '48 ft',
  '53 ft',
  '28 ft',
  '26 ft',
  '24 ft',
  '40 ft gooseneck',
  'Not applicable',
  'Other',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY = {
  companyName: '',
  mcDot: '',
  contactName: '',
  phone: '',
  email: '',
  truckType: '',
  trailerSize: '',
  notes: '',
};

function validate(values) {
  const errors = {};
  if (!values.companyName.trim()) errors.companyName = 'Company name is required.';
  if (!values.mcDot.trim()) {
    errors.mcDot = 'MC or DOT number is required.';
  } else if (!/\d{5,}/.test(values.mcDot)) {
    errors.mcDot = 'Enter the numeric MC or DOT number (at least 5 digits).';
  }
  if (!values.contactName.trim()) errors.contactName = 'Contact name is required.';
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if ((values.phone.match(/\d/g) || []).length < 10) {
    errors.phone = 'Enter a full phone number including area code.';
  }
  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'That email address does not look valid.';
  }
  if (!values.truckType) errors.truckType = 'Pick the truck type you run.';
  return errors;
}

export default function CarrierSetupForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [serverError, setServerError] = useState('');

  const update = (key) => (event) => {
    const next = { ...values, [key]: event.target.value };
    setValues(next);
    // Once a field has been flagged, re-check it as the user types.
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
      // Move focus to the first field with a problem.
      const firstBad = Object.keys(EMPTY).find((key) => found[key]);
      if (firstBad) document.getElementById(firstBad)?.focus();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/carrier-setup', {
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
      setServerError(`${err.message} Please call dispatch and we'll take your details by phone.`);
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
          <h3>You&apos;re In The Queue</h3>
          <p>
            Thanks, {values.contactName.split(' ')[0] || 'driver'} — we have your details. A
            dispatcher will reach out within one business day to confirm your paperwork and start
            matching loads to {values.truckType.toLowerCase()} lanes.
          </p>
          <Link className="btn btn-solid" href="/">
            Back To Home <span className="arr">→</span>
          </Link>
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
          <div className={`field${invalid('companyName')}`}>
            <label htmlFor="companyName">
              Company Name <span className="req">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              value={values.companyName}
              onChange={update('companyName')}
              onBlur={blur('companyName')}
              aria-invalid={Boolean(invalid('companyName'))}
              aria-describedby={invalid('companyName') ? 'companyName-msg' : undefined}
              autoComplete="organization"
            />
            {invalid('companyName') ? (
              <span className="msg" id="companyName-msg">
                {errors.companyName}
              </span>
            ) : null}
          </div>

          <div className={`field${invalid('mcDot')}`}>
            <label htmlFor="mcDot">
              MC / DOT Number <span className="req">*</span>
            </label>
            <input
              id="mcDot"
              name="mcDot"
              value={values.mcDot}
              onChange={update('mcDot')}
              onBlur={blur('mcDot')}
              aria-invalid={Boolean(invalid('mcDot'))}
              aria-describedby={invalid('mcDot') ? 'mcDot-msg' : undefined}
              inputMode="numeric"
            />
            {invalid('mcDot') ? (
              <span className="msg" id="mcDot-msg">
                {errors.mcDot}
              </span>
            ) : null}
          </div>

          <div className={`field${invalid('contactName')}`}>
            <label htmlFor="contactName">
              Contact Name <span className="req">*</span>
            </label>
            <input
              id="contactName"
              name="contactName"
              value={values.contactName}
              onChange={update('contactName')}
              onBlur={blur('contactName')}
              aria-invalid={Boolean(invalid('contactName'))}
              aria-describedby={invalid('contactName') ? 'contactName-msg' : undefined}
              autoComplete="name"
            />
            {invalid('contactName') ? (
              <span className="msg" id="contactName-msg">
                {errors.contactName}
              </span>
            ) : null}
          </div>

          <div className={`field${invalid('phone')}`}>
            <label htmlFor="phone">
              Phone <span className="req">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={update('phone')}
              onBlur={blur('phone')}
              aria-invalid={Boolean(invalid('phone'))}
              aria-describedby={invalid('phone') ? 'phone-msg' : undefined}
              autoComplete="tel"
            />
            {invalid('phone') ? (
              <span className="msg" id="phone-msg">
                {errors.phone}
              </span>
            ) : null}
          </div>

          <div className={`field${invalid('email')}`}>
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={update('email')}
              onBlur={blur('email')}
              aria-invalid={Boolean(invalid('email'))}
              aria-describedby={invalid('email') ? 'email-msg' : undefined}
              autoComplete="email"
            />
            {invalid('email') ? (
              <span className="msg" id="email-msg">
                {errors.email}
              </span>
            ) : null}
          </div>

          <div className={`field${invalid('truckType')}`}>
            <label htmlFor="truckType">
              Truck Type <span className="req">*</span>
            </label>
            <select
              id="truckType"
              name="truckType"
              value={values.truckType}
              onChange={update('truckType')}
              onBlur={blur('truckType')}
              aria-invalid={Boolean(invalid('truckType'))}
              aria-describedby={invalid('truckType') ? 'truckType-msg' : undefined}
            >
              <option value="">Select a truck type…</option>
              {truckTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {invalid('truckType') ? (
              <span className="msg" id="truckType-msg">
                {errors.truckType}
              </span>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="trailerSize">Trailer Size</label>
            <select
              id="trailerSize"
              name="trailerSize"
              value={values.trailerSize}
              onChange={update('trailerSize')}
            >
              <option value="">Select a size (optional)…</option>
              {TRAILER_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={values.notes}
              onChange={update('notes')}
              placeholder="Preferred lanes, home time, factoring company, anything else we should know."
            />
            <span className="hint">Optional — but the more we know, the better we book.</span>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit Setup Request'}{' '}
            <span className="arr">→</span>
          </button>
          <span className="note">Fields marked * are required. No obligation, no setup fee.</span>
        </div>
      </form>
    </div>
  );
}
