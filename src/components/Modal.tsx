type Props = {
  image: string,
  closeModal: () => void
}

export const Modal = ({ image, closeModal }: Props) => {
  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black/90">
        <img src={image} className="max-w-10/12 max-h-screen" />
      </div>

      <div onClick={closeModal} className="fixed top-5 right-5 text-5xl cursor-pointer">
        X
      </div>
    </>
  )
}