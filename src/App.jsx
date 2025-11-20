import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import { AboutPage, ServicesPage, TechnologyPage, GalleryPage, BookPage } from './components/Pages'

function Home() {
  return (
    <>
      <Hero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 mb-4" />
              <div className="font-medium text-slate-900">Premium Comfort</div>
              <p className="text-sm text-slate-600 mt-2">Warm wood accents, calming ambiance, and compassionate care.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </Layout>
  )
}
