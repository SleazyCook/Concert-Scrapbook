import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import concertsData from './data/ConcertsData'

import { FaWarehouse, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import { BsFillCalendarHeartFill } from 'react-icons/bs';

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

      <div className="concert__name">
        {concertObj?.artist}
      </div>
      <div className="concert__image">
        <img src={concertObj?.artistPic} />
      </div>

      {/* CONCERT DETAILS */}
      <div className="concert__details">
        <div className="concert__details--header">
          {concertObj.tour}
        </div>
        {/* Venue */}
        <div className="concert__details--section">
          <span className="concert__details--section-icon">
            <FaWarehouse /> </span> 
          <span className="concert__details--section-data">
            {concertObj.venue}</span>
        </div>
        {/* City */}
        <div className="concert__details--section">
          <span className="concert__details--section-icon">
            <FaMapMarkerAlt /> </span>
          <span className="concert__details--section-data">
            {concertObj.city}, {concertObj.state}</span>
        </div>
        {/* Date */}
        <div className="concert__details--section">
          <span className="concert__details--section-icon">
            <BsFillCalendarHeartFill /> </span>
          <span className="concert__details--section-data">
            {concertObj.date}, {concertObj.year}
            </span>
        </div>
        {/* Went With */}
        <div className="concert__details--section">
          <span className="concert__details--section-icon">
            <FaUserFriends /> </span>
          <span className="concert__details--section-data">
            {concertObj.wentWith}
            </span>
        </div>
      </div>

      {/* Look for mobile designs for this page */}

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

      {/* setlist component? */}

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