// src/App.jsx
import React, { useEffect, useState, useRef } from "react";

/* Use the embeddable Google Forms URL (embedded=true) so the form renders in an iframe. */
const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdKCflYl8k-UWkxHDiLg4rTV2Qz7I3IQlY6R_eUsrgidrUWQA/viewform?embedded=true";

export default function SactureLandingPictureReady() {
  const collections = [
    {
      id: "bracelet",
      title: "Bracelet",
      desc: "Handmade bracelet with embroidered motif",
      priceFrom: "From 4.50 USD",
      img: "https://i.postimg.cc/B6bKFG9Y/bracelet.png",
    },
    {
      id: "purse",
      title: "Purse",
      desc: "Small purse with traditional patterns",
      priceFrom: "From 24.90 USD",
      img: "https://i.postimg.cc/287hgGwv/purse.png",
    },
    {
      id: "tote",
      title: "Tote bag",
      desc: "Everyday tote with personalized embroidery",
      priceFrom: "From 12.90 USD",
      img: "https://i.postimg.cc/hGWJj7pK/tote.png",
    },
    {
      id: "bucket-hat",
      title: "Bucket hat",
      desc: "Hand-stitched bucket hat with cultural print",
      priceFrom: "From 14.50 USD",
      img: "https://i.postimg.cc/GtwrPkT2/bucket-hat.png",
    },
    {
      id: "handbag",
      title: "Handbag",
      desc: "Premium handbag with artisan finishing",
      priceFrom: "From 69.00 USD",
      img: "https://i.postimg.cc/0y34J9wy/hand-bag.png",
    },
    {
      id: "scarf",
      title: "Scarf",
      desc: "Silk scarf reinterpreting traditional motifs",
      priceFrom: "From 29.90 USD",
      img: "https://i.postimg.cc/4yLPk16D/scarf.png",
    },
    {
      id: "conical-hat",
      title: "Conical leaf hat",
      desc: "Decorative conical hat with hand-painting",
      priceFrom: "From 22.00 USD",
      img: "https://i.postimg.cc/J0n3qkw8/conical-hat.png",
    },
    {
      id: "stuffed",
      title: "Stuffed animal",
      desc: "Handmade plush toy inspired by local design",
      priceFrom: "From 9.50 USD",
      img: "https://i.postimg.cc/8c9vmXB6/animal.png",
    },
  ];

  const secondaryRevenue = [
    {
      id: "workshop",
      title: "Handmade Workshop",
      desc: "Hands-on group workshop led by artisans (per person)",
      price: 12.99,
      img: "https://i.postimg.cc/jdjvQCPJ/workshops.png",
    },
    {
      id: "gifting",
      title: "Gifting packages",
      desc: "Curated gifting package — premium wrapping and story card",
      price: 49.99,
      img: "https://i.postimg.cc/mkg3w6cn/giftset.png",
    },
  ];

  const artisans = [
    {
      id: "hmong",
      name: "Làng thêu H'mông",
      region: "Northern Highlands",
      incomeUp: 32,
      img: "https://i.postimg.cc/W3D0KJp3/hmong.png",
    },
    {
      id: "thai",
      name: "Thái Weavers",
      region: "Northwest",
      incomeUp: 18,
      img: "https://i.postimg.cc/vZ39ZvcH/thai.png",
    },
    {
      id: "cham",
      name: "Chăm Ceramics",
      region: "Central Coast",
      incomeUp: 24,
      img: "https://i.postimg.cc/KcBMMb1m/cham.png",
    },
  ];

  const testimonials = [
    {
      name: "Minh — Hanoi",
      text: "My personalized tote tells a story — I always get asked where I got it.",
      rating: 5,
    },
    {
      name: "Linh — HCMC",
      text: "Beautiful craftsmanship and the storytelling video made it special.",
      rating: 5,
    },
    {
      name: "Anna — Tourist",
      text: "A meaningful souvenir — stylish and authentic.",
      rating: 4,
    },
  ];

  const [active, setActive] = useState(0);
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);
  const [email, setEmail] = useState("");
  const showcaseRef = useRef(null);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % collections.length),
      6000
    );
    return () => clearInterval(t);
  }, [collections.length]);

  // close modal on ESC for better UX
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setFormOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // sparkle effect when opening modal
  useEffect(() => {
    if (!isFormOpen) return;
    const el = document.createElement("div");
    el.className = "absolute inset-0 pointer-events-none modal-sparkles";
    document.body.appendChild(el);
    const t = setTimeout(() => el.remove(), 900);
    return () => {
      clearTimeout(t);
      el.remove();
    };
  }, [isFormOpen]);

  function submitEmailDemo(e) {
    e.preventDefault();
    setFormOpen(true);
  }

  function handleTilt(e) {
    const el = showcaseRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translateZ(0) rotateX(${(-y * 6).toFixed(
      2
    )}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
  }
  function resetTilt() {
    const el = showcaseRef.current;
    if (el) el.style.transform = "";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/40 via-white to-amber-50 selection:bg-rose-100 selection:text-rose-900 font-sans antialiased text-stone-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@600;700&display=swap');
        :root{--rose:#ef476f;--amber:#ffb703;--ink:#0f1724;--muted:#6b7280}
        .fancy-title{font-family:'Playfair Display',serif}
        .ui-sans{font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial}
        .modal-sparkles::before{content:'';position:fixed;left:20%;top:10%;width:12px;height:12px;background:radial-gradient(circle,var(--rose),transparent);box-shadow:0 0 40px 16px rgba(239,71,111,0.08);border-radius:50%;animation:burst 900ms ease-out}
        @keyframes burst{0%{transform:scale(.2);opacity:0}30%{opacity:1}100%{transform:scale(12);opacity:0}}
        .btn-shimmer{background:linear-gradient(90deg,var(--rose),var(--amber));background-size:200% 100%;animation:shimmer 4s linear infinite}
        @keyframes shimmer{0%{background-position:0%}50%{background-position:100%}100%{background-position:0%}}
        .thumb-glow{box-shadow:0 10px 30px rgba(239,71,111,0.06)}
        @keyframes floatY { 0% { transform: translateY(0px) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0px) } }
        .animate-float { animation: floatY 6s ease-in-out infinite; }
        /* make header visually strong so nav is visible on any background */
        header { backdrop-filter: blur(6px); }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 border-b border-stone-200/50 shadow">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="SắcTure home"
          >
            {/* using the logo you provided */}
            <img
              src="https://i.postimg.cc/c4qw6HTC/logo.png"
              alt="SắcTure logo"
              onError={(e) => {
                e.currentTarget.src = "/logo192.png";
              }}
              className="w-10 h-10 rounded-full object-cover shadow"
            />

            <div>
              <div className="font-extrabold text-lg fancy-title">SắcTure</div>
              <div className="text-xs text-stone-500 uppercase tracking-wide">
                Personalized Heritage
              </div>
            </div>
          </a>

          {/* Navigation - visible on all screens (collapses visually on small screens) */}
          <nav className="flex items-center gap-6 md:gap-8 flex-1 justify-center">
            <a
              href="#collections"
              className="text-stone-700 hover:text-rose-600 whitespace-nowrap"
            >
              Collections
            </a>
            <a
              href="#customize"
              className="text-stone-700 hover:text-rose-600 whitespace-nowrap"
            >
              Customize
            </a>
            <a
              href="#artisans"
              className="text-stone-700 hover:text-rose-600 whitespace-nowrap"
            >
              Artisans
            </a>
            <a
              href="#impact"
              className="text-stone-700 hover:text-rose-600 whitespace-nowrap"
            >
              Impact
            </a>
            <a
              href="#services"
              className="text-stone-700 hover:text-rose-600 whitespace-nowrap"
            >
              Pricing
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFormOpen(true)}
              className="px-4 md:px-5 py-2 md:py-2 bg-stone-900 text-white rounded-full shadow"
            >
              Get Early Access
            </button>

            {/* mobile details menu as fallback if space is tight */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="list-none p-2 rounded-md border border-stone-200">
                  ☰
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-stone-100 p-2">
                  <a
                    className="block px-3 py-2 hover:bg-stone-50 rounded"
                    href="#collections"
                  >
                    Collections
                  </a>
                  <a
                    className="block px-3 py-2 hover:bg-stone-50 rounded"
                    href="#customize"
                  >
                    Customize
                  </a>
                  <a
                    className="block px-3 py-2 hover:bg-stone-50 rounded"
                    href="#artisans"
                  >
                    Artisans
                  </a>
                  <a
                    className="block px-3 py-2 hover:bg-stone-50 rounded"
                    href="#impact"
                  >
                    Impact
                  </a>
                  <a
                    className="block px-3 py-2 hover:bg-stone-50 rounded"
                    href="#services"
                  >
                    Pricing
                  </a>
                  <button
                    onClick={() => setFormOpen(true)}
                    className="w-full mt-2 px-3 py-2 bg-rose-600 text-white rounded"
                  >
                    Get Early Access
                  </button>
                </div>
              </details>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in-up ui-sans">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              Accepting Pilot Members
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.02] tracking-tight text-stone-900 fancy-title">
              Wear your story
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">
                Own a piece of Vietnam.
              </span>
            </h2>

            <p className="text-lg text-stone-600 max-w-xl leading-relaxed">
              SắcTure connects modern buyers with ethnic minority artisans
              through personalized handcrafted products and immersive
              storytelling. Choose a base product, customize a cultural pattern,
              and receive a short AI storytelling video that brings the motif to
              life.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() =>
                document
                  .getElementById("customize")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full text-stone-900 font-bold shadow-2xl hover:shadow-2xl hover:shadow-rose-300 transition-transform transform hover:-translate-y-1 btn-shimmer"
            >
              Customize now
            </button>
            <a
              href="#collections"
              className="px-8 py-4 border border-stone-200 bg-white rounded-full text-stone-700 font-semibold hover:bg-stone-50 hover:border-stone-300 transition-all"
            >
              Explore collections
            </a>
          </div>

          <div className="pt-4 grid grid-cols-3 gap-6 border-t border-stone-200">
            <StatCard title="Artisans onboarded" value="120+" />
            <StatCard title="Patterns available" value="300+" />
            <StatCard title="Avg artisan income" value="+28%" sub="(pilot)" />
          </div>

          <div className="bg-white p-2 rounded-2xl border border-stone-100 shadow-lg max-w-md">
            <form onSubmit={submitEmailDemo} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 bg-transparent w-full outline-none text-stone-800 placeholder-stone-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-stone-900 text-white rounded-xl font-medium hover:bg-rose-600 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
          <div className="text-xs text-stone-400 pl-4">
            No spam — just news, discounts and invites to workshops.
          </div>
        </div>

        {/* Showcase */}
        <div className="space-y-8 relative">
          <div className="relative group perspective">
            <svg
              className="absolute -top-8 -left-8 opacity-20 rotate-6"
              width="220"
              height="220"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lg1" x1="0" x2="1">
                  <stop offset="0" stopColor="#fff1f2" />
                  <stop offset="1" stopColor="#fff8ec" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="50" fill="url(#lg1)" />
            </svg>

            <div
              ref={showcaseRef}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white ring-1 ring-black/5 transition-transform duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(800px 300px at 10% 20%, rgba(253,230,238,0.7), rgba(255,249,230,0.45))",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />
              <div
                className="relative z-10 p-12 flex items-center justify-center"
                style={{ height: 520 }}
              >
                <img
                  src={collections[active].img}
                  alt={collections[active].title}
                  className="max-h-full max-w-full object-contain animate-float"
                  style={{ transition: "transform 700ms ease" }}
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/50 z-20">
                <div className="flex justify-between items-start">
                  <div>
                    <div
                      className="text-xs font-bold"
                      style={{ color: "var(--rose)" }}
                    >
                      Featured Collection
                    </div>
                    <div className="font-bold text-2xl text-stone-900">
                      {collections[active].title}
                    </div>
                    <div className="text-sm text-stone-600 mt-1 line-clamp-2">
                      {collections[active].desc}
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0 ml-4">
                    <button
                      onClick={() =>
                        setActive(
                          (p) =>
                            (p - 1 + collections.length) % collections.length
                        )
                      }
                      className="w-10 h-10 flex items-center justify-center bg-stone-100 hover:bg-rose-100 hover:text-rose-600 rounded-full transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() =>
                        setActive((p) => (p + 1) % collections.length)
                      }
                      className="w-10 h-10 flex items-center justify-center bg-stone-100 hover:bg-rose-100 hover:text-rose-600 rounded-full transition-colors"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {collections.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`relative rounded-3xl overflow-hidden aspect-square transition-all duration-300 ${
                  active === i
                    ? "ring-2 ring-rose-500 ring-offset-2 scale-105 opacity-100 shadow-lg thumb-glow"
                    : "opacity-70 hover:opacity-100 scale-95 hover:scale-100"
                }`}
                aria-label={`Show ${c.title}`}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div
            id="customize"
            className="bg-white rounded-2xl p-6 shadow-xl border border-stone-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="font-bold text-stone-800">
                Quick Customizer (demo)
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Material
                </span>
                <select className="px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all">
                  <option>Cotton</option>
                  <option>Leather</option>
                  <option>Brocade</option>
                  <option>Silk</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Pattern
                </span>
                <select className="px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all">
                  <option>H'mông motif</option>
                  <option>Thái weave</option>
                  <option>Chăm swirl</option>
                  <option>Modern reinterpretation</option>
                </select>
              </label>
            </div>

            <div className="mt-4 p-4 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between gap-4">
              <div className="font-mono text-xl tracking-widest text-stone-400">
                ST
              </div>
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <div className="px-3 py-1 bg-white border border-stone-200 rounded text-xs font-medium text-stone-600 shadow-sm">
                  Cotton
                </div>
                <div className="px-3 py-1 bg-amber-50 border border-amber-100 rounded text-xs font-medium text-amber-800 shadow-sm">
                  H'mông motif
                </div>
                <div className="px-3 py-1 bg-white border border-stone-200 rounded text-xs font-medium text-stone-600 shadow-sm">
                  ST
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setSelectedCollection(collections[active]);
                  setFormOpen(true);
                }}
                className="flex-1 px-4 py-3 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-colors shadow-lg"
              >
                Request sample
              </button>
              <button className="px-6 py-3 border border-stone-200 text-stone-600 rounded-xl font-medium hover:bg-stone-50 transition-colors">
                Save design
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Collections */}
      <section
        id="collections"
        className="py-20 bg-gradient-to-b from-stone-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight fancy-title">
              Curated Collections
            </h3>
            <p className="text-stone-600 mt-4 text-lg">
              Handcrafted collections created with artisan partners. Personalize
              patterns, materials and get the storytelling video as an add-on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((c) => (
              <div
                key={c.id}
                className="group bg-white rounded-2xl p-3 border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="overflow-hidden rounded-xl h-56 relative">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold shadow-sm z-20">
                    {c.priceFrom}
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h4 className="font-bold text-lg text-stone-900">
                    {c.title}
                  </h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed mb-4 flex-grow">
                    {c.desc}
                  </p>
                  <div className="flex gap-2 pt-4 mt-auto border-t border-stone-50">
                    <button
                      onClick={() => {
                        setSelectedCollection(c);
                        setFormOpen(true);
                      }}
                      className="flex-1 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-rose-600 transition-colors"
                    >
                      Customize
                    </button>
                    <button className="px-4 py-2 border border-stone-200 text-stone-600 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisans */}
      <section id="artisans" className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                Our Partners
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6">
                Meet the hands behind the craft
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                We partner with village co-operatives across Vietnam to
                co-design patterns and guarantee fair pay. Meet a few of our
                partners below.
              </p>

              <div className="space-y-4">
                {artisans.map((a) => (
                  <div
                    key={a.id}
                    className="group bg-white rounded-2xl p-4 border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-5"
                  >
                    <img
                      src={a.img}
                      alt={a.name}
                      className="w-20 h-20 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-grow">
                      <div className="font-bold text-lg text-stone-900">
                        {a.name}
                      </div>
                      <div className="text-sm text-stone-500 mt-1 flex items-center gap-2">
                        <span>{a.region}</span>
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        <span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">
                          Income +{a.incomeUp}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => setFormOpen(true)}
                        className="px-4 py-2 border border-stone-200 rounded-lg text-sm font-medium text-stone-600 hover:border-rose-200 hover:text-rose-600 hover:bg-rose-50 transition-all"
                      >
                        Support
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl rotate-3 opacity-20 blur-xl"
                style={{ background: "linear-gradient(90deg,#ffe8cf,#fff1f4)" }}
              />
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-stone-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-stone-400 uppercase tracking-wide">
                    Partner Map
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                </div>
                <img
                  alt="map"
                  src="https://vntravel.org.vn/uploads/images/2024/05/29/444484438-1020338109458577-495158332752044933-n-1716954195.jpg"
                  className="h-80 w-full object-cover rounded-xl filter sepia-[0.2]"
                />
                <div className="mt-6 flex gap-2 flex-wrap">
                  {artisans.map((a) => (
                    <button
                      key={`${a.id}-btn`}
                      onClick={() => setFormOpen(true)}
                      className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50 text-stone-600 text-sm font-medium hover:bg-white hover:shadow-md transition-all"
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Pricing (with your provided images) */}
      <section
        id="services"
        className="py-16 bg-gradient-to-b from-white to-amber-50"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-stone-900 fancy-title">
              Workshops & Gifting
            </h3>
            <p className="text-stone-600 mt-2">
              Experience our hands-on workshops or choose a curated gifting
              package — designed to delight and support artisans.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
            <div className="grid grid-cols-12">
              <div className="col-span-8 md:col-span-9 p-6 border-r border-stone-100 bg-amber-50/30">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow">
                    <img
                      src={secondaryRevenue[0].img}
                      alt="Handmade Workshop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-stone-900">
                      Handmade Workshop
                    </div>
                    <div className="text-sm text-stone-600 mt-1">
                      Join a hands-on session led by our artisan partners.
                      Perfect for groups and learners — materials included.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 p-6 bg-white flex items-center justify-end">
                <div className="text-right">
                  <div className="text-sm text-stone-500">Starting at</div>
                  <div className="font-bold text-2xl text-rose-600">
                    ${secondaryRevenue[0].price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 border-t border-stone-100">
              <div className="col-span-8 md:col-span-9 p-6 bg-amber-50/20">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow">
                    <img
                      src={secondaryRevenue[1].img}
                      alt="Gifting packages"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-stone-900">
                      Gifting packages
                    </div>
                    <div className="text-sm text-stone-600 mt-1">
                      Curated packages with premium wrapping and a storytelling
                      card — ideal for special occasions.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 p-6 bg-white flex items-center justify-end">
                <div className="text-right">
                  <div className="text-sm text-stone-500">Starting at</div>
                  <div className="font-bold text-2xl text-rose-600">
                    ${secondaryRevenue[1].price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-stone-100 bg-white flex justify-end">
              <button
                onClick={() => setFormOpen(true)}
                className="px-6 py-3 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-colors"
              >
                Request booking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://baotuyenquang.com.vn/media/images/2023/03/img_20230323091006.jpg"
                alt="Artisan impact"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Our Impact
                  </h3>
                  <p className="text-stone-400 mt-2 max-w-xl">
                    We measure success through meaningful artisan income growth,
                    cultural preservation and sustainable craft practices.
                  </p>
                </div>
                <button
                  onClick={() => setFormOpen(true)}
                  className="text-rose-400 font-medium hover:text-white transition-colors flex items-center gap-2"
                >
                  Read full report <span>→</span>
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <ImpactCard title="Artisan income growth" value="+28%" />
                <ImpactCard title="Patterns archived" value="300+" />
                <ImpactCard title="Workshops run" value="50+" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-stone-900 mb-12 fancy-title">
            What people say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={`test-${i}`}
                className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 flex flex-col"
              >
                <div className="text-rose-500 text-4xl font-serif leading-none mb-4 opacity-30">
                  "
                </div>
                <div className="text-stone-700 italic leading-relaxed mb-6 flex-grow">
                  {t.text}
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-stone-50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center font-bold text-stone-600 text-sm">
                    {t.name.split(" ")[0][0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-stone-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-amber-500 tracking-widest">
                      {Array.from({ length: t.rating })
                        .map(() => "★")
                        .join("")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-rose-500 to-amber-500" />
              <div className="font-extrabold text-xl text-stone-900 tracking-tight fancy-title">
                SắcTure
              </div>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Personalized handcrafted pieces that bring Vietnamese culture to
              life. We partner directly with artisans to ensure fair pay and
              cultural preservation.
            </p>
            <div className="text-xs font-semibold text-stone-400 pt-2">
              {"© " + new Date().getFullYear() + " SắcTure"}
            </div>
          </div>

          <div>
            <div className="font-bold text-stone-900 mb-4">Quick links</div>
            <ul className="text-sm text-stone-600 space-y-3">
              {["Collections", "Customize", "Our Artisans", "Services"].map(
                (l) => (
                  <li
                    key={l}
                    className="hover:text-rose-600 cursor-pointer transition-colors"
                  >
                    {l}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div className="font-bold text-stone-900 mb-4">
              Join our community
            </div>
            <p className="text-sm text-stone-500 mb-4">
              Get early access, discounts and invites to workshops.
            </p>
            <div className="flex gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="px-4 py-2 border border-stone-200 rounded-lg w-full bg-white text-stone-800 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
              />
              <button
                onClick={() => alert("Thanks — added to early access list!")}
                className="px-5 py-2 bg-stone-900 text-white rounded-lg hover:bg-rose-600 transition-colors font-medium shadow-lg"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-stone-900/75 backdrop-blur-sm transition-opacity"
            onClick={() => setFormOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Join Early Access"
            className="w-full max-w-4xl bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 animate-fade-in-up max-h-[90vh] overflow-auto flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-stone-900">
                  Join Early Access
                </h4>
                <p className="text-stone-600 mt-1">
                  Fill the short form to join our pilot program and request
                  samples for <strong>{selectedCollection?.title}</strong>.
                </p>
              </div>
              <button
                onClick={() => setFormOpen(false)}
                className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 hover:bg-rose-100 hover:text-rose-600 flex items-center justify-center transition-colors font-bold text-xl"
                aria-label="close"
              >
                ✕
              </button>
            </div>

            <div className="flex-grow rounded-2xl overflow-hidden border border-stone-200 bg-stone-50">
              <div
                className="form-embed-wrap"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "100%",
                  height: 0,
                }}
              >
                <iframe
                  src={FORM_EMBED_URL}
                  title="SắcTure early access form"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setFormOpen(false)}
                className="px-6 py-2.5 border border-stone-200 rounded-xl text-stone-600 font-medium hover:bg-stone-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Helper components ---------------- */
function StatCard({ title, value, sub }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-stone-100 shadow-sm flex flex-col">
      <div className="text-xs text-stone-500 font-medium uppercase tracking-wide">
        {title}
      </div>
      <div className="font-extrabold text-3xl mt-1 text-stone-900">{value}</div>
      {sub && <div className="text-sm text-stone-400 font-medium">{sub}</div>}
    </div>
  );
}

function ImpactCard({ title, value }) {
  return (
    <div className="bg-stone-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-stone-800 transition-colors">
      <div className="text-sm text-stone-400 font-medium uppercase tracking-wider">
        {title}
      </div>
      <div className="font-bold text-4xl mt-3 text-rose-300">{value}</div>
    </div>
  );
}
