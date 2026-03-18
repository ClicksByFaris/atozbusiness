import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
    const [isExpanded, setIsExpanded] = useState(false);
    const whatsappNumber = "971503489891";
    const defaultMessage = "Hello, I would like to inquire about your services.";
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center md:right-0 max-md:bottom-6 max-md:top-auto max-md:translate-y-0">
            {/* Expanded message box */}
            <div
                className={`
                    bg-white rounded-l-2xl shadow-2xl overflow-hidden
                    transition-all duration-300 ease-in-out
                    max-md:rounded-2xl max-md:absolute max-md:bottom-20 max-md:right-4
                    ${isExpanded ? 'w-80 opacity-100 mr-2 max-md:w-[calc(100vw-2rem)] max-md:max-w-sm max-md:mr-0' : 'w-0 opacity-0'}
                `}
            >
                <div className="bg-[#25D366] p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <MessageCircle className="text-[#25D366]" size={24} />
                        </div>
                        <div className="text-white">
                            <p className="font-semibold">AtoZ Business</p>
                            <p className="text-xs opacity-90">Typically replies instantly</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                        aria-label="Close WhatsApp Chat"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 relative">
                        <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            👋 Hi there! How can we help you today?
                        </p>
                        <p className="text-xs text-gray-400 mt-2">Just now</p>
                    </div>

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            block w-full bg-[#25D366] hover:bg-[#20bd5a] 
                            text-white text-center py-3 px-4 rounded-lg
                            font-medium transition-all hover:shadow-lg
                            transform hover:scale-[1.02]
                        "
                    >
                        <MessageCircle className="inline-block mr-2" size={18} />
                        Start Chat on WhatsApp
                    </a>
                </div>
            </div>

            {/* Main floating button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    bg-[#25D366] hover:bg-[#20bd5a] text-white
                    rounded-l-full shadow-2xl
                    transition-all duration-300 ease-in-out
                    flex items-center justify-center
                    group relative
                    max-md:rounded-full
                    ${isExpanded ? 'w-16 h-16' : 'w-14 h-14 hover:w-16 hover:h-16'}
                `}
                aria-label="WhatsApp Chat"
            >
                <MessageCircle
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'group-hover:rotate-12 group-hover:scale-110'}`}
                    size={28}
                />

                {/* Pulse animation when not expanded */}
                {!isExpanded && (
                    <span className="absolute inset-0 rounded-l-full max-md:rounded-full bg-[#25D366] animate-ping opacity-20"></span>
                )}

                {/* Notification badge */}
                <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg">
                    1
                </span>
            </button>
        </div>
    );
}
