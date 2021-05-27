import GradientTitle from "./GradientTitle"
import GradientPill from "./GradientPill"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"
import { useContext } from "react"
import { GradientContext } from "./../context/GradientContext"

const Gradient = ({ colorStart, colorEnd, name, tags, id }) => {

  const { filter } = useContext(GradientContext)
  
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} filter={filter} />
        <a className='btn btn-outline-dark w-100' href={`/gradient/${id}`}>Plein écran</a>
      </div>
    </li>
  )
}

export default Gradient
