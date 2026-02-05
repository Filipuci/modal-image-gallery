"use client"

import { useState } from "react"
import { Photo } from "../components/Photo"
import { photoList } from "../data/photoList"
import { Modal } from "../components/Modal"

const Page = () => {

  const [showModal, setShowModal] = useState(false)
  const [imageOfModal, setImageOfModal] = useState('')

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id)
    if (photo) {
      setImageOfModal(photo.url)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }


  return (
    <div className="flex flex-col justify-center items-center bg-blue-300 h-dvh">

      <h1 className="font-bold text-5xl mb-5">My anime list</h1>

      <section className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center ">
        {photoList.map(photo => (
          <Photo
            key={photo.id}
            photo={photo}
            onClick={() => openModal(photo.id)} />
        ))}
      </section>

      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal}/>
      }
    </div>
  )
}

export default Page