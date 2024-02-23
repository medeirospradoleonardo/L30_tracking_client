import Suggestions from 'templates/Suggestions'

export default function Index() {
  return <Suggestions />
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
