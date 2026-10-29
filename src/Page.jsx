import { useState, useEffect } from 'react';

const WEDDING_DATE_ISO = '2026-11-20T10:00:00+05:30';

function useCountdown(targetIso) {
  const calculate = () => {
    const target = new Date(targetIso).getTime();
    const diff = target - Date.now();
    if (isNaN(diff) || diff <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }
    const sec = Math.floor(diff / 1000);
    const pad = (n) => (n < 10 ? '0' + n : String(n));
    return {
      days: pad(Math.floor(sec / 86400)),
      hours: pad(Math.floor((sec % 86400) / 3600)),
      minutes: pad(Math.floor((sec % 3600) / 60)),
      seconds: pad(sec % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetIso]);

  return timeLeft;
}

export default function Page() {
  const timeLeft = useCountdown(WEDDING_DATE_ISO);
  return (
    <>
      <svg className="sprite" aria-hidden="true" focusable="false">
        <defs>
          <symbol id="i-cross" viewBox="0 0 64 64"><path d="M32 8v48M16 20h32"></path></symbol>
          <symbol id="i-rose" viewBox="0 0 64 64"><path d="M32 52C22 44 12 36 12 26a20 20 0 0140 0c0 10-10 18-20 26z"></path><path d="M32 26c0-6 4-10 8-10M32 26c0-6-4-10-8-10M32 26v26"></path><circle cx="32" cy="26" r="6"></circle></symbol>
          <symbol id="i-bell" viewBox="0 0 64 64"><circle cx="32" cy="8.5" r="3"></circle><path d="M32 13c-7.2 0-12.4 6.1-12.4 14.3 0 8.2-2.1 12.3-5.1 15.4h35c-3-3.1-5.1-7.2-5.1-15.4C44.4 19.1 39.2 13 32 13z"></path><path d="M27.7 47.4a4.4 4.4 0 008.6 0"></path></symbol>
          <symbol id="i-leaf" viewBox="0 0 64 64"><path d="M53 9C30.6 11.2 14.2 25.6 12 48c0 4.2 2 6.3 5.2 6.3C37.6 52.1 51 36 53 9z"></path><path d="M53 9L17.2 54.3"></path><path d="M45 16.5l-6.5 14.2M36.8 20.8l-6.5 14.2M28.6 26.4l-5.6 12.6"></path></symbol>
          <symbol id="i-ring" viewBox="0 0 64 64"><circle cx="23" cy="34" r="14"></circle><circle cx="41" cy="34" r="14"></circle></symbol>
          <symbol id="i-calendar" viewBox="0 0 64 64"><rect x="9" y="14" width="46" height="42" rx="5"></rect><path d="M9 27h46M21 8v11M43 8v11"></path><circle cx="22" cy="38" r="2.4" fill="currentColor" stroke="none"></circle><circle cx="32" cy="38" r="2.4" fill="currentColor" stroke="none"></circle><circle cx="42" cy="38" r="2.4" fill="currentColor" stroke="none"></circle></symbol>
          <symbol id="i-clock" viewBox="0 0 64 64"><circle cx="32" cy="32" r="24"></circle><path d="M32 17v16l11 7"></path></symbol>
          <symbol id="i-pin" viewBox="0 0 64 64"><path d="M32 58s18-17.4 18-30A18 18 0 1014 28c0 12.6 18 30 18 30z"></path><circle cx="32" cy="27" r="6.5"></circle></symbol>
          <symbol id="i-phone" viewBox="0 0 64 64"><path d="M22 8l8 12-6 6c3.4 7 8.6 12.2 15.6 15.6l6-6 12 8-4 8c-1.6 3.2-5 4.6-9 3.6C29 51.6 12.4 35 8.4 17.4 7.4 13.4 8.8 10 12 8.4z"></path></symbol>
          <symbol id="i-church" viewBox="0 0 64 64"><path d="M32 4v12M26 10h12"></path><path d="M14 56V30l18-14 18 14v26z"></path><path d="M26 56V42h12v14"></path><path d="M14 30H8l24-20 24 20h-6"></path></symbol>
          <symbol id="i-car" viewBox="0 0 64 64"><path d="M8 38h48M14 28l4-10h24l4 10"></path><rect x="8" y="28" width="48" height="16" rx="4"></rect><circle cx="18" cy="46" r="5"></circle><circle cx="46" cy="46" r="5"></circle><path d="M8 34H4v6h4M56 34h4v6h-4"></path></symbol>
          <symbol id="i-heart" viewBox="0 0 64 64"><path d="M32 52L10 30a13 13 0 0122-14 13 13 0 0122 14z"></path></symbol>
          <symbol id="i-pillar" viewBox="0 0 64 64"><path d="M12 12h40M15 20h34M20 20v28M44 20v28M15 48h34M11 56h42"></path></symbol>
        </defs>
      </svg>

      <canvas id="particles" aria-hidden="true"></canvas>

      <div id="scroll-progress" aria-hidden="true"></div>

      {/* 1 · LANDING COVER */}
      <section id="landing" className="scene--screen" aria-label="వివాహ రిసెప్షన్ ఆహ్వాన పత్రిక">
        <div className="landing-media">
          <img id="coverImg" className="cover-img section-bg" src="assets/images/cover/cover.png" data-fallbacks="assets/images/cover/cover.webp,assets/images/cover/cover.jpg" alt="" decoding="async" fetchPriority="high" />
          <div className="cover-fallback" aria-hidden="true"></div>
        </div>
        <div className="rays rays--warm" aria-hidden="true"></div>
        <div className="vignette" aria-hidden="true"></div>
        <div className="temple-glow" aria-hidden="true"></div>
        <div className="section-overlay landing-overlay" aria-hidden="true"></div>
        <div className="landing-inner">
          <p className="landing-eyebrow"><span className="en">సర్వేశ్వరుని దివ్య ఆశీస్సులతో</span></p>
          <div className="divider divider--sm" aria-hidden="true">
            <span className="divider-line"></span>
            <svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg>
            <span className="divider-line"></span>
          </div>
          <h1 className="landing-names">
            <span className="n">యందవ రిబ్కా</span>
            <span className="amp">{"&"}</span>
            <span className="n">దేవరం తేజ</span>
          </h1>
          <p className="landing-date"><span style={{ display: "block", letterSpacing: "0.06em", marginBottom: "6px" }}>వివాహ రిసెప్షన్</span>20 · 11 · 2026</p>
          <button id="openBtn" className="btn-open" type="button">
            <span className="btn-open__glow" aria-hidden="true"></span>
            <span className="btn-open__ring" aria-hidden="true"></span>
            <span className="btn-open__inner">
              <svg className="ico btn-open__lamp" aria-hidden="true"><use href="#i-ring"></use></svg>
              <span className="btn-open__label"><span className="btn-open__en">ఆహ్వాన పత్రికను తెరవండి</span></span>
            </span>
            <span className="btn-open__shimmer" aria-hidden="true"></span>
          </button>
          <p className="landing-hint" aria-hidden="true">ప్రారంభించడానికి నొక్కండి</p>
        </div>
      </section>

      {/* 2 · REVEAL VIDEO */}
      <section id="reveal" aria-hidden="true">
        <video id="revealVideo" muted playsInline webkit-playsinline="" preload="auto" disablePictureInPicture="" controlsList="nodownload noplaybackrate noremoteplayback">
          <source src="assets/video/invitation-reveal.mp4" type="video/mp4" />
        </video>
        <div className="reveal-fade" aria-hidden="true"></div>
        <button id="skipBtn" className="btn-skip" type="button" hidden>దాటవేయి</button>
      </section>

      {/* 3 · MAIN SITE */}
      <main id="site">
        {/* HERO */}
        <section id="hero" className="scene scene--screen scene--hero" aria-busy="true">
          <picture className="section-bg">
            <source id="heroSourceAvif" type="image/avif" data-hero-srcset="assets/images/hero/hero.avif" />
            <source id="heroSourceWebp" type="image/webp" data-hero-srcset="assets/images/hero/hero.webp" />
            <img id="heroImg" className="section-bg" data-candidates="assets/images/hero/hero-celestial.png?v=4,assets/images/hero/hero-opt.png?v=4,assets/images/hero/hero-alt.png?v=4,assets/images/hero/hero.png?v=4" alt="" width="1080" height="1920" decoding="async" fetchPriority="high" />
          </picture>
          <div className="section-overlay" aria-hidden="true"></div>
          <p className="hero-bless hero-bless--top"><span className="hero-bless__en">With the Blessings of God Almighty</span></p>
          <div className="section-content">
            <div className="divider divider--sm hero-divider" aria-hidden="true">
              <span className="divider-line"></span>
              <svg className="ico" aria-hidden="true" style={{ width: "20px", height: "20px" }}><use href="#i-cross"></use></svg>
              <span className="divider-line"></span>
            </div>
            <h1 className="hero-names">
              <span className="hero-names__n">Yandava Rebakha</span>
              <span className="hero-names__amp" aria-hidden="true">{"&"}</span>
              <span className="hero-names__n">Devaram Teja</span>
            </h1>
            <p className="hero-date"><span className="hero-date__en">Friday · 20 November 2026</span></p>
          </div>
          <p className="hero-subtitle">Wedding Reception &nbsp;·&nbsp; K Convention, Vijayawada &nbsp;·&nbsp; 10:00 AM</p>
          <a className="scroll-indicator" href="#details" aria-label="Scroll to wedding details">
            <span className="scroll-indicator__word">Scroll</span>
            <svg className="scroll-indicator__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 5v14M5 13l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
        </section>

        {/* VERSE / BLESSING */}
        <section id="verse" className="scene scene--flow scene--ivory">
          <img className="section-bg" src="assets/images/decorations/wash-ivory.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content section-content--center">
            <div className="verse-card reveal">
              <svg className="ico verse-cross" aria-hidden="true"><use href="#i-cross"></use></svg>
              <blockquote className="verse-text">
                {" \"Therefore what God has joined together"}<br />
                {" Let no one separate.\" "}
              </blockquote>
              <cite className="verse-ref">— Mark 10:9</cite>
              <div className="divider divider--sm" style={{ marginTop: "24px" }} aria-hidden="true">
                <span className="divider-line"></span>
                <svg className="ico" aria-hidden="true"><use href="#i-leaf"></use></svg>
                <span className="divider-line"></span>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section id="details" className="scene scene--flow scene--beige">
          <img className="section-bg" src="assets/images/decorations/wash-beige.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <p className="kicker">The Invitation</p>
              <h2 className="sec-title">Reception Details</h2>
              <div className="divider" aria-hidden="true">
                <span className="divider-line"></span>
                <svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg>
                <span className="divider-line"></span>
              </div>
            </div>
            <p className="lede reveal" data-delay="1">
              {" Mr. Yandava Raja Rao & Mrs. Nalini cordially invite your esteemed presence with family at the wedding reception of their daughter "}
              <em>Yandava Rebakha</em>
              {" (M.A.) with "}
              <em>Devaram Teja</em>
              {" (M.Tech), son of Mr. Devaram Murali Mohan Rao & Mrs. Vani, Nuzvid. Your gracious presence and heartfelt blessings will make our celebration truly memorable. "}
            </p>
            <ul className="facts">
              <li className="fact reveal" data-delay="1">
                <svg className="ico" aria-hidden="true"><use href="#i-calendar"></use></svg>
                <span className="fact-k">Reception Day</span>
                <span className="fact-v">Friday, 20 November 2026</span>
                <span className="fact-s">20th November 2026</span>
              </li>
              <li className="fact reveal" data-delay="2">
                <svg className="ico" aria-hidden="true"><use href="#i-clock"></use></svg>
                <span className="fact-k">Time</span>
                <span className="fact-v">10:00 AM</span>
                <span className="fact-s">Followed by lunch</span>
              </li>
              <li className="fact reveal" data-delay="3">
                <svg className="ico" aria-hidden="true"><use href="#i-church"></use></svg>
                <span className="fact-k">Venue</span>
                <span className="fact-v">K Convention</span>
                <span className="fact-s">Prashanthi Nagar, Vijayawada</span>
              </li>
              <li className="fact reveal" data-delay="4">
                <svg className="ico" aria-hidden="true"><use href="#i-bell"></use></svg>
                <span className="fact-k">Wedding</span>
                <span className="fact-v">Wednesday, 18 November 2026</span>
                <span className="fact-s">Nuzvid</span>
              </li>
            </ul>
            <div className="countdown reveal" data-delay="2" aria-label="Countdown to the wedding day">
              <div className="cd-unit"><span className="cd-n" id="cdD">{timeLeft.days}</span><span className="cd-l">Days</span></div>
              <span className="cd-sep" aria-hidden="true"></span>
              <div className="cd-unit"><span className="cd-n" id="cdH">{timeLeft.hours}</span><span className="cd-l">Hours</span></div>
              <span className="cd-sep" aria-hidden="true"></span>
              <div className="cd-unit"><span className="cd-n" id="cdM">{timeLeft.minutes}</span><span className="cd-l">Minutes</span></div>
              <span className="cd-sep" aria-hidden="true"></span>
              <div className="cd-unit"><span className="cd-n" id="cdS">{timeLeft.seconds}</span><span className="cd-l">Seconds</span></div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="scene scene--flow scene--ivory">
          <img className="section-bg" src="assets/images/decorations/wash-ivory.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <p className="kicker">The Celebrations</p>
              <h2 className="sec-title">Our Journey</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg><span className="divider-line"></span></div>
            </div>
            <ol className="tl">
              <li className="tl-item reveal" data-delay="1">
                <span className="tl-node" aria-hidden="true"><svg className="ico"><use href="#i-ring"></use></svg></span>
                <div className="tl-body">
                  <p className="tl-date">Wednesday, 18 November 2026</p>
                  <h3 className="tl-title">Wedding Ceremony</h3>
                  <p className="tl-meta">J. Nagendra Rao, Varalakshmi Kalyana Vedika, Nuzvid</p>
                  <p className="tl-text">{" The sacred wedding of Yandava Rebakha and Devaram Teja will be celebrated in the presence of elders, family and friends. "}</p>
                </div>
              </li>
              <li className="tl-item reveal" data-delay="2">
                <span className="tl-node tl-node--hi" aria-hidden="true"><svg className="ico"><use href="#i-bell"></use></svg></span>
                <div className="tl-body">
                  <p className="tl-date">Friday, 20 November 2026</p>
                  <h3 className="tl-title">Wedding Reception</h3>
                  <p className="tl-meta">10:00 AM · K Convention, Prashanthi Nagar, Vijayawada</p>
                  <p className="tl-text">{" A warm reception hosted by the bride's family, followed by lunch — a time to celebrate, share a meal, and bless the couple as they begin their journey together. "}</p>
                  <div className="tl-actions">
                    <a className="btn btn--gold btn--sm" target="_blank" rel="noopener" href="https://maps.google.com/?q=K+convention+prashanthi+nagar+vijayawada">
                      <svg className="ico"><use href="#i-pin"></use></svg>{" View Location "}
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* COUPLE */}
        <section id="couple" className="scene scene--flow scene--dark">
          <img className="section-bg" src="assets/images/decorations/wash-dark.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <h2 className="sec-title">{"Bride & Groom"}</h2>
              <div className="divider divider--light" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg><span className="divider-line"></span></div>
            </div>
            <div className="couple-photo-wrap reveal">
              <div className="couple-photo-frame">
                <img className="couple-photo-img" loading="eager" decoding="async" src="assets/images/gallery/couple-teja-rebakha.jpg" data-fallbacks="assets/images/gallery/Couple.jpeg,assets/images/gallery/Couple.jpg" data-placeholder="Teja & Rebakha" alt="Devaram Teja and Yandava Rebakha together" />
                <span className="couple-photo-ring" aria-hidden="true"></span>
              </div>
            </div>
            <div className="couple-grid">
              <article className="person reveal" data-delay="2">
                <p className="person-role">The Bride</p>
                <h3 className="person-name">Yandava Rebakha</h3>
                <p className="person-line">M.A.</p>
                <p className="person-line">Daughter of Mr. Yandava Raja Rao<br />{" & Mrs. Yandava Nalini"}</p>
                <p className="person-place">Brother: Yandava Pradeep<br />Yandava Family</p>
              </article>
              <div className="couple-knot" aria-hidden="true">
                <span className="couple-initial">R</span>
                <svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg>
                <span className="couple-initial">T</span>
              </div>
              <article className="person reveal" data-delay="1">
                <p className="person-role">The Groom</p>
                <h3 className="person-name">Devaram Teja</h3>
                <p className="person-line">M.Tech</p>
                <p className="person-line">Son of Mr. Devaram Murali Mohan Rao<br />{" & Mrs. Devaram Vani"}</p>
                <p className="person-place">Nuzvid<br />Devaram Family</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAMILY */}
        <section id="family" className="scene scene--flow scene--beige">
          <img className="section-bg" src="assets/images/decorations/wash-beige.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <p className="kicker">{"With Love & Blessings"}</p>
              <h2 className="sec-title">{"Parents & Family"}</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-cross"></use></svg><span className="divider-line"></span></div>
            </div>
            <div className="family-grid">
              <article className="card card--family reveal" data-delay="1">
                <svg className="ico card-ico" aria-hidden="true"><use href="#i-pillar"></use></svg>
                <p className="family-tag">{"Bride's Family"}</p>
                <h3 className="family-name">Mr. Yandava Raja Rao</h3>
                <p className="family-amp">{"&"}</p>
                <h3 className="family-name">Mrs. Yandava Nalini</h3>
                <p className="family-home">Yandava Appa Rao – Annapurna<br />Yandava Chiranjeevi – Saraswathi<br />Sisters: Shantamma, Tulasamma (Family)<br />Maternal uncles: Vinod – Naveen<br />Brother: Pradeep Yandava</p>
              </article>
              <article className="card card--family reveal" data-delay="2">
                <svg className="ico card-ico" aria-hidden="true"><use href="#i-pillar"></use></svg>
                <p className="family-tag">{"Groom's Family"}</p>
                <h3 className="family-name">Mr. Devaram Murali Mohan Rao</h3>
                <p className="family-amp">{"&"}</p>
                <h3 className="family-name">Mrs. Devaram Vani</h3>
                <p className="family-home">Nuzvid<br />Devaram Family</p>
              </article>
            </div>
            <p className="family-foot reveal" data-delay="3">
              <svg className="ico" aria-hidden="true"><use href="#i-leaf"></use></svg>
              {" Together with their families, relatives and well-wishers. "}
            </p>
          </div>
        </section>

        {/* VENUE */}
        <section id="venue" className="scene scene--flow scene--ivory">
          <img className="section-bg" src="assets/images/decorations/wash-ivory.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <p className="kicker">Find Your Way</p>
              <h2 className="sec-title">{"Venue & Directions"}</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-pin"></use></svg><span className="divider-line"></span></div>
            </div>
            <div className="venue-grid">
              <article className="venue-card reveal" data-delay="1">
                <div className="venue-map-embed">
                  <iframe title="K Convention, Vijayawada" src="https://maps.google.com/maps?q=K+convention+prashanthi+nagar+vijayawada&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style={{ border: "0", display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="venue-body">
                  <p className="venue-tag">Reception</p>
                  <h3 className="venue-name">K Convention</h3>
                  <p className="venue-addr">Prashanthi Nagar, opposite Rythu Bazar<br />Vijayawada</p>
                  <p className="venue-when"><svg className="ico"><use href="#i-bell"></use></svg>{" Fri, 20 Nov 2026 · 10:00 AM"}</p>
                  <div className="venue-actions">
                    <a className="btn btn--gold" target="_blank" rel="noopener" href="https://maps.google.com/?q=K+convention+prashanthi+nagar+vijayawada">
                      <svg className="ico"><use href="#i-pin"></use></svg>{" Open in Maps"}
                    </a>
                  </div>
                </div>
              </article>
              <article className="venue-card reveal" data-delay="2">
                <div className="venue-map-embed">
                  <iframe title="J. Nagendra Rao, Varalakshmi Kalyana Vedika, Nuzvid" src="https://maps.google.com/maps?q=Konnamgunta+Road+Nuzvid+Varalakshmi+Kalyana+Vedhika&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style={{ border: "0", display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="venue-body">
                  <p className="venue-tag">Wedding Ceremony</p>
                  <h3 className="venue-name">J. Nagendra Rao, Varalakshmi Kalyana Vedika</h3>
                  <p className="venue-addr">Konnamgunta Road<br />Nuzvid</p>
                  <p className="venue-when"><svg className="ico"><use href="#i-clock"></use></svg>{" Wed, 18 Nov 2026 · 10:30 AM"}</p>
                  <div className="venue-actions">
                    <a className="btn btn--gold" target="_blank" rel="noopener" href="https://maps.google.com/?q=Varalakshmi+Kalyana+Vedhika+Konnamgunta+Road+Nuzvid">
                      <svg className="ico"><use href="#i-pin"></use></svg>{" Open in Maps"}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="scene scene--flow scene--beige">
          <img className="section-bg" src="assets/images/decorations/wash-beige.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <p className="kicker">Join Us</p>
              <h2 className="sec-title">RSVP</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg><span className="divider-line"></span></div>
              <p className="sec-note" style={{ marginTop: "14px" }}>
                {" Please let us know if you will be joining us on our special day. "}
              </p>
            </div>
            <div className="rsvp-card reveal" data-delay="1">
              <div className="rsvp-success" id="rsvpSuccess" hidden>
                <svg className="ico rsvp-success__ico" aria-hidden="true"><use href="#i-heart"></use></svg>
                <p className="rsvp-success__title">Thank you!</p>
                <p className="rsvp-success__msg">WhatsApp has opened — please press Send to deliver your message. We look forward to celebrating with you.</p>
              </div>
              <form id="rsvpForm" className="rsvp-form" noValidate>
                <div className="rsvp-field">
                  <label className="rsvp-label" htmlFor="rsvpName">{"Full Name "}<span aria-hidden="true">*</span></label>
                  <input className="rsvp-input" id="rsvpName" name="name" type="text" placeholder="Your full name" autoComplete="name" required />
                  <span className="rsvp-err" id="errName" role="alert" hidden></span>
                </div>
                <div className="rsvp-row">
                  <div className="rsvp-field">
                    <label className="rsvp-label" htmlFor="rsvpGuests">{"Number of Guests "}<span aria-hidden="true">*</span></label>
                    <select className="rsvp-input rsvp-select" id="rsvpGuests" name="guests" required defaultValue="">
                      <option value="" disabled>Select guests</option>
                      <option value="1">1 — Just me</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6+">6 or more</option>
                    </select>
                    <span className="rsvp-err" id="errGuests" role="alert" hidden></span>
                  </div>
                  <div className="rsvp-field">
                    <label className="rsvp-label">{"Attending? "}<span aria-hidden="true">*</span></label>
                    <div className="rsvp-radio-group" role="radiogroup" aria-label="Attending?">
                      <label className="rsvp-radio">
                        <input type="radio" name="attending" defaultValue="Yes" required />
                        <span className="rsvp-radio__mark" aria-hidden="true"></span>
                        <span>Yes, with joy!</span>
                      </label>
                      <label className="rsvp-radio">
                        <input type="radio" name="attending" defaultValue="No" />
                        <span className="rsvp-radio__mark" aria-hidden="true"></span>
                        <span>{"Sorry, can't make it"}</span>
                      </label>
                    </div>
                    <span className="rsvp-err" id="errAttending" role="alert" hidden></span>
                  </div>
                </div>
                <div className="rsvp-field">
                  <label className="rsvp-label" htmlFor="rsvpWish">{"Your Wishes "}<span className="rsvp-optional">(optional)</span></label>
                  <textarea className="rsvp-input rsvp-textarea" id="rsvpWish" name="wish" rows="3" placeholder="Write a blessing or wish for Rebakha & Teja…" defaultValue={""} />
                </div>
                <div className="rsvp-submit-row">
                  <button type="submit" className="btn btn--gold rsvp-submit" id="rsvpSubmit">
                    <svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg>
                    <span className="rsvp-submit__label">{"Send RSVP & Wish"}</span>
                  </button>
                  <p className="rsvp-err rsvp-err--submit" id="errSubmit" role="alert" hidden></p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FINALE / THANK YOU */}
        <section id="thankyou" className="scene scene--flow scene--finale">
          <img className="section-bg" src="assets/images/decorations/wash-finale.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content section-content--center">
            <div className="finale-glow" aria-hidden="true"></div>
            <div className="finale-stage" id="finaleStage">
              <p className="finale-fallback" id="finaleFallback">THANK YOU</p>
            </div>
            <p className="finale-sub reveal">for being a part of our story</p>
            <p className="finale-blessing reveal" data-delay="1">{" \"May God bless this union abundantly.\" "}</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer" className="scene scene--flow scene--finale footer">
          <img className="section-bg" src="assets/images/decorations/wash-finale.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content section-content--center">
            <div className="gratitude-card reveal">
              <div className="divider divider--light divider--sm" aria-hidden="true">
                <span className="divider-line"></span>
                <svg className="ico" aria-hidden="true"><use href="#i-cross"></use></svg>
                <span className="divider-line"></span>
              </div>
              <p className="gratitude-kicker" style={{ marginTop: "20px" }}>Sharing the Happiness</p>
              <p className="gratitude-msg">{" We cordially invite you to the wedding reception and seek your presence and blessings as the couple begins their new life together in the grace of God. "}</p>
              <p className="gratitude-names">{"Rebakha & Teja"}</p>
              <p className="gratitude-date">Friday, 20 November 2026</p>
              <div className="divider divider--light divider--sm" style={{ margin: "22px auto" }} aria-hidden="true">
                <span className="divider-line"></span>
                <svg className="ico" aria-hidden="true"><use href="#i-leaf"></use></svg>
                <span className="divider-line"></span>
              </div>
              <p className="gratitude-kicker">RSVP · Contact</p>
              <p className="gratitude-rsvp-names">{"Rebakha & Teja"}</p>
              <div className="gratitude-phones">
                <a href="tel:+919885253999" className="gratitude-phone">
                  <svg className="ico" aria-hidden="true"><use href="#i-phone"></use></svg>
                  <span>+91 98852 53999</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      
</main>

      {/* AUDIO */}
      <audio id="bgAudio" src="assets/audio/music.mp3" preload="auto" loop playsInline></audio>

      <button id="audioBtn" className="audio-disc" type="button" aria-pressed="false" aria-label="Play music" hidden>
        <span className="audio-disc__glow" aria-hidden="true"></span>
        <span className="audio-disc__ring" aria-hidden="true"></span>
        <span className="audio-disc__platter" aria-hidden="true">
          <span className="audio-disc__grooves"></span>
          <span className="audio-disc__hub"><span className="audio-disc__mono">{"T&R"}</span></span>
        </span>
        <span className="audio-disc__icon" aria-hidden="true">
          <svg className="audio-disc__play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5L8 5.5z"></path></svg>
          <svg className="audio-disc__pause" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>
        </span>
      </button>
    </>
  )
}
