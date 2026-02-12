// About page data structure
// Fill in the marked fields with your company information
// Each field has a comment indicating how many lines or words to provide

export interface AboutData {
    // Company founding and history
    companyInfo: {
        foundingYear: string;  // 1 line: e.g., "2014"
        history: string;       // 3-4 sentences: Brief company history
    };

    // Mission and vision statements
    statements: {
        mission: string;       // 1-2 sentences: What you aim to provide
        vision: string;        // 1-2 sentences: Your long-term goal (optional)
    };

    // Core values (3-5 values)
    values: {
        name: string;          // 1-2 words: Value name (e.g., "Integrity")
        description: string;   // 1-2 sentences: What this value means
        icon: string;          // 1 word: Icon name from lucide-react
    }[];

    // Team section configuration
    team: {
        showTeam: boolean;     // true or false: Include team section?
        teamDescription?: string;  // 1-2 sentences: About your team (optional)
        members?: {            // Team member details (optional)
            name: string;      // Full name
            role: string;      // Job title
            photo?: string;    // Photo URL or path (optional)
            isLeader?: boolean; // Highlight as leader
        }[];
    };

    // Statistics to display
    statistics: {
        label: string;         // 2-4 words: e.g., "Years in Business"
        value: string;         // 1 word/number: e.g., "10+"
        icon: string;          // 1 word: Icon name from lucide-react
    }[];
}

// Fill in your company information below
export const ABOUT_DATA: AboutData = {
    companyInfo: {
        foundingYear: '2017',
        history: 'A to Z Business Services started with a simple goal: to make government paperwork in the UAE stress-free for everyone. We recognized that navigating immigration and licensing can be overwhelming, so we built a center where individuals and businesses can find every solution under one roof. Today, we are proud to be the bridge between our clients and government entities, ensuring every application is handled with precision and care.'
    },

    statements: {
        mission: 'To simplify life in the UAE by providing fast, accurate, and comprehensive government transaction services, ensuring peace of mind for every family and business we serve.',
        vision: 'To be Abu Dhabi’s most reliable "one-stop" destination for government services, known for efficiency, expert guidance, and a personal touch.'
    },

    values: [
        {
            name: 'Efficiency & Speed',
            description: 'We value your time. We work diligently to get your applications done right the first time, avoiding unnecessary delays.',
            icon: 'Zap'
        },
        {
            name: 'Transparency & Trust',
            description: 'No hidden fees or confusing jargon. We provide honest guidance at every step so you never have to guess the status of your application.',
            icon: 'Shield'
        },
        {
            name: 'Customer-Centric Care',
            description: 'We don’t just process documents; we listen. Whether for family or business, we offer the best solution for your specific situation.',
            icon: 'Heart'
        }
    ],

    team: {
        showTeam: true,
        teamDescription: 'Our team consists of experienced PROs, typing specialists, and legal translation experts who are fluent in local regulations and committed to helpful service.',
        members: [
            {
                name: 'Mohammed Alhur Al Suwaidi',
                role: 'Senior PRO & Owner',
                isLeader: true,
            },
            {
                name: 'Ahmed Hassan',
                role: 'PRO Specialist',
            },
            {
                name: 'Fatima Al Mansouri',
                role: 'Typing Center Manager',
            },
            {
                name: 'Khalid Ibrahim',
                role: 'Legal Translation Expert',
            },
            {
                name: 'Sara Abdullah',
                role: 'Customer Service Lead',
            },
        ]
    },

    statistics: [
        {
            label: 'Years in Business',
            value: '8+',
            icon: 'Calendar'
        },
        {
            label: 'Happy Clients',
            value: '5,000+',
            icon: 'Users'
        },
        {
            label: 'Success Rate',
            value: '99%',
            icon: 'TrendingUp'
        },
        {
            label: 'Services Offered',
            value: '100+',
            icon: 'Briefcase'
        }
    ]
};
