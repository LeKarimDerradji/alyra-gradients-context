import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import {useContext} from 'react'
import { GradientContext } from "./../context/GradientContext"

const Gradients = () => {

  const {loading} = useContext(GradientContext)

  return (
    <>
      {loading && <p className="text-center">loading...</p>}
      <GradientsSelect/>
      <GradientsList />
      
    </>
  )
}

export default Gradients
