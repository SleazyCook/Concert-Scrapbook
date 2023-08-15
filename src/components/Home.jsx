import ConcertList from "./concerts/ConcertList"

const Home = () => {
  return (
    <div>
      
      <header className="heading">
        <span className="heading__sub heading__sub--1">Krystal's </span>&nbsp;
        <span className="heading__sub heading__sub--2">Concert &nbsp;&nbsp; </span>
        <span className="heading__sub heading__sub--3">&nbsp; Scrapbook</span>
      </header>

      <ConcertList />
    </div>
  )
}

export default Home