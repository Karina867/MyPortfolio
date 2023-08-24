import projImg1 from "../../../assets/img/project-img2.png";
import projImg2 from "../../../assets/img/project-img2.png";
import projImg3 from "../../../assets/img/project-img3.png";

const SHOW_PROJECTS = 'SHOW_PROJECTS'
const projects = [
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    },
];

const showProjects = data => {
    return {
        type: SHOW_PROJECTS,
        payload: projects
    }
}

export default showProjects;