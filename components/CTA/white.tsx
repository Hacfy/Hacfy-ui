import React from 'react'

const WhitePaper = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] via-red-700 to-[#0f172a] text-white py-16 px-4 md:px-12 rounded-3xl shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <p className="uppercase tracking-widest text-sm mb-3 font-semibold text-white/70">
            Stay One Step Ahead
          </p>
          <h1 className="text-xl md:text-3xl font-bold leading-snug max-w-2xl">
            Download our Penetration Testing White Paper and build stronger defenses.
          </h1>
        </div>
        <div>
          <a
            href="/hacfy-whitepaper.pdf"
            download="Hacfy-WhitePaper.pdf"
          >
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-600 hover:text-white transition-colors duration-300">
              Download Pdf
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhitePaper
