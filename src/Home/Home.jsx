import { Link } from "react-router-dom"
import { ListUser } from "../ListUser"


function Home() {

  return (
    <div>
      <h1>List de Usauarios</h1>
      <ul>
        {
          ListUser.map((user) => (
            <li key={user.id}>
              <div>
                <h3>{user.name}</h3>
                <p>{user.proffesion}</p>
                <Link to={'/users/' + user.id}>Ver perfil</Link>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Home
