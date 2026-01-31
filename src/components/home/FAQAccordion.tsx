import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
}

interface Props {
    faqs: readonly FAQ[];
}

export default function FAQAccordion({ faqs = [] }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-neutral-50"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-display text-lg font-semibold text-neutral-900">
                            {faq.question}
                        </span>
                        <ChevronDown
                            size={20}
                            className={`flex-shrink-0 text-primary-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <div className="border-t border-neutral-100 px-6 py-5 text-neutral-700">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
