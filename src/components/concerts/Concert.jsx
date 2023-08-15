import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import concertsData from './ConcertsData'

const Concert = () => {

  const {concertId} = useParams()
  const [concertObj, setConcertObj] = useState({})

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
      
    </div>
  )
}

export default Concert;