import { styled } from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.25rem;
`

export const NewRecomendation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: var(--gradientes-gradiente-normal, linear-gradient(90deg, #8323FF 0%, #FF2DAF 100%));
  color: white;
  cursor: pointer;
  
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    background-color: rgba(255,255,255,0.40);
  
    width: 32px;
    height: 32px;
  }
`