import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from './screens/AboutScreen';
import ResumeScreen from './screens/ResumeScreen';
import ProjectScreen from './screens/ProjectScreen';
import ContactScreen from './screens/ContactScreen';
import './css/app.css'
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div className='div1'>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/about' element={<AboutScreen/>}/>
            <Route path='/resume' element={<ResumeScreen/>}/>
            <Route path="/project" element={<ProjectScreen/>}/>
            <Route path='/contact' element={<ContactScreen/>}/>
          </Routes>
        </div>

    </BrowserRouter>
    
      
      
    
    
  );
}

export default App;
