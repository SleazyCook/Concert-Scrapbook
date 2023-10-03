import { useEffect } from 'react'

const PicModal = ({setPicturesOpen, concertObj}) => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div className="modal">

      {/* Close Button */}
      <span 
        className="modal__close"
        onClick={()=>{setPicturesOpen(false)}}>
        X
      </span>

      {/* Header */}
      <div className="modal__title">
        {concertObj.artist} Pictures
      </div>

      <div className="modal__pics">

      {/* Gallery */}
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

export default PicModal