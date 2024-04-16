import { useRef, useState, useEffect } from "react"

function boxColor({color, value}) {
  const [classList, setClassList] = useState('')
  const boxRef = useRef(null)

  const boxCss = {
    backgroundColor: classList.value == `box ${value}` ? color : null,
    border: `1px solid ${color}`,
    color: color
  }

  useEffect(() =>{
    setClassList(boxRef.current.classList)
  }, [])

  return(
  <>
  <div 
  ref={boxRef} 
  className={`box ${color}`}
  style={boxCss}
  >
  {color === value ? <h2 style={{color: 'black'}}>Yes, I´m {value} color</h2> : <h2>I´m not {value} color</h2>}  

  </div>
  </>
  )
}
export default boxColor

/*function BoxColor ({color, value}) {
  return (
    <div>
      <span className={`box ${color}`} style={{color:color}}>{value}</span>
    </div>
  )
}
export default BoxColor;  */
