import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage () {
  const handleLabelClick = () => {
    console.log("HANDLE LABEL CLICK")
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
  }

  let email = ''

  const handleChangeInput = (event) => {
    email = event.target.value
  }

  return(
      <>
        <div>
          <Title onClick={handleLabelClick}>Formulario de login</Title>
          <label onClick={handleLabelClick}>Voltar a página...</label>
          <form onSubmit={handleSubmitForm}>
            <Input type="text" placeholder="Digite seu e-mail" onChange={handleChangeInput} />
            <Input type="text" placeholder="Digite sua senha" onChange={handleChangeInput} />
            <p>O e-mail digitado foi: {email}</p>
            <Button type="submit" >Botão dentro do form</Button>
          </form>
          <Button onClick={handleLabelClick}>Botão fora do form</Button>
          <label>LABEL TESTE</label>
        </div>
      </>
  )   
} 	