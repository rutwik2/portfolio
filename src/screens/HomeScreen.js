import "../css/homescreen.css"
import {RiReactjsFill} from "react-icons/ri"
import {ImCss3,ImHtmlFive} from "react-icons/im"
import {IoLogoJavascript} from "react-icons/io"
import {DiNodejsSmall,DiMongodb} from "react-icons/di"
import {SiExpress,SiMonzo} from "react-icons/si"
import {BsStarFill,BsStar,BsStarHalf} from "react-icons/bs"
const HomeScreen=()=>{
    return(
        <>
            <div className="body1">
                <h1>Hi I am</h1>
                <h2>Rutwik Bhatde</h2>
                
                <h3>Full-stack Developer</h3>
                <p>To work with maximum potential in a challenging , dynamic and professional
Environment , with an opportunity of working with diverse group of people
Where I am utilize and my knowledge and enhance my professional skills
With learning experience for career growth and fulfilling organizational
Goals</p>
            </div>

            <div className='body2'>
                <h1>My skills</h1>
                <hr></hr>
                <div className="body3">
                    <div className="body4">
                        <h2>Frontend</h2>
                        <ul>
                            
                        <RiReactjsFill className="icon"/><li>Reactjs<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStar className="star-icon"/></span></li><hr></hr> 
                       
                        <ImHtmlFive className="icon"/> <li>HTML<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarHalf className="star-icon"/></span></li><hr></hr>
                        <ImCss3 className="icon"/>   <li>CSS<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarHalf className="star-icon"/></span></li><hr></hr>
                        <IoLogoJavascript className="icon" />  <li>Javascript<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStar className="star-icon"/></span></li>
                            
                        </ul>
                    </div>
                    <div className="body4">
                        <h2>Backend</h2>
                        <ul>
                        <DiNodejsSmall className="icon"/><li>Nodejs<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStar className="star-icon"/></span></li><hr></hr>
                        <SiExpress className="icon"/><li>Expressjs<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStar className="star-icon"/></span></li><hr></hr>
                        <DiMongodb className="icon"/><li>MongoDB<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStar className="star-icon"/></span></li><hr></hr>
                        <SiMonzo className="icon"/><li>Mongoos<br/>
                        <span><BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStarFill className="star-icon"/><BsStarFill className="star-icon"/>
                        <BsStar className="star-icon"/></span></li>
                            
                        </ul>
                    </div>
                </div>

            </div>
        </>
        
    )
}
export default HomeScreen