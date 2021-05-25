import { useState, useEffect } from "react"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {
  const [filter, setFilter] = useState("all")

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
      <GradientsSelect filter={filter} setFilter={setFilter} />
      <GradientsList filter={filter} setFilter={setFilter} />
    </>
  )
}

export default Gradients
