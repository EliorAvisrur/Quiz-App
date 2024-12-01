import React from 'react'

const AnswerButton = ({index,item,currentQuestion,onClickFunc,classNameDesign}) => {
  return (
    <button
      onClick={(e) => {
        onClickFunc(e)
      }}
      key={index}
      value={index}
      className={classNameDesign}
    >
      {item}
    </button>
  )
}

export default AnswerButton