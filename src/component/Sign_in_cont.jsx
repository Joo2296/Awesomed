import "./Sign_in_style.css"

export function Sign_in_cont () {
    return (
        <>
            <div id="container">
                {/* <!--컨텐츠--> */}
                <div id="content">
                    {/* <!--로그인박스--> */}
                    <div id="login_box">
                        <h1 id="title">로그인</h1>
                        {/* <!--로그인--> */}
                        <form action="" id="sign_in">
                            <input type="text" name="" id="id_box" placeholder="아이디" />
                            <input type="password" name="" id="pw_box" placeholder="비밀번호" />
                            <div id="idpw_find">
                                <input type="checkbox" id="sc_sign" checked="checked" />
                                <label for="sc_sign" id="sc_sign_text" class="find">
                                    <img src="./icon/toggle-on-solid.svg" alt="" id="toggle_on" />
                                    <img src="./icon/toggle-off-solid.svg" alt="" id="toggle_off" />
                                    보안접속
                                </label>
                                <a href="#" class="find id_find">아이디 찾기</a>
                                <a href="#" class="find pw_find">비밀번호찾기</a>
                            </div>
                            <input type="button" value="로그인" id="login_btn" />
                        </form>
                        {/* <!--회원가입--> */}
                        <form action="" id="sign_up2">
                            <p id="sign_up_title">아직 회원이 아니신가요?</p>
                            <p id="sign_up_text">회원가입 후 다양한 혜택과 서비스를 누려보세요!</p>
                            <input type="button" id="sign_up_btn" value="회원가입" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sign_in_cont;