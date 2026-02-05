import { useState } from "react";
import { PhotoType } from "../types/PhotoType";

type ModalProps = {
  photo: PhotoType,
  onClick: () => void
}

export const Photo = ({ photo, onClick}: ModalProps) => {

  return (
    <img
      src={photo.url}
      className='w-3xl hover:scale-105 cursor-pointer duration-300'
      onClick={onClick}
    />
  )
}