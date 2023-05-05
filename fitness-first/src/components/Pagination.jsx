import React from 'react'

const Pagination = () => {
  return (
    <div>
      <div>
        <button disabled={page==1} onClick={handlePrev}>-</button>
        <h3>{page}</h3>
        <button disabled={page==4} onClick={handleNext}>+</button>

      </div>
    </div>
  )
}

export default Pagination
