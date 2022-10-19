import { useState, useRef, useEffect } from "react";
import TopBanner from "./TopBanner";

const NAVLINK = [
  { id: 1, menu: "기업정보", link: '#!' },
  { id: 2, menu: "솔루션", link: '#!' },
  { id: 3, menu: "서비스", link: '#!' },
  { id: 4, menu: "혁신기술", link: '#!' },
  { id: 5, menu: "고객지원", link: '#!' },
]

const Header = () => {
  const [TG, setTG] = useState(false);
  const [TS, setTS] = useState(false);
  const HL = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY
      sct > 0 ? HL.current.classList.add('on') : HL.current.classList.remove('on')
      // console.log(HL.current, window.scrollY)/
    })
  }, [])
  return (
    <header className="Header" ref={HL}>
      <TopBanner />
      <div className="hd_wrap">
        <h1>
          <a href="/">
            현대엘리베이터
          </a>
        </h1>
        <nav className="Gnb inner">
          <ul>
            {
              NAVLINK.map((el, idx) => {
                return (
                  <li key={el.id}>
                    <a href={el.link}>{el.menu}</a>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <div className="top_service">
          <ul className="project">
            <li><a href="#!">주요프로젝트</a></li>
            <li><a href="#!">IR</a></li>
          </ul>
          <div className={'lang ' + (TG ? 'on' : "")}>
            <strong onClick={() => (setTG(!TG))}>
              <i className="xi-globus"></i> KOR <i className="xi-angle-down arrow"></i>
            </strong>
            <ul className="lang_box">
              <li><a href="#!">KOR</a></li>
              <li><a href="#!">ENG</a></li>
              <li><a href="#!">CHN</a></li>
            </ul>
          </div>
          <div className={`top_search ${TS ? 'on' : ""}`}>
            <strong onClick={() => (setTS(!TS))}><i className="xi-search"></i></strong>
            <div className="search_box">
              <form action="#!">
                <input type="text" placeholder="검색어를 입력하세요" required></input>
                <button>
                  <i className="xi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;