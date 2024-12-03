import { createContext, useContext } from "react"

const CategoryContext = createContext()

const useCategoryContext = () => useContext(CategoryContext)

export { CategoryContext, useCategoryContext }
