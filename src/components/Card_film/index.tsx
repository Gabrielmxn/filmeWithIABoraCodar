
import { AgainFilme, Avaliation, ButtonAssistir, Container, FooterCard, HeaderCard, Icon, TimeFilm, Title } from './style';
import { Star, Clock, CalendarBlank } from '@phosphor-icons/react';
import iconePlay from '../../assets/icone.svg'

interface filmCardProps {
  title: string;
  avaliation: number;
  imgUrl: string;
  duration: string;
  again: number;
}

export function CardFilm({title, avaliation, imgUrl, duration, again}: filmCardProps){
  return(
    <Container>
      <HeaderCard>
        <Title>{title}</Title>
        <Avaliation>
          <Icon>
            <Star weight="fill"/>
          </Icon>
          {avaliation}
        </Avaliation>
      </HeaderCard>
      <img src={imgUrl} alt="" />
      <FooterCard>
        <TimeFilm>
          <Clock size={20} />
          <span>{duration}</span>
        </TimeFilm>
        <AgainFilme>
          <CalendarBlank size={20}/>
          <span>{again}</span>
        </AgainFilme>
      </FooterCard>
      <ButtonAssistir>
            <img src={iconePlay} alt="play" />

        <span>Assistir trailer</span>
      </ButtonAssistir>
    </Container>
  )
}