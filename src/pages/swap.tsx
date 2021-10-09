// External libs
import { GetServerSideProps } from 'next'

// Assets

// Componentes

// Subcomponentes and style

// Services

// Types

const pages: React.FC = () => {
  return <div>Redirect</div>
}

export default pages

export const getServerSideProps: GetServerSideProps = async context => {
  context.res.statusCode = 302
  context.res.setHeader('location', 'https://v2.swapmatic.io/?#/matic/swap')
  return { props: {} }
}
