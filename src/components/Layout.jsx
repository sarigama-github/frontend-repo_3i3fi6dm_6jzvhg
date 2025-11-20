import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Particles from './Particles'
import Chatbot from './Chatbot'

export default function Layout({ children }) {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <Particles />
      {children}
      <Footer />
      <Chatbot />
      <a href="/book" className="fixed bottom-5 left-5 z-40 px-5 py-3 rounded-2xl bg-slate-900 text-white shadow-lg hover:scale-[1.02] transition-transform">Book Appointment</a>
    </div>
  )
}
