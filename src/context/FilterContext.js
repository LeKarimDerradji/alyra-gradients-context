// src/context/FilterContext.js
import { useState, createContext } from "react"

// créer et exporter ("named") FilterContext object
export const FilterContext = createContext()

/* le component-provider qui embrassera la partie de notre app où on utilise ce context */
export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all")
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}




