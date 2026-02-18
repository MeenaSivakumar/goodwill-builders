import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="gradient-orange rounded-md p-1.5 mr-2">
                <span className="font-heading font-bold text-primary-foreground text-sm">G</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-navy-foreground">Goodwill</span>
                <span className="font-heading font-medium text-lg text-primary ml-1">Builders</span>
              </div>
            </div>
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              Building premium spaces that define luxury living. Trusted by thousands of families across Pune.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-navy-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Projects', path: '/projects' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-navy-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-navy-foreground/70">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                123 Business Park, Baner Road, Pune, Maharashtra 411045
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-foreground/70">
                <Phone size={16} className="text-primary flex-shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-foreground/70">
                <Mail size={16} className="text-primary flex-shrink-0" />
                info@goodwillbuilders.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-navy-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-navy-foreground/10 flex items-center justify-center text-navy-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all text-xs font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-navy-foreground/50">
            © {new Date().getFullYear()} Goodwill Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
