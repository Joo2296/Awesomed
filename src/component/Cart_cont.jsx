import { useState } from "react"
import "./Cart_style.css"

export function Empty() {
    return (
        <div id="empty">
            <p>장바구니가 비어 있습니다.</p>
        </div>
    )
}
export function Using() {
    return (
        <div id="using">
            <h2>일반상품</h2>
            <div className="table table01">
                <div className="item item01">
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="t1_item02">이미지</div>
                <div className="t1_item03">상품정보</div>
                <div className="t1_item04">수량</div>
                <div className="t1_item05">상품구매금액</div>
                <div className="t1_item06">할인금액</div>
                <div className="t1_item07">적립금</div>
                <div className="t1_item08">배송구분</div>
                <div className="t1_item09">배송비</div>
                <div className="t1_item10">선택</div>
            </div>
            <div className="table table02">
                <span className="t2_item01" >
                    <input type="checkbox" name="" id="" />
                </span>
                <span className="t2_item02"><img src="./SJ/img/001.jpg" alt="" /></span>
                <span className="t2_item03">딸기 요거트 1kg</span>
                <span className="t2_item04">
                    <input type="number" name="" id="" defaultValue="1" />
                    <input type="button" name="" id="" value="변경" />
                </span>
                <span className="t2_item05">10,000원</span>
                <span className="t2_item06">-</span>
                <span className="t2_item07">-</span>
                <span className="t2_item08">기본배송</span>
                <span className="t2_item09">2,500원</span>
                <span className="t2_item10">
                    <input type="button" value="주문하기" />
                    <input type="button" value="관심상품등록" />
                    <input type="button" value="x 삭제" />
                </span>
            </div>
            <div className="table table03">
                <span className="t3_item01">[기본배송]</span>
                <span>상품구매금액</span>
                <span>000</span>
                <span>+</span>
                <span>배송비</span>
                <span>000</span>
                <span>=</span>
                <span>합계 :</span>
                <span>000</span>
                <span>원</span>
            </div>
            <div className="table table04">
                <img src="" alt="" />
                <span>할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.</span>
            </div>
            <div className="table table05">
                <span className="t5_item01">선택상품을</span>
                <span className="t5_item02">
                    <input type="button" value="x 삭제하기" />
                </span>
                <span className="t5_item03">
                    <input type="button" value="해외배송상품 장바구니로 이동" />
                </span>
                <span className="t5_item04">
                    <input type="button" value="장바구니비우기" />
                </span>
                <span className="t5_item05">
                    <input type="button" value="견적서출력" />
                </span>
            </div>
        </div>
    )
}
export function Cart_cont() {

    const [isDomestic, setIsDomestic] = useState(true);

    const handleDomesticClick = () => {
        setIsDomestic(true);
    };

    const handleInternationalClick = () => {
        setIsDomestic(false);
    };

    return (
        <>    <div id="container">
            {/* <!--컨텐츠--> */}
            <div id="content">
                <div id="cart">
                    <div id="cart_title">
                        <h2>장바구니</h2>
                    </div>
                    <div id="product_menu">
                        <input type="radio" name="delivery" id="delivery1" defaultChecked="checked" />
                        <label htmlFor="delivery1" id="in_menu" onClick={handleDomesticClick}>국내배송상품</label>
                        <input type="radio" name="delivery" id="delivery2" />
                        <label htmlFor="delivery2" id="out_menu" onClick={handleInternationalClick}>해외배송상품</label>
                    </div>
                    <div id="product">
                        {isDomestic ? <Using /> : <Empty />}
                    </div>
                    <div id="payment">

                    </div>
                    <div id="info">
                        <div id="info_title">
                            <h2>이용안내</h2>
                        </div>
                        <div id="cart_info">
                            <p>장바구니 이용안내</p>
                            <li><img src="./icon/1-solid.svg" alt="" />. 해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기
                                바랍니다.</li>
                            <li><img src="./icon/2-solid.svg" alt="" />. 해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송 장바구니로 이동하여 결제하실 수
                                있습니다.</li>
                            <li><img src="./icon/3-solid.svg" alt="" />. 선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.</li>
                            <li><img src="./icon/4-solid.svg" alt="" />. [쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</li>
                            <li><img src="./icon/5-solid.svg" alt="" />. 장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.
                            </li>
                            <li><img src="./icon/6-solid.svg" alt="" />. 파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.
                            </li>
                        </div>
                        <div id="credit_info">
                            <p>무이자할부 이용안내</p>
                            <li><img src="./icon/1-solid.svg" alt="" />. 상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여 [주문하기] 버튼을 눌러
                                주문/결제 하시면 됩니다.</li>
                            <li><img src="./icon/2-solid.svg" alt="" />. [전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가
                                이루어집니다</li>
                            <li><img src="./icon/3-solid.svg" alt="" />. 단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다.</li>
                            <li><img src="./icon/4-solid.svg" alt="" />. 무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에 표시되어, 무이자할부 상품 기준으로
                                배송비가 표시됩니다.</li>
                            <li>실제 배송비는 함께 주문하는 상품에 따라 적용되오니 주문서 하단의 배송비 정보를 참고해주시기 바랍니다.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart_cont;