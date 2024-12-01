import React from 'react'

function Result(props) {
  return (
    <>
      <div className="shadow-lg p-4 mb-4 rounded bg-light">
        <h3 className="text-center text-primary">
          {props.result || "Please enter a date to see the result."}
        </h3>
      </div>
    </>
  )
}

export default Result;
