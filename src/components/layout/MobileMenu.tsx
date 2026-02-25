import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

interface MobileMenuProps {
  categories?: string[];
  groupedServices?: Record<string, any[]>;
}

export default function MobileMenu({ categories = [], groupedServices = {} }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setServicesExpanded(false); // Reset expanded state on close
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
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className="flex items-center justify-between w-full py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors active:scale-[0.98]"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${servicesExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Accordion content */}
                      <div className={`overflow-hidden transition-all duration-300 ${servicesExpanded ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-6 space-y-6 pb-2">
                          {categories.map((category) => (
                            <div key={category}>
                              <div className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                                {category}
                              </div>
                              <ul className="space-y-1 block border-l-2 border-primary-100 ml-1 pl-3">
                                {groupedServices[category]?.map((service: any) => (
                                  <li key={service.slug}>
                                    <a
                                      href={`/services/${service.slug}`}
                                      className="block py-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
                                      onClick={closeMenu}
                                    >
                                      {service.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors active:scale-[0.98]"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
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
