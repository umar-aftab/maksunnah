"use client";
import { useEffect, useState } from 'react';
import { FaTelegramPlane, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Home() {
  const [article, setArticle] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [flyers, setFlyers] = useState([]);
  const [loadingFlyers, setLoadingFlyers] = useState(true);

  useEffect(() => {
    async function fetchFlyers() {
      setLoadingFlyers(true);
      try {
        const res = await fetch('https://maksunnah-fliers.vercel.app/api/flyers');
        if (!res.ok) throw new Error('Failed to fetch flyers');
        const data = await res.json();
        setFlyers(data);
      } catch (err) {
        setFlyers([]);
      }
      setLoadingFlyers(false);
    }
    fetchFlyers();
  }, []);

 useEffect(() => {
  async function fetchArticleOfTheDay() {
    const res = await fetch('/api/articleOfTheDay');
    const data = await res.json();
    setArticle(data);
  }
  fetchArticleOfTheDay();
}, []);
 


  return (
    <div className="font-sans scroll-smooth">
      {/* Top Bar */}
       <div className="bg-[#6D2E3A] text-white text-[11px] md:text-sm py-2 px-4 w-full hidden sm:flex flex-wrap justify-between">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="https://islaam.ca">islaam.ca</a>
          <a href="https://thenoblequran.com">thenoblequran.com</a>
          <a href="https://abuiyaad.com">abuiyaad.com</a>
          <a href="https://abukhadeejah.com">abukhadeejah.com</a>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="https://salafipublications.com">salafipublications.com</a>
          <a href="https://gtownmasjid.com">gtownmasjid.com</a>
          <a href="https://sunnahpublishing.net">sunnahpublishing.net</a>
          <a href="https://troid.org">troid.org</a>
        </div>
      </div>

      {/* Sticky Header with Logo and Menu */}
    {/* Centered Logo with Menu Below It */}
<div className="sticky top-0 z-50 bg-white shadow border-b border-gray-200">
  <div className="flex justify-center py-4">
    <img src="/logo.png" alt="Maktabah As Sunnah Logo" className="h-20 w-auto" />
  </div>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex justify-center space-x-10 text-gray-700 text-lg pb-3">
    <a href="#article" className="hover:text-[#6D2E3A] transition-colors">Article</a>
    <a href="#salah" className="hover:text-[#6D2E3A] transition-colors">Salah</a>
    <a href="#fliers" className="hover:text-[#6D2E3A] transition-colors">Flyers</a>
    <a href="#leaflets" className="hover:text-[#6D2E3A] transition-colors">Leaflets</a>
    <a href="#footer" className="hover:text-[#6D2E3A] transition-colors">Contact</a>
    <a
      href="https://www.paypal.me/sunnahcalgary"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#6D2E3A] text-white px-4 py-1 rounded hover:bg-[#571f2e] transition-colors"
    >
      Donate
    </a>
  </nav>

  {/* Mobile Menu Toggle */}
  <div className="flex justify-end px-6 md:hidden">
    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none">
      <svg className="h-6 w-6 text-[#6D2E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile Menu Items */}
  {menuOpen && (
    <div className="md:hidden px-6 pb-4 space-y-2 bg-white text-center">
      <a href="#article" className="block hover:text-[#6D2E3A]" onClick={() => setMenuOpen(false)}>Article</a>
      <a href="#salah" className="block hover:text-[#6D2E3A]" onClick={() => setMenuOpen(false)}>Salah</a>
      <a href="#fliers" className="block hover:text-[#6D2E3A]" onClick={() => setMenuOpen(false)}>Flyers</a>
      <a href="#leaflets" className="block hover:text-[#6D2E3A]" onClick={() => setMenuOpen(false)}>Leaflets</a>
      <a href="#footer" className="block hover:text-[#6D2E3A]" onClick={() => setMenuOpen(false)}>Contact</a>
      <a
        href="https://www.paypal.me/sunnahcalgary"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#6D2E3A] text-white py-2 rounded mt-2"
      >
        Donate
      </a>
    </div>
  )}
</div>

    <main className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Article of the Day */}
      <section id="article" className="bg-white p-6 rounded-xl shadow-md my-8">
        <h2 className="text-3xl font-bold text-center text-[#6D2E3A] mb-4">📜 Article of the Day</h2>
        {article ? (
          <article>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{article.title}</h3>
            <p className="text-gray-700 whitespace-pre-line mb-3 leading-relaxed">
              {
                article.content
                  ?.split('.')
                  .slice(0, 2)
                  .join('. ')
                  .replace(/([^\s])([()])/g, '$1 $2')
                  .replace(/([()])([^\s])/g, '$1 $2')
                  .replace(/([a-zA-Z])([\u0600-\u06FF])/g, '$1 $2')
                  .replace(/([\u0600-\u06FF])([a-zA-Z])/g, '$1 $2')
                  .split(/\s+/)
                  .map((word, idx) => {
                    const isArabic = /[\u0600-\u06FF]/.test(word);
                    return (
                      <span
                        key={idx}
                        className={isArabic ? 'text-[#6D2E3A] font-semibold' : ''}
                        dir={isArabic ? 'rtl' : 'ltr'}
                      >
                        {word + ' '}
                      </span>
                    );
                  })
              }
              ...
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-[#6D2E3A] underline font-medium">
              Read full article
            </a>
          </article>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </section>

      {/* Salah Timings */}
      <section id="salah" className="bg-gray-50 p-6 rounded-xl shadow-md my-8">
        <h2 className="text-2xl font-bold text-center text-[#6D2E3A] mb-4">🕌 Salah Timings</h2>
        <iframe
          src="https://timing.athanplus.com/masjid/widgets/embed?theme=1&masjid_id=aAeo3XKj"
          width="100%"
          height="615"
          frameBorder="0"
          allowtransparency="true"
          className="rounded-lg shadow"
        ></iframe>
      </section>

   
      {/* Flyers Section */}
    <section id="fliers" className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-2xl font-bold text-center text-[#6D2E3A] mb-6">📄 Our Flyers</h2>
      {loadingFlyers ? (
        <div className="text-center text-gray-500">Loading flyers...</div>
      ) : flyers.length === 0 ? (
        <div className="text-center text-gray-500">No flyers available.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flyers.map((flyer) => (
            <div
              key={flyer.id}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg cursor-pointer flex flex-col items-center transition"
              onClick={() => window.open(flyer.file_url, '_blank')}
            >
              <img
                src={flyer.file_url}
                alt={flyer.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-3 w-full text-center">
                <div className="font-semibold text-[#6D2E3A] truncate">{flyer.title}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>


      {/* Leaflets Section */}
      <section id="leaflets" className="bg-white p-6 rounded-xl shadow-md my-8">
        <h2 className="text-2xl font-bold text-center text-[#6D2E3A] mb-6">📄 Our Leaflets</h2>
        <div className="space-y-6">
          {[
            { file: 'flyer1.pdf', caption: 'Street Demonstrations,Protests & Boycotting' },
            { file: 'flyer2.pdf', caption: 'The Barelwis' },
            { file: 'flyer3.pdf', caption: 'Ikhwan-UL-Muslimeen' },
            { file: 'flyer4.pdf', caption: 'JamaAt At- Tabligh' },
            { file: 'flyer5.pdf', caption: 'Qadianis' }
          ].map(({ file, caption }, idx) => (
            <div key={idx} className="text-center">
              <p className="font-semibold text-gray-800 mb-2">{caption}</p>
              <embed
                src={`/flyers/${file}`}
                type="application/pdf"
                width="100%"
                height="500px"
                className="rounded border shadow"
              />
              <div className="mt-2">
                <a
                  href={`/flyers/${file}`}
                  download
                  className="text-[#6D2E3A] underline"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
      {/* Footer */}
      <footer id="footer" className="bg-[#111] text-white text-center py-8">
        <img src="/logo.png" alt="Footer Logo" className="mx-auto h-16 w-16 mb-4" />
        <p className="font-semibold">Maktabah As Sunnah</p>
        <p className="mt-1">Second Floor, 10960 42 St NE #110, Calgary, AB T3N 2B8</p>
        <p className="mt-3 text-xs">
           <a href="/privacy" className="underline text-gray-200 hover:text-white">Privacy Policy</a>
        </p>
        <div className="flex justify-center items-center gap-6 mt-4 text-2xl">
          <a href="https://t.me/MaktabahAsSunnahCalgary" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
          <a href="https://twitter.com/maksunnahyyc" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com/maksunnahyyc" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com/maksunnahyyc" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </footer>

    </div>
  );
}
