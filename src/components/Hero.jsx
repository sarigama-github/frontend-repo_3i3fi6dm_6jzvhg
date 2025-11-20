import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
        <Spline scene="https://prod.spline.design/kdtN2nPXeTBi-0PR/scene.splinecode" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Your Smile, Our Passion.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-slate-600"
          >
            CitySmile Dental Studio by Hazel Dent Company Limited blends compassionate care with cutting-edge technology in a serene, luxury environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="/book" className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]">
              Book Appointment
            </a>
            <a href="tel:+1234567890" className="px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/60 text-slate-900 hover:bg-white transition-colors">
              Call Now
            </a>
          </motion.div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-sky-200/50 via-white to-transparent rounded-3xl blur-3xl" />
          <div className="relative aspect-[4/3] rounded-3xl bg-white/70 border border-white/60 shadow-xl backdrop-blur overflow-hidden">
            <Spline scene="https://prod.spline.design/4aKpX7jQ2Fbv3y6o/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
