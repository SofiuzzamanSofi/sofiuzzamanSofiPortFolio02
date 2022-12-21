import machinary1 from "../assets/projectsPic/machinari-sells/machinary-1.JPG"
import machinary2 from "../assets/projectsPic/machinari-sells/Machineries-Sells (1).png"
import sofiVisa1 from "../assets/projectsPic/sofi-visa-hub/Sofi-Visa-Hub-1.JPG"
import sofiVisa2 from "../assets/projectsPic/sofi-visa-hub/Sofi-Visa-Hub.png"
import programmers1 from "../assets/projectsPic/programmers-home/programmers-home-1.JPG"
import programmers2 from "../assets/projectsPic/programmers-home/programmers-home.png"
import bdNews1 from "../assets/projectsPic/bd-news/bd-newx-1.JPG"
import bdNews2 from "../assets/projectsPic/bd-news/bd-newx-2.png"



const projects = [
    {
        id: 1,
        title: "Machineries-sells",
        description:
            "Machineries-sells is a E-commerce website. It sells various kinds of Machineries. User can buy Machineries and Sellers can sells their machines.",
        features: [
            { id: 1, name: "CRUD Operation" },
            { id: 2, name: "Search and Filter functionality" },
            { id: 3, name: "NodeJS authentication with JWT" },
            { id: 4, name: "User  Dashboard" },
            { id: 5, name: "SellersDashboard" },
            { id: 6, name: "Admin Dashboard" },
            { id: 7, name: "Stripe Payment Getaway" },
        ],
        live: "https://machineries-sells.web.app",
        clientSide: "https://github.com/SofiuzzamanSofi/machineries-sells-client.git",
        serverSide: "https://github.com/SofiuzzamanSofi/machineries-sells-server.git",
        coverImage: [
            machinary1
        ],
        detailsImage: [
            machinary2
        ],

        usedTechnology: [
            "React Js",
            "React Router Dom",
            "Axios",
            "React-TanStack-Query",
            "React-Hook-form",
            "Json web token",
            "Tailwind CSS",
            "DaisyUI",
            "Node Js",
            "Express Js",
            "colors",
            "cors",
            "dotenv",
            "stripe",
            "Firebase",
            "MongoDB",
        ],
        projectType: "E-commerce app",
        startTime: "Nov 24",
        endTime: "De 23",
        buildYear: "2022",
    },
    {
        id: 2,
        title: "Sofi-Visa-Hub",
        description:
            "Sofi-Visa-Hub is a personal Visa-Agent site. Visa Agent's services packages prices and clients feedback is included and show by pagination in this website.",
        features: [
            { id: 1, name: "CRUD Operation" },
            { id: 2, name: "Search and Filter functionality" },
            { id: 3, name: "NodeJS authentication with JWT" },
            { id: 4, name: "User Dashboard" },
            { id: 4, name: "User Add services Dashboard" },
        ],
        usedTechnology: [
            "React Js",
            "React Router Dom",
            "Json web token",
            "React-photo-viwer",
            "Tailwind CSS",
            "Flowbite",
            "Node Js",
            "Express Js",
            "colors",
            "cors",
            "dotenv",
            "Firebase",
            "MongoDB",
        ],
        live: "https://sofi-visa-hub.web.app",
        clientSide: "https://github.com/SofiuzzamanSofi/Sofi-Visa-Hub.git",
        serverSide: "https://github.com/SofiuzzamanSofi/Sofi-Visa-Hub-Server.git",
        coverImage: [
            sofiVisa1
        ],
        detailsImage: [
            sofiVisa2
        ],

        projectType: "E-commerce",
        startTime: "Nov 08",
        endTime: "Dec 02",
        buildYear: "2022",
    },
    {
        id: 3,
        title: "Programmers-Home",
        description:
            "Programmers-Home Course Sells based. Here are display course based on many variant. User can show detail and download as pdfFormate.",
        features: [
            { id: 1, name: "CRUD Operation" },
            { id: 2, name: "Filter functionality" },
            { id: 3, name: "Firebase authentication with JWT" },
            { id: 4, name: "User Dashboard" },
            { id: 5, name: "React-Html-2-pdf-downloader" },
        ],
        usedTechnology: [
            "React Js",
            "React Router Dom",
            "Json web token",
            "jspdf",
            "html2canvas",
            "Tailwind CSS",
            "DaisyUI",
            "Node Js",
            "Express Js",
            "colors",
            "cors",
            "dotenv",
            "Firebase",
            "MongoDB",
        ],
        live: "https://programmers-home.web.app",
        clientSide: "https://github.com/SofiuzzamanSofi/programmers-home.git",
        serverSide: "https://github.com/SofiuzzamanSofi/programmers-home-server.git",
        coverImage: [
            programmers1
        ],
        detailsImage: [
            programmers2
        ],

        projectType: "Course-sell's-App",
        startTime: "Oct 24",
        endTime: "Oct 27",
        buildYear: "2022",
    },
    {
        id: 4,
        title: "Bd-News",
        description:
            "Bd-News is a newspaper based website. User can read news by category and go dynamically category news by news category.",
        features: [
            { id: 1, name: "Generated API by me(own)." },
            { id: 2, name: "NodeJS authentication with email and password or google" },
            { id: 3, name: "User login to see details news" },
            { id: 4, name: "Go detail and back from details with category wise" },
        ],
        live: "https://bd-news-clint.firebaseapp.com",
        clientSide: "https://github.com/SofiuzzamanSofi/bd-news-client-side.git",
        serverSide: "https://github.com/SofiuzzamanSofi/bd-news-server.git",
        coverImage: [
            bdNews1
        ],
        detailsImage: [
            bdNews2
        ],

        usedTechnology: [
            "React Js",
            "React Router Dom",
            "Bootstrap CSS",
            "React-bootstrap",
            "Node Js",
            "Express Js",
            "colors",
            "cors",
            "Firebase",
        ],
        projectType: "News paper app",
        startTime: "Oct 19",
        endTime: "Oct 28",
        buildYear: "2022",
    },
];

export default projects;