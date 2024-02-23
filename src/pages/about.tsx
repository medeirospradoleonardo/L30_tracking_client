import About from 'templates/About'

export default function Index() {
  return <About />
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
