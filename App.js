import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-cream text-slate-950">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-sand blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] opacity-40 [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.45),transparent_75%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
