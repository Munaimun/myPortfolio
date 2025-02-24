import complete_ecom from "../assets/project-images/complete-ecommerce.png"
import intelitalk from "../assets/project-images/intelitalk.png"
import top_course from "../assets/project-images/topcourses.png"
import viewfinder from "../assets/project-images/viewfinder.jpg"
import quiz from "../assets/project-images/quiz.jpg"
import hospital from "../assets/project-images/hospital.png"

// work data

export const Work = [
    {
        id: 1,
        name: "Complete E-commerce",
        image: complete_ecom,
        description: "Implemented product categorization, a dynamic cart system for adding and removing items, add to favorite section and a user authentication system for secure login. Integrated a payment system.",
        tags: ["react", "redux", "firebase", "axios", "zustand", "react-paginate"],

        demo: "https://complete-e-commerce-7v1b.vercel.app/",
        github: "https://github.com/Munaimun/Complete_E-commerce"
    },
    {
        id: 2,
        name: "Ai-Powered Chatbot- InteliTalk",
        description: "Created a chatbot application that utilizes Axios to handle API requests for seamless data fetching from the backend and implements secure user authorization using JWT. A streamlined chat interface for accessing university information, complemented by an admin panel for efficient database management.",
        image: intelitalk,
        tags: ["react", "tailwind", "axios"],

        demo: "https://intelitalk.onrender.com/",
        github: "https://github.com/dev-saiful/InteliTalk/tree/frontend"

    },
    {
        id: 3,
        name: "Top Courses - Course catalog application",
        image: top_course,
        description: "A dynamic course catalog application that interacts with an API to fetch and display various courses.The user interface includes some category buttons for easy course filtering. Implemented a toast feature, allowing users to 'like' and receive feedback on their preferred courses instantly.",
        tags: ["react", "REST-api", "tailwind"],

        demo: "https://top-courses-eight-ecru.vercel.app/",
        github: "https://github.com/Munaimun/TopCourses"
    },
    {
        id: 5,
        name: "ViewFinder - Tour Packages Application",
        image: viewfinder,
        description: "Developed a comprehensive Tour Packages Application, featuring detailed information on various tourist destinations. Implemented a user-friendly interface to showcase package details.",
        tags: ["react", "tailwind", "react-toast"],

        demo: "https://view-finder-nine.vercel.app/",
        github: "https://github.com/Munaimun/ViewFinder"

    },
    {
        id: 6,
        name: "Quiz App",
        image: quiz,
        description: "Developed a quiz application using Vanilla JS that asks questions about JavaScript concepts, testing users' knowledge and providing an engaging learning experience.",
        tags: ["JavaScript", "HTML", "CSS"],

        demo: "https://munaimun.github.io/ScriptTest/",
        github: "https://github.com/Munaimun/ScriptTest"

    },
    {
        id: 6,
        name: "Hospital Website",
        image: hospital,
        description: "Developed a modern and responsive hospital website with an intuitive user interface. The platform includes features like doctor listings, appointment booking, patient management, and service details.",
        tags: ["react", "tailwind", "router-dom"],

        demo: "https://hospital-website-five.vercel.app/",
        github: "https://github.com/Munaimun/hospital_website"

    },

] 