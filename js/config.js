/**
 * Portfolio Configuration
 * Quick reference for common customization values
 */

// ============ PERSONAL INFO ============
const PERSONAL_INFO = {
    name: "Jang",
    title: "Full Stack Developer",
    subtitle: "HELLO THERE 👋",
    description: "Welcome to my developer portfolio! I'm a passionate Full Stack Developer specializing in Laravel, PHP, and modern web technologies. I craft beautiful, scalable, and user-centric applications that solve real-world problems.",
    email: "fernandojohncris@gmail.com",
    github: "jangiethegreat",
    linkedin: "john-cris-fernando",
    location: "Available for Remote Work"
};

// ============ STATS ============
const STATS = {
    projects: "5+",
    experience: "2+",
    clients: "3+"
};

// ============ SOCIAL LINKS ============
const SOCIAL_LINKS = {
    github: "https://github.com/jangiethegreat",
    linkedin: "https://linkedin.com/in/john-cris-fernando",
    email: "mailto:fernandojohncris@gmail.com"
};

// ============ SKILLS ============
const SKILLS = {
    backend: ["PHP", "Laravel", "REST API", "MySQL", "Python"],
    frontend: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "React", "Vue.js"],
    tools: ["Git", "GitHub", "VPN Setup", "Server Deployment", "Composer"],
    other: ["Problem Solving", "Team Collaboration", "Database Design", "System Architecture", "Debugging"]
};



// ============ WORK EXPERIENCE ============
const WORK_EXPERIENCE = [
    {
        role: "Freelance Developer",
        company: "Self-Employed",
        period: "October 2023 – Present",
        current: true,
        responsibilities: [
            "Delivering custom web applications and solutions for diverse clients",
            "Specializing in full-stack development with Laravel, PHP, and modern JavaScript frameworks",
            "Managing end-to-end project lifecycle from requirements gathering to deployment"
        ],
        techStack: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'REST API', 'Python']
    },
    {
        role: "System Developer",
        company: "ACMSI",
        period: "October 2023 – January 2025",
        current: false,
        responsibilities: [
            "Developed and maintained web applications using Laravel, PHP, and MySQL",
            "Built and integrated REST APIs for mobile apps and internal systems",
            "Collaborated with a small development team to design features, solve issues, and deliver stable releases",
            "Designed scalable database schemas and optimized frequently queried tables",
            "Handled deployment on in-house servers, including setup of VPN, environment configuration, and system monitoring",
            "Supported day-to-day operations such as report automation, data processing, and troubleshooting system issues"
        ],
        techStack: ["Laravel", "PHP", "MySQL", "REST API"]
    }
];

// ============ PROJECTS ============
const PROJECTS = [
    {
        title: "Field Operation Collection Update System (FOCUS)",
        description: "FOCUS is a real-time field operations platform that tracks collectors' live locations, assigns tasks, and generates activity reports using a mobile app and web dashboard.",
        image: "images/Focus.png",
        tech: ["Laravel", "MySQL", "Bootstrap", "REST API", "Open Maps API", "Java"], 
        link: "#"
    },
    {
        title: "BINANCE P2P ArbiPrice",
        description: "Smart P2P Price Changer – An automated tool that monitors Binance P2P listings and dynamically adjusts prices to stay near the top of the order book, maximizing visibility and trading opportunities while maintaining safe margins.",
        image: "images/binance.jpg",
        tech: ["PHP", "MySQL", "REST API", "Laravel"],
        link: "#"
    },
    {
        title: "BYBIT P2P ArbiPrice",
        description: "Smart P2P Price Changer – An automated tool that monitors Bybit P2P listings and dynamically adjusts prices to stay near the top of the order book, maximizing visibility and trading opportunities while maintaining safe margins.",
        image: "images/bybit.jpg",
        tech: ["Flask", "Python", "REST API"],
        link: "#"
    }
];

// ============ COLOR THEME ============
const COLORS = {
    light: {
        primary: "#000",
        secondary: "#ca8a04",
        accent: "#4caf50",
        textDark: "#1f2937",
        textLight: "#6b7280",
        background: "#faf5ff"
    },
    dark: {
        primary: "#fff",
        secondary: "#facc15",
        accent: "#4caf50",
        textDark: "#f1f5f9",
        textLight: "#f1f5f9",
        background: "#333"
    }
};

// ============ ANIMATION SETTINGS ============
const ANIMATION = {
    duration: 800,
    easing: "ease-in-out",
    offset: 100,
    once: true
};

// ============ ICONS FOR SKILLS ============
const SKILL_ICONS = {
    backend: "server-outline",
    frontend: "desktop-outline",
    tools: "construct-outline",
    other: "bulb-outline"
};

// ============ EXPORT ============
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PERSONAL_INFO,
        STATS,
        SOCIAL_LINKS,
        SKILLS,
        WORK_EXPERIENCE,
        PROJECTS,
        COLORS,
        ANIMATION,
        SKILL_ICONS
    };
}
