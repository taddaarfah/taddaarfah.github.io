/* =========================
   TADDA — Elegant Dev Portfolio
   (No content changes, only design)
========================= */

:root{
  --bg0:#070A12;
  --bg1:#0B1020;
  --card: rgba(255,255,255,.06);
  --card2: rgba(255,255,255,.09);
  --border: rgba(255,255,255,.14);
  --text:#EAF0FF;
  --muted: rgba(234,240,255,.72);
  --muted2: rgba(234,240,255,.55);

  --accent:#7C3AED;     /* violet */
  --accent2:#22D3EE;    /* cyan */
  --accent3:#F472B6;    /* pink */
  --shadow: 0 18px 50px rgba(0,0,0,.35);

  --radius: 22px;
  --radius2: 28px;

  --max: 1120px;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:'Roboto', system-ui, -apple-system, Segoe UI, Arial;
  color:var(--text);
  background:
    radial-gradient(900px 500px at 12% 12%, rgba(124,58,237,.28), transparent 60%),
    radial-gradient(900px 500px at 88% 18%, rgba(34,211,238,.22), transparent 60%),
    radial-gradient(1000px 600px at 50% 105%, rgba(244,114,182,.16), transparent 60%),
    linear-gradient(180deg, var(--bg0), var(--bg1));
  overflow-x:hidden;
}

/* Subtle animated grain */
body::before{
  content:"";
  position:fixed; inset:0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.16'/%3E%3C/svg%3E");
  mix-blend-mode:overlay;
  pointer-events:none;
  opacity:.18;
  animation: grain 7s steps(2) infinite;
}
@keyframes grain{
  0%{transform:translate(0,0)}
  25%{transform:translate(-2%,1%)}
  50%{transform:translate(1%,-2%)}
  75%{transform:translate(-1%,-1%)}
  100%{transform:translate(0,0)}
}

/* container */
.container, .nav-container, .hero-container{
  width:min(var(--max), calc(100% - 40px));
  margin-inline:auto;
}

/* =========================
   NAVBAR
========================= */
nav#navbar{
  position:fixed;
  top:0; left:0; right:0;
  z-index:999;
  backdrop-filter: blur(12px);
  background: rgba(6,10,18,.55);
  border-bottom:1px solid rgba(255,255,255,.08);
  transition: transform .35s ease, background .35s ease, box-shadow .35s ease;
}
nav#navbar.scrolled{
  background: rgba(6,10,18,.78);
  box-shadow: 0 12px 40px rgba(0,0,0,.35);
}

.nav-container{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 0;
}

.logo a{
  text-decoration:none;
  font-weight:700;
  letter-spacing:.4px;
  color:var(--text);
  position:relative;
}
.logo a::after{
  content:"";
  position:absolute;
  left:0; bottom:-10px;
  width:38px; height:2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  border-radius:99px;
  opacity:.85;
}

.nav-menu{
  display:flex;
  gap:18px;
  list-style:none;
  margin:0;
  padding:0;
  align-items:center;
}
.nav-menu a{
  color:var(--muted);
  text-decoration:none;
  font-weight:500;
  padding:10px 12px;
  border-radius:999px;
  position:relative;
  transition: transform .15s ease, background .25s ease, color .25s ease;
}
.nav-menu a:hover{
  color:var(--text);
  background: rgba(255,255,255,.06);
  transform: translateY(-1px);
}
.nav-menu a.active{
  color:var(--text);
  background: rgba(124,58,237,.16);
  border:1px solid rgba(124,58,237,.25);
}

/* Hamburger */
.hamburger{
  display:none;
  width:44px; height:44px;
  border:1px solid rgba(255,255,255,.12);
  border-radius:14px;
  cursor:pointer;
  align-items:center;
  justify-content:center;
  gap:6px;
  background: rgba(255,255,255,.04);
}
.hamburger .bar{
  width:18px; height:2px;
  background: var(--text);
  display:block;
  border-radius:99px;
  transition: transform .25s ease, opacity .25s ease;
}

/* =========================
   SECTIONS
========================= */
.section{
  padding: 88px 0;
  position:relative;
}
.section h2{
  font-size: clamp(26px, 3.2vw, 34px);
  margin:0 0 18px;
  letter-spacing:.2px;
}
.section p{
  color:var(--muted);
  line-height:1.85;
  margin: 0 0 14px;
}

