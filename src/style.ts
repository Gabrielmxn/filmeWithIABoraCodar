import { styled } from 'styled-components';
export const MainContainer = styled.main`
  
  flex-direction: column;
 

  padding: 2rem;

  max-width: 846px;

  margin: 25px;
  



`

export const SeparadorBorder = styled.div`
  padding: 0.5rem;
  border-radius: 20px;
  background-image: linear-gradient(#1E1F28, #1E1F28), radial-gradient(circle at top left, #9747FF, #C497FF);
  background-origin: border-box;
  background-clip: content-box, border-box;

  box-shadow: 0px -3px 22px 0px rgba(0, 0, 0, 0.35);
 
`


export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;



  
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;

  gap: 1rem;
`