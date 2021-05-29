import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useContext} from 'react'
import { GradientContext } from "./../context/GradientContext"

const FullScreen = () => {

      let { id } = useParams();
      
      const {gradientList} = useContext(GradientContext)
      const list = gradientList;


      return (
          
         <>
         <div className="flex-fill d-flex min-vh-100 d-flex flex-column" style={{backgroundImage: `linear-gradient(to right, ${list[Number(id) - 1 ].start ?? Number(id) - 28}, ${list[Number(id) -1 ].end})`}}>
            <nav className="fixed-top nav">
              <li className="nav-item">
                <Link className="btn btn-dark text-white nav-link me-2" to="/">Tous</Link>
                </li>
               <li className="nav-item">
                  <Link to={`/gradient/${(Number(id) + 1)}`} className='btn btn-outline-dark w-100'>Suivant</Link>
               </li>
            </nav> 
            <div className="m-auto text-center">
                  <h1 className="text-white display-1">{list[id - 1].name}</h1>
                  <div className="bg-white shadow p-2 rounded">
                      <code>background-image: linear-gradient(to right, {list[id -1 ].start}, {list[id - 1].end});</code>
                 </div>
         </div>
      </div>
      </>
      )
}

export default FullScreen
