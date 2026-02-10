import { actions } from 'astro:actions';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactFormAction = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
        });

        const { error } = await actions.sendContactEmail(formDataObj);

        if (!error) {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    Get in Touch
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none"
                            placeholder="+971 50 123 4567"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none"
                            placeholder="How can we help?"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                        placeholder="Tell us about your project or requirements..."
                    />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 min-w-[200px]"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>
                </div>

                {status === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <p>Message sent successfully! We'll get back to you soon.</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p>{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
};
