import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    location: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    location?: string;
    message?: string;
}

const SERVICES = [
    'Golden Visa Services',
    'PRO Services',
    'Family Visa Typing',
    'New Company Formation',
    'TAMM Services',
    'Certificate Attestation',
    'Trade License Renewal',
    'Emirates ID Services',
    'Visa Cancellation Services',
    'Health Insurance Assistance',
    'Investor Visa Services',
    'Business License Amendment',
    'Legal Translation Services',
    'Document Clearing',
    'Tenancy Contract Registration',
    'Immigration Consultation',
    'Power of Attorney Services',
    'Notary Public Services',
    'Ministry Approvals',
    'Free Zone Setup'
];

const LOCATIONS = [
    'Khalidiya Branch',
    'Al Zahiyah Branch',
    'No Preference'
];

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s\-+()]{8,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Service validation
        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        // Location validation
        if (!formData.location) {
            newErrors.location = 'Please select a preferred location';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simulate API call - Replace with your actual form submission endpoint
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form submitted:', formData);

            // For now, we'll redirect to WhatsApp with the message
            const whatsappMessage = `Hello! I'm interested in ${formData.service}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Location: ${formData.location}\n\nMessage: ${formData.message}`;
            const whatsappUrl = `https://wa.me/971565331632?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappUrl, '_blank');

            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                location: '',
                message: ''
            });

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500'
                        }`}
                    placeholder="John Doe"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500'
                        }`}
                    placeholder="john@example.com"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500'
                        }`}
                    placeholder="+971 50 123 4567"
                />
                {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
            </div>

            {/* Service */}
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.service
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500'
                        }`}
                >
                    <option value="">Select a service...</option>
                    {SERVICES.map(service => (
                        <option key={service} value={service}>{service}</option>
                    ))}
                </select>
                {errors.service && (
                    <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                )}
            </div>

            {/* Location */}
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                    Preferred Location <span className="text-red-500">*</span>
                </label>
                <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.location
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500'
                        }`}
                >
                    <option value="">Select a location...</option>
                    {LOCATIONS.map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
                {errors.location && (
                    <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                )}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500'
                        }`}
                    placeholder="Please describe how we can help you..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </button>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">✓ Message sent successfully! We'll get back to you soon.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm font-medium">✗ Failed to send message. Please try calling us instead.</p>
                </div>
            )}
        </form>
    );
}
