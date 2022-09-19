//import { CookiesProvider } from 'react-cookie'; 쿠키를 쓰면 바깥 컴포넌트를 <CookiesProvider>이거로 싸줘야한다.</CookiesProvider>


import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie';
import styled from 'styled-components'

const Pop = styled.div`
position: fixed;
top : 50%;
left : 50%;
transform : translate(-50%, -50%);
background:#fff;
z-index:9999;

&.on {
  display:none;
}

& button{
  float:right;
}
`

const Popup = () => {
  const [TG, setTG] = useState(false)
  const [cookie, setCookie] = useCookies();

  let now = new Date();
  let after = new Date();
  return (
    <Pop className={(cookie.name) && "on"}>
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/images/main_news02.jpg"} alt="" />
      </div>
      <div className="bottom">
        <input type='checkbox' onChange={
          () => {
            after.setMinutes(now.getMinutes() + 1) // after는 지금시간에서 1분을 더한 시간
            setCookie('name', 'pop', { path: '/', expires: after }) // expires에 after시간을 넣어주면 그때 쿠키가 사라짐
          }
        } />
        오늘 하루 열지 않기
        <button onClick={() => setTG(true)}>close</button>
      </div>

    </Pop>
  )
}

export default Popup;