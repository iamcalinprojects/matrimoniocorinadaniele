import { useEffect } from "react";
import heroImage from "./assets/IMG_3658.jpg";
import backgroundImg from "./assets/Backgroundmatrimonio.png";
import bgMatrimonio from "./assets/Backgroundmatrimonio.png";
import bgilnostro from "./assets/bgIlnostro.png";
import laNostraGiornata from "./assets/bgImgLaNostraGiornata.png";
import chiesaimg from "./assets/chiesaimg.png";
import ricevimentoimg from "./assets/ricevimentoimg.png";
import bgUpNostraGiornata from "./assets/bgUpNostraGiornata.png";
import bglanostragiornata from "./assets/bglanostragiornata.png";
import monaster from "./assets/monaster.png";
import youngjap from "./assets/youngjap.png";
import bgiban from "./assets/bgiban2.png";
import mainimage from "./assets/bgMainMobile.png";
import inostriricordiimg from "./assets/inostriricordiimg.png";
import brittanyFont from "./assets/Brittany.ttf";
import BottomNav from "./BottomNav";
const Stich = () => {
  useEffect(() => {
    document.documentElement.classList.add("light");

    const symbolsLink = document.createElement("link");
    symbolsLink.rel = "stylesheet";
    symbolsLink.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";

    const configScript = document.createElement("script");
    configScript.id = "tailwind-config-stich";
    configScript.text = `
      window.tailwind = window.tailwind || {};
      window.tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "secondary-container": "#e5dcf1",
              "inverse-primary": "#ccbefa",
              "surface-container-highest": "#e8e1e4",
              "surface-variant": "#e8e1e4",
              "primary-fixed-dim": "#ccbefa",
              "on-error": "#ffffff",
              "tertiary-container": "#71766e",
              "surface-container-lowest": "#ffffff",
              "outline-variant": "#cac4d0",
              "primary-container": "#796da3",
              "surface-container": "#f3ecef",
              "primary": "#605488",
              "on-secondary-fixed": "#1e1928",
              "tertiary-fixed-dim": "#c3c8be",
              "on-tertiary-container": "#f9fef4",
              "surface-bright": "#fff7fa",
              "surface": "#fff7fa",
              "on-tertiary-fixed-variant": "#434841",
              "secondary-fixed": "#e8dff4",
              "surface-dim": "#dfd8db",
              "on-secondary": "#ffffff",
              "on-background": "#1d1b1d",
              "on-secondary-fixed-variant": "#4a4455",
              "on-surface-variant": "#48454f",
              "tertiary-fixed": "#dfe4da",
              "inverse-surface": "#332f32",
              "secondary": "#625b6d",
              "on-surface": "#1d1b1d",
              "error-container": "#ffdad6",
              "on-primary-container": "#fffbff",
              "outline": "#79757f",
              "on-tertiary-fixed": "#181d17",
              "surface-tint": "#62578b",
              "surface-container-low": "#f9f2f5",
              "error": "#ba1a1a",
              "inverse-on-surface": "#f6eff2",
              "on-primary-fixed-variant": "#4a3f71",
              "tertiary": "#585d56",
              "background": "#fff7fa",
              "surface-container-high": "#ede6e9",
              "primary-fixed": "#e7deff",
              "on-error-container": "#93000a",
              "on-primary-fixed": "#1e1243",
              "on-primary": "#ffffff",
              "on-secondary-container": "#666072",
              "on-tertiary": "#ffffff",
              "secondary-fixed-dim": "#ccc3d8"
            },
            fontFamily: {
              "headline-lg": ["Quattrocento", "serif"],
              "headline-md": ["Quattrocento", "serif"],
              "body-md": ["Sorts Mill Goudy", "serif"],
              "body-lg": ["Sorts Mill Goudy", "serif"],
              "label-md": ["Sorts Mill Goudy", "serif"],
              "display-lg": ["Quattrocento", "serif"]
            },
            fontSize: {
              "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "0em", fontWeight: "700" }],
              "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
              "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
              "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
              "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "600" }],
              "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }]
            }
          }
        }
      };
    `;

    const tailwindScript = document.createElement("script");
    tailwindScript.src =
      "https://cdn.tailwindcss.com?plugins=forms,container-queries";

    const styleTag = document.createElement("style");
    styleTag.id = "stich-inline-styles";
    styleTag.textContent = `
      @font-face {
        font-family: 'Brittany';
        src: url('${brittanyFont}') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .ambient-glow {
        box-shadow: 0 20px 50px -12px rgba(139, 127, 182, 0.15);
      }
    `;

    document.head.appendChild(symbolsLink);
    document.head.appendChild(configScript);
    document.head.appendChild(tailwindScript);
    document.head.appendChild(styleTag);

    return () => {
      symbolsLink.remove();
      configScript.remove();
      tailwindScript.remove();
      styleTag.remove();
    };
  }, []);

  return (
    <div className='bg-background text-on-background font-body-md overflow-x-hidden'>
      <nav className='fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-800/50 shadow-sm shadow-[#8b7fb6]/5 flex justify-between items-center px-6 py-4 md:px-12'>
        <div className='text-2xl font-serif italic text-[#8b7fb6] dark:text-[#a79ccb] font-headline-lg'>
          Corina &amp; Daniele
        </div>
        <div className='hidden md:flex gap-8 items-center'>
          <a
            className='text-stone-500 dark:text-stone-400 font-medium hover:text-[#8b7fb6] transition-colors font-label-md tracking-widest uppercase'
            href='#story'
          >
            La Nostra Storia
          </a>
          <a
            className='text-stone-500 dark:text-stone-400 font-medium hover:text-[#8b7fb6] transition-colors font-label-md tracking-widest uppercase'
            href='#locations'
          >
            Luoghi
          </a>
          <a
            className='text-stone-500 dark:text-stone-400 font-medium hover:text-[#8b7fb6] transition-colors font-label-md tracking-widest uppercase'
            href='#gallery'
          >
            Galleria
          </a>
          <a
            className='text-stone-500 dark:text-stone-400 font-medium hover:text-[#8b7fb6] transition-colors font-label-md tracking-widest uppercase'
            href='#honeymoon'
          >
            Luna di Miele
          </a>
          <button className='bg-primary text-on-primary px-8 py-2 rounded-full font-label-md tracking-widest uppercase hover:opacity-90 transition-all'>
            RSVP
          </button>
        </div>
        <button className='md:hidden text-primary'>
          <span className='material-symbols-outlined'>menu</span>
        </button>
      </nav>

      <header className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            className='w-full h-full object-cover  brightness-[0.85]'
            alt='Romantic couple in a Mediterranean garden at dusk.'
            src={mainimage}
            // src='https://lh3.googleusercontent.com/aida-public/AB6AXuBmdbMx4ByWL8ifDmTA7Ag0ZuPSzVdyYCaumMgwfoO6jp15Jx7L4YzZZRBNfEQwslfxbsckCnJPYp4m3ZLTgyxtQ6NP2YqQ642sxZeGwE1YooN95DHJSb2t_FcMVViHr4Lol08cTndHQZPTea2PBk1FlX2yF4Md019EHbhl74DHFjg0Kyz36lvccFf-UOUvVhCIg_P_2aIUUJyyS_TQLD3CsIiufF2NkDm-mzUUdtO8pblnxGcmJE4nuu64A8SscnNgAOPNYWBg9Q'
          />
        </div>
        <div className='relative z-10 text-center text-white px-4 mt-60'>
          <h1
            className='
            pt-[0.5em]
            pb-[0.5em]
          font-["Brittany"] text-[#faf1e1]
          text-6xl md:text-6xl xs:text-6xl xm:text-6xl mb-0 '
          >
            Corina &amp; Daniele
          </h1>
          <div className='w-12 h-[1px] bg-white/50 mx-auto mb-5'></div>
          {/* <p className='font-label-md tracking-[0.3em] uppercase mb-5 opacity-90'>
            Insieme alle loro famiglie
          </p> */}
          <p className='font-headline-md text-2xl md:text-3xl tracking-widest text-[#faf1e1]'>
            05 LUGLIO 2026
          </p>
          {/* <p className='font-label-md tracking-widest mt-4'>
            FROSSASCO, ITALIA
          </p> */}
        </div>
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
          <span className='material-symbols-outlined text-white font-thin'>
            expand_more
          </span>
        </div>
      </header>
      <section
        className='py-[120px] bg-surface-container-low bg-cover bg-center bg-no-repeat'
        id='locations'
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className='max-w-[1200px] mx-auto px-6'>
          <div className='text-center mb-40'>
            <h2
              className='font-headline-lg text-2xl mb-4 '
              style={{ color: "#2d2b25" }}
            >
              IL NOSTRO PER
              <br />
              SEMPRE INIZIA QUI
            </h2>
          </div>
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='mb-20 bg-white p-6 ambient-glow relative group hover:-translate-y-2 transition-transform duration-500'>
              <div className='absolute -top-20 -right-5 p-1 text-primary/10 group-hover:text-primary/20 transition-colors'>
                <img
                  src={chiesaimg}
                  style={{
                    width: "35%",
                    marginLeft: "auto",
                    marginTop: "-5%",
                    display: "block",
                  }}
                />
              </div>
              <span className='font-label-md text-xl tracking-widest uppercase mb-6 block'>
                Cerimonia
              </span>
              <h3 className='font-headline-md mb-4 text-xl uppercase'>
                Chiesa di San Donato
              </h3>
              <p className='text-on-surface-variant font-body-lg mb-8'>
                Unitevi a noi sotto il cielo aperto dell&apos;abbazia del XIII
                secolo per un emozionante scambio di promesse.
              </p>
              <div className='space-y-4 border-t border-stone-100 pt-8'>
                <div className='flex items-start gap-4'>
                  <span className='material-symbols-outlined text-primary'>
                    schedule
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      CERIMONIA ALLE 15:00
                    </p>
                    <p className='text-sm text-stone-400'>
                      Vi consigliamo di arrivare alle 14:30
                    </p>
                  </div>
                </div>
                <div
                  className='flex items-start gap-4'
                  onClick={() => {
                    window.open(
                      "https://maps.app.goo.gl/dkndn4ihzd6S4Ysp8?g_st=aw",
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span className='material-symbols-outlined text-primary'>
                    location_on
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      FROSSASCO, TO
                    </p>
                    <p className='text-sm text-stone-400'>
                      Via Famiglia Falconet, 46, 10060 Frossasco TO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white p-12 ambient-glow relative group hover:-translate-y-2 transition-transform duration-500'>
              <div className='absolute -top-20 -right-6 p-1 text-primary/10 group-hover:text-primary/20 transition-colors'>
                <img
                  src={ricevimentoimg}
                  style={{
                    width: "35%",
                    marginLeft: "auto",
                    display: "block",
                  }}
                />
              </div>
              <span className='font-label-md text-primary tracking-widest uppercase mb-6 block'>
                Ricevimento
              </span>
              <h3 className='font-headline-md mb-4 text-xl uppercase'>
                LA LAURENTIA
              </h3>
              <p className='text-on-surface-variant font-body-lg mb-8'>
                Una serata di ottima cucina, balli e festeggiamenti tra i
                giardini e la luce delle candele.
              </p>
              <div className='space-y-4 border-t border-stone-100 pt-8'>
                <div className='flex items-start gap-4'>
                  <span className='material-symbols-outlined text-primary'>
                    schedule
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      APERITIVO ALLE 17:00
                    </p>
                    <p className='text-sm text-stone-400'>
                      Cena e balli a seguire fino a notte fonda
                    </p>
                  </div>
                </div>
                <div
                  className='flex items-start gap-4'
                  onClick={() => {
                    window.open(
                      "https://maps.app.goo.gl/NMm1CbqQn6FHUHfD8?g_st=aw",
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span className='material-symbols-outlined text-primary'>
                    location_on
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>BABANO, TO</p>
                    <p className='text-sm text-stone-400'>
                      Via Gerbidi, 36, 10061 Babano TO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className='w-full h-24'
        style={{
          backgroundImage: `url(${bgUpNostraGiornata})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <section
        className={`pt-[5px] mx-auto relative 
        `}
        style={{ backgroundColor: "#fafafa" }}
        id='locations'
      >
        <div className='max-w-[1200px] '>
          <div className='text-center mb-0'>
            <h2
              className='font-headline-lg text-2xl mb-4 '
              style={{ color: "#2d2b25" }}
            >
              LA NOSTRA GIORNATA
            </h2>
            {/* <p className='font-label-md tracking-widest text-primary uppercase'>
              Dettagli &amp; Indicazioni
            </p> */}
          </div>
          <div className=' w-full flex justify-center items-center'>
            <img src={laNostraGiornata}></img>
            {/* <div className='bg-white p-12 ambient-glow relative group hover:-translate-y-2 transition-transform duration-500'>
              <div className='absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors'>
                <span
                  className='material-symbols-outlined text-6xl'
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  church
                </span>
              </div>
              <span className='font-label-md text-primary tracking-widest uppercase mb-6 block'>
                Cerimonia
              </span>
              <h3 className='font-headline-md mb-4'>Chiesa di San Donato</h3>
              <p className='text-on-surface-variant font-body-lg mb-8'>
                Unitevi a noi sotto il cielo aperto dell&apos;abbazia del XIII
                secolo per un emozionante scambio di promesse.
              </p>
              <div className='space-y-4 border-t border-stone-100 pt-8'>
                <div className='flex items-start gap-4'>
                  <span className='material-symbols-outlined text-primary'>
                    schedule
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      ARRIVO ALLE 16:00
                    </p>
                    <p className='text-sm text-stone-400'>
                      La cerimonia inizia puntualmente alle 16:30
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <span className='material-symbols-outlined text-primary'>
                    location_on
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      FROSSASCO, TO
                    </p>
                    <p className='text-sm text-stone-400'>
                      Strada Provinciale 73 bis, 53012 Chiusdino SI
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className='bg-white p-12 ambient-glow relative group hover:-translate-y-2 transition-transform duration-500'>
              <div className='absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors'>
                <span
                  className='material-symbols-outlined text-6xl'
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  restaurant
                </span>
              </div>
              <span className='font-label-md text-primary tracking-widest uppercase mb-6 block'>
                Ricevimento
              </span>
              <h3 className='font-headline-md mb-4'>Borgo Santo Pietro</h3>
              <p className='text-on-surface-variant font-body-lg mb-8'>
                Una serata di ottima cucina toscana, balli e festeggiamenti tra
                i giardini e la luce delle candele.
              </p>
              <div className='space-y-4 border-t border-stone-100 pt-8'>
                <div className='flex items-start gap-4'>
                  <span className='material-symbols-outlined text-primary'>
                    schedule
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      APERITIVO ALLE 18:30
                    </p>
                    <p className='text-sm text-stone-400'>
                      Cena e balli a seguire fino a notte fonda
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <span className='material-symbols-outlined text-primary'>
                    location_on
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      LOC. PALAZZETTO, SIENA
                    </p>
                    <p className='text-sm text-stone-400'>
                      110, 53012 Chiusdino SI, Italy
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section
        className='py-[120px] bg-surface-container-low bg-cover bg-center bg-no-repeat'
        id='locations'
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className='max-w-[1200px] mx-auto px-6'>
          <div className='grid md:grid-cols-1 gap-12'>
            <div className='justify-center bg-white p-6 pt-10 ambient-glow relative group hover:-translate-y-1 transition-transform duration-500'>
              <div className='text-center mb-16 mx-auto'>
                <h2
                  className='font-headline-lg text-2xl mb-4 '
                  style={{ color: "#2d2b25" }}
                >
                  I VOSTRI RICORDI DEL NOSTRO GIORNO
                </h2>
              </div>

              <p className='text-on-surface-variant  font-body-lg mb-8'>
                Aiutateci a raccogliere tutti i momenti più belli del matrimonio
                caricando qui le vostre foto e video.
              </p>

              <div className=' flex justify-center bg-cover bg-center bg-no-repeat'>
                <img
                  src={inostriricordiimg}
                  style={{
                    width: "60%",
                    height: "auto",
                  }}
                ></img>
              </div>

              <button
                className='bg-primary text-on-primary px-8 py-2 rounded font-label-md tracking-widest uppercase hover:opacity-90 transition-all mt-6 mb-12 uppercase block mx-auto
                gradient-to-b from-primary to-white bg-size-200 bg-pos-0 hover:bg-pos-100'
                onClick={() => {}}
              >
                carica file
              </button>
            </div>
            {/* 
            <div className='bg-white p-12 ambient-glow relative group hover:-translate-y-2 transition-transform duration-500'>
              <div className='absolute -top-20 -right-6 p-1 text-primary/10 group-hover:text-primary/20 transition-colors'>
                <img
                  src={ricevimentoimg}
                  style={{
                    width: "35%",
                    marginLeft: "auto",
                    display: "block",
                  }}
                />
              </div>
              <span className='font-label-md text-primary tracking-widest uppercase mb-6 block'>
                Ricevimento
              </span>
              <h3 className='font-headline-md mb-4'>Babano, Città di Torino</h3>
              <p className='text-on-surface-variant font-body-lg mb-8'>
                Una serata di ottima cucina toscana, balli e festeggiamenti tra
                i giardini e la luce delle candele.
              </p>
              <div className='space-y-4 border-t border-stone-100 pt-8'>
                <div className='flex items-start gap-4'>
                  <span className='material-symbols-outlined text-primary'>
                    schedule
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      APERITIVO ALLE 17:00
                    </p>
                    <p className='text-sm text-stone-400'>
                      Cena e balli a seguire fino a notte fonda
                    </p>
                  </div>
                </div>
                <div
                  className='flex items-start gap-4'
                  onClick={() => {
                    window.open(
                      "https://maps.app.goo.gl/NMm1CbqQn6FHUHfD8?g_st=aw",
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span className='material-symbols-outlined text-primary'>
                    location_on
                  </span>
                  <div>
                    <p className='font-label-md text-on-surface'>
                      LA LAURENTIA HORSE HOUSE
                    </p>
                    <p className='text-sm text-stone-400'>
                      Via Gerbidi, 36, 10061 Babano TO
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section
        className='pt-[0px] bg-surface-container-low bg-cover bg-center bg-no-repeat'
        id='locations'
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className='max-w-[1200px] mx-auto px-6'>
          <div className='grid md:grid-cols-1 gap-12'>
            <div className='justify-center bg-white p-6 ambient-glow relative group hover:-translate-y-1 transition-transform duration-500'>
              <div className='text-center mb-12 mx-auto'>
                <h2
                  className='font-headline-lg text-2xl mb-0 pt-8 '
                  style={{ color: "#2d2b25" }}
                >
                  VIAGGIO DI NOZZE
                </h2>
              </div>
              <img
                className='-mt-10'
                src={monaster}
                style={{
                  width: "100%",
                  // height: "auto",
                }}
              ></img>
              <p className='text-on-surface-variant  font-body-lg mb-8'>
                Il nostro viaggio insieme è iniziato tra la passione comune per
                l'Oriente: tra anime, templi e ciliegi in fiore, è stato proprio
                questo mondo a farci conoscere e sognare fin dal primo giorno.
              </p>
              <p className='text-on-surface-variant font-body-lg mb-8'>
                Per l'inizio della nostra vita da marito e moglie, il nostro
                desiderio più grande è quello di visitare finalmente insieme il
                Giappone!
              </p>
              <p className='text-on-surface-variant font-body-lg mb-8'>
                Se desiderate farci un regalo aiutateci a realizzare questo
                sogno!
              </p>
              <div
                className='bg-cover bg-center bg-no-repeat'
                style={{
                  backgroundImage: `url(${bgiban})`,
                  backgroundSize: "100%",
                }}
              >
                <div>
                  <div className=' text-xs  space-y-4 pt-8 justify-center flex'>
                    IBAN
                  </div>
                  <div className='text-sm font-serif  space-y-4  pt-3 justify-center flex'>
                    IT84Z0306945955100000000571
                  </div>
                </div>

                <div className='space-y-2  pt-4 pb-8 justify-center flex text-xs'>
                  Corina Anghelus
                </div>
              </div>

              <p className='text-on-surface-variant font-body-lg mb-8'>
                Grazie di cuore per voler far parte di questa nostra prima,
                incredibile avventura!
              </p>
              <div className=' flex justify-center'>
                <img
                  src={youngjap}
                  style={{
                    width: "40%",
                    height: "auto",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='py-[120px] px-6 max-w-[1200px] mx-auto relative bg-cover bg-center bg-no-repeat'
        id='story'
        style={{ backgroundImage: `url(${bgilnostro})` }}
      >
        <div className='grid md:grid-cols-12 gap-12 items-center'>
          <div className='md:col-span-5 relative'>
            <div className='absolute -inset-4 border border-tertiary/20 translate-x-4 translate-y-4 -z-10'></div>
            {/* <img
              className='w-full aspect-[4/5] object-cover ambient-glow'
              alt='Black and white couple portrait in a European street.'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuAu3-aFOYwPp3yAnVKfQJrlPLtP4vfzjPYu9X5YX0fVtHmR6bBw7VhMpe5kqu-GBS04BqlnIWqEA8xbwdvhLPeteSqmZ2I9-QnmXjbs-7C8tbrWNa1fF6T5StWdUTpTuE7GS5mF-MbhLvUF-oLDeaUP7yeBtwrqmuncL8sdRmh1-Z5syJtGhhAMABpNxjLm97GG7hqqsWyLxM1BqD0LNfduMlE-PlMoYtXH2WPganjnt0SsGIVFHU2ftGDjsD1DxD7HyLwZ_1hPfg'
            /> */}
          </div>
          <div className='md:col-span-7 md:pl-12'>
            <span className='font-label-md text-primary tracking-widest uppercase block mb-4'>
              {/* Il Viaggio */}
            </span>
            <h2
              className='font-headline-lg text-5xl mb-8 italic'
              style={{ color: "#2d2b25" }}
            >
              La Nostra Storia
            </h2>
            <div className='space-y-6 text-on-surface-variant leading-relaxed font-body-lg'>
              <p>
                Tutto è iniziato per caso, in un pomeriggio di pioggia, quando
                un ombrello condiviso ha dato vita a una conversazione che
                nessuno dei due voleva interrompere. Da quel primo caffè alle
                passeggiate al tramonto in giro per il mondo, il nostro viaggio
                è stato segnato dalle risate condivise e da una complicità
                autentica.
              </p>
              <p>
                Negli anni abbiamo costruito una vita fondata sulla curiosità,
                sulla gentilezza e sul profondo rispetto reciproco. Daniele ha
                chiesto la mano di Corina in una mattina tranquilla sulla
                Costiera Amalfitana, avvolti dal profumo dei limoni e dal dolce
                ritmo del Mediterraneo.
              </p>
              <p>
                Ora vi invitiamo a condividere con noi la nostra più grande
                avventura, nel cuore della campagna toscana, dove la nostra
                storia trova finalmente la sua casa.
              </p>
            </div>
            <div className='mt-10'>
              <img
                className='w-32 opacity-20'
                alt='Lavender botanical illustration.'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuB6IKvbp9vztBpr7Z3g9Oqv9-IIGf_4IxxBor8OLvWEA2Kbqc78_cbJbX93DHMxodeoPnigqyXwuZ695k0hk6EN0_vuOPCRuIb3gUj5G7t7OmSbo4G0BhKNwV7W2va-ZQdQ-wWmY9TUnPChWc4I3ieeFwHaftPL4jigr7I09nEu2_VF22AZjvYxL8qKY6Ei4eP3HYcAHdp0fe8RFtFq8fL6BWozDApJb3dVssUnCGjBlCBogM5GfW7qoK3RWKe9mI19GAltWiZmIw'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='py-[120px] px-6' id='gallery'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex justify-between items-end mb-16'>
            <div>
              <span className='font-label-md text-primary tracking-widest uppercase block mb-4'>
                {/* Momenti Catturati */}
              </span>
              <h2
                className='font-headline-lg text-4xl '
                style={{ color: "#2d2b25" }}
              >
                {/* La Nostra Galleria */}
              </h2>
            </div>
            <p className='hidden md:block font-body-md text-stone-400 max-w-xs italic text-right'>
              Una raccolta di ricordi in attesa del grande giorno.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
            <div className='md:col-span-8 relative group overflow-hidden bg-stone-100'>
              <img
                className='w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105'
                alt='Couple overlooking Tuscany at sunrise.'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuB7BNqtyl3KJjlEt0dvi8HefUm1GnXH6wTkShOMSxLRI7SP6F0yIH262MW1XAK9O-3zuH2LDsuBeqIw4IHC9n-tSxpTGMmsyFmnOtxZmT7dUjyQUOziedm4IMBwJ_82vuIfvDZRYVoXac2rkboN3mtdqYtYtcbI7Z4_buQdDBoQrIVUsSs-Yhrhb7bJmzzW2xbDIQPKjiUaOflFpUocOxSWZW67oDHyZpgs5K7XAAqNSZqxEo45_ytEg1EGexquN_EFTIUhyMX_zg'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all'>
                  <span
                    className='material-symbols-outlined text-white text-4xl'
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 flex flex-col gap-2'>
              <div className='h-1/2 group overflow-hidden'>
                <img
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                  alt='Close-up of intertwined hands and engagement ring.'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuAGzzKYc5caj5cQq6cELJjdwiKqPBIWohiFNGEXGIxTkhkobmI_sd6Xx18DcUDtilWu8Si59tFQ75iEnyVa8JYeZBZ6CAQwUwfBEL2VDei-Zilt_cYdr9hWf9b_thgGkptKa7BiXpyT2We2rQCDf4pr6-5Xfrdji624frJsyFOb7x8EUQimgFwh2xpCcr02-_EpSHp2v9MbDZknHTGLx280a7ZAO6GuSC-3V4ivUYGChePKinnXdFhXkQFXr2E8i_vCf3LNJOJVEQ'
                />
              </div>
            </div>
            <div className='md:col-span-4 group overflow-hidden'>
              <img
                className='w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105'
                alt='Couple toasting in a vineyard.'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDIucupI4nPEnd_uMqWCW_X2omeNW2d19Zrh0Gj0-HheDVWoxZXd_rTFPrbvfsNcsh-cL4ilpMxWrNmw_3X8vQVmu1rIvld5k6q9_DkscXQC7Ehn_SqyiUV0EySq11u0ol91bwbRYNDRCSStICyffy9mRwu22SaiwDq2UHCdpomgV9mwmsGCrCdv2T7_9MF2zAZpSzJDg2gecD5QL8KtndyAZm0jAmcByceJEXqTZcCoKt8uZ6oAQOfa-1HWfWtbfmZj6f8ZKLpgA'
              />
            </div>
            <div className='md:col-span-8 group overflow-hidden'>
              <img
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                alt='Cypress-lined road in Tuscany.'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDXNRXdhlDxE8qYD827fN7a-7nQb0-bf7bxnwOrNSRUYungkYT6ASfk1yOMdlWpiqOJ0gm417amH-JvbjDruf1iU_E3ViEvsdKK2GNFlzktU7VOQfFF-2tH2jocGqPOo1yXLsIkd2NYvhiwVnqHO8iFgryJjNLj6K8qLhp63_CQ1d25HvgJ-ev-20HfKWtc5bVr9mEuk02o4XDS9xF1hXAmpzKSPiEFXmZ_90UmhMNnl8KqFaUpyWAhefEu6DyQLLDNTm9UXgMtWQ'
              />
            </div>
          </div>
        </div>
      </section>

      <BottomNav />

      <footer className='bg-stone-50 dark:bg-stone-900 w-full py-12 border-t border-[#d5dad0] dark:border-stone-800 flex flex-col items-center gap-6 px-4 text-center pb-24 md:pb-12'>
        <div className='text-lg font-serif italic text-stone-800 dark:text-stone-200'>
          Corina &amp; Daniele
        </div>
        <div className='flex gap-8'>
          <a
            className="font-['Quattrocento'] text-sm tracking-widest uppercase text-stone-400 hover:text-[#8b7fb6] transition-colors hover:underline decoration-[#8b7fb6] underline-offset-4"
            href='#'
          >
            Lista Nozze
          </a>
          <a
            className="font-['Quattrocento'] text-sm tracking-widest uppercase text-stone-400 hover:text-[#8b7fb6] transition-colors hover:underline decoration-[#8b7fb6] underline-offset-4"
            href='#'
          >
            Contattaci
          </a>
          <a
            className="font-['Quattrocento'] text-sm tracking-widest uppercase text-stone-400 hover:text-[#8b7fb6] transition-colors hover:underline decoration-[#8b7fb6] underline-offset-4"
            href='#'
          >
            Politica Regali
          </a>
        </div>
        <p className="font-['Quattrocento'] text-sm tracking-widest uppercase text-[#8b7fb6] dark:text-[#a79ccb] opacity-90 transition-opacity cursor-default">
          © 2024 Corina &amp; Daniele • Per Sempre
        </p>
        <div className='mt-4 flex gap-4 text-stone-300'>
          <span className='material-symbols-outlined hover:text-primary transition-colors cursor-pointer'>
            favorite
          </span>
          <span className='material-symbols-outlined hover:text-primary transition-colors cursor-pointer'>
            photo_camera
          </span>
          <span className='material-symbols-outlined hover:text-primary transition-colors cursor-pointer'>
            mail
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Stich;
