import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
  { id: 1, content: '01 The world expands\n along the new path created', desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/", title: 'slide01' },
  { id: 2, content: '02 The world expands\n along the new path created', desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/", title: 'slide020' },
  { id: 3, content: '03 The world expands\n along the new path created', desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/", title: 'slide03' }
]

const MainVisual = () => {
  const [IDX, setIDX] = useState();
  useEffect(() => {
    setIDX(0)
  }, []);
  const mainSlide = useRef(null);

  const setting = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    afterChange: index => {
      setIDX(index)
    }
  }
  return (
    <section className="MainVisual">
      <Slider {...setting} ref={mainSlide}>
        {SLIDE.map((el, idx) => {
          return (
            <figure className={'itm0' + el.id + (idx === IDX ? " on" : "")} key={el.id}>
              <div className="inner">
                <p className="tit">{el.content}</p>
                <div className="des">{el.desc}</div>
                <a href={el.link} target="_blank" className="cbtn">
                  VIEW MORE
                </a>
              </div>
            </figure>
          )
        })}
      </Slider>
      <div className="slideNum">
        0{IDX + 1}<span> / 0{SLIDE.length}</span>
      </div>
      <ul className="slideTab">
        {
          SLIDE.map((el, idx) => {
            return (
              <li key={el.id} className={idx === IDX ? "on" : ""} onClick={() => mainSlide.current.slickGoTo(idx)}>{el.title}</li>
            )
          })
        }
      </ul>
      {/* {console.log(mainSlide)} */}
      <div className="slideArrows">
        <button onClick={() => mainSlide.current.slickPrev()}><i className="xi-arrow-left"></i></button>
        <button onClick={() => mainSlide.current.slickNext()}><i className="xi-arrow-right"></i></button>
      </div>
    </section>
  )
}

export default MainVisual;

