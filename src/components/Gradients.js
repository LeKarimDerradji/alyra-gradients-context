import { useEffect } from "react"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {

  useEffect(() => {
    fetch("https://gradients-api.herokuapp.com/gradients")
      .then((response) => {
        if (!response.ok) {
          throw new Error("something went wrong")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])
  

  return (
    <>
      <GradientsSelect/>
      <GradientsList />
    </>
  )
}

export default Gradients
