import React from 'react'

export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{title}</h2>
            {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
