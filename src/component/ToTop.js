//gsap, javascript animation, styled-component  npm i styled-components로 깔 수 잇음(https://www.daleseo.com/react-styled-components/)

//https://greensock.com/forums/topic/22790-scrolltoplugin-react-failed-to-execute-scrollto-on-window/

import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import classNames from "classnames"
import { useEffect } from "react";
import { useState } from "react";

// const style = {
//   color: '#f00'
// }

const Btn = styled.div`
position: fixed;
opacity : 0;
visibility : hidden;
bottom: 60px;
right : 60px;
color: #fff;
background: #008850;
font-size:30px;
padding:10px;
border-radius : 50%;
transition: .5s;

&.on {
  opacity : 1;
  visibility : visible;
}

`

const ToTop = () => {

  const [scrollY, setscrollY] = useState(0);

  const totop = () => {
    gsap.to(window, {
      duration: 0.5, scrollTo: 0
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)  //플러그인 쓸 때 등록해줘야함
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setscrollY(window.scrollY)
    });
    return () => {     // 이렇게 해주면 메모리정리를 해준당?
      window.removeEventListener('scroll', () => {
        setscrollY(window.scrollY)
      });
    }
  }, [])

  return (
    <>
      <Btn onClick={() => totop()} className={scrollY > 400 ? 'on' : ''}>
        <i className="xi-arrow-top"></i>
      </Btn>
    </>

  )
}

export default ToTop;