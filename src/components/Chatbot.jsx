import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function Chatbot() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState([
    { from: 'bot', text: 'Hi! Need help booking or have a question?' },
  ])
  const [input, setInput] = React.useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages(m => [...m, { from: 'user', text: input }])
    setInput('')
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: 'Thanks! Our team will get back shortly.' }])
    }, 500)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-72 rounded-2xl overflow-hidden bg-white/80 backdrop-blur border border-white/60 shadow-xl">
          <div className="px-4 py-3 bg-gradient-to-r from-sky-400/70 to-sky-500/70 text-white font-medium">CitySmile Assistant</div>
          <div className="max-h-72 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`${m.from === 'bot' ? 'text-slate-700' : 'text-slate-900 text-right'}`}>
                <span className={`inline-block px-3 py-2 rounded-xl ${m.from === 'bot' ? 'bg-slate-100' : 'bg-sky-100'}`}>{m.text}</span>
              </div>
            ))}
          </div>
          <div className="p-3 flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 px-3 py-2 rounded-xl border bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300" />
            <button onClick={send} className="px-3 py-2 rounded-xl bg-slate-900 text-white">Send</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(v => !v)} className="relative w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
        <div className="absolute inset-0 rounded-2xl bg-sky-400/20 blur-md animate-pulse" />
        <MessageCircle size={24} className="relative" />
      </button>
    </div>
  )
}
