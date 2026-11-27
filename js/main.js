const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const waLink = msg => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ---------- Header and footer (shared by all pages) ---------- */
const current = location.pathname.split("/").pop() || "index.html";
const links = [["index.html", "Home"], ["templates.html", "Demos"], ["pricing.html", "Pricing"], ["about.html", "About"], ["contact.html", "Contact"]];
$("#site-header").innerHTML = `<div class="wrap bar">
  <a class="brand" href="index.html">DigiInvite</a>
  <button class="menu" aria-expanded="false" aria-controls="nav">Menu</button>
  <nav id="nav">${links.map(([h, t]) => `<a href="${h}"${h === current ? ' aria-current="page"' : ""}>${t}</a>`).join("")}</nav>
</div>`;
$(".menu").addEventListener("click", e => {
  const open = $("#nav").classList.toggle("open");
  e.target.setAttribute("aria-expanded", open);
  e.target.textContent = open ? "Close" : "Menu";
});
$("#site-footer").innerHTML = `<div class="wrap foot">
  <div><span class="brand">DigiInvite</span><p>Wedding invitation websites.</p></div>
  <div>${BUSINESS.phones.map(p => `<a href="tel:${p.number}">${p.person}: ${p.label}</a>`).join("")}</div>
  <div><a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a><a href="https://instagram.com/${BUSINESS.instagram}" target="_blank" rel="noopener">Instagram: ${BUSINESS.instagram}</a></div>
</div><p class="copy">© ${new Date().getFullYear()} DigiInvite</p>`;

$$("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });

/* ---------- Demo gallery ---------- */
const phone = d => `<div class="phone"><div class="cover theme-${d.id}"><p>Wedding invitation</p><p class="script">${d.a}<small>&amp;</small>${d.b}</p><span class="seal">Tap to<br>open</span></div></div>`;
$$("[data-cover]").forEach(el => el.innerHTML = phone(DEMOS.find(d => d.id === el.dataset.cover)));
const gallery = $("[data-gallery]");
function drawGallery(style = "All") {
  gallery.innerHTML = DEMOS.filter(d => style === "All" || d.style === style).map(d => `<article class="item">
    <a href="demo.html?d=${d.id}" aria-label="View ${d.name} live demo">${phone(d)}</a>
    <h3>${d.name}</h3><p>${d.desc}</p>
    <div class="actions"><a class="btn dark" href="demo.html?d=${d.id}">View live demo</a>
    <a class="text-link" target="_blank" rel="noopener" href="${waLink(`Hi DigiInvite, I like the ${d.name} demo. Please share the details.`)}">Order this</a></div>
  </article>`).join("");
}
if (gallery) drawGallery();
const filters = $("[data-filters]");
if (filters) {
  filters.innerHTML = ["All", ...new Set(DEMOS.map(d => d.style))].map((s, i) => `<button aria-pressed="${!i}">${s}</button>`).join("");
  filters.addEventListener("click", e => {
    if (e.target.tagName !== "BUTTON") return;
    $$("button", filters).forEach(b => b.setAttribute("aria-pressed", b === e.target));
    drawGallery(e.target.textContent);
  });
}

/* ---------- Pricing ---------- */
$$("[data-plans]").forEach(el => el.innerHTML = PLANS.map(p => `<article class="plan${p.popular ? " popular" : ""}">
  <h3>${p.name}${p.popular ? " (recommended)" : ""}</h3><p class="price">${p.price}</p><p>${p.note}</p>
  <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
  <a class="btn ${p.popular ? "gold" : "dark"}" target="_blank" rel="noopener" href="${waLink(`Hi DigiInvite, I am interested in the ${p.name} package (${p.price}).`)}">Choose ${p.name}</a>
</article>`).join(""));
const planSelect = $("[data-plan-select]");
if (planSelect) planSelect.innerHTML = ["Not sure yet", ...PLANS.map(p => `${p.name} (${p.price})`)].map(n => `<option>${n}</option>`).join("");

/* ---------- Contact form (no server needed) ---------- */
const enquiry = $("#enquiry");
if (enquiry) {
  $("[data-designs]").innerHTML = ["Not sure yet", ...DEMOS.map(t => t.name), "A custom design"].map(n => `<option>${n}</option>`).join("");
  enquiry.addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(enquiry));
    const msg = `Hi DigiInvite,\nName: ${f.name}\nWedding date: ${f.date ? new Date(f.date + "T00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "Not decided"}\nDesign: ${f.design}\nPackage: ${f.plan}\n${f.msg}`;
    if (e.submitter && e.submitter.value === "mail") location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Wedding invitation enquiry")}&body=${encodeURIComponent(msg)}`;
    else window.open(waLink(msg), "_blank", "noopener");
  });
}
