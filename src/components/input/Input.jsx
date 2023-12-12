import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 10px 20px;
`

export default function Input({ type, placeholder}) {
  return <StyledInput type={type} placeholder={placeholder} />
}