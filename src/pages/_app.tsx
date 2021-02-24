import '../styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
  
  
}

export default MyApp

// Aqui fica o conteudo que fica em volta da aplicação inteira
// que não tem mudança, e que fica fixo em todas as paginas