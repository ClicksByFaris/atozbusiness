import { actions } from 'astro:actions';
import { useState, useRef } from 'react';
import { Calculator, ArrowRight, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface Step1Data {
    businessActivity: string;
    numberOfOwners: string;
    premisesType: string;
    numberOfVisas: string;
    jurisdiction: string;
}

interface Step2Data {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    nationality: string;
}

export const CostCalculator = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Step 1 form data
    const [step1Data, setStep1Data] = useState<Step1Data>({
        businessActivity: '',
        numberOfOwners: '',
        premisesType: '',
        numberOfVisas: '',
        jurisdiction: '',
    });

    // Step 2 form data
    const [step2Data, setStep2Data] = useState<Step2Data>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        nationality: '',
    });

    // Validation errors
    const [step1Errors, setStep1Errors] = useState<Partial<Step1Data>>({});
    const [step2Errors, setStep2Errors] = useState<Partial<Step2Data>>({});

    const validateStep1 = (): boolean => {
        const errors: Partial<Step1Data> = {};

        if (!step1Data.businessActivity) errors.businessActivity = 'Please select a business activity';
        if (!step1Data.numberOfOwners) errors.numberOfOwners = 'Please enter number of owners';
        if (!step1Data.premisesType) errors.premisesType = 'Please select premises type';
        if (!step1Data.numberOfVisas) errors.numberOfVisas = 'Please select number of visas';
        if (!step1Data.jurisdiction) errors.jurisdiction = 'Please select jurisdiction';

        setStep1Errors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateStep2 = (): boolean => {
        const errors: Partial<Step2Data> = {};

        if (!step2Data.firstName.trim()) errors.firstName = 'Please fill out this field';
        if (!step2Data.lastName.trim()) errors.lastName = 'Please fill out this field';
        if (!step2Data.phone.trim()) errors.phone = 'Please fill out this field';
        if (!step2Data.email.trim()) errors.email = 'Please fill out this field';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step2Data.email)) {
            errors.email = 'Please enter a valid email';
        }
        if (!step2Data.nationality) errors.nationality = 'Please fill out this field';

        setStep2Errors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setCurrentStep(2);
        }
    };

    const handlePrevious = () => {
        setCurrentStep(1);
        setStep2Errors({});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateStep2()) return;

        setStatus('loading');
        setErrorMessage('');

        // Combine all form data
        const formDataObj = new FormData();
        formDataObj.append('businessActivity', step1Data.businessActivity);
        formDataObj.append('numberOfOwners', step1Data.numberOfOwners);
        formDataObj.append('premisesType', step1Data.premisesType);
        formDataObj.append('numberOfVisas', step1Data.numberOfVisas);
        formDataObj.append('jurisdiction', step1Data.jurisdiction);
        formDataObj.append('firstName', step2Data.firstName);
        formDataObj.append('lastName', step2Data.lastName);
        formDataObj.append('phone', step2Data.phone);
        formDataObj.append('email', step2Data.email);
        formDataObj.append('nationality', step2Data.nationality);

        const { error } = await actions.sendCostCalculatorEmail(formDataObj);

        if (!error) {
            setStatus('success');
            // Reset form after 3 seconds
            setTimeout(() => {
                setCurrentStep(1);
                setStep1Data({
                    businessActivity: '',
                    numberOfOwners: '',
                    premisesType: '',
                    numberOfVisas: '',
                    jurisdiction: '',
                });
                setStep2Data({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    nationality: '',
                });
                setStatus('idle');
            }, 3000);
        } else {
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const handleStep1Change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setStep1Data((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // Clear error for this field
        setStep1Errors((prev) => ({
            ...prev,
            [e.target.name]: undefined,
        }));
    };

    const handleStep2Change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setStep2Data((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // Clear error for this field
        setStep2Errors((prev) => ({
            ...prev,
            [e.target.name]: undefined,
        }));
    };

    return (
        <div ref={componentRef} id="cost-calculator" className="w-full max-w-4xl mx-auto scroll-mt-32" style={{ scrollMarginTop: '140px' }}>
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-4 md:p-6 text-white">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 md:gap-3">
                            <Calculator className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold">Cost Calculator</h2>
                        </div>
                        <div className="text-xs sm:text-sm md:text-base font-semibold bg-white/20 px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg backdrop-blur-sm whitespace-nowrap">
                            Step {currentStep} Of 2
                        </div>
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-4 sm:p-6 md:p-8">
                    {currentStep === 1 ? (
                        /* Step 1: Business Details */
                        <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="mb-4 md:mb-6">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Business Information
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                                    Please provide details about your business setup requirements
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Business Activity */}
                                <div className="space-y-2">
                                    <label htmlFor="businessActivity" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Choose Your Business Activity *
                                    </label>
                                    <select
                                        id="businessActivity"
                                        name="businessActivity"
                                        value={step1Data.businessActivity}
                                        onChange={handleStep1Change}
                                        className={`w-full px-4 py-3 rounded-xl border ${step1Errors.businessActivity
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    >
                                        <option value="">--Please choose an option--</option>
                                        <option value="trading">Trading</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="manufacturing">Manufacturing</option>
                                        <option value="services">Services</option>
                                        <option value="technology">Technology</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {step1Errors.businessActivity && (
                                        <p className="text-red-500 text-sm">{step1Errors.businessActivity}</p>
                                    )}
                                </div>

                                {/* Premises Type */}
                                <div className="space-y-2">
                                    <label htmlFor="premisesType" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        What Type Of Premises Would You Require? *
                                    </label>
                                    <select
                                        id="premisesType"
                                        name="premisesType"
                                        value={step1Data.premisesType}
                                        onChange={handleStep1Change}
                                        className={`w-full px-4 py-3 rounded-xl border ${step1Errors.premisesType
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    >
                                        <option value="">--Please choose an option--</option>
                                        <option value="flexi-desk">Flexi Desk</option>
                                        <option value="office">Office</option>
                                        <option value="warehouse">Warehouse</option>
                                        <option value="virtual">Virtual Office</option>
                                    </select>
                                    {step1Errors.premisesType && (
                                        <p className="text-red-500 text-sm">{step1Errors.premisesType}</p>
                                    )}
                                </div>

                                {/* Number of Owners */}
                                <div className="space-y-2">
                                    <label htmlFor="numberOfOwners" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Number of Owners *
                                    </label>
                                    <input
                                        type="number"
                                        id="numberOfOwners"
                                        name="numberOfOwners"
                                        min="1"
                                        value={step1Data.numberOfOwners}
                                        onChange={handleStep1Change}
                                        placeholder="01, 2"
                                        className={`w-full px-4 py-3 rounded-xl border ${step1Errors.numberOfOwners
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    />
                                    {step1Errors.numberOfOwners && (
                                        <p className="text-red-500 text-sm">{step1Errors.numberOfOwners}</p>
                                    )}
                                </div>

                                {/* Number of Visas */}
                                <div className="space-y-2">
                                    <label htmlFor="numberOfVisas" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Number Of Visas *
                                    </label>
                                    <select
                                        id="numberOfVisas"
                                        name="numberOfVisas"
                                        value={step1Data.numberOfVisas}
                                        onChange={handleStep1Change}
                                        className={`w-full px-4 py-3 rounded-xl border ${step1Errors.numberOfVisas
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    >
                                        <option value="">--Please choose an option--</option>
                                        <option value="0">0</option>
                                        <option value="1-5">1-5</option>
                                        <option value="6-10">6-10</option>
                                        <option value="11-20">11-20</option>
                                        <option value="20+">20+</option>
                                    </select>
                                    {step1Errors.numberOfVisas && (
                                        <p className="text-red-500 text-sm">{step1Errors.numberOfVisas}</p>
                                    )}
                                </div>

                                {/* Jurisdiction */}
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="jurisdiction" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Choose your Jurisdiction *
                                    </label>
                                    <select
                                        id="jurisdiction"
                                        name="jurisdiction"
                                        value={step1Data.jurisdiction}
                                        onChange={handleStep1Change}
                                        className={`w-full px-4 py-3 rounded-xl border ${step1Errors.jurisdiction
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    >
                                        <option value="">--Please choose an option--</option>
                                        <option value="abu-dhabi">Abu Dhabi</option>
                                    </select>
                                    {step1Errors.jurisdiction && (
                                        <p className="text-red-500 text-sm">{step1Errors.jurisdiction}</p>
                                    )}
                                </div>
                            </div>

                            {/* Next Button */}
                            <div className="pt-4 md:pt-6">
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="w-full md:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 md:min-w-[200px]"
                                >
                                    Calculate Now
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Step 2: Contact Information */
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="mb-4 md:mb-6">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Contact Information
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                                    Please provide your contact details to receive the cost estimate
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {/* First Name */}
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={step2Data.firstName}
                                        onChange={handleStep2Change}
                                        className={`w-full px-4 py-3 rounded-xl border ${step2Errors.firstName
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    />
                                    {step2Errors.firstName && (
                                        <p className="text-red-500 text-sm">{step2Errors.firstName}</p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={step2Data.lastName}
                                        onChange={handleStep2Change}
                                        className={`w-full px-4 py-3 rounded-xl border ${step2Errors.lastName
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    />
                                    {step2Errors.lastName && (
                                        <p className="text-red-500 text-sm">{step2Errors.lastName}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={step2Data.phone}
                                        onChange={handleStep2Change}
                                        placeholder="+971 50 123 4567"
                                        className={`w-full px-4 py-3 rounded-xl border ${step2Errors.phone
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    />
                                    {step2Errors.phone && (
                                        <p className="text-red-500 text-sm">{step2Errors.phone}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={step2Data.email}
                                        onChange={handleStep2Change}
                                        placeholder="john@example.com"
                                        className={`w-full px-4 py-3 rounded-xl border ${step2Errors.email
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    />
                                    {step2Errors.email && (
                                        <p className="text-red-500 text-sm">{step2Errors.email}</p>
                                    )}
                                </div>

                                {/* Nationality */}
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="nationality" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Nationality *
                                    </label>
                                    <select
                                        id="nationality"
                                        name="nationality"
                                        value={step2Data.nationality}
                                        onChange={handleStep2Change}
                                        className={`w-full px-4 py-3 rounded-xl border ${step2Errors.nationality
                                            ? 'border-red-500'
                                            : 'border-gray-200 dark:border-gray-600'
                                            } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 outline-none`}
                                    >
                                        <option value="">--Please choose an option--</option>
                                        <option value="UAE">United Arab Emirates</option>
                                        <option value="India">India</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="USA">United States</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {step2Errors.nationality && (
                                        <p className="text-red-500 text-sm">{step2Errors.nationality}</p>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-3 md:gap-4">
                                <button
                                    type="button"
                                    onClick={handlePrevious}
                                    className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 md:min-w-[150px]"
                                >
                                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 md:min-w-[150px]"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                                            <span className="text-sm md:text-base">Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                                            <span className="text-sm md:text-base">Submit</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Success Message */}
                            {status === 'success' && (
                                <div className="p-3 md:p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-xl flex items-start gap-2 md:gap-3 animate-in fade-in slide-in-from-bottom-2">
                                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm md:text-base">Thank you! Your cost estimate request has been submitted successfully. We'll contact you soon.</p>
                                </div>
                            )}

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="p-3 md:p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl flex items-start gap-2 md:gap-3 animate-in fade-in slide-in-from-bottom-2">
                                    <AlertCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm md:text-base">{errorMessage}</p>
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
