import { Link } from 'react-router-dom'

import concertsData from './ConcertsData';

const ConcertList = () => {
  return (
    <div className="concert-preview__box">
      {concertsData.map((concertsObj) => {
        return (
          <Link 
            to={`/${concertsObj.id}`} 
            key={concertsObj.id} 
            value={concertsObj.id}
            className="concert-preview"
          >
            <span className="concert-preview__name">
              {concertsObj.artist}</span>

            <img src={concertsObj.artistPic} className="concert-preview__image" />
            
          </Link>
        )
      })}
    </div>
  )
}

export default ConcertList;