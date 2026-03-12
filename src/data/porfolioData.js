import Spark1 from "../assets/portfolio/spark1.webp"
import Spark2 from "../assets/portfolio/spark2.webp"
import Spark3 from "../assets/portfolio/spark3.webp"
import Spark4 from "../assets/portfolio/spark4.webp"
import Spark5 from "../assets/portfolio/spark5.webp"
import Spark6 from "../assets/portfolio/spark6.webp"
import Spark7 from "../assets/portfolio/spark7.webp"

import Furry1 from "../assets/portfolio/furry1.webp"
import Furry2 from "../assets/portfolio/furry2.webp"
import Furry3 from "../assets/portfolio/furry3.webp"
import Furry4 from "../assets/portfolio/furry4.webp"
import Furry5 from "../assets/portfolio/furry5.webp"
import Furry6 from "../assets/portfolio/furry6.webp"

import elMags1 from "../assets/portfolio/elMags1.webp"
import elMags2 from "../assets/portfolio/elMags2.webp"

import webCraft1 from "../assets/portfolio/webCraft1.webp"
import webCraft2 from "../assets/portfolio/webCraft2.webp"
import webCraft3 from "../assets/portfolio/webCraft3.webp"
import webCraft4 from "../assets/portfolio/webCraft4.webp"
import webCraft5 from "../assets/portfolio/webCraft5.webp"
import webCraft6 from "../assets/portfolio/webCraft6.webp"

import SigKapBrochure1 from "../assets/portfolio/sigKapBrochure1.webp"
import SigKapBrochure2 from "../assets/portfolio/sigKapBrochure2.webp"

import HocoBanner1 from "../assets/portfolio/hocoBanner1.webp"
import HocoBanner2 from "../assets/portfolio/hocoBanner2.webp"

import GreekWeek1 from "../assets/portfolio/greekWeek1.webp"
import GreekWeek2 from "../assets/portfolio/greekWeek2.webp"

import InstagramAd from "../assets/portfolio/instagramAd.webp"
import KZLXFlyer from "../assets/portfolio/KZLXFlyer.webp"

import Research1 from "../assets/portfolio/research1.webp"
import Research2 from "../assets/portfolio/research2.webp"
import Research3 from "../assets/portfolio/research3.webp"
import Research4 from "../assets/portfolio/research4.webp"
import Research5 from "../assets/portfolio/research5.webp"
import Research6 from "../assets/portfolio/research6.webp"


const portfolioData = [
    {
        id: 1,
        title: "SparkChange Client Website", 
        category: "web", 
        tools: [
            "HTML",
            "CSS",
            "ReactJS",
            "WebStorm",
            "Figma",
        ],
        images: [
            Spark1,
            Spark2,
            Spark3,
            Spark4,
            Spark5,
            Spark6,
            Spark7,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 2,
        title: "Furry Fresh Grooming Website", 
        category: "web", 
        tools: [
            "HTML", 
            "CSS", 
            "JavaScript",
            "Figma",
        ],
        images: [
            Furry1,
            Furry2,
            Furry3,
            Furry4,
            Furry5,
            Furry6,
        ], 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 3,
        title: "El Maguey Home Page",
        category: "design",
        tools: ["InDesign"],
        images:[
            elMags1,
            elMags2,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 4,
        title: "WebCraft Magazine",
        category: "design",
        tools: ["InDesign"],
        images:[
            webCraft1,
            webCraft2,
            webCraft3,
            webCraft4,
            webCraft5,
            webCraft6,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 5,
        title: "Sigma Kappa Brochure",
        category: "design",
        tools: ["InDesign"],
        images:[
            SigKapBrochure1,
            SigKapBrochure2,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
        id: 6,
        title: "Homecoming Banner",
        category: "design",
        tools: ["Adobe Illustrator"],
        images:[
            HocoBanner1,
            HocoBanner2,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 7,
        title: "Greek Week Banner",
        category: "design",
        tools: ["Adobe Illustrator", "Canva"],
        images:[
            GreekWeek1,
            GreekWeek2,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 8,
        title: "Northwest Instagram Ad & Flyer",
        category: "design",
        tools: ["InDesign"],
        images:[
            InstagramAd,
            KZLXFlyer,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 9,
        title: "AI Generated Webpages Research",
        category: "other",
        tools: ["Research","AI Chatbots", "Code Analysis"],
        images: [
            Research1,
            Research2,
            Research3,
            Research4,
            Research5,
            Research6,
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }

]

export default portfolioData
