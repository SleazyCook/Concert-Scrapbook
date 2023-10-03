import ImageGallery from 'react-image-gallery'

const Modal = ({setModalOpen}) => {

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];


  return (
    <div className="modal">

      <span 
        className="modal__close"
        onClick={()=>{setModalOpen(false)}}>
        X
      </span>

      This is my modal Box


      {/* <ImageGallery items={images} /> */}
    </div>
  )
}

export default Modal