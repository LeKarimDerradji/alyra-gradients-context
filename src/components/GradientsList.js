import Gradient from "./Gradient"
import { gradients } from "../gradients"
import { useContext } from "react"
import { FilterContext } from "./../context/FilterContext"

const GradientsList = () => {
  // Fetch la data, transformer la donnée en tableau et la passée dans le return. 
  // Transformer filter / setFilter en useContext. 
  const { filter } = useContext(FilterContext)

  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end, tags = [] } = el
        return (
          <Gradient
            key={name}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
