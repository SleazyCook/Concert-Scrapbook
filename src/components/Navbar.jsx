import { Link } from 'react-router-dom'

const Navbar = () => {

  const navigation = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    }
  ]

  return (
    <div>

      {navigation.map((navObj) => {
        return (
          <Link to={navObj.path} key={navObj.id} value={navObj.id}> 
            {navObj.name}
          </Link>
        )
      })}

    </div>

  )
}

export default Navbar;