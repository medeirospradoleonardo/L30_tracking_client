import Home from 'templates/Home'

export default function Index() {
  return <Home />
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
