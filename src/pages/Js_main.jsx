import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"
import Sign_up from "./Sign_up"
import Sign_in from "./Sign_in"
import Cart from "./Cart"
import New from "./New"

export function Js_main() {
    return (
        <>
            <div>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<New />}></Route>
                        <Route path="/sign_in" element={<Sign_in />}></Route>
                        <Route path="/sign_up" element={<Sign_up />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </>
    )
}

export default Js_main;