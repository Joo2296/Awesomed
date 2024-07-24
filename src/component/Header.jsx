import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import "./Header.css"

export function Header() {

    const [ img, setImg ] = useState(true);
    const onhover = () => {
        setImg(false);
    }
    const outhover = () => {
        setImg(true);
    }
    return (
        <>
            <div id="header">
                <div className="Top">
                    <h1 style={{ fontWeight: 900, letterSpacing: -2 + "pt" }}>AWESOMED</h1>
                    <div className="Top_menu">
                        <ul>
                            <h3>브랜드스토리</h3>
                        </ul>
                        <ul>
                            <h3>상품소개</h3>
                        </ul>
                        <ul className="shoping">
                            <h3>쇼핑하기</h3>
                            <div className="menu_box">
                                <li><Link to="/">신상품</Link></li>
                                <li><Link to="./SJ/best.html">베스트</Link></li>
                                <li><Link to="#">요거트</Link></li>
                                <li><Link to="#">시리얼</Link></li>
                                <li><Link to="#">시리얼&요거트</Link></li>
                            </div>
                        </ul>
                        <ul className="comm">
                            <h3>커뮤니티</h3>
                            <div className="menu_box">
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">상품리뷰</a></li>
                                <li><a href="#">상품 Q&A</a></li>
                                <li><a href="#">이벤트</a></li>
                            </div>
                        </ul>
                        <ul>
                            <h3>문의하기</h3>
                        </ul>
                    </div>
                    <div>
                        <ul className="Top_right">
                            <li className="menu-container">
                                <a href="./sigh_in.html" className="hohover-container" onMouseOver={onhover} onMouseOut={outhover}>
                                { img ? <img className="hohover default" src="../img/mypage.png" alt="마이페이지" /> : <img className="hohover hover" src="../img/mypagehover.png" alt="마이페이지 호버" />}
                                </a>
                                <div className="right_menu_box" onMouseOver={onhover} onMouseOut={outhover} >
                                    <ul>
                                        <li><Link to="./sign_in">로그인</Link></li>
                                        <li><Link to="./sign_up">회원가입</Link></li>
                                        <li><Link to="./sign_in">마이페이지</Link></li>
                                        <li><Link to="./sign_in">주문조회</Link></li>
                                        <li><Link to="./sign_in">관련상품</Link></li>
                                        <li><Link to="./sign_in">적립금조회</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/Cart"><img src="../img/cart.png" alt="장바구니" /></Link>
                            </li>
                            <li>
                                <a href="#"><img src="../img/glass.png" alt="검색" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;