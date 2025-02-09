import styled from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Card from './components/Card'
import theme from './components/Theme'

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background-color: ${theme.cream};
`

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Card />
    </Container>
  )
}

export default App
