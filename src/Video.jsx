import { useNavigate } from 'react-router-dom'
import './App.css'
import intro_song from './asset/intro_song.mp4'

function Video(){
    const navigate = useNavigate()
    return(
        <div className='container'>
         <video autoPlay loop className='video'>
            <source src={intro_song}></source>
         </video>
         <button className='video-btn' onClick={()=>navigate('/char')}>Adventure</button>
        </div>
    )
}
export default Video