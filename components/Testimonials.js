import Reveal from '@/components/Reveal';

/* Placeholder testimonials — replace with your real client feedback */
const TESTIMONIALS = [
  {
    quote:
      "My dispatcher knows my lanes better than I do. Gross is up, dead-head is down, and I haven't touched a rate confirmation in months.",
    initials: 'MT',
    name: 'Marcus T.',
    role: 'Owner-Operator · Dry Van',
  },
  {
    quote:
      "Broke down outside Memphis at 2 AM. One call and they had the load re-covered and a shop lined up before sunrise. That's the 24/7 they promise.",
    initials: 'DR',
    name: 'D. Rivera',
    role: 'R&R Freight LLC · Reefer',
  },
  {
    quote:
      "I run three trucks and Quad treats each one like it's their own. Paperwork handled, invoices out same day, and the lanes keep my drivers home on weekends.",
    initials: 'JK',
    name: 'James K.',
    role: 'Small Fleet Owner · 3 Trucks',
  },
];

export default function Testimonials() {
  return (
    <section className="section feedback" id="feedback">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="h-disp">What Carriers Say About Us</h2>
        </Reveal>

        <div className="fb-grid">
          {TESTIMONIALS.map((item) => (
            <Reveal as="article" className="fb-card" key={item.initials}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>&quot;{item.quote}&quot;</blockquote>
              <div className="fb-who">
                <span className="avatar">{item.initials}</span>
                <div>
                  <b>{item.name}</b>
                  <small>{item.role}</small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
