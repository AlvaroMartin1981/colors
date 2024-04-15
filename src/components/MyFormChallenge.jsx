import { useEffect, useState, useRef } from "react";
import '../App.css'
import BoxColor from "./BoxColor";
const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [value, setValue] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    const colorIndex = colors.indexOf(value);
    setCurrentColor(colorIndex !== -1 ? colors[colorIndex] : '')
  }, [value])

  return (
    <div>
    <input className="input"
      id="name"
      type="text"
      placeholder="Escribe un color..."
      value={value}
      onChange={() => setValue(inputRef.current.value)}
      ref={inputRef} />
      <div className="container">
      {colors.map((color, index) => (
        <BoxColor 
          key={index}
          color={color}
          value={value ===color ? `Soy el color ${value}` : `No soy el color seleccionado`}        
        />  
      ))}
      
    </div>
    <p>{currentColor !== '' ? `El color seleccionado es: ${currentColor}` : 'No hay ningún color seleccionado'}</p>  
    </div>

  );
}

export default MyForm;