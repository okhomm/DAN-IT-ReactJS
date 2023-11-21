import Content from './components/Content'
import Theme from './styles/Theme'
import Flex from './styles/Flex'
import { PageWrapper } from './AppStyles'

const App = () => {
  return (
    <Theme>
      <Flex $direction="column" $justify="center" $align="center">
        <PageWrapper>
          <Content />
        </PageWrapper>
      </Flex>
    </Theme>
  )
}

export default App
