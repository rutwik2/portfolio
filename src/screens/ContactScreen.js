import '../css/contactscreen.css'
import {IoMdMail,IoMdPhonePortrait,IoMdHome} from "react-icons/io"
const ContactScreen=()=>{
    return(
        <>
            <div className="contact-div1">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-div2">
                <div>
                    <h1>Email</h1>
                    <IoMdMail className='contact-icon'/>
                    <a href="mailto:rutwikbhatde@gmail.com" className='mail-link'><h2>rutwikbhatde@gmail.com</h2></a>
                </div>
                <div>
                    <h1>Phone No</h1>
                    <IoMdPhonePortrait className='contact-icon'/>
                    <h2>9511227804</h2>
                </div>
                <div>
                    <h1>Address</h1>
                    <IoMdHome className='contact-icon'/>
                    <h2>302 Sai Tower 2 Rajaram Chowk near shivesh park</h2>
                </div>
            </div>
            
        </>
    )
}
export default ContactScreen