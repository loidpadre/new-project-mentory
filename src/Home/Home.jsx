import { Link } from "react-router-dom"   
import { ListUser } from "../ListUser" 
function Home(){
    
    return(
        <div>
            <h1>List de Usauarios</h1>
      {
        ListUser.map((user, id)=>(
          <Link to={`/Detail/${id}`}>
            <div key={id} ListUser={ListUser}>
            <ul>
              <h3>{user.name}</h3>
              <li>{user.year}</li>
              <li>{user.proffesion}</li>
            </ul>
          </div>

          </Link>
        ))
      }
        </div>
    )
} 
export default Home
