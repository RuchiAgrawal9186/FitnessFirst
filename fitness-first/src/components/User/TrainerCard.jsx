import React from 'react'

const TrainerCard = ({id,img,name,job}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className='flex justify-center items-center'><img src={img} alt="Shoes" /></figure>
  <div className="card-body text-white">
    <h2 className="card-title text-bold text-md">
      {name}
    </h2>
    <div className="card-actions justify-end">
      {job}
    </div>
  </div>
</div>
  )
}

export default TrainerCard
