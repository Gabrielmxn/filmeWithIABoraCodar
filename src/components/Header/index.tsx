import { HeaderContainer, NewRecomendation } from "./style";
import logoImg from '../../assets/logo.svg';
import { Lightning } from '@phosphor-icons/react';
export function Header(){
  return(
    <HeaderContainer>
       <img src={logoImg} alt="logo" />
        <NewRecomendation>
          Nova recomendação
          <span>
            <Lightning />
          </span> 
        </NewRecomendation>
    </HeaderContainer>
  )
}