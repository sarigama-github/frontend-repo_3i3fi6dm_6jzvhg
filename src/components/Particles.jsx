import React, { useEffect, useRef } from 'react'

// Lightweight floating particles using canvas
export default function Particles({ className = '' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.5,
      a: Math.random() * Math.PI * 2,
      s: 0.2 + Math.random() * 0.8,
      o: 0.08 + Math.random() * 0.15,
    }))

    const loop = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach(p => {
        p.a += 0.002 * p.s
        p.x += Math.cos(p.a) * p.s
        p.y += Math.sin(p.a) * p.s
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        grad.addColorStop(0, `rgba(180, 220, 255, ${p.o})`)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()
      })
      animationRef.current = requestAnimationFrame(loop)
    }

    loop()
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
