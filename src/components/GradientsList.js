import Gradient from "./Gradient"
import { useContext } from "react"
import { GradientContext } from "./../context/GradientContext"


const GradientsList = () => {
  
  const { filter, gradientList} = useContext(GradientContext)

  const list = gradientList.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <>
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { end, id, name, start, tags = [] } = el
        return (
          <Gradient
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
            key={id}
            id={id}
          />
        )
      })}
    </ul>
    
    </>
  )
}

export default GradientsList
