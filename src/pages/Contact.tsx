import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Contact: React.FC = () => {
  const { toast } = useToast()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({ title: 'Message Sent!', description: "We'll get back to you shortly." })
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <title>Contact Us – Goodwill Builders</title>
      <meta
        name="description"
        content="Get in touch with Goodwill Builders for property enquiries, site visits, and personalized consultations."
      />

      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mt-3 mb-4">
              Contact Us
            </h1>
            <p className="text-navy-foreground/70 max-w-xl mx-auto">
              We'd love to hear from you. Reach out for property enquiries, site visits, or consultations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="gradient-orange text-primary-foreground px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.5 } } }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Our Office</h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: 'Address', value: '123 Business Park, Baner Road, Pune, Maharashtra 411045' },
                    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                    { icon: Mail, label: 'Email', value: 'info@goodwillbuilders.com' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                      <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted rounded-xl h-64 flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Map Location</p>
                  <p className="text-xs">Baner, Pune</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