/* Scroll reveal base */
.reveal{
  opacity:0;
  transform: translateY(16px);
  transition: opacity .8s ease, transform .8s ease;
}
.reveal.show{
  opacity:1;
  transform: translateY(0);
}

/* =========================
   HERO
========================= */
.hero{
  padding-top: 104px; /* space for navbar */
  padding-bottom: 74px;
}
.hero-container{
  display:grid;
  grid-template-columns: 420px 1fr;
  align-items:center;
  gap: 44px;
}

.hero-image{
  position:relative;
  border-radius: var(--radius2);
  padding: 12px;
  background:
    linear-gradient(135deg, rgba(124,58,237,.35), rgba(34,211,238,.22));
  box-shadow: var(--shadow);
  overflow:hidden;
}
.hero-image::before{
  content:"";
  position:absolute; inset:-60%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.24), transparent 52%);
  transform: rotate(25deg);
  animation: floatGlow 7s ease-in-out infinite;
}
@keyframes floatGlow{
  0%,100%{transform:translateY(0) rotate(25deg)}
  50%{transform:translateY(16px) rotate(25deg)}
}
.hero-image img{
  width:100%;
  height:auto;
  display:block;
  border-radius: calc(var(--radius2) - 10px);
  border:1px solid rgba(255,255,255,.16);
  filter: saturate(1.05) contrast(1.03);
  transform: scale(1.02);
}

.hero-content h1{
  font-size: clamp(34px, 4.2vw, 52px);
  margin:0 0 10px;
  line-height:1.1;
  letter-spacing:.3px;
}
.profession{
  display:inline-flex;
  align-items:center;
  gap:10px;
  margin: 4px 0 14px;
  padding: 8px 12px;
  border-radius:999px;
  background: rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.12);
  color: var(--text);
  font-weight:500;
}
.profession::before{
  content:"</>";
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New";
  color: rgba(34,211,238,.95);
  font-weight:700;
}

.description{
  max-width: 62ch;
}

/* Button */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  margin-top: 14px;
  padding: 12px 18px;
  border-radius: 16px;
  text-decoration:none;
  color: var(--text);
  font-weight:700;
  letter-spacing:.2px;
  background: linear-gradient(90deg, rgba(124,58,237,.95), rgba(34,211,238,.92));
  border:1px solid rgba(255,255,255,.14);
  box-shadow: 0 16px 40px rgba(124,58,237,.16);
  transition: transform .15s ease, filter .25s ease;
}
.btn:hover{
  transform: translateY(-2px);
  filter: brightness(1.05);
}

/* =========================
   SKILLS
========================= */
.skills-grid{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}
.skill-item{
  background: var(--card);
  border:1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 14px;
  box-shadow: 0 12px 30px rgba(0,0,0,.22);
  position:relative;
  overflow:hidden;
  transition: transform .18s ease, background .25s ease, border-color .25s ease;
}
.skill-item::before{
  content:"";
  position:absolute; inset:-1px;
  background: radial-gradient(500px 200px at 0% 0%, rgba(124,58,237,.22), transparent 60%),
              radial-gradient(520px 240px at 100% 0%, rgba(34,211,238,.18), transparent 60%);
  opacity:0;
  transition: opacity .25s ease;
}
.skill-item:hover{
  transform: translateY(-4px);
  background: rgba(255,255,255,.075);
  border-color: rgba(255,255,255,.22);
}
.skill-item:hover::before{opacity:1}
.skill-item i{
  font-size: 22px;
  margin-bottom: 10px;
  color: rgba(34,211,238,.95);
}
.skill-item h3{
  margin:0 0 6px;
  font-size: 16px;
}
.skill-item p{
  margin:0;
  color: var(--muted2);
  font-size: 13px;
  line-height:1.55;
}

/* =========================
   EDUCATION
========================= */
.education-list{
  display:grid;
  gap:14px;
}
.education-item{
  background: var(--card);
  border:1px solid var(--border);
  border-radius: var(--radius2);
  padding: 18px;
  box-shadow: 0 12px 30px rgba(0,0,0,.22);
}
.education-item h3{
  margin:0 0 6px;
  text-transform:capitalize;
}
.institution{color: var(--muted); margin:0 0 2px}
.year{
  margin:0 0 10px;
  display:inline-block;
  padding: 6px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
}

