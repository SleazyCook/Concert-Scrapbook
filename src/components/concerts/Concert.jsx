import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import concertsData from './data/ConcertsData'

const Concert = () => {

  const {concertId} = useParams()
  const [concertObj, setConcertObj] = useState({})

  // const new_apartment = '../../assets/new_apartment.mp4'

  useEffect(() => {
    setConcertObj(concertsData[concertId-1])
    window.scrollTo({top: 0, left: 0})
  }, [concertId])

  return (
    <div className="concert">
      {concertObj.artist}
      <br />
      {concertObj.date}, {concertObj.year}
      <br />
      {concertObj.tour}
      <br />
      {concertObj.venue} - {concertObj.city}, {concertObj.state}
      <br />
      {concertObj.meet && "Meet & Greet Pics, Video"}
      <br />
      <div className="concert-pics">
        Pictures <br /><br />
        {concertObj.pictures && concertObj.pictures.map((picObj) => {
          return (
            <div className="concert-pics__pic" key={picObj.id} value={picObj.id}>
              <img src={picObj.img} />
            </div>
          )
        })}
      </div>

      Attended with {concertObj.wentWith && concertObj.wentWith}

      {concertObj.merch && concertObj.merch}

      <br />
      {/* Video player default
      <video width="320" height="240" controls>
       <source src={concertObj.videos} type="video/mp4" />
      </video> */}

      <br />VIDEOS:<br /><br />

      {concertObj.videos && concertObj.videos.map((videoObj) => {
        return (
          <div key={videoObj.id} value={videoObj.id}>
            <div>{videoObj.name}</div>
            <video width="320" height="240" controls>
              <source src={videoObj.video} type="video/mp4" />
            </video>
          </div>
        )
      })}
      

    </div>
  )
}

export default Concert;