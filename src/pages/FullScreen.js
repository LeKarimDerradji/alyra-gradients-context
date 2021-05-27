import React from 'react'
import GradientsList from '../components/GradientsList'
import {useParams, Link} from 'react-router-dom'
import {useContext} from 'react'
import { GradientContext } from "./../context/GradientContext"

const FullScreen = () => {
    
   const {id} = useParams()

    return (

        <>
          <div className="flex-fill d-flex" style="background-image: linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80));">
            <nav className="fixed-top nav">
              <li className="nav-item">
                <Link className="btn btn-dark text-white nav-link me-2" href="/">Tous</Link>
              </li>
              <li clasName="nav-item">
                <Link className="btn btn-dark text-white nav-link" href={`/gradient/${id + 1}`} >Suivant</Link>
              </li>
            </nav> 
          <div className="m-auto text-center">
            <h1 className="text-white display-1">Grade Grey</h1>
          <div className="bg-white shadow p-2 rounded">
              <code>background-image: linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80));</code>
          </div>
              </div>
           </div>
</>

    )
}

export default FullScreen
