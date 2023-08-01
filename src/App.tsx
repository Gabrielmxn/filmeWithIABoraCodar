
import './App.css'
import { CardFilm } from './components/Card_film'
import { Header } from './components/Header'
import imageBarbie from './assets/barbie.svg'
import imageOppenheimersvg from './assets/oppenheimersvg.svg'
import imageIndianaJones from './assets/indianaJones.svg'
import { Cards, FlexContainer, MainContainer, SeparadorBorder } from './style'

const films = [
  {
    id: 1,
    title: 'Barbie',
    avaliation: 4.9,
    url: imageBarbie,
    duration: '1:54:00',
    again: 2023,
  },
  {
    id: 2,
    title: 'Oppenheimer',
    avaliation: 4.9,
    url: imageOppenheimersvg,
    duration: '3:00:00',
    again: 2023,
  },
  {
    id: 3,
    title: 'Indiana Jones e o Chamado do Destino',
    avaliation: 4.9,
    url: imageIndianaJones,
    duration: '2:22:00',
    again: 2023,
  }
]

function App() {


  return (
    <FlexContainer>
      <SeparadorBorder>

      <MainContainer>
      <Header />
      <Cards>
        {films.map(film => {
          return (
            <CardFilm title={film.title} imgUrl={film.url} avaliation={film.avaliation} duration={film.duration} again={film.again}/>
          )
        })}
      </Cards>
    </MainContainer>
      </SeparadorBorder>
    </FlexContainer>
  )
}

export default App
