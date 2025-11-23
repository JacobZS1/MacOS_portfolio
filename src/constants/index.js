const navLinks = [
    {
        id: 1,
        name: "Projekty",
        type: "finder",
    },
    {
        id: 3,
        name: "Kontakt",
        type: "contact",
    },
    {
        id: 4,
        name: "Życiorys",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Social Media", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Galeria", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Kontakt", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Umiejętności", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archiwum", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "Facebook",
        image: "/images/fb.webp",
        link: "https://www.facebook.com/profile.php?id=100090248920498",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "Instagram",
        image: "/images/ig.webp",
        link: "https://www.instagram.com/kubcio.exe/",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "TikTok",
        image: "/images/tt.png",
        link: "https://www.tiktok.com/@kubcio.exe?_r=1&_t=ZN-91e8b4htWBq",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "TikTok",
        icon: "/icons/tiktok.svg",
        bg: "#f4656b",
        link: "https://www.tiktok.com/@kubcio.exe?_r=1&_t=ZN-91e8b4htWBq",
    },
    /*{
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://jsmastery.com/",
    },*/
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/kubciooooo?s=21",
    },
    {
        id: 4,
        text: "Facebook",
        icon: "/icons/facebook.svg",
        bg: "#05b6f6",
        link: "https://www.facebook.com/profile.php?id=100090248920498",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Prace",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "DarkOps",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Projekt DarkOps.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Wspólny projekt z kolegą z klasy na temat cyberbezpieczeństwa i Dark Netu"
                    ],
                },
                {
                    id: 2,
                    name: "darkops.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://darkopsproject.github.io/darkops/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "darkops.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "style.css",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Strona Wizytówka",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "wizytowka.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Jeden z pierwszych moich projektów, spędziłem nad nim całą noc, a tylko prosta wizytówka",
                        "Każdy od czegoś zaczyna prawda?"
                    ],
                },
                {
                    id: 2,
                    name: "wizytowka.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://kubcio.tiiny.site/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "content.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "style.css",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Portfolio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Portfolio.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Mowa o właśnie tym portfolio które teraz przeglądasz :)",
                    ],
                },
                {
                    id: 2,
                    name: "portfolio.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Zyciorys.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "O mnie",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "ja.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/kuba.jpg",
        },
        {
            id: 2,
            name: "casualowy-ja.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/kuba-2.jpg",
        },
        {
            id: 3,
            name: "powazny-ja.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/kuba-3.jpeg",
        },
        {
            id: 4,
            name: "o-mnie.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Poznaj kreatora tego portfolio",
            image: "/images/kuba.jpg",
            description: [
                "Hej! Jestem Kuba 👋, staram się tworzyć projekty, które nie tylko wyglądają świetnie, ale też działają bez zacięć.",
                "Poza programowaniem najczęściej bawię się layoutami o 2 w nocy, popijam drogie kawy albo impulsywnie kupuję gadżety, które absolutnie “musiałem mieć” 😅"
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "CV",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "CV.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Kosz",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "pierdola1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "pierdola2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };