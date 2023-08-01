import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 198px;

`
export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  margin-bottom: 0.75rem;
`
export const Icon = styled.span`
  svg {
   
    filter: drop-shadow(0px 0px 14.407779693603516px rgba(254, 234, 53, 0.25));

  }

`
export const Avaliation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #FEEA35;
`

export const FooterCard = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #8B8D9B;
  padding: 0.5rem 0;
`

export const Title = styled.p`
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`

export const TimeFilm = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const AgainFilme = styled(TimeFilm)`

`

export const ButtonAssistir = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #2B2B37;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
`

export const PlayIcone = styled.span`
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 99999px;
  background-color: #1E1F28;
  justify-content: center;
  align-items: center;
  
 
`