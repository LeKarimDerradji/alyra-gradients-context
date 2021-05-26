import GradientTagButton from "./GradientTagButton"
import { useContext } from "react"
import { GradientContext } from "./../context/GradientContext"

const GradientTags = ({ tags }) => {

  const { filter, setFilter } = useContext(GradientContext)
  
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
