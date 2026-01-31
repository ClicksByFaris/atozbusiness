export interface ServiceData {
    id: string;
    slug: string;
    name: string;
    icon: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    documents: {
        name: string;
        description?: string;
        required: boolean;
    }[];
    pricing: {
        title: string;
        price: string;
        description: string;
        features: string[];
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    category: string;
    relatedServices: string[];
}

export const SERVICES_DATA: ServiceData[] = [
    {
        id: 'golden-visa',
        slug: 'golden-visa-services',
        name: 'Golden Visa Services',
        icon: 'Award',
        shortDescription: 'Complete assistance for UAE Golden Visa applications. Guaranteed approval support.',
        fullDescription: 'Experience the long-term stability of the UAE with the prestigious Golden Visa. Our dedicated team specializes in handling Golden Visa applications for investors, entrepreneurs, specialized talents, and researchers. We simplify the complex government procedures into a seamless journey, ensuring all your documents are perfectly aligned with ICA and GDRFA requirements. \n\n Whether you are applying under the investor category, real estate ownership, or as a skilled professional, our experts guide you through every step, from eligibility checks to final visa stamping. Enjoy the benefits of a 10-year renewable residence visa, the ability to sponsor family members, and the freedom to live and work in the UAE.',
        features: [
            '10-Year Renewable Residency',
            'No Sponsor Required',
            'Full Family Sponsorship',
            'Stay Outside UAE > 6 Months',
            'Exclusive Health Insurance Options'
        ],
        process: [
            {
                step: 1,
                title: 'Eligibility Assessment',
                description: 'We evaluate your profile against current Golden Visa criteria to ensure you qualify.'
            },
            {
                step: 2,
                title: 'Document Preparation',
                description: 'Our team assists in gathering, attesting, and translating all necessary official documents.'
            },
            {
                step: 3,
                title: 'Application Submission',
                description: 'We submit your application through the official ICA/GDRFA channels with priority handling.'
            },
            {
                step: 4,
                title: 'Medical & Biometrics',
                description: 'We schedule and accompany you for required medical tests and Emirates ID biometrics.'
            },
            {
                step: 5,
                title: 'Visa Stamping',
                description: 'Receive your Golden Visa stamped in your passport and your new Emirates ID.'
            }
        ],
        documents: [
            {
                name: 'Passport Copy',
                description: 'Valid for at least 6 months',
                required: true
            },
            {
                name: 'Current Visa Copy',
                description: 'If applicable',
                required: true
            },
            {
                name: 'Key Qualification Documents',
                description: 'Degree certificates, property deeds, or audit reports depending on category',
                required: true
            },
            {
                name: 'Passport Photo',
                description: 'White background, high quality',
                required: true
            },
            {
                name: 'Medical Insurance',
                description: 'Valid health insurance coverage',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Consultation & Assessment',
                price: 'AED 500',
                description: 'Initial eligibility check and roadmap',
                features: ['Profile Review', 'Document Checklist', 'Process Timeline']
            },
            {
                title: 'Full Service Package',
                price: 'Call for Quote',
                description: 'End-to-end management of your application',
                features: ['Dedicated PRO', 'Document Attestation', 'Application Fees', 'Typing Services']
            }
        ],
        faqs: [
            {
                question: 'What is the minimum salary for a skilled professional Golden Visa?',
                answer: 'Currently, the minimum monthly salary requirement for skilled professionals is AED 30,000.'
            },
            {
                question: 'Can I sponsor my parents with a Golden Visa?',
                answer: 'Yes, Golden Visa holders can sponsor their parents for a 10-year residency without paying a deposit.'
            },
            {
                question: 'Do I need to live in the UAE to keep the visa?',
                answer: 'No, unlike regular residence visas, Golden Visa holders can stay outside the UAE for more than 6 months without their visa becoming invalid.'
            }
        ],
        category: 'Residency',
        relatedServices: ['family-visa-typing', 'pro-services', 'certificate-attestation']
    },
    {
        id: 'pro-services',
        slug: 'pro-services',
        name: 'PRO Services',
        icon: 'Briefcase',
        shortDescription: 'Professional government relations services for all your document needs.',
        fullDescription: 'Navigating UAE government regulations can be time-consuming and complex for businesses. Our Corporate PRO Services are designed to take this burden off your shoulders. We act as your liaison with all government departments, including the Department of Economic Development (DED), Ministry of Labour (MOHRE), and Immigration (GDRFA). \n\n From visa processing for your employees to trade license renewals and regulatory compliance, our experienced PROs handle the legwork. We ensure your business remains compliant with all local laws, avoiding fines and delays, so you can focus on growing your core business operations.',
        features: [
            'Document Clearing',
            'Visa Processing (Employment/Investor)',
            'Trade License Renewal',
            'Labour Card Management',
            'Government Approvals'
        ],
        process: [
            {
                step: 1,
                title: 'Requirement Analysis',
                description: 'We analyze your business needs and identify required government transactions.'
            },
            {
                step: 2,
                title: 'Document Collection',
                description: 'Secure collection of necessary company and employee documents.'
            },
            {
                step: 3,
                title: 'Submission & Follow-up',
                description: 'Our PROs submit applications to relevant authorities and track progress daily.'
            },
            {
                step: 4,
                title: 'Completion & Delivery',
                description: 'Delivery of processed documents, licenses, or visas directly to your office.'
            }
        ],
        documents: [
            {
                name: 'Trade License Copy',
                required: true
            },
            {
                name: 'Establishment Card',
                required: true
            },
            {
                name: 'Signatory ID',
                required: true
            },
            {
                name: 'Employee Documents',
                description: 'Passport, Photos, Degrees (as needed)',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Monthly Retainer',
                price: 'From AED 1,500',
                description: 'Ongoing support for small businesses',
                features: ['5 Transactions/mo', 'Dedicated Account Manager', 'Free Consultation']
            },
            {
                title: 'Per Transaction',
                price: 'Variable',
                description: 'Pay as you go service',
                features: ['Transparent Fees', 'Quick Turnaround', 'No Contract Required']
            }
        ],
        faqs: [
            {
                question: 'What government departments do you cover?',
                answer: 'We cover all major departments including DED, MOHRE, GDRFA, Notary Public, and various municipality services.'
            },
            {
                question: 'How fast can you process an employment visa?',
                answer: 'Standard processing takes 5-7 working days, but we can expedite urgent requests depending on government system approvals.'
            }
        ],
        category: 'Business',
        relatedServices: ['new-company-formation', 'golden-visa-services']
    },
    {
        id: 'family-visa',
        slug: 'family-visa-typing',
        name: 'Family Visa Typing',
        icon: 'Users',
        shortDescription: 'Fast family visa sponsorship services with complete documentation support.',
        fullDescription: 'Bring your family to the UAE with ease. Our Family Visa Typing service handles the entire sponsorship process for your spouse, children, and parents. We understand the emotional importance of family reunification, which is why we prioritize speed and accuracy to avoid any rejections or delays. \n\n We guide you through the latest salary requirements, housing contract (Tawtheeq) rules, and medical test procedures. Whether you are opening a file for the first time or renewing existing residency, our team ensures a hassle-free experience for you and your loved ones.',
        features: [
            'Spouse & Children Sponsorship',
            'Parents Sponsorship',
            'Visa Renewal Services',
            'Status Change Support',
            'Emirates ID Typing'
        ],
        process: [
            {
                step: 1,
                title: 'Document Review',
                description: 'We verify your salary certificate, tenancy contract, and family documents.'
            },
            {
                step: 2,
                title: 'File Opening',
                description: 'Opening a sponsor file with Immigration if not already active.'
            },
            {
                step: 3,
                title: 'Entry Permit / Visa Typing',
                description: 'Typing and submission of the initial entry permit or status change application.'
            },
            {
                step: 4,
                title: 'Medical & ID',
                description: 'Assistance with medical test typing and Emirates ID application.'
            },
            {
                step: 5,
                title: 'Visa Stamping',
                description: 'Final residency stamping on passports.'
            }
        ],
        documents: [
            {
                name: 'Sponsor Passport & Visa',
                required: true
            },
            {
                name: 'Original Emirates ID',
                required: true
            },
            {
                name: 'Salary Certificate/Contract',
                description: 'Attested by MOHRE',
                required: true
            },
            {
                name: 'Tenancy Contract (Tawtheeq)',
                required: true
            },
            {
                name: 'Marriage/Birth Certificates',
                description: 'Attested and translated',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Standard Processing',
                price: 'AED 350',
                description: 'Typing & Service Fees (excl. gov fees)',
                features: ['Application Typing', 'Document Review', 'Status Updates']
            },
            {
                title: 'VIP Service',
                price: 'AED 600',
                description: 'Includes pick-up and drop-off',
                features: ['Doorstep Service', 'Priority Typing', 'Personal Assistance']
            }
        ],
        faqs: [
            {
                question: 'What is the minimum salary to sponsor a family?',
                answer: 'Generally, a minimum salary of AED 4,000 (or AED 3,000 + accommodation) is required to sponsor a spouse and children.'
            },
            {
                question: 'Do I need an attested marriage certificate?',
                answer: 'Yes, your marriage certificate must be attested by the UAE Embassy in your home country and the Ministry of Foreign Affairs (MOFA) in UAE.'
            }
        ],
        category: 'Residency',
        relatedServices: ['golden-visa-services', 'certificate-attestation']
    },
    {
        id: 'company-formation',
        slug: 'new-company-formation',
        name: 'New Company Formation',
        icon: 'Building2',
        shortDescription: 'One-stop solution for setting up your business in Abu Dhabi.',
        fullDescription: 'Start your business journey on the right foot with A to Z Business. We provide comprehensive Company Formation services tailored to your specific industry and goals. Whether you are looking for a Mainland license for maximum market access or a Free Zone setup for 100% ownership, we provide expert advice to make the best choice. \n\n We handle everything: trade name reservation, initial approvals, Memorandum of Association (MOA) drafting, office space assistance, and final license issuance. Our deep understanding of Abu Dhabi Economic Department (ADDED) regulations ensures your business is set up legally and efficiently.',
        features: [
            'Mainland & Free Zone Setup',
            'Trade Name Reservation',
            'Local Sponsor Arrangement',
            'Office Space Solutions',
            'Bank Account Assistance'
        ],
        process: [
            {
                step: 1,
                title: 'Consultation',
                description: 'Determine activity, legal type, and jurisdiction.'
            },
            {
                step: 2,
                title: 'Trade Name & Initial Approval',
                description: 'Reserving your business name and getting initial government consent.'
            },
            {
                step: 3,
                title: 'Legal Documentation',
                description: 'Drafting MOA/LSA agreements and getting necessary external approvals.'
            },
            {
                step: 4,
                title: 'License Issuance',
                description: 'Payment of fees and issuance of the official Trade License.'
            }
        ],
        documents: [
            {
                name: 'Passport Copies of Partners',
                required: true
            },
            {
                name: 'Visit Visa/UID Number',
                description: 'For foreign partners',
                required: true
            },
            {
                name: 'NOC from Current Sponsor',
                description: 'If currently employed in UAE',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Instant License',
                price: 'From AED 2,500',
                description: 'Service fees for digital license setup',
                features: ['Fast Track Setup', 'Virtual Office Options', 'First Year Support']
            },
            {
                title: 'Commercial License',
                price: 'Call for Quote',
                description: 'Full physical company setup',
                features: ['Office Location Support', 'Quota Assistance', 'Investor Visa Process']
            }
        ],
        faqs: [
            {
                question: 'Do I need a local sponsor?',
                answer: 'Recent laws allow 100% foreign ownership for many commercial and industrial activities. We can check if your specific activity is eligible.'
            },
            {
                question: 'How long does it take to get a license?',
                answer: 'With the "Instant License" initiative in Abu Dhabi, many licenses can be issued in less than 24 hours assuming all documents are ready.'
            }
        ],
        category: 'Business',
        relatedServices: ['pro-services', 'tamm-services']
    },
    {
        id: 'tamm-services',
        slug: 'tamm-services',
        name: 'TAMM Services',
        icon: 'Globe',
        shortDescription: 'Expert assistance with all TAMM platform digital government services.',
        fullDescription: 'TAMM is the unified system for Abu Dhabi government services, and navigating it correctly is crucial for timely approvals. We offer specialized TAMM Services assistance to help individuals and businesses manage their digital profiles and transactions efficiently. \n\n From updating personal details and paying utility bills to complex municipal permits and parking subscriptions (Mawaqif), our team is trained on the latest platform updates. We ensure your digital pass (UAE Pass) is linked correctly and all your government transactions are processed without technical hiccups.',
        features: [
            'Digital Profile Management',
            'Municipality Services',
            'Mawaqif (Parking) Permits',
            'Utility Payments',
            'Social Support Applications'
        ],
        process: [
            {
                step: 1,
                title: 'Account Access',
                description: 'Secure login assistance via UAE Pass.'
            },
            {
                step: 2,
                title: 'Service Selection',
                description: 'Identifying the correct service path within the TAMM ecosystem.'
            },
            {
                step: 3,
                title: 'Application Entry',
                description: 'Accurate data entry and document uploading.'
            },
            {
                step: 4,
                title: 'Confirmation',
                description: 'Payment processing and receipt generation.'
            }
        ],
        documents: [
            {
                name: 'Emirates ID',
                required: true
            },
            {
                name: 'UAE Pass App',
                description: 'Active account on mobile',
                required: true
            },
            {
                name: 'Relevant Supporting Docs',
                description: 'Depends on specific service request',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Service Fee',
                price: 'AED 50 - 100',
                description: 'Per transaction handling fee',
                features: ['Quick Processing', 'Issue Resolution', 'Receipt Printing']
            }
        ],
        faqs: [
            {
                question: 'What is TAMM?',
                answer: 'TAMM is the official digital platform that aggregates all Abu Dhabi government services into one place.'
            },
            {
                question: 'Can you help if my UAE Pass is blocked?',
                answer: 'We can guide you to the nearest kiosk or support center to reset your credentials, then proceed with your services.'
            }
        ],
        category: 'General',
        relatedServices: ['family-visa-typing', 'new-company-formation']
    },
    {
        id: 'certificate-attestation',
        slug: 'certificate-attestation',
        name: 'Certificate Attestation',
        icon: 'FileCheck',
        shortDescription: 'Complete document attestation services for educational and personal certificates.',
        fullDescription: 'Certificate attestation is a crucial requirement for many government and private processes in the UAE. We provide comprehensive attestation services for all types of documents including educational certificates, marriage certificates, birth certificates, and commercial documents. Our team handles the entire attestation chain from your home country embassy to UAE MOFA, saving you time and eliminating the confusion of dealing with multiple government departments.\n\nWhether you need attestation for employment purposes, business setup, visa applications, or any other official requirement, we ensure your documents are processed correctly and efficiently. We maintain strong relationships with embassies and government offices to expedite the process.',
        features: [
            'Educational Certificate Attestation',
            'Personal Document Attestation',
            'Commercial Document Attestation',
            'Embassy Attestation Services',
            'MOFA Attestation'
        ],
        process: [
            {
                step: 1,
                title: 'Document Verification',
                description: 'We review your documents to determine the required attestation chain.'
            },
            {
                step: 2,
                title: 'Home Country Processing',
                description: 'Coordination with relevant authorities in your home country if needed.'
            },
            {
                step: 3,
                title: 'Embassy Attestation',
                description: 'Submission to the relevant embassy in UAE for attestation.'
            },
            {
                step: 4,
                title: 'MOFA Attestation',
                description: 'Final attestation from UAE Ministry of Foreign Affairs.'
            }
        ],
        documents: [
            {
                name: 'Original Certificate',
                description: 'The document to be attested',
                required: true
            },
            {
                name: 'Passport Copy',
                required: true
            },
            {
                name: 'Visa Page',
                description: 'If applicable',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Standard Service',
                price: 'From AED 250',
                description: 'Regular processing time',
                features: ['Embassy Attestation', 'MOFA Attestation', 'Status Updates']
            },
            {
                title: 'Express Service',
                price: 'From AED 450',
                description: 'Fast-track processing',
                features: ['Priority Processing', 'Same-Day Collection', 'Personal Handler']
            }
        ],
        faqs: [
            {
                question: 'How long does attestation take?',
                answer: 'Standard attestation takes 5-7 working days. Express service can complete in 2-3 days depending on the embassy.'
            },
            {
                question: 'Do I need to attest the original certificate?',
                answer: 'Yes, attestation must be done on original documents. Photocopies are not accepted.'
            }
        ],
        category: 'Documentation',
        relatedServices: ['family-visa-typing', 'golden-visa-services']
    },
    {
        id: 'trade-license-renewal',
        slug: 'trade-license-renewal',
        name: 'Trade License Renewal',
        icon: 'RefreshCw',
        shortDescription: 'Hassle-free trade license renewal services for all business types.',
        fullDescription: 'Keep your business running smoothly with our Trade License Renewal services. We handle the entire renewal process for businesses in Abu Dhabi, whether you operate in the mainland or free zone. Our team ensures timely renewals to avoid penalties and business disruptions.\n\nWe manage tenancy contract renewals, MOA amendments if needed, and all government fee payments. With our service, you can focus on running your business while we handle the bureaucratic requirements.',
        features: [
            'Mainland License Renewal',
            'Free Zone License Renewal',
            'Tenancy Contract Management',
            'MOA Amendment Support',
            'Government Fee Payment'
        ],
        process: [
            {
                step: 1,
                title: 'Document Collection',
                description: 'Gathering current license, tenancy contract, and other required documents.'
            },
            {
                step: 2,
                title: 'Compliance Check',
                description: 'Ensuring all regulatory requirements are met for smooth renewal.'
            },
            {
                step: 3,
                title: 'Renewal Submission',
                description: 'Processing renewal through DED or relevant authority.'
            },
            {
                step: 4,
                title: 'License Issuance',
                description: 'Receiving and delivering your renewed trade license.'
            }
        ],
        documents: [
            {
                name: 'Current Trade License',
                required: true
            },
            {
                name: 'Tenancy Contract',
                description: 'Valid Ejari/Tawtheeq',
                required: true
            },
            {
                name: 'Passport Copies of Partners',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Renewal Service',
                price: 'From AED 500',
                description: 'Complete renewal processing',
                features: ['Document Processing', 'Government Submission', 'License Collection']
            }
        ],
        faqs: [
            {
                question: 'When should I renew my trade license?',
                answer: 'Licenses should be renewed before the expiry date. We recommend starting the process 30 days before expiration.'
            },
            {
                question: 'What happens if my license expires?',
                answer: 'Expired licenses incur penalties. Contact us immediately to minimize fines and expedite renewal.'
            }
        ],
        category: 'Business',
        relatedServices: ['new-company-formation', 'pro-services']
    },
    {
        id: 'emirates-id-services',
        slug: 'emirates-id-services',
        name: 'Emirates ID Services',
        icon: 'CreditCard',
        shortDescription: 'Complete Emirates ID application, renewal, and replacement services.',
        fullDescription: 'Your Emirates ID is your official identification in the UAE. We provide comprehensive Emirates ID services including new applications, renewals, replacements for lost or damaged cards, and updates for personal information changes.\n\nOur team handles the entire process from biometrics appointment booking to card collection, ensuring you receive your Emirates ID without unnecessary delays or errors.',
        features: [
            'New Emirates ID Application',
            'Emirates ID Renewal',
            'Lost/Damaged Card Replacement',
            'Information Update',
            'Biometrics Assistance'
        ],
        process: [
            {
                step: 1,
                title: 'Application Typing',
                description: 'Preparing your Emirates ID application with accurate information.'
            },
            {
                step: 2,
                title: 'Appointment Booking',
                description: 'Scheduling biometrics appointment at ICP center.'
            },
            {
                step: 3,
                title: 'Biometrics Completion',
                description: 'Guidance through fingerprint and photo capture process.'
            },
            {
                step: 4,
                title: 'Card Collection',
                description: 'Receiving your Emirates ID card.'
            }
        ],
        documents: [
            {
                name: 'Passport with Valid Visa',
                required: true
            },
            {
                name: 'Residency Visa Copy',
                required: true
            },
            {
                name: 'Previous Emirates ID',
                description: 'For renewal or replacement',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Standard Processing',
                price: 'AED 150',
                description: 'Typing and application submission',
                features: ['Application Typing', 'Appointment Booking', 'Status Tracking']
            }
        ],
        faqs: [
            {
                question: 'How long does Emirates ID take?',
                answer: 'Processing typically takes 5-10 working days after biometrics completion.'
            },
            {
                question: 'Can I renew before expiry?',
                answer: 'Yes, you can renew up to 30 days before the expiry date.'
            }
        ],
        category: 'Residency',
        relatedServices: ['family-visa-typing', 'golden-visa-services']
    },
    {
        id: 'visa-cancellation',
        slug: 'visa-cancellation',
        name: 'Visa Cancellation Services',
        icon: 'XCircle',
        shortDescription: 'Professional visa cancellation services for employment and residency visas.',
        fullDescription: 'When it\'s time to leave the UAE or change employment, proper visa cancellation is essential to avoid fines and future entry bans. We handle all types of visa cancellations including employment visas, investor visas, and family visas.\n\nOur team ensures all dues are cleared, final settlement documents are processed, and your cancellation is completed smoothly with all government departments.',
        features: [
            'Employment Visa Cancellation',
            'Family Visa Cancellation',
            'Investor Visa Cancellation',
            'Final Settlement Support',
            'No Objection Certificate'
        ],
        process: [
            {
                step: 1,
                title: 'Document Collection',
                description: 'Gathering passport, Emirates ID, and cancellation approval.'
            },
            {
                step: 2,
                title: 'Clearance Processing',
                description: 'Ensuring all fines and dues are settled.'
            },
            {
                step: 3,
                title: 'Cancellation Submission',
                description: 'Processing cancellation through Immigration.'
            },
            {
                step: 4,
                title: 'Exit Confirmation',
                description: 'Receiving cancellation confirmation and grace period details.'
            }
        ],
        documents: [
            {
                name: 'Original Passport',
                required: true
            },
            {
                name: 'Original Emirates ID',
                required: true
            },
            {
                name: 'Cancellation Letter/NOC',
                description: 'From sponsor/employer',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Cancellation Service',
                price: 'From AED 300',
                description: 'Complete cancellation processing',
                features: ['Document Processing', 'Government Submission', 'Status Updates']
            }
        ],
        faqs: [
            {
                question: 'How long is the grace period?',
                answer: 'You typically have 30 days from cancellation to leave the UAE or change your visa status.'
            },
            {
                question: 'Can I cancel without my sponsor?',
                answer: 'In most cases, you need sponsor approval. We can guide you through special circumstances.'
            }
        ],
        category: 'Residency',
        relatedServices: ['family-visa-typing', 'pro-services']
    },
    {
        id: 'health-insurance',
        slug: 'health-insurance-assistance',
        name: 'Health Insurance Assistance',
        icon: 'Heart',
        shortDescription: 'Guidance on health insurance requirements for visas and residency.',
        fullDescription: 'Health insurance is mandatory for all UAE visa holders. We assist you in understanding insurance requirements and connecting you with approved insurance providers that meet government standards.\n\nWhether you need basic coverage for visa processing or comprehensive family plans, we guide you to the right insurance solution for your needs and budget.',
        features: [
            'Insurance Provider Recommendations',
            'Coverage Requirement Guidance',
            'Family Plan Assistance',
            'Visa Compliance Check',
            'Renewal Support'
        ],
        process: [
            {
                step: 1,
                title: 'Requirement Assessment',
                description: 'Understanding your visa type and insurance needs.'
            },
            {
                step: 2,
                title: 'Provider Options',
                description: 'Presenting approved insurance providers and plans.'
            },
            {
                step: 3,
                title: 'Application Support',
                description: 'Assisting with insurance application process.'
            },
            {
                step: 4,
                title: 'Policy Delivery',
                description: 'Ensuring you receive compliant insurance documentation.'
            }
        ],
        documents: [
            {
                name: 'Passport Copy',
                required: true
            },
            {
                name: 'Visa/Emirates ID',
                required: true
            },
            {
                name: 'Salary Certificate',
                description: 'If applicable',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Consultation',
                price: 'Free',
                description: 'Insurance guidance and provider connection',
                features: ['Provider Recommendations', 'Plan Comparison', 'Application Support']
            }
        ],
        faqs: [
            {
                question: 'Is health insurance mandatory?',
                answer: 'Yes, valid health insurance is mandatory for all visa applications and renewals in Abu Dhabi.'
            },
            {
                question: 'Can you process insurance for me?',
                answer: 'We provide guidance and connect you with approved providers. The insurance company will process your policy.'
            }
        ],
        category: 'General',
        relatedServices: ['family-visa-typing', 'golden-visa-services']
    },
    {
        id: 'tenancy-contract',
        slug: 'tenancy-contract-services',
        name: 'Tenancy Contract (Tawtheeq) Services',
        icon: 'Home',
        shortDescription: 'Ejari and Tawtheeq registration services for visa and business needs.',
        fullDescription: 'A registered tenancy contract (Tawtheeq in Abu Dhabi, Ejari in Dubai) is required for family visa sponsorship and business licensing. We handle the entire registration process with Abu Dhabi Municipality.\n\nOur service ensures your contract is properly registered in the government system, providing you with the official certificate needed for visa applications and other government services.',
        features: [
            'Tawtheeq Registration',
            'Contract Renewal Updates',
            'Cancellation Services',
            'Amendment Processing',
            'Certificate Printing'
        ],
        process: [
            {
                step: 1,
                title: 'Contract Review',
                description: 'Verifying tenancy contract details and landlord information.'
            },
            {
                step: 2,
                title: 'Online Registration',
                description: 'Submitting contract details through TAMM platform.'
            },
            {
                step: 3,
                title: 'Approval',
                description: 'Receiving municipality approval and registration number.'
            },
            {
                step: 4,
                title: 'Certificate Delivery',
                description: 'Providing official Tawtheeq certificate.'
            }
        ],
        documents: [
            {
                name: 'Original Tenancy Contract',
                description: 'Signed by both parties',
                required: true
            },
            {
                name: 'Title Deed Copy',
                required: true
            },
            {
                name: 'Tenant Emirates ID/Passport',
                required: true
            },
            {
                name: 'Landlord Emirates ID',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Tawtheeq Service',
                price: 'AED 100',
                description: 'Registration and certificate',
                features: ['Online Registration', 'Certificate Printing', 'Status Tracking']
            }
        ],
        faqs: [
            {
                question: 'How long does Tawtheeq take?',
                answer: 'Registration is typically completed within 1-2 working days if all documents are correct.'
            },
            {
                question: 'Is Tawtheeq mandatory?',
                answer: 'Yes, for family visa sponsorship and business licensing in Abu Dhabi, Tawtheeq registration is mandatory.'
            }
        ],
        category: 'Documentation',
        relatedServices: ['family-visa-typing', 'new-company-formation']
    },
    {
        id: 'employment-visa',
        slug: 'employment-visa-services',
        name: 'Employment Visa Services',
        icon: 'Briefcase',
        shortDescription: 'Complete employment visa processing for companies and employees.',
        fullDescription: 'Streamline your company\'s hiring process with our comprehensive Employment Visa services. We handle everything from work permit applications to final visa stamping for your employees.\n\nOur team coordinates with MOHRE, Immigration, and other authorities to ensure smooth processing. We keep you updated at every stage and handle any issues that arise during the process.',
        features: [
            'Work Permit Processing',
            'Entry Permit Application',
            'Medical Test Coordination',
            'Visa Stamping',
            'Labour Card Issuance'
        ],
        process: [
            {
                step: 1,
                title: 'Work Permit',
                description: 'Applying for work permit through MOHRE.'
            },
            {
                step: 2,
                title: 'Entry Permit',
                description: 'Processing entry permit for employee to enter UAE.'
            },
            {
                step: 3,
                title: 'Medical \u0026 Emirates ID',
                description: 'Scheduling medical test and Emirates ID application.'
            },
            {
                step: 4,
                title: 'Final Stamping',
                description: 'Visa stamping and labour card issuance.'
            }
        ],
        documents: [
            {
                name: 'Employee Passport Copy',
                description: 'Valid for 6+ months',
                required: true
            },
            {
                name: 'Educational Certificates',
                description: 'Attested degrees',
                required: true
            },
            {
                name: 'Company License \u0026 Card',
                required: true
            },
            {
                name: 'Employment Contract',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Full Service Package',
                price: 'From AED 800',
                description: 'Complete visa processing',
                features: ['All Government Fees', 'PRO Services', 'Medical Test Booking', 'Status Updates']
            }
        ],
        faqs: [
            {
                question: 'How long does employment visa take?',
                answer: 'Complete processing takes 2-3 weeks from work permit to final stamping under normal circumstances.'
            },
            {
                question: 'Can we cancel and replace visas?',
                answer: 'Yes, we handle visa cancellations and new applications for employee replacements.'
            }
        ],
        category: 'Business',
        relatedServices: ['pro-services', 'new-company-formation']
    },
    {
        id: 'investor-visa',
        slug: 'investor-visa-services',
        name: 'Investor Visa Services',
        icon: 'TrendingUp',
        shortDescription: 'Investor visa processing for business owners and partners.',
        fullDescription: 'As a business owner in the UAE, you\'re entitled to an investor visa. We handle the complete process of obtaining your investor residence visa linked to your company.\n\nThis visa allows you to sponsor family members and stay in the UAE without needing external sponsorship. We ensure all your company documents are in order and process your visa efficiently.',
        features: [
            'Partner/Owner Visa Processing',
            'Family Sponsorship Rights',
            'Long-term Residency Options',
            'Medical \u0026 Emirates ID',
            'Renewal Services'
        ],
        process: [
            {
                step: 1,
                title: 'Eligibility Check',
                description: 'Verifying company status and share capital requirements.'
            },
            {
                step: 2,
                title: 'Application Submission',
                description: 'Processing investor visa application through Immigration.'
            },
            {
                step: 3,
                title: 'Medical Processing',
                description: 'Completing required medical tests.'
            },
            {
                step: 4,
                title: 'Visa Issuance',
                description: 'Final visa stamping and Emirates ID.'
            }
        ],
        documents: [
            {
                name: 'Passport Copy',
                required: true
            },
            {
                name: 'Trade License',
                required: true
            },
            {
                name: 'Memorandum of Association',
                required: true
            },
            {
                name: 'Establishment Card',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Investor Visa Package',
                price: 'From AED 1,200',
                description: 'Complete processing for business owners',
                features: ['Application Processing', 'Medical Coordination', 'Emirates ID', 'PRO Support']
            }
        ],
        faqs: [
            {
                question: 'Do I qualify for an investor visa?',
                answer: 'Business owners and partners with minimum share capital (varies by emirate and business type) qualify for investor visas.'
            },
            {
                question: 'Can I sponsor family with investor visa?',
                answer: 'Yes, investor visa holders can sponsor family members subject to salary/accommodation requirements.'
            }
        ],
        category: 'Business',
        relatedServices: ['new-company-formation', 'family-visa-typing']
    },
    {
        id: 'freelance-permit',
        slug: 'freelance-permit-services',
        name: 'Freelance Permit Services',
        icon: 'Laptop',
        shortDescription: 'Freelance work permits and virtual company licenses for independent professionals.',
        fullDescription: 'Work independently in the UAE with our Freelance Permit services. We help professionals obtain freelance licenses that allow you to work for multiple clients legally without a traditional employer sponsor.\n\nWhether you\'re in media, consulting, design, or other freelance fields, we guide you through selecting the right jurisdiction and obtaining all necessary permits.',
        features: [
            'Freelance License Processing',
            'Multiple Client Authorization',
            'Residence Visa Included',
            'Virtual Office Options',
            'Flexible Activities'
        ],
        process: [
            {
                step: 1,
                title: 'Consultation',
                description: 'Determining the best freelance license type for your activity.'
            },
            {
                step: 2,
                title: 'Application',
                description: 'Submitting freelance permit application to chosen authority.'
            },
            {
                step: 3,
                title: 'License Issuance',
                description: 'Receiving freelance permit/license.'
            },
            {
                step: 4,
                title: 'Visa Processing',
                description: 'Processing residence visa under your own sponsorship.'
            }
        ],
        documents: [
            {
                name: 'Passport Copy',
                required: true
            },
            {
                name: 'Portfolio/CV',
                description: 'Demonstrating expertise',
                required: true
            },
            {
                name: 'Educational Certificates',
                description: 'If applicable',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Freelance Setup',
                price: 'From AED 7,500',
                description: 'License and visa package',
                features: ['License Processing', 'Residence Visa', 'Emirates ID', 'First Year Support']
            }
        ],
        faqs: [
            {
                question: 'Which activities can I do as a freelancer?',
                answer: 'Most creative, consulting, and professional services are available. We\'ll check your specific activity eligibility.'
            },
            {
                question: 'Can I sponsor family?',
                answer: 'Yes, freelance permit holder can sponsor family members subject to meeting income requirements.'
            }
        ],
        category: 'Business',
        relatedServices: ['new-company-formation', 'investor-visa']
    },
    {
        id: 'document-translation',
        slug: 'document-translation-services',
        name: 'Document Translation Services',
        icon: 'Languages',
        shortDescription: 'Certified translation services for all official documents.',
        fullDescription: 'Accurate certified translation is essential for government processes in the UAE. We provide professional translation services for all types of documents with certified translators approved by UAE authorities.\n\nOur translations are accepted by all government departments, embassies, and official institutions. We handle Arabic, English, and other major languages.',
        features: [
            'Certified Legal Translation',
            'Arabic-English Translation',
            'Embassy Approved Translators',
            'Fast Turnaround',
            'Formatting Maintained'
        ],
        process: [
            {
                step: 1,
                title: 'Document Submission',
                description: 'Providing documents for translation.'
            },
            {
                step: 2,
                title: 'Translation',
                description: 'Professional certified translation by approved translators.'
            },
            {
                step: 3,
                title: 'Verification',
                description: 'Quality check and certification.'
            },
            {
                step: 4,
                title: 'Delivery',
                description: 'Receiving certified translated documents.'
            }
        ],
        documents: [
            {
                name: 'Original Document',
                description: 'Document to be translated',
                required: true
            },
            {
                name: 'Clear Copy/Scan',
                description: 'If original cannot be provided',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Per Page Translation',
                price: 'From AED 50',
                description: 'Standard document translation',
                features: ['Certified Translation', 'Stamp \u0026 Signature', 'Digital Copy Included']
            }
        ],
        faqs: [
            {
                question: 'How long does translation take?',
                answer: 'Standard translation is completed within 1-2 working days. Urgent same-day service available.'
            },
            {
                question: 'Are your translators certified?',
                answer: 'Yes, all our translators are certified and approved by UAE Ministry of Justice.'
            }
        ],
        category: 'Documentation',
        relatedServices: ['certificate-attestation', 'family-visa-typing']
    },
    {
        id: 'business-bank-account',
        slug: 'business-bank-account-assistance',
        name: 'Business Bank Account Assistance',
        icon: 'Building',
        shortDescription: 'Guidance for opening corporate bank accounts in UAE.',
        fullDescription: 'Opening a business bank account in the UAE requires proper documentation and understanding of bank requirements. We provide comprehensive assistance in preparing your documents and guiding you through the bank account opening process.\n\nWe help you choose the right bank for your business needs and ensure you have all required documents properly prepared for smooth account opening.',
        features: [
            'Bank Selection Guidance',
            'Document Preparation',
            'Introduction Letter',
            'Multiple Bank Options',
            'Follow-up Support'
        ],
        process: [
            {
                step: 1,
                title: 'Requirements Review',
                description: 'Understanding your business banking needs.'
            },
            {
                step: 2,
                title: 'Bank Recommendations',
                description: 'Suggesting suitable banks based on your business type.'
            },
            {
                step: 3,
                title: 'Document Preparation',
                description: 'Ensuring all company documents are ready for submission.'
            },
            {
                step: 4,
                title: 'Bank Introduction',
                description: 'Facilitating introduction to bank and providing support letters.'
            }
        ],
        documents: [
            {
                name: 'Trade License',
                required: true
            },
            {
                name: 'Memorandum of Association',
                required: true
            },
            {
                name: 'Partner Passports \u0026 Visas',
                required: true
            },
            {
                name: 'Emirates ID of Partners',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Assistance Service',
                price: 'AED 500',
                description: 'Document prep and bank introduction',
                features: ['Bank Recommendations', 'Document Review', 'Introduction Letter', 'Follow-up Support']
            }
        ],
        faqs: [
            {
                question: 'Can you open the account for me?',
                answer: 'Banks require partners to be present. We prepare all documents and guide you through the process, but you must attend the bank.'
            },
            {
                question: 'How long does it take?',
                answer: 'Account opening typically takes 1-2 weeks after document submission, depending on the bank\'s due diligence process.'
            }
        ],
        category: 'Business',
        relatedServices: ['new-company-formation', 'pro-services']
    },
    {
        id: 'notary-services',
        slug: 'notary-public-services',
        name: 'Notary Public Services',
        icon: 'Stamp',
        shortDescription: 'Document notarization and power of attorney services.',
        fullDescription: 'Many legal and business transactions require notarized documents. We provide complete notary public services for all your document notarization needs in Abu Dhabi.\n\nFrom power of attorney to affidavits, sales agreements to personal declarations, we handle the notarization process efficiently at Abu Dhabi courts and notary public offices.',
        features: [
            'Power of Attorney Notarization',
            'Contract Notarization',
            'Affidavit Services',
            'Document Authentication',
            'Court Notary Processing'
        ],
        process: [
            {
                step: 1,
                title: 'Document Review',
                description: 'Reviewing documents to be notarized for completeness.'
            },
            {
                step: 2,
                title: 'Notary Appointment',
                description: 'Scheduling appointment at notary public office.'
            },
            {
                step: 3,
                title: 'Notarization',
                description: 'Completing notarization with all parties present if required.'
            },
            {
                step: 4,
                title: 'Certified Copy',
                description: 'Receiving notarized document copies.'
            }
        ],
        documents: [
            {
                name: 'Original Document',
                description: 'Document to be notarized',
                required: true
            },
            {
                name: 'Emirates ID/Passport',
                description: 'Of all parties',
                required: true
            },
            {
                name: 'Supporting Documents',
                description: 'As required by document type',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Notary Service',
                price: 'From AED 200',
                description: 'Per document notarization',
                features: ['Notary Coordination', 'PRO Assistance', 'Certified Copies']
            }
        ],
        faqs: [
            {
                question: 'Do I need to be present?',
                answer: 'Yes, for most notarizations, the person granting authority (e.g., in POA) must be physically present with Emirates ID.'
            },
            {
                question: 'How long is a notarized POA valid?',
                answer: 'Power of attorney validity depends on the terms specified in the document. It can be time-limited or open-ended.'
            }
        ],
        category: 'Documentation',
        relatedServices: ['certificate-attestation', 'document-translation-services']
    },
    {
        id: 'maid-visa',
        slug: 'domestic-helper-visa',
        name: 'Domestic Helper (Maid) Visa',
        icon: 'UserCheck',
        shortDescription: 'Domestic worker visa processing for your household help.',
        fullDescription: 'Sponsor a domestic helper legally with our comprehensive maid visa services. We handle the complete process from work permit to final visa stamping for your household domestic worker.\n\nEnsure compliance with UAE labor laws while bringing reliable household support. We guide you through all requirements including contract registration and medical insurance.',
        features: [
            'Maid/Helper Work Permit',
            'Entry Permit Processing',
            'Contract Registration',
            'Medical Test Coordination',
            'Visa Stamping'
        ],
        process: [
            {
                step: 1,
                title: 'Eligibility Check',
                description: 'Verifying sponsor qualifications for domestic worker visa.'
            },
            {
                step: 2,
                title: 'Permit Application',
                description: 'Processing work permit through MOHRE.'
            },
            {
                step: 3,
                title: 'Entry Permit',
                description: 'Obtaining entry permit for domestic worker.'
            },
            {
                step: 4,
                title: 'Medical \u0026 Stamping',
                description: 'Medical tests and final visa stamping.'
            }
        ],
        documents: [
            {
                name: 'Sponsor Passport \u0026 Visa',
                required: true
            },
            {
                name: 'Sponsor Emirates ID',
                required: true
            },
            {
                name: 'Salary Certificate',
                description: 'Minimum salary requirement applies',
                required: true
            },
            {
                name: 'Tenancy Contract',
                required: true
            },
            {
                name: 'Helper Passport \u0026 Photo',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Complete Service',
                price: 'From AED 1,200',
                description: 'Full domestic worker visa processing',
                features: ['Work Permit', 'Entry Permit', 'Medical Coordination', 'Visa Stamping', 'Contract Registration']
            }
        ],
        faqs: [
            {
                question: 'What is the minimum salary to sponsor a maid?',
                answer: 'The minimum salary requirement varies but typically around AED 10,000 or equivalent housing allowance.'
            },
            {
                question: 'Can I transfer a domestic worker?',
                answer: 'Yes, domestic worker transfers are possible with proper NOC and following MOHRE procedures.'
            }
        ],
        category: 'Residency',
        relatedServices: ['family-visa-typing', 'visa-cancellation']
    },
    {
        id: 'typing-services',
        slug: 'government-typing-services',
        name: 'Government Typing Services',
        icon: 'FileText',
        shortDescription: 'Professional typing services for all government applications and forms.',
        fullDescription: 'Accurate typing is crucial for government application success. Our experienced typists handle all types of government forms and applications with precision, ensuring no errors that could cause delays or rejections.\n\nFrom simple forms to complex applications, we type all documents in the correct format required by UAE government departments, saving you time and preventing costly mistakes.',
        features: [
            'All Government Forms',
            'Immigration Applications',
            'Municipality Forms',
            'Court Applications',
            'Error-Free Typing'
        ],
        process: [
            {
                step: 1,
                title: 'Information Collection',
                description: 'Gathering all required information for the form.'
            },
            {
                step: 2,
                title: 'Expert Typing',
                description: 'Professional typing according to government specifications.'
            },
            {
                step: 3,
                title: 'Verification',
                description: 'Double-checking all details for accuracy.'
            },
            {
                step: 4,
                title: 'Submission Ready',
                description: 'Delivering completed forms ready for submission.'
            }
        ],
        documents: [
            {
                name: 'Required Information',
                description: 'Details needed for the specific form',
                required: true
            },
            {
                name: 'Supporting Documents',
                description: 'Original documents to reference',
                required: true
            }
        ],
        pricing: [
            {
                title: 'Per Form Typing',
                price: 'From AED 30',
                description: 'Professional typing service',
                features: ['Accurate Entry', 'Government Format', 'Quick Service', 'Verification Included']
            }
        ],
        faqs: [
            {
                question: 'How long does typing take?',
                answer: 'Most forms are typed within 30 minutes to 1 hour depending on complexity.'
            },
            {
                question: 'Do you submit the forms too?',
                answer: 'Yes, we can handle both typing and submission as part of our PRO services.'
            }
        ],
        category: 'General',
        relatedServices: ['pro-services', 'tamm-services']
    },
    {
        id: 'vehicle-registration',
        slug: 'vehicle-registration-services',
        name: 'Vehicle Registration Services',
        icon: 'Car',
        shortDescription: 'Vehicle registration and traffic fine assistance.',
        fullDescription: 'Stay compliant with UAE traffic regulations with our vehicle registration assistance. We help with new vehicle registration, registration renewals, and traffic fine payments.\n\nOur team handles the paperwork and coordinates with traffic departments to ensure your vehicle registration is up to date and all fines are cleared for smooth registration renewal.',
        features: [
            'New Vehicle Registration',
            'Registration Renewal',
            'Traffic Fine Payment',
            'Ownership Transfer Support',
            'Export/Import Assistance'
        ],
        process: [
            {
                step: 1,
                title: 'Fine Check',
                description: 'Checking for any outstanding traffic fines.'
            },
            {
                step: 2,
                title: 'Insurance Verification',
                description: 'Ensuring valid vehicle insurance is in place.'
            },
            {
                step: 3,
                title: 'Registration Processing',
                description: 'Processing registration through traffic department.'
            },
            {
                step: 4,
                title: 'Sticker \u0026 Documents',
                description: 'Receiving registration card and sticker.'
            }
        ],
        documents: [
            {
                name: 'Vehicle Registration Card',
                description: 'Current registration',
                required: true
            },
            {
                name: 'Insurance Certificate',
                description: 'Valid comprehensive insurance',
                required: true
            },
            {
                name: 'Emirates ID',
                description: 'Vehicle owner',
                required: true
            },
            {
                name: 'Vehicle Test Certificate',
                description: 'If vehicle is older than 3 years',
                required: false
            }
        ],
        pricing: [
            {
                title: 'Registration Service',
                price: 'AED 150',
                description: 'Registration processing assistance',
                features: ['Fine Check', 'Document Processing', 'Traffic Dept Coordination']
            }
        ],
        faqs: [
            {
                question: 'When should I renew my vehicle registration?',
                answer: 'Vehicle registration should be renewed before the expiry date. We recommend starting 30 days before expiration.'
            },
            {
                question: 'Can you pay my traffic fines?',
                answer: 'Yes, we can check and pay traffic fines on your behalf as part of our service.'
            }
        ],
        category: 'General',
        relatedServices: ['tamm-services', 'government-typing-services']
    }
];
