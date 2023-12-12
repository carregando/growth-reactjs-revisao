import { useState } from 'react'

import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage () {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLabelClick = () => {
    console.log("HANDLE LABEL CLICK")
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log({ email, password })
  }

  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }

  return(
      <>
        <div>
          <Title onClick={handleLabelClick}>Formulario de login</Title>
          <label onClick={handleLabelClick}>Voltar a página...</label>
          <form onSubmit={handleSubmitForm}>
            <Input type="email" placeholder="Digite seu e-mail" onChange={(e) => handleChangeInput(e, setEmail)} />
            <Input type="password" placeholder="Digite sua senha" onChange={(e) => handleChangeInput(e, setPassword)} />
            <p>O e-mail digitado foi: {email}</p>
            <p>A senha digitada foi: {password}</p>
            <Button type="submit" >Botão dentro do form</Button>
          </form>
          <Button onClick={handleLabelClick}>Botão fora do form</Button>
          <label>LABEL TESTE</label>
        </div>
      </>
  )   
} 	