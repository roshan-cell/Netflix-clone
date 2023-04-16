
import Featured from "../../component/feature/Featured"
import Navbar from "../../component/navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
       <Navbar/>
       <Featured type="movie" />
    </div>
  )
}

export default Home 