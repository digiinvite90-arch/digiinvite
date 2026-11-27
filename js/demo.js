const d = DEMOS.find(x => x.id === new URLSearchParams(location.search).get("d")) || DEMOS[0];
const $ = s => document.querySelector(s);
const wa = msg => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
const out = 'target="_blank" rel="noopener"';
document.body.className = "theme-" + d.id;
document.title = `${d.name} demo | DigiInvite`;
const day = new Date(d.date).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

$("#opening").innerHTML = `<p>Wedding invitation</p><h1 class="script">${d.a}<small>&amp;</small>${d.b}</h1><button id="open">Tap to<br>open</button>`;
$("#invite").innerHTML = `
  <section class="first">
    <p ${d.arabic ? 'class="arabic" lang="ar" dir="rtl"' : ""}>${d.blessing}</p><hr>
    <p>Together with their families</p>
    <h1 class="script" tabindex="-1">${d.a} &amp; ${d.b}</h1>
    <p>${d.line}</p><p><strong>${day}</strong></p>
  </section>
  <section><h2 class="script">Counting the days</h2><div class="count" id="count"></div></section>
  <section><h2 class="script">Celebrations</h2>${d.events.map(([n, t, v, c]) => `<div class="box"><h3>${n}</h3><p>${t}<br>${v}<br>${c}</p><a class="button" ${out} href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c)}">View map</a></div>`).join("")}</section>
  <section><h2 class="script">Our families</h2>${d.families.map(([t, n, c]) => `<div class="box"><h3>${t}</h3><p>${n}<br>${c}</p></div>`).join("")}</section>
  <section><h2 class="script">Will you join us?</h2><p>Your presence will make our day special.</p>
    <a class="button" ${out} href="${wa(`(Demo RSVP) I will attend the wedding of ${d.a} & ${d.b}.`)}">Confirm on WhatsApp</a>
    <p style="margin-top:32px">With love, ${d.a} &amp; ${d.b}</p></section>`;

$(".demobar").innerHTML = `<a href="templates.html">All demos</a><a class="primary" ${out} href="${wa(`Hi DigiInvite, I want an invitation website like the ${d.name} demo.`)}">Order this design</a>`;

function tick() {
  let s = Math.max(0, Math.floor((new Date(d.date) - Date.now()) / 1000));
  const parts = [["Days", Math.floor(s / 86400)], ["Hours", Math.floor(s / 3600) % 24], ["Mins", Math.floor(s / 60) % 60], ["Secs", s % 60]];
  $("#count").innerHTML = parts.map(([l, v]) => `<div><b>${v}</b>${l}</div>`).join("");
}
tick(); setInterval(tick, 1000);

$("#open").addEventListener("click", () => {
  $("#opening").hidden = true;
  $("#invite").hidden = false;
  scrollTo(0, 0);
  $(".first h1").focus({ preventScroll: true });
  $("#petals").innerHTML = Array.from({ length: 14 }, (_, i) => `<span style="left:${(i * 47) % 100}%;font-size:${12 + (i % 4) * 4}px;animation-duration:${8 + (i % 6) * 1.6}s;animation-delay:-${(i * 1.3) % 12}s">${d.petals[i % d.petals.length]}</span>`).join("");
});
