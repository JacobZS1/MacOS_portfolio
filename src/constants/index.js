// Ensure assets work both locally and when deployed under a sub-path (Vite base)
const BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/';

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
        img: `${BASE}icons/wifi.svg`,
    },
    {
        id: 2,
        img: `${BASE}icons/search.svg`,
    },
    {
        id: 3,
        img: `${BASE}icons/user.svg`,
    },
    {
        id: 4,
        img: `${BASE}icons/mode.svg`,
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
    /*{
        id: "photos",
        name: "Galeria", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },*/
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
        image: `${BASE}images/fb.webp`,
        link: "https://www.facebook.com/profile.php?id=100090248920498",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "Instagram",
        image: `${BASE}images/ig.webp`,
        link: "https://www.instagram.com/kubcio.exe/",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "TikTok",
        image: `${BASE}images/tt.png`,
        link: "https://www.tiktok.com/@kubcio.exe?_r=1&_t=ZN-91e8b4htWBq",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React", "JavaScript"],
    },
    /*{
        category: "Mobile",
        items: ["React Native", "Expo"],
    },*/
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js"],
    },
    {
        category: "Database",
        items: ["SQLserver", "mySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub"],
    },
];

const socials = [
    {
        id: 1,
        text: "TikTok",
        icon: `${BASE}icons/tiktok.svg`,
        bg: "#f4656b",
        link: "https://www.tiktok.com/@kubcio.exe?_r=1&_t=ZN-91e8b4htWBq",
    },
    /*{
        id: 2,
        text: "Platform",
        icon: `${BASE}icons/atom.svg`,
        bg: "#4bcb63",
        link: "https://jsmastery.com/",
    },*/
    {
        id: 3,
        text: "Twitter/X",
        icon: `${BASE}icons/twitter.svg`,
        bg: "#ff866b",
        link: "https://x.com/kubciooooo?s=21",
    },
    {
        id: 4,
        text: "Facebook",
        icon: `${BASE}icons/facebook.svg`,
        bg: "#05b6f6",
        link: "https://www.facebook.com/profile.php?id=100090248920498",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: `${BASE}icons/gicon1.svg`,
        title: "Library",
    },
    {
        id: 2,
        icon: `${BASE}icons/gicon2.svg`,
        title: "Memories",
    },
    {
        id: 3,
        icon: `${BASE}icons/file.svg`,
        title: "Places",
    },
    {
        id: 4,
        icon: `${BASE}icons/gicon4.svg`,
        title: "People",
    },
    {
        id: 5,
        icon: `${BASE}icons/gicon5.svg`,
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: `${BASE}images/gal1.png`,
    },
    {
        id: 2,
        img: `${BASE}images/gal2.png`,
    },
    {
        id: 3,
        img: `${BASE}images/gal3.png`,
    },
    {
        id: 4,
        img: `${BASE}images/gal4.png`,
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
    icon: `${BASE}icons/work.svg`,
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "DarkOps",
            icon: `${BASE}images/folder.png`,
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[50vh] left-60", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Projekt DarkOps.txt",
                    icon: `${BASE}images/txt.png`,
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
                    icon: `${BASE}images/safari.png`,
                    kind: "file",
                    fileType: "url",
                    href: "https://darkopsproject.github.io/darkops/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "darkops.png",
                    icon: `${BASE}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: `${BASE}images/project-1.png`,
                },
                {
                    id: 5,
                    name: "style.css",
                    icon: `${BASE}images/plain.png`,
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
            icon: `${BASE}images/folder.png`,
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-200",
            children: [
                {
                    id: 1,
                    name: "wizytowka.txt",
                    icon: `${BASE}images/txt.png`,
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
                    icon: `${BASE}images/safari.png`,
                    kind: "file",
                    fileType: "url",
                    href: "https://kubcio.tiiny.site/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "content.png",
                    icon: `${BASE}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: `${BASE}images/project-2.png`,
                },
                {
                    id: 5,
                    name: "style.css",
                    icon: `${BASE}images/plain.png`,
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
            icon: `${BASE}images/folder.png`,
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-350",
            children: [
                {
                    id: 1,
                    name: "Portfolio.txt",
                    icon: `${BASE}images/txt.png`,
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Mowa o właśnie tym portfolio które teraz przeglądasz :)",
                    ],
                },
                /*{
                    id: 2,
                    name: "portfolio.com",
                    icon: `${BASE}images/safari.png`,
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
                    position: "top-10 right-20",
                },*/
                {
                    id: 4,
                    name: "Zyciorys.png",
                    icon: `${BASE}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: `${BASE}images/project-3.png`,
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: `${BASE}images/plain.png`,
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
    icon: `${BASE}icons/info.svg`,
    kind: "folder",
    children: [
        {
            id: 1,
            name: "ja.png",
            icon: `${BASE}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: `${BASE}images/kuba.jpg`,
        },
        {
            id: 2,
            name: "casualowy-ja.png",
            icon: `${BASE}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: `${BASE}images/kuba-2.jpg`,
        },
        {
            id: 3,
            name: "powazny-ja.png",
            icon: `${BASE}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: `${BASE}images/kuba-3.jpeg`,
        },
        {
            id: 4,
            name: "o-mnie.txt",
            icon: `${BASE}images/txt.png`,
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Poznaj kreatora tego portfolio",
            image: `${BASE}images/kuba.jpg`,
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
    icon: `${BASE}icons/file.svg`,
    kind: "folder",
    children: [
        {
            id: 1,
            name: "CV.pdf",
            icon: `${BASE}images/pdf.png`,
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
    icon: `${BASE}icons/trash.svg`,
    kind: "folder",
    children: [
        {
            id: 1,
            name: "pierdola1.png",
            icon: `${BASE}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: `${BASE}images/trash-1.png`,
        },
        {
            id: 2,
            name: "pierdola2.png",
            icon: `${BASE}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: `${BASE}images/trash-2.png`,
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