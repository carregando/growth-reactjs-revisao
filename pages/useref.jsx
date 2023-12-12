import  { useRef } from 'react'

import Input from '../src/components/input/Input'

export default function UseRefPage() {
  const numero = useRef(10)
  const inputRef = useRef(null)
  const componentInputRef = useRef(null)

  const handleButtonFocus = () => {
    inputRef.current.focus()
  }

  return(
    <>
      <div>
        <h4>UseRef exemplo</h4>
        <p>Numero: {numero.current}</p>
      </div>
      <div>
        <h4>Exemplo com referencia no input do HTML:</h4>
        <input ref={inputRef} type="text" />
        <button onClick={handleButtonFocus} >Foco no input</button>
      </div>
      <div>
        <h4>Exemplo com referencia no input componente</h4>
        <Input type="text" ref={componentInputRef}/>
        <button onClick={() => componentInputRef.current.focus()} >Foco no input</button>
      </div>
    </>
  )
}