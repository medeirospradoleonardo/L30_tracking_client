import Header from 'components/Header'

export default function Index() {
  return (
    <>
      <Header />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
