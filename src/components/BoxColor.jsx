function BoxColor ({color, value}) {
  return (
    <div>
      <span className={`box ${color}`} style={{color:color}}>{value}</span>
    </div>
  )
}
export default BoxColor;  
