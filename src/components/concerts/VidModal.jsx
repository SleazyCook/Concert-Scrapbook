import { useEffect } from 'react'

const VidModal = ({setVideosOpen, concertObj}) => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])

    return (
      <div className="modal">
  
        {/* Close Button */}
        <span 
          className="modal__close"
          onClick={()=>{setVideosOpen(false)}}>
          X
        </span>
  
        {/* Header */}
        <div className="modal__title">
          {concertObj.artist} Videos
        </div>
  
        <div className="modal__pics">
  
        {/* Gallery */}
        {concertObj.videos && concertObj.videos.map((videoObj) => {
        return (
          <div key={videoObj.id} value={videoObj.id}>
            <div className="modal__item-name">{videoObj.name}</div>
            <video width="404" height="301" controls>
              <source src={videoObj.video} type="video/mp4" />
            </video>
          </div>
        )
      })}
  
        </div>
  
      </div>
    )
  }
  
  export default VidModal