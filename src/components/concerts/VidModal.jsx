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
          <div 
            key={videoObj.id} 
            value={videoObj.id}
            className="modal__video">
            {/* Video Title */}
            <div className="modal__item-name">{videoObj.name}</div>
            {/* Video Player */}
            <iframe 
            width="404" 
            height="301" 
            src={`https://www.youtube.com/embed/${videoObj.video}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share" allowFullScreen></iframe>
          </div>
        )
      })}
  
        </div>
  
      </div>
    )
  }
  
  export default VidModal