import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

export function AboutPage() {
  return (
    <main className="pt-24">
      <Section title="About CitySmile" subtitle="Premium care by Hazel Dent Company Limited">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-slate-600 leading-relaxed">
            We are a boutique dental studio blending clinical excellence with a calming, spa-like atmosphere. Our mission is to deliver confident smiles using digital diagnostics and minimally invasive treatments.
          </p>
          <div className="rounded-2xl bg-white/70 border border-white/60 p-6 shadow-xl">
            <ul className="space-y-2 text-slate-700">
              <li><strong>Mission:</strong> Precision care with empathy.</li>
              <li><strong>Vision:</strong> A world where every smile feels effortless.</li>
              <li><strong>Values:</strong> Trust, innovation, comfort.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-medium text-slate-900 mb-4">Our Journey</h3>
          <div className="relative border-l-2 border-slate-200 pl-6 space-y-8">
            {['Founded','Expanded','Digital Integration','Community Impact'].map((step,i)=> (
              <motion.div key={i} initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="relative">
                <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(125,211,252,0.2)]"/>
                <div className="p-4 rounded-xl bg-white/70 border border-white/60 shadow">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      <Section title="Our Team">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white/70 border border-white/60 shadow hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="p-4">
                <div className="font-medium text-slate-900">Dr. Team Member {i}</div>
                <div className="text-sm text-slate-600">Specialist</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}

export function ServicesPage() {
  const services = [
    'General Dentistry','Cosmetic Dentistry','Orthodontics','Dental Implants','Crowns & Bridges','Dentures','Teeth Whitening','Pediatric Dentistry','Digital Smile Design'
  ]
  return (
    <main className="pt-24">
      <Section title="Our Services" subtitle="Comprehensive care with gentle precision">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-white/70 border border-white/60 shadow hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sky-100/60 to-transparent" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-300 to-sky-500 mb-4 shadow-inner" />
                <div className="font-medium text-slate-900">{s}</div>
                <p className="text-sm text-slate-600 mt-2">Advanced, comfortable, and personalized to your smile.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  )
}

export function TechnologyPage() {
  return (
    <main className="pt-24">
      <Section title="Technology" subtitle="3D scanners, digital X-ray, CAD/CAM and more">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl bg-white/70 border border-white/60 p-6 shadow-xl">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 mb-4" />
            <p className="text-slate-600">Interactive models and digital workflows accelerate treatment while ensuring precision.</p>
          </div>
          <div className="space-y-4">
            {['3D Intraoral Scanners','Digital X-Ray','CAD/CAM Milling','Implant Navigation','Whitening Systems','Sterilization Suite'].map((t, i) => (
              <motion.div key={t} initial={{opacity:0, x:10}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-4 rounded-xl bg-white/70 border border-white/60 shadow">
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}

export function GalleryPage() {
  return (
    <main className="pt-24">
      <Section title="Gallery" subtitle="A peek into our studio and smile transformations">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200" />
          ))}
        </div>
      </Section>
    </main>
  )
}

export function BookPage() {
  return (
    <main className="pt-24">
      <Section title="Book Appointment" subtitle="We’ll confirm shortly after submission">
        <form className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 p-6 rounded-3xl bg-white/60 backdrop-blur border border-white/60 shadow-xl">
          <input className="px-4 py-3 rounded-xl border bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Full Name" />
          <input className="px-4 py-3 rounded-xl border bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Phone" />
          <input className="px-4 py-3 rounded-xl border bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300 md:col-span-2" placeholder="Email" />
          <select className="px-4 py-3 rounded-xl border bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300">
            <option>Service</option>
            <option>General Dentistry</option>
            <option>Cosmetic Dentistry</option>
            <option>Orthodontics</option>
            <option>Dental Implants</option>
          </select>
          <input type="date" className="px-4 py-3 rounded-xl border bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300" />
          <textarea rows={4} className="px-4 py-3 rounded-xl border bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300 md:col-span-2" placeholder="Notes"></textarea>
          <div className="md:col-span-2 flex justify-end">
            <button className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Submit</button>
          </div>
        </form>
      </Section>
    </main>
  )
}
