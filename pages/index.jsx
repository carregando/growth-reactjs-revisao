import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage () {
  const handleLabelClick = () => {
    console.log("HANDLE LABEL CLICK")
  }
    return (
      <>
        <div>
          <Title onClick={handleLabelClick}>Formulario de login</Title>
          <label onClick={handleLabelClick}>Voltar a página...</label>
          <form>
            <Input type="email" placeholder="Digite seu e-mail" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button onClick={handleLabelClick}>Botão</Button>
          </form>
          <label>LABEL TESTE</label>
        </div>
      </>
    )   
} 	