/* =========================
   PROJECTS
========================= */
.projects-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.project-card{
  background: var(--card);
  border:1px solid var(--border);
  border-radius: var(--radius2);
  padding: 14px;
  box-shadow: 0 14px 38px rgba(0,0,0,.26);
  overflow:hidden;
  position:relative;
  transition: transform .18s ease, border-color .25s ease, background .25s ease;
}
.project-card:hover{
  transform: translateY(-6px);
  border-color: rgba(255,255,255,.22);
  background: rgba(255,255,255,.075);
}
.project-image{
  width:100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 18px;
  border:1px solid rgba(255,255,255,.14);
  margin-bottom: 12px;
  filter: contrast(1.02) saturate(1.04);
}
.project-card h3{
  margin: 4px 0 8px;
  font-size: 16px;
  line-height:1.35;
}
details{
  border-radius: 16px;
  background: rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.1);
  padding: 10px 12px;
  margin: 10px 0 12px;
}
summary{
  cursor:pointer;
  color: var(--text);
  font-weight:600;
}
details p{
  margin:10px 0 0;
  color: var(--muted);
}

/* =========================
   GALLERY
========================= */
.gallery-grid{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}
.gallery-item{
  width:100%;
  height: 160px;
  object-fit: cover;
  border-radius: 18px;
  border:1px solid rgba(255,255,255,.14);
  box-shadow: 0 10px 26px rgba(0,0,0,.25);
  cursor:pointer;
  transition: transform .18s ease, filter .25s ease;
}
.gallery-item:hover{
  transform: translateY(-4px) scale(1.01);
  filter: brightness(1.05);
}

/* Modal */
.modal{
  display:none;
  position:fixed;
  z-index:9999;
  left:0; top:0;
  width:100%; height:100%;
  background: rgba(0,0,0,.75);
  backdrop-filter: blur(10px);
  padding: 30px;
}
.modal.open{display:flex; align-items:center; justify-content:center}
.modal-content{
  max-width:min(980px, 92vw);
  max-height: 86vh;
  border-radius: 22px;
  border:1px solid rgba(255,255,255,.16);
  box-shadow: 0 24px 70px rgba(0,0,0,.55);
}
.close{
  position:absolute;
  top:16px; right:18px;
  width:44px; height:44px;
  display:grid;
  place-items:center;
  border-radius: 16px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  color: var(--text);
  font-size: 26px;
  cursor:pointer;
}

/* =========================
   CONTACT
========================= */
.contact-info{
  background: var(--card);
  border:1px solid var(--border);
  border-radius: var(--radius2);
  padding: 18px;
  box-shadow: 0 12px 30px rgba(0,0,0,.22);
  margin-bottom: 14px;
}
.contact-info p{
  margin: 0 0 10px;
  color: var(--muted);
}

.social-media{
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
}
.social-link{
  text-decoration:none;
  color: var(--text);
  padding: 10px 14px;
  border-radius: 999px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  transition: transform .15s ease, background .25s ease, border-color .25s ease;
}
.social-link:hover{
  transform: translateY(-2px);
  background: rgba(124,58,237,.14);
  border-color: rgba(124,58,237,.28);
}

/* =========================
   FOOTER
========================= */
footer{
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 22px 0;
  color: var(--muted2);
  text-align:center;
  background: rgba(0,0,0,.10);
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 980px){
  .hero-container{grid-template-columns: 1fr; gap: 22px}
  .skills-grid{grid-template-columns: repeat(3, 1fr)}
  .projects-grid{grid-template-columns: repeat(2, 1fr)}
  .gallery-grid{grid-template-columns: repeat(3, 1fr)}
  .gallery-item{height: 150px}
}
@media (max-width: 640px){
  .skills-grid{grid-template-columns: repeat(2, 1fr)}
  .projects-grid{grid-template-columns: 1fr}
  .gallery-grid{grid-template-columns: repeat(2, 1fr)}
  .gallery-item{height: 140px}

  .hamburger{display:flex}
  .nav-menu{
    position: absolute;
    top: 70px; right: 20px;
    flex-direction: column;
    width: min(320px, calc(100% - 40px));
    padding: 12px;
    background: rgba(6,10,18,.92);
    border:1px solid rgba(255,255,255,.12);
    border-radius: 18px;
    box-shadow: 0 16px 48px rgba(0,0,0,.45);
    display:none;
  }
  .nav-menu.active{display:flex}
  .nav-menu a{width:100%}
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *{animation:none !important; transition:none !important}
}
