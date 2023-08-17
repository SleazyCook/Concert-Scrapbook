import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import concertsData from './data/ConcertsData'
import Modal from './Modal'

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

      {/* Artist Name */}
      <div className="concert__name">
        {concertObj?.artist}
      </div>
      {/* Artist Pic */}
      <div className="concert__image">
        <img src={concertObj?.artistPic} />
      </div>

      <div className="concert__flexbox">

        <div className="concert__tour-pic">
          <img src={concertObj.tourPic} />
        </div>

        {/* CONCERT DETAILS */}
        <div className="concert__details">
          {/* Tour/Festival */}
          <div className="concert__details--header">
            {concertObj.tour}
          </div>
          {/* Venue*/}
          <div className="concert__details--section">
            <span className="concert__details--section-icon">
              <FaWarehouse /> </span> &nbsp;
            <span className="concert__details--section-data">
              {concertObj.venue}</span>
          </div>
          {/* City */}
          <div className="concert__details--section">
            <span className="concert__details--section-icon">
              <FaMapMarkerAlt /> </span>&nbsp;
            <span className="concert__details--section-data">
              {concertObj.city}, {concertObj.state}</span>
          </div>
          {/* Date */}
          <div className="concert__details--section">
            <span className="concert__details--section-icon">
              <BsFillCalendarHeartFill /> </span> &nbsp;
            <span className="concert__details--section-data">
              {concertObj.date}, {concertObj.year}
              </span>
          </div>
          {/* Went With */}
          <div className="concert__details--section">
            <span className="concert__details--section-icon">
              <FaUserFriends /> </span> &nbsp;
            <span className="concert__details--section-data">
              {concertObj.wentWith}
              </span>
          </div>
        </div>

      {/* Flexbox End */}
      </div>

      <div className="concert__flexbox">
        <div className="concert__media-button">
          <img src={concertObj.pictures[0].img} />
          <span>Pictures</span>
        </div>
        <div className="concert__media-button">
          <img src={concertObj.pictures[1].img} />
          <span>Videos</span>
        </div>
        
      </div>

      
{/* 
      <div className="concert-pics">
        {concertObj.pictures && concertObj.pictures.map((picObj) => {
          return (
            <span className="concert-pics__pic" key={picObj.id} value={picObj.id}>
              <img src={picObj.img} />
            </span>
          )
        })}
      </div> */}

      {/* {concertObj.videos && concertObj.videos.map((videoObj) => {
        return (
          <div key={videoObj.id} value={videoObj.id}>
            <div>{videoObj.name}</div>
            <video width="320" height="240" controls>
              <source src={videoObj.video} type="video/mp4" />
            </video>
          </div>
        )
      })} */}

      <Modal />

      <div className="concert__setlist">
        <span className="concert__setlist--header">
          Setlist
        </span>
        {concertObj.setlist && concertObj.setlist.map((setlistObj) => {
          return (
            <span 
              className="concert__setlist--song"
              key={setlistObj.id}
              value={setlistObj.id}>
                {setlistObj.id}. {setlistObj.song}</span>
          )
        })}
      </div>
      

    </div>
  )
}

export default Concert;