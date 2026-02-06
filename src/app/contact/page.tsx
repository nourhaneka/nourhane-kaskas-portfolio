'use client'
import { useState } from 'react'


export default function Contact(){
const [sent, setSent] = useState(false)
return (
<section className="container py-12 max-w-2xl">
<h2 className="font-heading text-3xl mb-6">Let's Create Together</h2>


{!sent ? (
<form onSubmit={(e)=>{ e.preventDefault(); setSent(true); }} className="space-y-4">
<input required name="name" placeholder="Your name" className="w-full p-3 rounded card" />
<input required name="email" type="email" placeholder="Email" className="w-full p-3 rounded card" />
<textarea required name="message" rows={6} placeholder="Tell me about your project" className="w-full p-3 rounded card" />
<button className="px-6 py-3 rounded font-medium" style={{backgroundColor:'#d6a3a9'}}>Send Message</button>
</form>
): (
<div className="card p-6">Thanks — I’ll be in touch soon.</div>
)}
</section>
)
}