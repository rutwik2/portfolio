import "../css/projectscreen.css"
import project1 from "../img/project1.png"
import project2 from "../img/project2.png"
const ProjectScreen=()=>{
    return(
        <>
            <div className="project-div1">
                <h1>Projects</h1>
            </div>
            <div className="project-div2">
                <div className="project-div3">
                    <img src={project1} alt='project1' className="project-img"/><br></br>
                    <a href="https://github.com/rutwik2/shopping" className="code-link">View Code</a>
                </div>
                <div className="project-div3">
                    <img src={project2} alt='project1' className="project-img"/><br></br>
                    <a href="https://github.com/rutwik2/technoweb" className="code-link">View Code</a>
                </div>
            </div>
        </>
        
        
    )
}
export default ProjectScreen