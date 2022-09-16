import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const UURL = [
  { id: 1, url: 'raw3Nu0_mBQ', title: "IT Technology", des: "IT 기술이 창조하는 승강기 스마트 시스템" },
  { id: 2, url: 'beaUbnjlu14', title: "Green Technology", des: "지구환경을 생각하는 녹색기술" }
]


const Promotion = () => {
  const MOVIE = useRef()
  const [URL, setURL] = useState('raw3Nu0_mBQ')
  const [TIT, setTIT] = useState(0)

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      loop: 1,
      controls: 0,
      showInfo: 0,
      rel: 1,
      mute: 1,
      // playlist: 'raw3Nu0_mBQ',
      paused: 1,
    },
  };
  return (
    <section className="Promotion csc">
      <h2>홍보영상</h2>
      <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
      <div className="container">
        <div className="movie" ref={MOVIE} id='movie'>
          <YouTube className="u" videoId={URL} opts={opts} />
          <div className="movie_title">
            {
              UURL[TIT].title
            }
          </div>
        </div>
        <ul className="des">
          {/* <button onClick={() => { setURL('raw3Nu0_mBQ') }}>01movie</button>
          <button onClick={() => { setURL('beaUbnjlu14') }}>02movie</button>
          <button onClick={() => { setURL('cHhZlQlTvY8') }}>03movie</button> */}
          {
            UURL.map((el, idx) => {
              return (
                <li
                  key={el.id}
                  className={el.id === idx + 1? "on" : ""}
                  onClick={() => { setTIT(idx); setURL(el.url) }}>
                  <div className="title">{el.title}</div>
                  <p>{el.des}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Promotion;