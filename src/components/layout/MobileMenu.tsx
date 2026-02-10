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
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
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
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
        className="p-2 text-gray-700 hover:text-primary-500 transition-colors touch-manipulation active:scale-95"
        style={{ touchAction: 'manipulation' }}
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
            onTouchEnd={(e) => {
              e.preventDefault();
              closeMenu();
            }}
            style={{ touchAction: 'none' }}
            role="button"
            tabIndex={-1}
            aria-label="Close menu"
          />

          {/* Menu Panel */}
          <div
            className="fixed top-[136px] right-0 bottom-0 w-full sm:w-80 bg-neutral-50 shadow-xl z-50 animate-slide-down overflow-y-auto"
            style={{ touchAction: 'pan-y' }}
          >
            <nav className="p-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors touch-manipulation active:scale-[0.98]"
                  style={{ touchAction: 'manipulation' }}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/#cost-calculator"
                  className="block w-full text-center py-3 px-6 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium transition-colors touch-manipulation active:scale-[0.98]"
                  style={{ touchAction: 'manipulation' }}
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
