import Gradient from "./Gradient"
import { useContext, useReducer, useEffect } from "react"
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
  const { gradientList, loading, error, page, hasNext, tags} = state;





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
  }, []);




  console.log(gradientList)

  const list = gradientList.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
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
  )
}

export default GradientsList
