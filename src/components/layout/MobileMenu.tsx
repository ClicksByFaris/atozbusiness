import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-primary-500 transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed top-[136px] right-0 bottom-0 w-full sm:w-80 bg-white shadow-xl z-50 animate-slide-down">
                        <nav className="p-6 space-y-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                <a
                                    href="/contact"
                                    className="block w-full text-center py-3 px-6 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Started
                                </a>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}
