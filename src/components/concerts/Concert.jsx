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
    <div>
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
      {concertObj.pictures && concertObj.pictures}
      
      {/* {concertObj.videos &&  <div>
        <video width="320" height="240" controls>
          <source src=>{concertObj.videos} type="video/mp4"></source>
        </video>
      </div>} */}

      {concertObj.wentWith && concertObj.wentWith}

      {concertObj.merch && concertObj.merch}

      <br />
      {/* Video player default
      <video width="320" height="240" controls>
       <source src={concertObj.videos} type="video/mp4" />
      </video> */}

      <br />VIDEOS<br />

      {concertObj.videos && concertObj.videos.map((videoObj) => {
        return (
          <div key={videoObj.id} value={videoObj.id}>
            <span>{videoObj.name}</span>
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