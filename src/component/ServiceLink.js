import { useEffect, useRef, useState } from "react"

const SERVICE = [
  {
    id: 1, title: "증명서 발급 조회",
    sub: [
      { title: "증명서 발급 조회", link: "#!" },
      { title: "사용인감신고서 발급 조회", link: "#!" },
      { title: "재직증명서 발급 조회", link: "#!" },
    ]
  },
  {
    id: 2, title: "인트라넷",
    sub: [
      { title: "자재협력시스템", link: "#!" },
      { title: "인사정보시스템", link: "#!" },
      { title: "그룹웨어", link: "#!" },
      { title: "디지털세금계산서", link: "#!" },
      { title: "전자구매입찰", link: "#!" },
    ]
  },
  {
    id: 3, title: "패밀리사이트",
    sub: [
      { title: "현대아산", link: "#!" },
      { title: "현대무벡스", link: "#!" },
      { title: "현대경제연구원", link: "#!" },
      { title: "현대투자파트너스", link: "#!" },
      { title: "현대글로벌", link: "#!" },
    ]
  },
]

export const ServiceLink = () => {
  const [LINK, setLINK] = useState()
  const [TOGGLE, setTOGGLE] = useState()
  const [TABLIC, setTABLIC] = useState()
  const TABLI = useRef()

  useEffect(() => {
    setTABLIC(TABLI.current)
  }, [])

  // setTOGGLE(() => {
  //   if (TABLIC.classList.contains('on')) {
  //     return (!TOGGLE)
  //   } else {
  //     return (TOGGLE)
  //   }
  // })

  return (
    <ul className="ServiceLink">
      {
        SERVICE.map((el, idx) => {
          return (
            <li key={el.id}>
              <div ref={TABLI} className={"title" + (TOGGLE && LINK === idx ? " on" : "")}
                onClick={() => { setLINK(idx); setTOGGLE((TABLIC.classList.contains('on')) ? false : true); console.log(idx, TOGGLE) }}>
                {el.title}</div>
              <ul className={"subLink" + (TOGGLE && LINK === idx ? " on" : "")}>
                {
                  el.sub.map((sub, idx) => {
                    return (
                      <li key={idx}>{sub.title}</li>
                    )
                  })
                }
              </ul>
            </li>
          )
        })
      }
    </ul>
  )
}
