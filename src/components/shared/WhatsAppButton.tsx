import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const whatsappNumber = "971503489891";
    const message = "Hello, I would like to inquire about your services.";
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center group"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 font-medium">
                Chat with us
            </span>
        </a>
    );
}
