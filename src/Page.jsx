import { useState, useEffect } from 'react';

const WEDDING_DATE_ISO = '2026-11-18T10:30:00+05:30';

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
      <section id="landing" className="scene--screen" aria-label="వివాహ ఆహ్వాన పత్రిక">
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
            <span className="n">దేవరం తేజ</span>
            <span className="amp">{"&"}</span>
            <span className="n">యాండవ రెబెక్కా</span>
          </h1>
          <p className="landing-date">18 · 11 · 2026</p>
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
            <img id="heroImg" className="section-bg" data-candidates="assets/images/hero/hero-celestial.png?v=4,assets/images/hero/hero-opt.png?v=4,assets/images/hero/hero-alt.png?v=4,assets/images/hero/hero.png?v=4" alt="దేవరం తేజ & యాండవ రెబెక్కా" width="1080" height="1920" decoding="async" fetchPriority="high" />
          </picture>
          <div className="section-overlay" aria-hidden="true"></div>
          <p className="hero-bless hero-bless--top"><span className="hero-bless__en">సర్వేశ్వరుని దివ్య ఆశీస్సులతో</span></p>
          <div className="section-content">
            <div className="divider divider--sm hero-divider" aria-hidden="true">
              <span className="divider-line"></span>
              <svg className="ico" aria-hidden="true" style={{ width: "20px", height: "20px" }}><use href="#i-cross"></use></svg>
              <span className="divider-line"></span>
            </div>
            <h1 className="hero-names">
              <span className="hero-names__n">దేవరం తేజ</span>
              <span className="hero-names__amp" aria-hidden="true">{"&"}</span>
              <span className="hero-names__n">యాండవ రెబెక్కా</span>
            </h1>
            <p className="hero-date"><span className="hero-date__en">బుధవారం · 18 నవంబర్ 2026</span></p>
          </div>
          <p className="hero-subtitle">జె. నాగేంద్ర రావు, వరలక్ష్మి కళ్యాణ వేదిక, నూజివీడు &nbsp;·&nbsp; ఉదయం 10:30 గంటలకు</p>
          <a className="scroll-indicator" href="#details" aria-label="వివాహ వివరాలకు క్రిందికి స్క్రోల్ చేయండి">
            <span className="scroll-indicator__word">SCROLL</span>
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
              <svg className="ico verse-cross" aria-hidden="true"><use href="#i-heart"></use></svg>
              <blockquote className="verse-text">
                {" \"రెండు మనసులు, రెండు కుటుంబాలు ఒక్కటయ్యే పవిత్ర కల్యాణ బంధం"}<br />
                {"దేవుని ఆశీస్సులతో నూతన దాంపత్య జీవితం కలకాలం సుఖసంతోషాలతో వర్ధిల్లుగాక!\" "}
              </blockquote>
              <cite className="verse-ref">— పవిత్ర పరిణయ శుభాకాంక్షలు</cite>
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
              <p className="kicker">శుభ ఆహ్వానం</p>
              <h2 className="sec-title">వివాహ మహోత్సవ వివరాలు</h2>
              <div className="divider" aria-hidden="true">
                <span className="divider-line"></span>
                <svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg>
                <span className="divider-line"></span>
              </div>
            </div>
            <p className="lede reveal" data-delay="1">
              {"శ్రీయుతులు దేవరం మురళీ మోహన్ రావు & శ్రీమతి వాణి గార్ల కుమారుడు "}
              <em>దేవరం తేజ</em>
              {" మరియు శ్రీయుతులు యాండవ రాజారావు & శ్రీమతి నళిని గార్ల కుమార్తె "}
              <em>యాండవ రెబెక్కా</em>
              {" ల పవిత్ర వివాహ మహోత్సవ శుభ సందర్భంగా, మీరందరూ సకుటుంబ సమేతంగా విచ్చేసి, నూతన వధూవరులను నిండు మనస్సుతో ఆశీర్వదించి మమ్మల్ని ఆనందింపజేయవలసిందిగా సాదరంగా ఆహ్వానిస్తున్నాము."}
            </p>
            <ul className="facts">
              <li className="fact reveal" data-delay="1">
                <svg className="ico" aria-hidden="true"><use href="#i-calendar"></use></svg>
                <span className="fact-k">వివాహ తేది</span>
                <span className="fact-v">బుధవారం, 18 నవంబర్ 2026</span>
                <span className="fact-s">18th November 2026</span>
              </li>
              <li className="fact reveal" data-delay="2">
                <svg className="ico" aria-hidden="true"><use href="#i-clock"></use></svg>
                <span className="fact-k">శుభ ముహూర్తం</span>
                <span className="fact-v">ఉదయం 10:30 గంటలకు</span>
                <span className="fact-s">సుముహూర్తం</span>
              </li>
              <li className="fact reveal" data-delay="3">
                <svg className="ico" aria-hidden="true"><use href="#i-church"></use></svg>
                <span className="fact-k">కళ్యాణ వేదిక</span>
                <span className="fact-v">జె. నాగేంద్ర రావు, వరలక్ష్మి కళ్యాణ వేదిక</span>
                <span className="fact-s">కొన్నంగుంట రోడ్డు, నూజివీడు</span>
              </li>
              <li className="fact reveal" data-delay="4">
                <svg className="ico" aria-hidden="true"><use href="#i-bell"></use></svg>
                <span className="fact-k">వివాహ రిసెప్షన్</span>
                <span className="fact-v">శుక్రవారం, 20 నవంబర్ 2026</span>
                <span className="fact-s">ఉదయం 10:00 గం. · కె కన్వెన్షన్, విజయవాడ</span>
              </li>
            </ul>
            <div className="countdown-block reveal" data-delay="2">
              <div className="countdown-header">
                <p className="countdown-kicker">వివాహ మహోత్సవ ముహూర్తం</p>
                <h3 className="countdown-target">బుధవారం, 18 నవంబర్ 2026 · ఉదయం 10:30 గంటలకు</h3>
                <p className="countdown-sub">కల్యాణ ఘడియలకు మిగిలిన సమయం (Countdown to Wedding)</p>
              </div>
              <div className="countdown" aria-label="వివాహ దినానికి మిగిలిన సమయం">
                <div className="cd-unit"><span className="cd-n" id="cdD">{timeLeft.days}</span><span className="cd-l">రోజులు</span></div>
                <span className="cd-sep" aria-hidden="true"></span>
                <div className="cd-unit"><span className="cd-n" id="cdH">{timeLeft.hours}</span><span className="cd-l">గంటలు</span></div>
                <span className="cd-sep" aria-hidden="true"></span>
                <div className="cd-unit"><span className="cd-n" id="cdM">{timeLeft.minutes}</span><span className="cd-l">నిమిషాలు</span></div>
                <span className="cd-sep" aria-hidden="true"></span>
                <div className="cd-unit"><span className="cd-n" id="cdS">{timeLeft.seconds}</span><span className="cd-l">సెకన్లు</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="scene scene--flow scene--ivory">
          <img className="section-bg" src="assets/images/decorations/wash-ivory.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <p className="kicker">శుభ వేడుకలు</p>
              <h2 className="sec-title">కార్యక్రమ ప్రణాళిక</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg><span className="divider-line"></span></div>
            </div>
            <ol className="tl">
              <li className="tl-item reveal" data-delay="1">
                <span className="tl-node tl-node--hi" aria-hidden="true"><svg className="ico"><use href="#i-ring"></use></svg></span>
                <div className="tl-body">
                  <p className="tl-date">బుధవారం, 18 నవంబర్ 2026</p>
                  <h3 className="tl-title">వివాహ మహోత్సవం</h3>
                  <p className="tl-meta">ఉదయం 10:30 గంటలకు · జె. నాగేంద్ర రావు, వరలక్ష్మి కళ్యాణ వేదిక</p>
                  <p className="tl-text">{"పెద్దల ఆశీస్సులు, బంధుమిత్రుల సమక్షంలో దేవరం తేజ మరియు యాండవ రెబెక్కా ల పవిత్ర పరిణయ మహోత్సవం జరుగనున్నది."}</p>
                  <div className="tl-actions">
                    <a className="btn btn--gold btn--sm" target="_blank" rel="noopener" href="https://maps.google.com/?q=Varalakshmi+Kalyana+Vedhika+Konnamgunta+Road+Nuzvid">
                      <svg className="ico"><use href="#i-pin"></use></svg>{" వేదిక లొకేషన్ చూడండి "}
                    </a>
                  </div>
                </div>
              </li>
              <li className="tl-item reveal" data-delay="2">
                <span className="tl-node" aria-hidden="true"><svg className="ico"><use href="#i-bell"></use></svg></span>
                <div className="tl-body">
                  <p className="tl-date">శుక్రవారం, 20 నవంబర్ 2026</p>
                  <h3 className="tl-title">వధువు తరపున వివాహ రిసెప్షన్</h3>
                  <p className="tl-meta">ఉదయం 10:00 గంటలకు · కె కన్వెన్షన్, ప్రశాంతి నగర్, విజయవాడ</p>
                  <p className="tl-text">{"వధువు కుటుంబ సభ్యుల సమక్షంలో ఏర్పాటు చేయబడిన ఆత్మీయ విందు మరియు రిసెప్షన్ వేడుక. మీరందరూ విచ్చేసి నూతన వధూవరులను దీవించగలరు."}</p>
                  <div className="tl-actions">
                    <a className="btn btn--gold btn--sm" target="_blank" rel="noopener" href="https://maps.google.com/?q=K+convention+prashanthi+nagar+vijayawada">
                      <svg className="ico"><use href="#i-pin"></use></svg>{" వేదిక లొకేషన్ చూడండి "}
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
              <h2 className="sec-title">{"వధూవరులు"}</h2>
              <div className="divider divider--light" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg><span className="divider-line"></span></div>
            </div>
            <div className="couple-photo-wrap reveal">
              <div className="couple-photo-frame">
                <img className="couple-photo-img" loading="eager" decoding="async" src="assets/images/gallery/couple-teja-rebakha.jpg" data-fallbacks="assets/images/gallery/Couple.jpeg,assets/images/gallery/Couple.jpg" data-placeholder="తేజ & రెబెక్కా" alt="దేవరం తేజ మరియు యాండవ రెబెక్కా" />
                <span className="couple-photo-ring" aria-hidden="true"></span>
              </div>
            </div>
            <div className="couple-grid">
              <article className="person reveal" data-delay="1">
                <p className="person-role">వధువు</p>
                <h3 className="person-name">యాండవ రెబెక్కా</h3>
                <p className="person-line">శ్రీ యాండవ రాజారావు<br />{" & శ్రీమతి యాండవ నళిని గార్ల సుపుత్రిక"}</p>
                <p className="person-place">సోదరుడు: యాండవ ప్రదీప్<br />యాండవ కుటుంబం</p>
              </article>
              <div className="couple-knot" aria-hidden="true">
                <span className="couple-initial">రె</span>
                <svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg>
                <span className="couple-initial">తే</span>
              </div>
              <article className="person reveal" data-delay="2">
                <p className="person-role">వరుడు</p>
                <h3 className="person-name">దేవరం తేజ</h3>
                <p className="person-line">శ్రీ దేవరం మురళీ మోహన్ రావు<br />{" & శ్రీమతి దేవరం వాణి గార్ల సుపుత్రుడు"}</p>
                <p className="person-place">దేవరం కుటుంబం</p>
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
              <p className="kicker">{"ప్రేమానురాగాలతో"}</p>
              <h2 className="sec-title">{"తల్లిదండ్రులు & కుటుంబం"}</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-pillar"></use></svg><span className="divider-line"></span></div>
            </div>
            <div className="family-grid">
              <article className="card card--family reveal" data-delay="1">
                <svg className="ico card-ico" aria-hidden="true"><use href="#i-pillar"></use></svg>
                <p className="family-tag">{"వరుని కుటుంబం"}</p>
                <h3 className="family-name">శ్రీ దేవరం మురళీ మోహన్ రావు</h3>
                <p className="family-amp">{"&"}</p>
                <h3 className="family-name">శ్రీమతి దేవరం వాణి</h3>
                <p className="family-home">దేవరం కుటుంబ సభ్యులు</p>
              </article>
              <article className="card card--family reveal" data-delay="2">
                <svg className="ico card-ico" aria-hidden="true"><use href="#i-pillar"></use></svg>
                <p className="family-tag">{"వధువు కుటుంబం"}</p>
                <h3 className="family-name">శ్రీ యాండవ రాజారావు</h3>
                <p className="family-amp">{"&"}</p>
                <h3 className="family-name">శ్రీమతి యాండవ నళిని</h3>
                <p className="family-home">సోదరుడు: చి. యాండవ ప్రదీప్<br />యాండవ కుటుంబ సభ్యులు</p>
              </article>
            </div>
            <p className="family-foot reveal" data-delay="3">
              <svg className="ico" aria-hidden="true"><use href="#i-leaf"></use></svg>
              {" బంధుమిత్రులు, స్నేహితులు మరియు శ్రేయోభిలాషులందరి హృదయపూర్వక ఆశీస్సులతో... "}
            </p>
          </div>
        </section>

        {/* VENUE */}
        <section id="venue" className="scene scene--flow scene--ivory">
          <img className="section-bg" src="assets/images/decorations/wash-ivory.svg" alt="" loading="lazy" decoding="async" />
          <div className="section-overlay" aria-hidden="true"></div>
          <div className="section-content">
            <div className="sec-head reveal">
              <p className="kicker">దారి & చిరునామా</p>
              <h2 className="sec-title">{"కళ్యాణ వేదిక & రిసెప్షన్"}</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-pin"></use></svg><span className="divider-line"></span></div>
            </div>
            <div className="venue-grid">
              <article className="venue-card reveal" data-delay="1">
                <div className="venue-map-embed">
                  <iframe title="జె. నాగేంద్ర రావు, వరలక్ష్మి కళ్యాణ వేదిక, నూజివీడు" src="https://maps.google.com/maps?q=Konnamgunta+Road+Nuzvid+Varalakshmi+Kalyana+Vedhika&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style={{ border: "0", display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="venue-body">
                  <p className="venue-tag">వివాహ మహోత్సవం</p>
                  <h3 className="venue-name">జె. నాగేంద్ర రావు, వరలక్ష్మి కళ్యాణ వేదిక</h3>
                  <p className="venue-addr">కొన్నంగుంట రోడ్డు<br />నూజివీడు</p>
                  <p className="venue-when"><svg className="ico"><use href="#i-clock"></use></svg>{" బుధ, 18 నవంబర్ 2026 · ఉదయం 10:30 గంటలకు"}</p>
                  <div className="venue-actions">
                    <a className="btn btn--gold" target="_blank" rel="noopener" href="https://maps.google.com/?q=Varalakshmi+Kalyana+Vedhika+Konnamgunta+Road+Nuzvid">
                      <svg className="ico"><use href="#i-pin"></use></svg>{" గూగుల్ మ్యాప్స్‌లో చూడండి"}
                    </a>
                  </div>
                </div>
              </article>
              <article className="venue-card reveal" data-delay="2">
                <div className="venue-map-embed">
                  <iframe title="కె కన్వెన్షన్, విజయవాడ" src="https://maps.google.com/maps?q=K+convention+prashanthi+nagar+vijayawada&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style={{ border: "0", display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="venue-body">
                  <p className="venue-tag">వధువు తరపున రిసెప్షన్</p>
                  <h3 className="venue-name">కె కన్వెన్షన్</h3>
                  <p className="venue-addr">ప్రశాంతి నగర్, రైతు బజార్ ఎదురుగా<br />విజయవాడ</p>
                  <p className="venue-when"><svg className="ico"><use href="#i-bell"></use></svg>{" శుక్ర, 20 నవంబర్ 2026 · ఉదయం 10:00 గంటలకు"}</p>
                  <div className="venue-actions">
                    <a className="btn btn--gold" target="_blank" rel="noopener" href="https://maps.google.com/?q=K+convention+prashanthi+nagar+vijayawada">
                      <svg className="ico"><use href="#i-pin"></use></svg>{" గూగుల్ మ్యాప్స్‌లో చూడండి"}
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
              <p className="kicker">మీ రాక మాకు ఆనందం</p>
              <h2 className="sec-title">ఆర్.ఎస్.వి.పి</h2>
              <div className="divider" aria-hidden="true"><span className="divider-line"></span><svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg><span className="divider-line"></span></div>
              <p className="sec-note" style={{ marginTop: "14px" }}>
                {"మీ రాకతో నూతన వధూవరులను ఆశీర్వదించండి. మీ వివరాలు తెలియజేయండి."}
              </p>
            </div>
            <div className="rsvp-card reveal" data-delay="1">
              <div className="rsvp-success" id="rsvpSuccess" hidden>
                <svg className="ico rsvp-success__ico" aria-hidden="true"><use href="#i-heart"></use></svg>
                <p className="rsvp-success__title">ధన్యవాదాలు!</p>
                <p className="rsvp-success__msg">WhatsApp తెరవబడింది. దయచేసి అక్కడ “Send” నొక్కి మీ సందేశాన్ని పంపండి. మీతో కలిసి వేడుకను జరుపుకోవడానికి ఎదురుచూస్తున్నాము.</p>
              </div>
              <form id="rsvpForm" className="rsvp-form" noValidate>
                <div className="rsvp-field">
                  <label className="rsvp-label" htmlFor="rsvpName">{"పూర్తి పేరు "}<span aria-hidden="true">*</span></label>
                  <input className="rsvp-input" id="rsvpName" name="name" type="text" placeholder="మీ పూర్తి పేరు" autoComplete="name" required />
                  <span className="rsvp-err" id="errName" role="alert" hidden></span>
                </div>
                <div className="rsvp-row">
                  <div className="rsvp-field">
                    <label className="rsvp-label" htmlFor="rsvpGuests">{"అతిథుల సంఖ్య "}<span aria-hidden="true">*</span></label>
                    <select className="rsvp-input rsvp-select" id="rsvpGuests" name="guests" required defaultValue="">
                      <option value="" disabled>అతిథుల సంఖ్యను ఎంచుకోండి</option>
                      <option value="1">1 — నేను మాత్రమే</option>
                      <option value="2">2 గురు</option>
                      <option value="3">3 గురు</option>
                      <option value="4">4 గురు</option>
                      <option value="5">5 గురు</option>
                      <option value="6+">6 లేదా అంతకంటే ఎక్కువ</option>
                    </select>
                    <span className="rsvp-err" id="errGuests" role="alert" hidden></span>
                  </div>
                  <div className="rsvp-field">
                    <label className="rsvp-label">{"విచ్చేస్తున్నారా? "}<span aria-hidden="true">*</span></label>
                    <div className="rsvp-radio-group" role="radiogroup" aria-label="విచ్చేస్తున్నారా?">
                      <label className="rsvp-radio">
                        <input type="radio" name="attending" defaultValue="Yes" required />
                        <span className="rsvp-radio__mark" aria-hidden="true"></span>
                        <span>తప్పకుండా వస్తాము!</span>
                      </label>
                      <label className="rsvp-radio">
                        <input type="radio" name="attending" defaultValue="No" />
                        <span className="rsvp-radio__mark" aria-hidden="true"></span>
                        <span>{"రాలేకపోతున్నాము"}</span>
                      </label>
                    </div>
                    <span className="rsvp-err" id="errAttending" role="alert" hidden></span>
                  </div>
                </div>
                <div className="rsvp-field">
                  <label className="rsvp-label" htmlFor="rsvpWish">{"మీ శుభాకాంక్షలు / దీవెనలు "}<span className="rsvp-optional">(ఐచ్ఛికం)</span></label>
                  <textarea className="rsvp-input rsvp-textarea" id="rsvpWish" name="wish" rows="3" placeholder="తేజ & రెబెక్కా లకు మీ దీవెనలు, శుభాకాంక్షలు తెలపండి…" defaultValue={""} />
                </div>
                <div className="rsvp-submit-row">
                  <button type="submit" className="btn btn--gold rsvp-submit" id="rsvpSubmit">
                    <svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg>
                    <span className="rsvp-submit__label">{"శుభాకాంక్షలు పంపండి"}</span>
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
              <p className="finale-fallback" id="finaleFallback">ధన్యవాదాలు</p>
            </div>
            <p className="finale-sub reveal">మా వివాహ వేడుకలో భాగమైనందుకు కృతజ్ఞతలు</p>
            <p className="finale-blessing reveal" data-delay="1">{" \"సర్వేశ్వరుని ఆశీస్సులతో నూతన దంపతులు కలకాలం సుఖసంతోషాలతో వర్ధిల్లాలని ఆకాంక్షిస్తూ...\" "}</p>
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
                <svg className="ico" aria-hidden="true"><use href="#i-ring"></use></svg>
                <span className="divider-line"></span>
              </div>
              <p className="gratitude-kicker" style={{ marginTop: "20px" }}>ఆహ్వానించువారు</p>
              <p className="gratitude-msg">{"మా కుటుంబ శుభకార్యానికి విచ్చేసి, నూతన వధూవరులను నిండు మనస్సుతో ఆశీర్వదించాలని సవినయంగా కోరుకుంటున్నాము."}</p>
              <p className="gratitude-names">{"దేవరం తేజ & యాండవ రెబెక్కా"}</p>
              <p className="gratitude-date">బుధవారం, 18 నవంబర్ 2026</p>
              <div className="divider divider--light divider--sm" style={{ margin: "22px auto" }} aria-hidden="true">
                <span className="divider-line"></span>
                <svg className="ico" aria-hidden="true"><use href="#i-leaf"></use></svg>
                <span className="divider-line"></span>
              </div>
              <p className="gratitude-kicker">సంప్రదించవలసిన నంబర్</p>
              <p className="gratitude-rsvp-names">{"వివరాలకు సంప్రదించండి"}</p>
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

      <button id="audioBtn" className="audio-disc" type="button" aria-pressed="false" aria-label="సంగీతాన్ని ఆన్ లేదా ఆఫ్ చేయండి" hidden>
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
