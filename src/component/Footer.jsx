import "./Footer.css"

export function Footer() {
    return (
        <>
            <div id="f_container">
                <div id="footer">
                    <div id="left_box">
                        <div id="person">
                            <h2>02-123-4567</h2>
                            <p>MON-FRI 10:00 - 18:00</p>
                            <p>LUNCH 12:00 - 13:30</p>
                            <p>SAT, SUN, HOLY OFF</p>
                            <p>국민 0000-00-0000 / 예금주 어썸디</p>
                        </div>
                        <div id="company">
                            <h2>COMPANY</h2>
                            <p>AWESOMED / 대표이사 어떰디 / 개인정보보호책임자 어썸디 / 사업자등록번호 0000-00-00000</p>
                            <p>통신판매신고번호 제2024-서울강남-12345호</p>
                            <p>대표전화 02-123-4567 / 팩스 / 대표메일 awesomed@awesomed.com</p>
                            <p>주소 서울 강남구 가로수길 23</p>
                        </div>
                    </div>
                    <div id="right_box">
                        <div className="footer_bar">
                            <span><a href="">회사소개</a></span>
                            <span><a href="">이용약관</a></span>
                            <span><a href="">쇼핑몰이용안내</a></span>
                            <span><a href="">개인정보처리방침</a></span>
                        </div>
                        <div className="footer_sub">
                            <p><a href="./sigh_in.html">마이페이지</a></p>
                            <p><a href="./cart.html">장바구니 (1)</a></p>
                            <p><a href="./sigh_in.html">관심상품 (0)</a></p>
                            <p><a href="./sigh_in.html">주문조회</a></p>
                            <p><a href="./sigh_in.html">쿠폰내역</a></p>
                            <p><a href="./sigh_in.html">적립금내역</a></p>
                        </div>
                        <div className="footer_sub">
                            <p><a href="">공지사항</a></p>
                            <p><a href="">상품리뷰</a></p>
                            <p><a href="">상품 Q&A</a></p>
                            <p><a href="">이벤트</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;