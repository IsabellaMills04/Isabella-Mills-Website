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
        description: "During a summer internship at a healthcare revenue cycle management company SparkChange, I redesigned their client-facing website's navigation and various pages from the ground up. Starting in Figma, I developed new layouts focused on clarity and usability, then brought those designs to life using ReactJS, HTML, and CSS in WebStorm. Translating mockups directly into a polished, functional product used by real clients in the future was an incredibly fulfilling experience!",
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
            "Phoenix Code",
        ],
        images: [
            Furry1,
            Furry2,
            Furry3,
            Furry4,
            Furry5,
            Furry6,
        ], 
        description: (
            <>
                During my Web Development II course, my group and I collaboratively designed and developed a multi-page website for a fictional dog grooming business, Furry Fresh Grooming. It simulated a real client experience where we were provided with a set of requirements and could consult our professor as the client for additional direction. We began with a Figma prototype before building the site in Phoenix Code using HTML, CSS, and JavaScript. We used GitHub to manage workflows and for deployment. My group collaborated on the home page and independently developed the services and contact pages. View the{" "}
                <a 
                href="https://334fa24.github.io/client-project-group-2mitchellathy-sedbrookmills/" 
                target="_blank" 
                rel="noreferrer" 
                style={{
                    color: "var(--pink-dark)", 
                    fontWeight: "bold",
                    // fontStyle: "italic",
                    textDecoration: "none",
                }}>
                    live site here
                </a>!
            </>
        ),
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
        description: "An assignment in my Web Publishing course tasked me with redesigning an above-the-fold section of a local Mexican restaurant's website, El Maguey. Finding the original navigation and visual design unclear and inconsistent, I researched how larger Mexican restaurant brands approach their above-the-fold layouts for inspiration. After, I built my design in Adobe InDesign. I made intentional font choices to better align with El Maguey's existing logo and used their brand colors, red and green,  more consistently throughout the design to create a more cohesive first impression.",
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
        description: "In my Digital Art Studio course,  I was tasked with creating a fictional magazine in Adobe InDesign. WebCraft is a magazine centered on trends in digital media and web development. I made purposeful typographic and visual decisions throughout, like selecting fonts that reflect a modern, technical vibe and a cool-toned color palette to match the digital theme. The magazine features articles I selected on topics spanning web design trends, development tutorials, and industry highlights. It was fun project where I could bring a subject I'm passionate about into a design-focused project, and it pushed me to sharpen my layout and typographic skills in InDesign!",
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
        description: "I was tasked with creating a brochure for a local company or campus organization of my choosing in my Media Design course. I chose to design one for my sorority, Sigma Kappa, referencing their official branding guide to ensure the design stayed true to the organization's branding. The brochure covers our chapter at Northwest Missouri State University, including our values, philanthropies, and the formal recruitment process, as well as contact information for our chapter president and VP of Recruitment and other social media handles.",
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
        description: "As Homecoming Banner Head for Sigma Kappa, I designed and led the creation of our chapter's homecoming banner for Northwest Missouri State University's fall 2025 homecoming. Working with the theme of children's books, I created a 'Flat Stanley' inspired book cover featuring Bobby the Bearcat surrounded by recognizable campus landmarks. I designed the artwork in Adobe Illustrator, then traced and hand-painted the final design onto a queen-sized bedsheet. The banner took first place among all participating sororities and fraternities!",
    },
    {
        id: 7,
        title: "Greek Week Banner",
        category: "design",
        tools: ["GIMP", "Canva"],
        images:[
            GreekWeek1,
            GreekWeek2,
        ],
        description: "As Sigma Kappa's Banner Chair, I designed our chapter's Greek Week banner in collaboration with our paired fraternity. Working with a Nickelodeon theme, I created a Fairly OddParents inspired design that incorporated the theme 'Greekalodeon' alongside our Greek letters. I built the design using GIMP and Canva, then traced and hand-painted the final artwork onto a queen-sized bedsheet. The banner earned second place out of the four competing Greek teams!",
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
        description: "In my Media Design course, I designed an Instagram ad and a recruitment flyer, given 30 minutes in class for each. They were for Northwest Missouri State University's Communication & Mass Media department. For the Instagram ad, I followed Northwest's official branding guide to ensure the design stayed consistent with the university's visual identity. Both completed designs were then presented to the class and received feedback.",
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
        description: "Alongside Julianna Marshall and Brooklen Black, I co-authored a study comparing how effectively five AI chatbots (ChatGPT, Claude, DeepSeek, Google Gemini, and Meta AI) could recreate a control webpage from a detailed prompt. We evaluated each output against the control and graded both code quality and chatbot usability. Across both our Spring and Fall 2025 research, Claude consistently produced the most accurate output and best user experience, though we found varying code quality and best practices across all chatbots. We presented our findings as a research posters at CCSC in Des Moines, IA and MINK WIC in Kansas City, MO.",
    }

]

export default portfolioData
