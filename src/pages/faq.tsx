import Faq from 'templates/FAQ'

export default function Index() {
  return <Faq />
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
