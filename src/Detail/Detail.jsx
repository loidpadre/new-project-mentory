import {useParams} from "react-router-dom"
import { ListUser } from "../ListUser"
export default function Detail(){
    const {id} = useParams()
   
    const user = ListUser.find(i => i.id === id)
    return(
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}