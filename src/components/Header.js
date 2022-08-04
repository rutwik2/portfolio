import '../css/header.css'
const Header=()=>{
    return(
        
        <header className='header'>
               <h1>Rutwik Bhatde</h1>
                <div className='div2'>
                    <nav className='nav-bar'>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/resume'>Resume</a>
                        <a href='/project'>Project</a>
                        <a href='/contact'>Contact Me</a>
                    </nav>
                </div>

        </header>
       
        
    )
}
export default Header