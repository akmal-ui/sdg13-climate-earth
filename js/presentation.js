/* Presentation mode: the six sections from the student guidelines, as chapters.
   Each chapter shows a slide on the left and flies the globe to the place it talks about.
   Keys: 1–6 open a chapter, ← / → step through, 0 or Esc returns to free exploring. */
(function () {
  'use strict';

  const GREEN = '#56c25f';

  const CHAPTERS = [
    {
      key: 'global', num: 1, short: 'Global snapshot', title: 'Global Progress Snapshot',
      view: { lat: 18, lon: 20, dist: 4.6 },
      render: () => `
        <div class="verdict bad"><b>Are we on track globally?</b><span>No. Warming and emissions are still rising. Resilience and finance are improving, but too slowly.</span></div>
        <div class="trend-grid">
          ${trend('up-bad', 'Temperature', '+1.55°C', '2024 was the hottest year on record and the first full year above 1.5°C.', 'WMO, 2025')}
          ${trend('up-bad', 'Emissions', '57.7 Gt', 'Record greenhouse-gas emissions in 2024, up 2.3% in one year.', 'UNEP Emissions Gap Report 2025')}
          ${trend('gap', 'Ambition gap', '2.8°C', 'Where current policies lead by 2100. New pledges: 2.3–2.5°C. Keeping to 1.5°C needs a 55% cut by 2035 (vs 2019).', 'UNEP Emissions Gap Report 2025')}
          ${trend('up-good', 'Resilience', '141', 'countries have disaster-risk-reduction strategies (56 in 2015); 113 have multi-hazard early-warning systems.', 'UN SDG Report 2025')}
          ${trend('up-good', 'Finance', '$300bn', 'New yearly climate-finance goal for 2035 (COP29). The old $100bn goal was first met in 2022.', 'UNFCCC; OECD')}
        </div>
        <p class="s-title">SDG 13 targets at a glance</p>
        <div class="targets">
          ${target('13.1', 'Resilience & disaster risk', 'Improving', 'good')}
          ${target('13.2', 'Climate policies & emissions', 'Off track', 'bad')}
          ${target('13.3', 'Climate education', 'Limited data', 'mid')}
          ${target('13.a', 'Climate finance', 'Improving, not enough', 'mid')}
        </div>`
    },
    {
      key: 'uzbekistan', num: 2, short: 'Uzbekistan', title: 'Uzbekistan’s Context',
      view: { lat: 41.4, lon: 64.6, dist: 2.25 }, highlight: ['Uzbekistan'],
      render: () => `
        <div class="verdict mid"><b>On track, lagging or progressing well?</b><span>Progressing well on clean power and planning. Lagging on air quality, real emission cuts and water efficiency.</span></div>
        <div class="kpis">
          ${kpi('62nd', 'of 167 in the 2025 SDG Index, up 19 places')}
          ${kpi('~30%', 'of electricity from green sources in 2025')}
          ${kpi('70–80%', 'of electricity still comes from gas')}
          ${kpi('6×', 'Tashkent PM2.5 above the WHO limit')}
        </div>
        <p class="s-title">National plans & reforms</p>
        <ul class="timeline">
          <li><b>2019</b><span>Strategy for the Transition to a Green Economy 2019–2030</span></li>
          <li><b>2021</b><span>Updated NDC: cut greenhouse gas per unit of GDP by 35% by 2030 vs 2010 (was 10%)</span></li>
          <li><b>2021</b><span>“Yashil Makon” (Green Space): aim of 1 billion trees and shrubs in five years</span></li>
          <li><b>2023</b><span>“Uzbekistan-2030” Strategy: target of 25 GW renewables and 54% green electricity by 2030</span></li>
          <li><b>2025</b><span>NDC 3.0 submitted to the UN, aligned with Uzbekistan-2030</span></li>
        </ul>
        <div class="two-col">
          <div class="col good"><p class="s-title">Achievements</p><ul>
            <li>Solar and wind generation roughly doubled in 2025</li>
            <li>Fastest SDG progress in Central Asia & Eastern Europe since 2015</li>
            <li>Climate target more than tripled in 2021</li>
            <li>Forests planted on the dry Aral seabed</li>
          </ul></div>
          <div class="col bad"><p class="s-title">Gaps</p><ul>
            <li>Polluted air: ~27,000 early deaths a year</li>
            <li>Target is per unit of GDP, so total emissions can still grow</li>
            <li>Heavy dependence on gas and old thermal plants</li>
            <li>~90% of water goes to farming, with big losses</li>
          </ul></div>
        </div>`
    },
    {
      key: 'practices', num: 3, short: 'Best practices', title: 'Best Practices from Other Countries',
      steps: 'practice',
      render: i => {
        const p = PRACTICES[i];
        return `
          ${practiceTabs(i)}
          <div class="practice-head">
            <span class="p-flag">${p.flag}</span>
            <div><h3>${p.country}</h3><p>${p.what}</p></div>
          </div>
          <p class="level"><b>Development level:</b> ${p.level}</p>
          <p class="s-title">What they did</p>
          <ul class="dots">${p.did.map(d => `<li>${d}</li>`).join('')}</ul>
          <p class="s-title">Results</p>
          <div class="kpis">${p.results.map(r => kpi(r[0], r[1])).join('')}</div>
          <div class="lesson"><b>Lesson for us:</b> ${p.lesson}</div>
          <p class="src">Sources: ${p.src}</p>`;
      }
    },
    {
      key: 'adaptation', num: 4, short: 'Adaptation', title: 'Adaptation to Uzbekistan',
      view: { lat: 41.4, lon: 64.6, dist: 2.25 }, highlight: ['Uzbekistan'], steps: 'practice',
      render: i => {
        const p = PRACTICES[i];
        return `
          ${practiceTabs(i)}
          <div class="practice-head small">
            <span class="p-flag">${p.flag}</span><span class="arrow">→</span><span class="p-flag">🇺🇿</span>
            <div><h3>${p.what}</h3><p>From ${p.country} to Uzbekistan</p></div>
          </div>
          <div class="adapt">
            <div class="a-box rel"><p class="s-title">Why it is relevant</p><p>${p.relevance}</p></div>
            <div class="a-box how"><p class="s-title">How to adapt it locally</p><ul>${p.adapt.map(d => `<li>${d}</li>`).join('')}</ul></div>
            <div class="a-box bar"><p class="s-title">Barriers</p><ul>${p.barriers.map(d => `<li>${d}</li>`).join('')}</ul></div>
            <div class="a-box en"><p class="s-title">Enabling factors</p><ul>${p.enablers.map(d => `<li>${d}</li>`).join('')}</ul></div>
          </div>`;
      }
    },
    {
      key: 'recommendations', num: 5, short: 'Recommendations', title: 'SMART Recommendations',
      view: { lat: 41.3, lon: 69.25, dist: 1.6 }, highlight: ['Uzbekistan'],
      render: () => `
        <p class="intro">Youth-focused actions that are Specific, Measurable, Achievable, Relevant and Time-bound.</p>
        <div class="recs">${RECS.map((r, i) => `
          <div class="rec">
            <div class="rec-head"><span class="rec-n">${i + 1}</span><h3>${r.name}</h3><span class="rec-t">${r.t}</span></div>
            <div class="smart">
              <span><i>S</i>${r.s}</span><span><i>M</i>${r.m}</span><span><i>A</i>${r.a}</span><span><i>R</i>${r.r}</span><span><i>T</i>${r.t}</span>
            </div>
          </div>`).join('')}
        </div>`
    },
    {
      key: 'engage', num: 6, short: 'Quiz & poll', title: 'Make It Engaging',
      view: { lat: 30, lon: 60, dist: 4.6 }, steps: 'quiz',
      render: i => i < QUIZ.length ? quizSlide(i) : pollSlide()
    }
  ];

  const PRACTICES = [
    {
      id: 'morocco', country: 'Morocco', flag: '🇲🇦', what: 'Big solar through a national agency and auctions',
      level: 'Lower-middle income, like Uzbekistan. Sunny and dry, and used to depend on imported fossil fuels.',
      fly: { lat: 30.9, lon: -6.9, dist: 1.9 }, highlight: ['Morocco'],
      did: ['Created a dedicated renewable-energy agency (MASEN) in 2010', 'Built the 580 MW Noor Ouarzazate solar complex, one of the largest in the world', 'Used competitive auctions and long-term contracts to attract private investors'],
      results: [['~41–45%', 'of installed power capacity was renewable in 2024'], ['52%', 'renewable capacity target for 2030']],
      lesson: 'One strong agency plus clear long-term contracts brings in investment quickly.',
      relevance: 'Uzbekistan has strong sunshine but makes 70–80% of its electricity from gas, and gas production fell 4.5% in 2024.',
      adapt: ['Keep running large solar and wind auctions', 'Add rooftop solar on homes, schools and universities', 'Build battery storage to cover evening demand'],
      barriers: ['Low, subsidised electricity prices', 'Grid and storage limits', 'High cost of borrowing'],
      enablers: ['National target of 25 GW renewables by 2030', 'Foreign investors already building plants', 'Ongoing energy-price reforms'],
      src: 'MASEN; Morocco energy regulator ANRE; MEES (2024)'
    },
    {
      id: 'krakow', country: 'Kraków, Poland', flag: '🇵🇱', what: 'Banning coal for home heating',
      level: 'High income (ahead of Uzbekistan), but it had the same problem: winter smog from heating.',
      fly: { lat: 50.06, lon: 19.94, dist: 1.6 }, highlight: ['Poland'],
      did: ['Banned burning coal and wood for heating from September 2019', 'Paid families to replace about 25,000 old stoves and boilers (2012–2019)', 'Switched homes to gas, district heating, electric heating and heat pumps'],
      results: [['−45%', 'PM2.5 and PM10 in the 2019/20 heating season vs 2012/13'], ['11 → 0', 'days per year at the smog-alarm level']],
      lesson: 'A clear ban works when people get money and help to switch.',
      relevance: 'Heating is the biggest human-made source of PM2.5 in Tashkent (about 28%).',
      adapt: ['Phase out coal and dirty fuels for private homes and small boilers, step by step', 'Subsidise heat pumps, insulation and district-heating connections', 'Create low-emission zones for the oldest cars'],
      barriers: ['Cost for low-income families', 'Winter gas shortages push people towards coal', 'Weak enforcement'],
      enablers: ['The mahalla system can reach every household', 'World Bank clean-air roadmap for Tashkent', 'Growing public concern and air monitoring'],
      src: 'Kraków Smog Alert / AGH University; IEEP case study'
    },
    {
      id: 'kazakhstan', country: 'Kazakhstan', flag: '🇰🇿', what: 'Bringing back the North Aral Sea',
      level: 'Neighbour with a similar post-Soviet background, slightly ahead in income.',
      fly: { lat: 46.4, lon: 61.2, dist: 1.8 }, highlight: ['Kazakhstan'],
      did: ['Built the Kok-Aral dam (2005) with the World Bank to hold Syr Darya water in the North Aral', 'Repaired river channels so more water reaches the sea', 'Started a second phase to raise the sea level further'],
      results: [['+42%', 'more water in the North Aral (27 billion m³)'], ['30 → 8 g/L', 'salinity, so fish returned']],
      lesson: 'Targeted engineering and good water management can reverse damage.',
      relevance: 'Uzbekistan holds the South Aral and the Amu Darya delta, the area hit hardest by the disaster.',
      adapt: ['Restore local lakes and wetlands in the Amu Darya delta', 'Cut irrigation losses with drip irrigation and laser land-levelling', 'Keep planting saxaul forests on the dry seabed'],
      barriers: ['Farming uses ~90% of the water', 'Water deals with upstream countries', 'The South Aral is too large to refill fully'],
      enablers: ['International Fund for Saving the Aral Sea', 'UN “zone of environmental innovations” status (2021)', 'Donor and World Bank finance'],
      src: 'World Bank; Eurasianet; National Geographic'
    }
  ];

  const RECS = [
    { name: 'Youth Air-Watch Tashkent', s: 'Student teams install low-cost PM2.5 sensors and publish an open air-quality map', m: '100 sensors, monthly public reports', a: 'University and Ministry of Ecology partnership', r: 'Air pollution is our biggest problem', t: 'By Dec 2027' },
    { name: 'Green Campus Solar', s: 'Rooftop solar on university buildings through a student-led green fund', m: '10 buildings, 20% less grid electricity', a: 'Uses existing rooftop-solar programmes', r: 'Less gas-based power and CO₂', t: 'By 2028' },
    { name: '1 Student = 1 Tree', s: 'Every first-year student plants and cares for one tree under Yashil Makon', m: '50,000 trees, 80% still alive after 2 years', a: 'Part of orientation week', r: 'Shade against heat, less dust', t: 'Springs 2027–2028' },
    { name: 'Climate & Clean-Air Literacy', s: 'A short climate and air-quality course for first-year students (SDG 13.3)', m: '5 universities, 10,000 students, before/after survey', a: 'One-credit module, open materials', r: 'Builds skills for climate jobs', t: 'From Sept 2027' },
    { name: 'Mahalla Smog & Heat Alerts', s: 'Youth volunteers run Telegram alerts with health tips on smog and heat days', m: '100 mahallas, 50,000 subscribers', a: 'Free tools, free public air data', r: 'Protects children and the elderly', t: 'Before winter 2027' }
  ];

  const QUIZ = [
    { q: 'Which was the first full year above 1.5°C of global warming?', o: ['2016', '2020', '2024', '2025'], a: 2, e: '2024 averaged about 1.55°C above pre-industrial levels (WMO).' },
    { q: 'How many times above the WHO limit was Tashkent’s PM2.5 in 2024?', o: ['2×', '4×', '6×', '10×'], a: 2, e: '31.5 µg/m³ against a WHO limit of 5 µg/m³ (IQAir).' },
    { q: 'What is the biggest human-made source of PM2.5 in Tashkent?', o: ['Transport', 'Heating', 'Industry', 'Farming'], a: 1, e: 'Heating is about 28%, transport 16% and industry 13%.' },
    { q: 'How much of the Aral Sea’s area has been lost since the 1960s?', o: ['25%', '50%', '75%', '90%'], a: 3, e: 'It was once the world’s 4th-largest lake.' },
    { q: 'Which country brought part of the Aral Sea back with a dam?', o: ['Uzbekistan', 'Kazakhstan', 'Turkmenistan', 'Tajikistan'], a: 1, e: 'The Kok-Aral dam (2005) restored the North Aral Sea.' },
    { q: 'Where do current global policies lead by 2100?', o: ['1.5°C', '2.0°C', '2.8°C', '4.5°C'], a: 2, e: 'UNEP Emissions Gap Report 2025.' }
  ];

  /* ---------------- small render helpers ---------------- */

  function trend(kind, label, value, text, src) {
    const arrow = kind === 'gap' ? '⚠' : '▲';
    return `<div class="trend ${kind}"><div class="t-top"><span class="t-arrow">${arrow}</span><span class="t-label">${label}</span></div>
      <span class="t-val">${value}</span><p>${text}</p><span class="src">${src}</span></div>`;
  }
  const target = (n, label, status, cls) => `<div class="target ${cls}"><b>${n}</b><span>${label}</span><i>${status}</i></div>`;
  const kpi = (v, l) => `<div class="kpi"><b>${v}</b><span>${l}</span></div>`;
  const practiceTabs = i => `<div class="sub-tabs">${PRACTICES.map((p, k) =>
    `<button data-step="${k}" class="${k === i ? 'on' : ''}">${p.flag} ${p.country}</button>`).join('')}</div>`;

  /* ---------------- quiz & poll ---------------- */

  let score = 0, answered = {};
  function quizSlide(i) {
    const q = QUIZ[i], done = answered[i] !== undefined;
    return `
      <div class="quiz-top"><span>Question ${i + 1} of ${QUIZ.length}</span><span>Score: <b>${score}</b></span></div>
      <h3 class="quiz-q">${q.q}</h3>
      <div class="quiz-opts">${q.o.map((o, k) => {
        const cls = !done ? '' : k === q.a ? 'right' : k === answered[i] ? 'wrong' : 'dim';
        return `<button data-answer="${k}" class="${cls}" ${done ? 'disabled' : ''}><span>${'ABCD'[k]}</span>${o}</button>`;
      }).join('')}</div>
      <p class="quiz-e ${done ? 'show' : ''}">${q.e}</p>
      <div class="quiz-nav"><button data-next class="primary">${i === QUIZ.length - 1 ? 'Go to the poll →' : 'Next question →'}</button></div>`;
  }

  const votes = RECS.map(() => 0);
  function pollSlide() {
    const total = votes.reduce((a, b) => a + b, 0) || 1;
    return `
      <div class="quiz-top"><span>Live poll</span><span>Click an option once for each raised hand</span></div>
      <h3 class="quiz-q">Which action would YOU join?</h3>
      <div class="poll">${RECS.map((r, k) => `
        <button data-vote="${k}"><span class="p-name">${r.name}</span><span class="p-count">${votes[k]}</span>
          <i style="width:${(votes[k] / total * 100).toFixed(1)}%"></i></button>`).join('')}
      </div>
      <div class="quiz-nav"><button data-reset-poll>Reset votes</button><button data-restart-quiz>Restart quiz</button></div>`;
  }

  /* ---------------- chapter engine ---------------- */

  const bar = document.getElementById('chapter-bar');
  const slide = document.getElementById('slide');
  const body = document.getElementById('slide-body');
  let current = -1, step = 0;

  bar.innerHTML = `<button data-ch="-1" class="explore">Explore</button>` +
    CHAPTERS.map((c, i) => `<button data-ch="${i}"><span class="n">${c.num}</span><span class="l">${c.short}</span></button>`).join('');

  function stepsOf(c) { return c.steps === 'practice' ? PRACTICES.length : c.steps === 'quiz' ? QUIZ.length + 1 : 1; }

  function slideWidth() { return slide.getBoundingClientRect().width || 560; }

  function open(i, s = 0) {
    if (i < 0) return close();
    const firstOpen = current < 0;
    current = i; step = s;
    const c = CHAPTERS[i];
    if (window.App) window.App.stopTour();
    Globe.chapterMode = true;
    document.body.classList.add('chapter');
    bar.querySelectorAll('button').forEach(b => b.classList.toggle('on', +b.dataset.ch === i));
    document.getElementById('slide-num').textContent = c.num;
    document.getElementById('slide-title').textContent = c.title;
    body.innerHTML = c.render(step);
    body.scrollTop = 0;
    slide.classList.remove('swap'); void slide.offsetWidth; slide.classList.add('swap');
    document.getElementById('slide-pos').textContent = stepsOf(c) > 1 ? `${step + 1} / ${stepsOf(c)}` : '';

    // globe: where to look and what to outline
    const p = c.steps === 'practice' && c.key === 'practices' ? PRACTICES[step] : null;
    const view = p ? p.fly : c.view;
    const hl = p ? p.highlight : c.highlight;
    if (view) Globe.flyTo({ lat: view.lat, lon: view.lon, zoom: view.dist }, { pin: false });
    Globe.highlight(hl || [], GREEN);
    requestAnimationFrame(() => Globe.setPanelShift(window.innerWidth > 760 ? -(slideWidth() / 2 + 10) : 0));
    if (firstOpen) slide.scrollTop = 0;
  }

  function close() {
    current = -1;
    Globe.chapterMode = false;
    Globe.highlight([], GREEN);
    Globe.setPanelShift(0);
    Globe.goHome();
    document.body.classList.remove('chapter');
    bar.querySelectorAll('button').forEach(b => b.classList.toggle('on', +b.dataset.ch === -1));
  }

  function next() {
    if (current < 0) return open(0);
    if (step < stepsOf(CHAPTERS[current]) - 1) return open(current, step + 1);
    if (current < CHAPTERS.length - 1) open(current + 1);
  }
  function prev() {
    if (current < 0) return;
    if (step > 0) return open(current, step - 1);
    if (current > 0) { const c = current - 1; open(c, stepsOf(CHAPTERS[c]) - 1); }
  }

  bar.addEventListener('click', e => { const b = e.target.closest('[data-ch]'); if (b) open(+b.dataset.ch); });
  document.getElementById('slide-prev').addEventListener('click', prev);
  document.getElementById('slide-next').addEventListener('click', next);
  document.getElementById('slide-close').addEventListener('click', close);

  body.addEventListener('click', e => {
    const t = e.target.closest('button');
    if (!t) return;
    if (t.dataset.step !== undefined) open(current, +t.dataset.step);
    else if (t.dataset.answer !== undefined && answered[step] === undefined) {
      answered[step] = +t.dataset.answer;
      if (answered[step] === QUIZ[step].a) score++;
      body.innerHTML = quizSlide(step);
    }
    else if (t.dataset.next !== undefined) next();
    else if (t.dataset.vote !== undefined) { votes[+t.dataset.vote]++; body.innerHTML = pollSlide(); }
    else if (t.dataset.resetPoll !== undefined) { votes.fill(0); body.innerHTML = pollSlide(); }
    else if (t.dataset.restartQuiz !== undefined) { score = 0; answered = {}; open(current, 0); }
  });

  // Runs before the explore-mode shortcuts in app.js and takes over the arrows while a chapter is open
  window.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^[1-6]$/.test(e.key)) { open(+e.key - 1); e.stopImmediatePropagation(); return; }
    if (e.key === '0') { close(); e.stopImmediatePropagation(); return; }
    if (current < 0) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') next();
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') prev();
    else if (e.key === 'Escape') close();
    else if (e.key === ' ') e.preventDefault();
    else return;
    e.stopImmediatePropagation();
  }, true);

  window.addEventListener('resize', () => { if (current >= 0) Globe.setPanelShift(window.innerWidth > 760 ? -(slideWidth() / 2 + 10) : 0); });
})();
