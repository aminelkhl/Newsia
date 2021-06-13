import "./home.css"
import Sidebar from './Sidebar';
import Feed from './Feed';
import Header from './Header';
import Rightbar from './Rightbar.jsx';

 function Home() {
    return (
        <div className="home">

            <Header />
            <div className="home_body">
            <Sidebar className="sidebar"/>
            <Feed />
            <Rightbar />

            </div>
        </div>
    )
}

export default Home