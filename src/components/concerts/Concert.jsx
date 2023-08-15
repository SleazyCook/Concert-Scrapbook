import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import concertsData from './data/ConcertsData'

import MyVideo from '../../assets/new_apartment.mp4'

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
      
      {concertObj.videos && concertObj.videos}

      {concertObj.wentWith && concertObj.wentWith}

      {concertObj.merch && concertObj.merch}

      <br />
      Video player
      <video width="320" height="240" controls>
       <source src={MyVideo} type="video/mp4"></source>
      </video>
      

    </div>
  )
}

export default Concert;