import {useEffect, useState, useReducer, createContext} from 'react'
import {reducer} from './../reducer/reducer'

export const GradientContext = createContext()


export const GradientListContextProvider = ({ children }) => {

    const [filter, setFilter] = useState("all")

    const initialState = {
      gradientList: [],
      loading: false,
      error: "",
    }
    useEffect(() => { 
      fetch(`https://gradients-api.herokuapp.com/gradients`)
        .then((response) => {
          dispatch({ type: "FETCH_INIT" });
          if (!response.ok) {
            throw new Error(
              `Nous n'avons pas pu lire le registre des gradients, status : ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
          console.log(data)
        })
        .catch((error) => {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        });
    }, []);
  

    const [state, dispatch] = useReducer(reducer, initialState)
    const { gradientList, loading} = state;
     
     function allTags(list) {
  /* retourner la liste des tags uniques */
  let listTotal = []
  for (let element of list) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags)
    }
  }
  const listTagsUnique = []
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      listTagsUnique.push(el)
    }
  })
  return listTagsUnique
}

const tags = allTags(gradientList);

    return (
      <GradientContext.Provider value={{ gradientList, loading, filter, setFilter, tags }}>
        {children}
      </GradientContext.Provider>
    )
  }