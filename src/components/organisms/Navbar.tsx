import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '@/assets/logo.svg'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-card/95 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
             <img src={logo} alt="Goodwill Builders Logo" className="h-12 w-12 md:h-10 md:w-10" />
              <div>
                <span
                  className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors ${
                    scrolled ? 'text-navy' : 'text-primary-foreground'
                  }`}
                >
                  Goodwill
                </span>
                <span
                  className={`font-heading font-medium text-lg md:text-xl ml-1 transition-colors ${
                    scrolled ? 'text-primary' : 'text-primary'
                  }`}
                >
                  Builders
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : scrolled
                      ? 'text-foreground hover:text-primary'
                      : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 gradient-orange rounded-full"
                  />
                )}
              </Link>
            ))}
          <a
              href="tel:+919876543210"
              className="gradient-orange text-primary-foreground px-8 py-2 gap-2 rounded-lg text-sm font-semibold flex items-center  hover:opacity-90 transition-opacity"
            >
              <Phone size={14}   />
              Call Us
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled || mobileOpen
                ? 'text-foreground'
                : 'text-primary-foreground'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-accent'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
                       <a
              href="tel:+919876543210"
              className="gradient-orange text-primary-foreground px-8 py-2 rounded-lg text-sm font-semibold flex items-center  hover:opacity-90 transition-opacity"
            >
              <Phone size={14}  />
              Call Us
            </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
