import Tracking from 'templates/Tracking'

export default function Index() {
  return <Tracking />
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
