import Toast from 'components/Toast'
import { useToast } from 'hooks/use-toast'
import Base from 'templates/Base'

export default function Index() {
  const toast = useToast()
  return (
    <Base>
      {/* <Toast title="Toast title" /> */}
      <div onClick={() => toast.open('Toast created from child component!')}>
        Toast
      </div>
    </Base>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
