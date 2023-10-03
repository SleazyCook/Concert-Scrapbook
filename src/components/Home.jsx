import ConcertList from "./concerts/ConcertList"

const Home = () => {
  return (
    <div className="home">
      
      <header className="heading">
        Krystal's Concert <br />Scrapbook <br />
        ~ 2023 ~
      </header>

      <ConcertList />
    </div>
  )
}

export default Home