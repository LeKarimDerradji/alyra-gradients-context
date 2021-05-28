import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useContext} from 'react'
import { GradientContext } from "./../context/GradientContext"

const FullScreen = () => {
      
      const {id} = useParams()
      const { filter, gradientList} = useContext(GradientContext)
      const list = gradientList;

      return (
         <>
         <div className="flex-fill d-flex" style={{backgroundImage: `linear-gradient(to right, ${list[id]?.start}, ${list[id]?.end})`}}>
            <nav className="fixed-top nav">
              <li className="nav-item">
                <a className="btn btn-dark text-white nav-link me-2" href="/">Tous</a>
                </li>
               <li className="nav-item">
                  <a className="btn btn-dark text-white nav-link" href="/gradient/2">Suivant</a>
               </li>
            </nav> 
            <div className="m-auto text-center">
                  <h1 className="text-white display-1">Grade Grey</h1>
                  <div className="bg-white shadow p-2 rounded">
                  <code>background-image: linear-gradient(to right, {list[id]?.start}, {list[id]?.end});</code>
            </div>
         </div>
      </div>
      </>
      )
}

export default FullScreen
