import Image from "next/image"
import React from "react"

const MediumCard = ({ img, title }) => {
  return (
    <div className="flex-none cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} fill className="rounded-xl" alt="card" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard
