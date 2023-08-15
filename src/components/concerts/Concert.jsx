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
    </div>
  )
}

export default Concert;