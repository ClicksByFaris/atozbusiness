import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:text-primary-500 transition-colors active:scale-95"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
            role="button"
            tabIndex={-1}
            aria-label="Close menu"
          />

          {/* Menu Panel */}
          <div
            className="fixed top-24 right-0 bottom-0 w-full sm:w-80 bg-neutral-50 shadow-xl z-50 animate-slide-down overflow-y-auto"
          >
            <nav className="p-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors active:scale-[0.98]"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/#cost-calculator"
                  className="block w-full text-center py-3 px-6 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium transition-colors active:scale-[0.98]"
                  onClick={closeMenu}
                >
                  Cost Calculator
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
