import ImageGallery from 'react-image-gallery'

const Modal = ({setModalOpen, concertObj}) => {

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

    console.log(concertObj.pictures)

  return (
    <div className="modal">

      <span 
        className="modal__close"
        onClick={()=>{setModalOpen(false)}}>
        X
      </span>

      <div className="modal__title">
        {concertObj.artist} Pictures
      </div>

      <div className="modal__pics">

      
      {concertObj.pictures && concertObj.pictures.map((picObj) => {
        return (
          <div key={picObj.id} value={picObj.id}>
            <img className="modal__pic" src={picObj.img} />
          </div>
        )
      })}

      </div>

    </div>
  )
}

export default Modal