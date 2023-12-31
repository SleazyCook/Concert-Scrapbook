import { Link } from 'react-router-dom'

import concertsData from './data/ConcertsData';

const ConcertList = () => {

  const concertsByRecent = [...concertsData].reverse()

  return (
    <div className="concert-preview__box">
  
      {concertsByRecent.map((concertsObj) => {
        return (
          <Link 
            to={`/${concertsObj.id}`} 
            key={concertsObj.id} 
            value={concertsObj.id}
            className="concert-preview"
          >
            <span className="concert-preview__name">
              {concertsObj.artist}</span>

            <img src={concertsObj.preview} className="concert-preview__image" />

          </Link>
        )
      })}

    </div>
  )
}

export default ConcertList;