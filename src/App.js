import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { FilterContextProvider } from "./context/FilterContext"
import {useEffect, useReducer } from 'react'
import {reducer} from "./reducer/reducer"

function App() {

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

  
  
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <GradientsHeader gradientList={gradientList} loading={loading}>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <FilterContextProvider>
         <Gradients gradientList={gradientList} loading={loading}/>
        </FilterContextProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App
