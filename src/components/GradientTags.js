import GradientTagButton from "./GradientTagButton"
import { useContext } from "react"
import { FilterContext } from "./../context/FilterContext"

const GradientTags = ({ tags }) => {
  const { filter, setFilter } = useContext(FilterContext)
  return (
    <div className="mt-3">
      {tags.sort().map((el) => {
        return (
          <GradientTagButton
            key={el}
            tag={el}
            filter={filter}
            setFilter={setFilter}
          />
        )
      })}
    </div>
  )
}

export default GradientTags
