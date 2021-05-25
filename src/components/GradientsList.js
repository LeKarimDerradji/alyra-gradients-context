import Gradient from "./Gradient"
import { gradients } from "../gradients"
import { useContext } from "react"
import { FilterContext } from "./../context/FilterContext"
import {reducer} from "./../reducer/reducer"

const GradientsList = () => {
  // Fetch la data, transformer la donnée en tableau et la passée dans le return. 
  // Transformer filter / setFilter en useContext. 
  const { filter } = useContext(FilterContext)

  const initialState = {
    gradientList: [],
    loading: false,
    error: "",
    page: 1,
    hasNext: null,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" });
    fetch(`https://gradients-api.herokuapp.com/gradients`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu lire le registre des gradients, status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      });
  }, [filter]);



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
