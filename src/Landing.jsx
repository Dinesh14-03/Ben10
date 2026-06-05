import './App.css'
import bg_green from './asset/bg_green.jpg'
import ben1 from './asset/ben1.png'  
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate()
  return (
    <div className='container'>
      <img src={bg_green} className='Base'/>
      <img src={ben1} className='Overlay'/>
      <div className='card'>
        <h1 className='title'>Ben Tennyson</h1>
        <p className='desc'>
          Ben Tennyson, a 10-year-old boy who discovers the Omnitrix — 
          a powerful alien device that allows him to transform into 
          10 different alien heroes. With his cousin Gwen and Grandpa Max, 
          Ben fights villains across the galaxy using courage, wit, and 
          the power of the Omnitrix.
        </p>
        <button className='btn' onClick={()=>navigate('/vid')}>Action</button>
      </div>
    </div>
  )
}

export default Landing