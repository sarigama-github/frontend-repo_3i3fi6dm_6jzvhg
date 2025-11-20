import React from 'react'

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200/60 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-slate-900 font-semibold text-lg">CitySmile Dental Studio</div>
          <p className="text-slate-600 text-sm mt-2">You Smile, We Smile.</p>
          <div className="mt-4 text-sm text-slate-600">
            Hazel Dent Company Limited
          </div>
        </div>
        <div>
          <div className="text-slate-900 font-medium">Contact</div>
          <p className="text-slate-600 text-sm mt-2">+1 (234) 567-890</p>
          <p className="text-slate-600 text-sm">hello@citysmile.studio</p>
          <div className="mt-4">
            <iframe title="map" className="w-full h-32 rounded-xl border" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
        <div>
          <div className="text-slate-900 font-medium">Quick Links</div>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li><a href="/services" className="hover:text-slate-900">Services</a></li>
            <li><a href="/technology" className="hover:text-slate-900">Technology</a></li>
            <li><a href="/gallery" className="hover:text-slate-900">Gallery</a></li>
            <li><a href="/book" className="hover:text-slate-900">Book Appointment</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 border-t border-slate-200/60">© {new Date().getFullYear()} CitySmile Dental Studio. All rights reserved.</div>
    </footer>
  )
}
