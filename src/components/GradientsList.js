import Gradient from "./Gradient"
import { useContext } from "react"
import { GradientContext } from "./../context/GradientContext"


const GradientsList = ({ }) => {
  
  const { filter, gradientList, loading} = useContext(GradientContext)


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
        const { name, start, end, tags, id = [] } = el
        return (
          <Gradient
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
            key={id}
          />
        )
      })}
    </ul>
    {loading && <p className="text-center">loading...</p>}
    </>
  )
}

export default GradientsList
