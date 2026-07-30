'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  Instagram, Linkedin, Twitter, ArrowUpRight 
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Wholesale Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only submit simulation
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: 'Wholesale Inquiry',
        message: '',
      });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen py-12">
      {/* Header Banner */}
      <section className="bg-brand-cream py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green mt-6 mb-8 max-w-3xl leading-tight">
              Connect With Us, <br />
              <span className="italic text-brand-gold">For Global Sourcing.</span>
            </h1>
            <div className="h-[2px] w-28 bg-brand-gold" />
          </FadeIn>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
                Corporate Headquarters
              </span>
              <h2 className="text-4xl font-serif text-brand-green mt-4 mb-6">
                Dominion Ventures Executive Offices
              </h2>
              <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                Whether you want to source custom packaging, seek bulk container pricing, or become an authorized distributor, our team is ready to support your business requirements.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-brand-cream border border-brand-cream-dark text-brand-green flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-bold text-brand-gold">Address</span>
                    <span className="font-sans text-sm text-brand-charcoal mt-1 block leading-relaxed">
                      Executive Office, Level 4, Brigade Signature Towers, Katamanallur Cross, Old Madras Rd, Bengaluru, Karnataka - 560049
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-brand-cream border border-brand-cream-dark text-brand-green flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-bold text-brand-gold">Email</span>
                    <a href="mailto:info@dominionventures.in" className="font-sans text-sm text-brand-charcoal mt-1 block hover:text-brand-gold transition-colors duration-300">
                      info@dominionventures.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-brand-cream border border-brand-cream-dark text-brand-green flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-bold text-brand-gold">Phone</span>
                    <span className="font-sans text-sm text-brand-charcoal mt-1 block">
                      +91 98765 43210
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Social Channels */}
            <FadeIn delay={0.2}>
              <div className="border-t border-brand-cream-dark pt-8">
                <span className="block text-xs uppercase tracking-widest font-bold text-brand-charcoal/50 mb-4">Follow Our Channels</span>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-brand-cream-dark flex items-center justify-center text-brand-green hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-brand-cream-dark flex items-center justify-center text-brand-green hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-brand-cream-dark flex items-center justify-center text-brand-green hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="right">
              <div className="bg-brand-cream/40 border border-brand-cream-dark p-8 md:p-12 rounded-[2rem]">
                <h3 className="font-serif text-3xl text-brand-green mb-8">Send A Message</h3>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-brand-cream-dark p-8 rounded-2xl text-center flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="font-serif text-2xl text-brand-green">Message Transmitted</h4>
                    <p className="font-sans text-xs text-brand-charcoal/60 max-w-sm">
                      Thank you. Your inquiry has been logged in our system. A Dominion Ventures representative will contact you in under 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 font-sans text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-brand-green transition-colors duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white border border-brand-cream-dark rounded-xl px-4 py-3 text-xs text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                          placeholder="Jane Doe"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white border border-brand-cream-dark rounded-xl px-4 py-3 text-xs text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                          placeholder="jane@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white border border-brand-cream-dark rounded-xl px-4 py-3 text-xs text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                          placeholder="Global Foods Inc."
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Inquiry Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-white border border-brand-cream-dark rounded-xl px-4 py-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors duration-300 cursor-pointer"
                        >
                          <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                          <option value="Private Label Sourcing">Private Label Sourcing</option>
                          <option value="Career Opportunities">Career Opportunities</option>
                          <option value="Press & Media">Press & Media</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white border border-brand-cream-dark rounded-xl px-4 py-3 text-xs text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-gold transition-colors duration-300 resize-none"
                        placeholder="Detail your requirements here..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-2 bg-brand-green text-brand-cream font-sans text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-brand-gold hover:text-brand-green transition-colors duration-300 font-bold"
                    >
                      Transmit Message
                      <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Styled Google Maps Placeholder */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="w-full h-96 rounded-[2rem] bg-brand-cream-dark border border-brand-cream-dark relative flex flex-col justify-center items-center text-center p-8 overflow-hidden">
            {/* Visual Grid Lines to mimic a Map */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none" style={{ backgroundImage: 'radial-gradient(circle, #062C19 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 max-w-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-green text-brand-cream flex items-center justify-center mb-4 border border-brand-gold/30">
                <MapPin size={20} />
              </div>
              <h3 className="font-serif text-2xl text-brand-green mb-2">Executive Location Map</h3>
              <p className="font-sans text-xs text-brand-charcoal/70 mb-6 leading-relaxed">
                Level 4, Brigade Signature Towers, Katamanallur Cross, Old Madras Rd, Bengaluru, Karnataka - 560049
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-brand-green transition-colors duration-300"
              >
                Open Google Maps
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
