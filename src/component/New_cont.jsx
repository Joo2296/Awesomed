import "./New_style.css"

export function New_cont() {
    return (
        <>
            {/* <!-- 신상품 --> */}
            <div id="sinsang">
                <div class="newfood">
                    <h2>신상품</h2>
                    <ul class="newfood_img">
                        <li>
                            <div class="image-container">
                                <img src="../img/006.jpg" alt="요거트 쉐이크 180g" />
                                <div class="overlay">
                                    <p class="name">요거트 쉐이크180g</p>
                                    <p>담백한 오리지널 요거트</p>
                                    <p>
                                        <strike>8,000원</strike>
                                        <b style={{ color: 'red', fontSize: 20 }}>5,000원</b>
                                    </p>
                                    <span class="besttag">BEST1</span>
                                    <span class="pertag">38%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="image-container">
                                <img src="../img/005.jpg" alt="딸기 요거트 1kg" />
                                <div class="overlay">
                                    <p class="name">딸기 요거트 1kg</p>
                                    <p>딸기가 들어간 <br />상큼하고 달달한 요거트</p>
                                    <p>
                                        <strike>15,000원</strike>
                                        <b style={{ color: 'red', fontSize: 20 }}>10,000원</b>
                                    </p>
                                    <span class="besttag">BEST2</span>
                                    <span class="pertag">33%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="image-container">
                                <img src="../img/004.jpg" alt="딸기 요거트 1.7kg" />
                                <div class="overlay">
                                    <p class="name">딸기 요거트 1.7kg</p>
                                    <p>딸기가 들어간 <br />상큼하고 달달한 요거트</p>
                                    <p>
                                        <strike>8,000원</strike>
                                        <b style={{ color: 'red', fontSize: 20 }}>5,000원</b>
                                    </p>
                                    <span class="besttag">BEST3</span>
                                    <span class="pertag">38%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="image-container">
                                <img src="../img/003.jpg" alt="딸기 요거트 160g" />
                                <div class="overlay">
                                    <p class="name">딸기 요거트 160g</p>
                                    <p>딸기가 들어간 <br />상큼하고 달달한 요거트</p>
                                    <p>
                                        <strike>15,000원</strike>
                                        <b style={{ color: 'red', fontSize: 20 }}>5,000원</b>
                                    </p>
                                    <span class="besttag">BEST4</span>
                                    <span class="pertag">67%</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="centerBtn">
                    <span class="left">TOTAL <span style={{ color: 'rgb(49, 49, 49)' }}>16</span> ITEMS</span>
                    <ul class="right">
                        <li><a href="#">신상품</a></li>
                        <li><a href="#">상품명</a></li>
                        <li><a href="#" id="lowPrice">낮은가격</a></li>
                        <li><a href="#" id="highPrice">높은가격</a></li>
                        <li><a href="#">제조사</a></li>
                        <li><a href="#">사용후기</a></li>
                    </ul>
                </div>

                <div class="food">
                    <ul class="food_img">
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/006.jpg" alt="요거트 쉐이크 180g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="1" data-product-name="요거트 쉐이크 180g"
                                        data-product-desc="담백한 오리지널 요거트" data-product-price="5000" data-product-image="./img/006.jpg"></i>
                                </a>
                            </div>
                            <p class="name">요거트 쉐이크180g</p>
                            <p class="center_txt">담백한 오리지널 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/005.jpg" alt="딸기 요거트 1kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="2" data-product-name="딸기 요거트 1kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="10000"
                                        data-product-image="../img/005.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 10,000원
                                <span class="discount">33%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/004.jpg" alt="딸기 요거트 1.7kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="3" data-product-name="딸기 요거트 1.7kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/004.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1.7kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/003.jpg" alt="딸기 요거트 160g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="4" data-product-name="딸기 요거트 160g"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/003.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 160g</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 5,000원
                                <span class="discount">67%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/011.jpg" alt="요거트 쉐이크 180g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="5" data-product-name="요거트 쉐이크 180g"
                                        data-product-desc="담백한 오리지널 요거트" data-product-price="5000" data-product-image="./img/011.jpg"></i>
                                </a>
                            </div>
                            <p class="name">요거트 쉐이크180g</p>
                            <p class="center_txt">담백한 오리지널 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/010.jpg" alt="딸기 요거트 1kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="6" data-product-name="딸기 요거트 1kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="10000"
                                        data-product-image="../img/010.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 10,000원
                                <span class="discount">33%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/009.jpg" alt="딸기 요거트 1.7kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="7" data-product-name="딸기 요거트 1.7kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/009.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1.7kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/008.jpg" alt="딸기 요거트 160g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="8" data-product-name="딸기 요거트 160g"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/008.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 160g</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 5,000원
                                <span class="discount">67%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/007.jpg" alt="요거트 쉐이크 180g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="9" data-product-name="요거트 쉐이크 180g"
                                        data-product-desc="담백한 오리지널 요거트" data-product-price="5000" data-product-image="../img/007.jpg"></i>
                                </a>
                            </div>
                            <p class="name">요거트 쉐이크180g</p>
                            <p class="center_txt">담백한 오리지널 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/006.jpg" alt="딸기 요거트 1kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="10" data-product-name="딸기 요거트 1kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="10000"
                                        data-product-image="../img/006.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 10,000원
                                <span class="discount">33%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/005.jpg" alt="딸기 요거트 1.7kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="11" data-product-name="딸기 요거트 1.7kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/005.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1.7kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/004.jpg" alt="딸기 요거트 160g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="12" data-product-name="딸기 요거트 160g"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/004.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 160g</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 5,000원
                                <span class="discount">67%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/006.jpg" alt="요거트 쉐이크 180g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="13" data-product-name="요거트 쉐이크 180g"
                                        data-product-desc="담백한 오리지널 요거트" data-product-price="5000" data-product-image="../img/006.jpg"></i>
                                </a>
                            </div>
                            <p class="name">요거트 쉐이크180g</p>
                            <p class="center_txt">담백한 오리지널 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/005.jpg" alt="딸기 요거트 1kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="14" data-product-name="딸기 요거트 1kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="10000"
                                        data-product-image="../img/005.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 10,000원
                                <span class="discount">33%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/004.jpg" alt="딸기 요거트 1.7kg" />
                                    <i class="fa-solid fa-suitcase" data-product-id="15" data-product-name="딸기 요거트 1.7kg"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/004.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 1.7kg</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>8,000원</strike> 5,000원 <span class="discount">38%</span>
                            </p>
                        </li>
                        <li>
                            <div class="image-container">
                                <a href="#">
                                    <img src="../img/003.jpg" alt="딸기 요거트 160g" />
                                    <i class="fa-solid fa-suitcase" data-product-id="16" data-product-name="딸기 요거트 160g"
                                        data-product-desc="딸기가 들어간 상큼하고 달달한 요거트" data-product-price="5000"
                                        data-product-image="../img/003.jpg"></i>
                                </a>
                            </div>
                            <p class="name">딸기 요거트 160g</p>
                            <p class="center_txt">딸기가 들어간 상큼하고 달달한 요거트</p>
                            <p>
                                <strike>15,000원</strike> 5,000원
                                <span class="discount">67%</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="iframeContainer" style={{
                display: 'none',
                position: 'fixed',
                top: 50 + '%',
                left: 50 + '%',
                transform: 'translate(-50% -50%)',
                width: 500,
                height: 600,
                background: 'white',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                zIndex: 1000
            }}>
                <iframe id="productIframe" style={{ width: 100 + '%', height: 100 + '%', border: 'none' }}></iframe>
                <button id="closeIframe" style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'rgb(0, 0, 0)',
                    color: 'white',
                    border: 'none',
                    padding: 5 + 10,
                    cursor: 'pointer',
                }}>
                    X
                </button>
            </div>
        </>
    )
}

export default New_cont;