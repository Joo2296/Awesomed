import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About2 from "./About2"
import AboutDetails from "./AboutDetails"
import User from "./User"
import Search from "./Search"

export function Sample4() {
    return (
        <Router>
            <nav>
                <Link to="/">홈</Link> | 
                <Link to="/User/1">유저</Link> | 
                <Link to="/search?query=football">검색</Link> | 
                <Link to="/about">도움말2</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/User/:id" element={<User />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<About2 />}>
                    <Route path="details" element={<AboutDetails />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Sample4