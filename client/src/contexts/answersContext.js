import { createContext, useContext } from "react";

const AnswersContext=createContext()
const useAnswersContext=()=>useContext(AnswersContext)
export {AnswersContext,useAnswersContext}