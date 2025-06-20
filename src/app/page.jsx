"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FaTelegramPlane, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const supabase = createClient(
  'https://wdbdiihzwzefjexyhxfv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkYmRpaWh6d3plZmpleHloeGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxOTE3MDgsImV4cCI6MjA2NTc2NzcwOH0.HEjp_lp-h6cjdDgDC9oTGjgP5vL2eOlDoxo6bokovWo'
);

export default function Home() {
  const [article, setArticle] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchArticleOfTheDay() {
      const FIRST_ID = 116;
      const totalArticles = 1015;
      const daysSinceStart = Math.floor(
        (new Date() - new Date('2025-06-18')) / (1000 * 60 * 60 * 24)
      );
      const targetId = FIRST_ID + (daysSinceStart % totalArticles);

      const { data, error } = await supabase
        .from('Articles')
        .select('*')
        .eq('id', targetId)
        .single();

      if (error || !data) {
        setArticle(null);
        return;
      }

      setArticle(data);
    }
    fetchArticleOfTheDay();
  }, []);

  // useEffect(() => {
  //   const loadTwitter = () => {
  //     if (window.twttr && window.twttr.widgets) {
  //       window.twttr.widgets.load();
  //     }
  //   };
  //   if (!document.getElementById('twitter-wjs')) {
  //     const script = document.createElement('script');
  //     script.id = 'twitter-wjs';
  //     script.src = 'https://platform.twitter.com/widgets.js';
  //     script.async = true;
  //     script.onload = loadTwitter;
  //     document.body.appendChild(script);
  //   } else {
  //     loadTwitter();
  //   }
  // }, []);

    useEffect(() => {
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.FB) {
      window.FB.XFBML.parse(); // Re-render if needed
    }
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
    <a href="#twitter" className="hover:text-[#6D2E3A] transition-colors">Facebook</a>
    <a href="#fliers" className="hover:text-[#6D2E3A] transition-colors">Leaflets</a>
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
      <a href="#twitter" className="block hover:text-[#6D2E3A]" onClick={() => setMenuOpen(false)}>Facebook</a>
      <a href="#fliers" className="block hover:text-[#6D2E3A]" onClick={() => setMenuOpen(false)}>Leaflets</a>
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

      {/* Twitter Feed */}
    {/* <section id="twitter" className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-2xl font-bold text-center text-[#6D2E3A] mb-4">📢 Twitter Feed</h2>
      <div className="flex justify-center">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-height="600"
          data-chrome="noheader nofooter"
          href="https://twitter.com/maksunnah"
        >
          Tweets by @maksunnah
        </a>
      </div>
    </section> */}

  <section id="twitter" className="bg-white p-6 rounded-xl shadow-md my-8">
    <h2 className="text-2xl font-bold text-center text-[#6D2E3A] mb-4">📢 Facebook Feed</h2>
    <div className="flex justify-center">
      <div className="w-[500px]">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/makcalgary"
          data-tabs="timeline"
          data-width="500"
          data-height="800"
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/makcalgary"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/makcalgary">Maktabah As Sunnah Calgary</a>
          </blockquote>
        </div>
      </div>
    </div>
  </section>


      {/* Flyers Section */}
      <section id="fliers" className="bg-white p-6 rounded-xl shadow-md my-8">
        <h2 className="text-2xl font-bold text-center text-[#6D2E3A] mb-6">📄 Our Flyers</h2>
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
        <div className="flex justify-center items-center gap-6 mt-4 text-2xl">
          <a href="https://t.me/MaktabahAsSunnahCalgary" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
          <a href="https://twitter.com/maksunnah" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com/makcalgary" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com/maksunnahcalgary" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </footer>

    </div>
  );
}
