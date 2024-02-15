import { useToast } from 'hooks/use-toast'
import { useState } from 'react'
import Base from 'templates/Base'

export default function Index() {
  const toast = useToast()
  const [id, setId] = useState('')
  return (
    <Base>
      <div style={{ height: '150vh' }}>
        {/* <Toast title="Toast title" /> */}
        <div
          style={{
            cursor: 'pointer',
            width: '80px',
            height: '25px',
            background: '#da25bb',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            margin: '10px'
          }}
          onClick={() => {
            const id = toast.open('Toast created from child component!', {
              autoClose: 5,
              position: 'top-right'
            })

            setId(id)
          }}
        >
          Toast
        </div>
        <div
          style={{
            cursor: 'pointer',
            width: '80px',
            height: '25px',
            background: '#3f3e3e',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            margin: '10px'
          }}
          onClick={() =>
            toast.open('Toast created from child', {
              autoClose: false,
              pauseOnHover: false,
              type: 'success',
              colored: true
            })
          }
        >
          Toast
        </div>
        <div
          style={{
            cursor: 'pointer',
            width: '80px',
            height: '25px',
            background: '#3f3e3e',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            margin: '10px'
          }}
          onClick={() => {
            toast.pause(id)
          }}
        >
          Pause
        </div>
        <div
          style={{
            cursor: 'pointer',
            width: '80px',
            height: '25px',
            background: '#3f3e3e',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            margin: '10px'
          }}
          onClick={() => {
            toast.play(id)
          }}
        >
          Play
        </div>
        <div
          style={{
            cursor: 'pointer',
            width: '80px',
            height: '25px',
            background: '#3f3e3e',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            margin: '10px'
          }}
          onClick={() => {
            setId(toast.openPromise('Aguarde um momento', 'top-center'))
          }}
        >
          Promise
        </div>
        <div
          style={{
            cursor: 'pointer',
            width: '80px',
            height: '25px',
            background: '#1fbd1f',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            margin: '10px'
          }}
          onClick={() => {
            toast.closePromise(id, 'Solicitação aceita', {
              type: 'success',
              colored: true,
              autoClose: 2.5
            })
          }}
        >
          Accept
        </div>
        <div
          style={{
            cursor: 'pointer',
            width: '80px',
            height: '25px',
            background: '#cc2828',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            margin: '10px'
          }}
          onClick={() => {
            toast.closePromise(id, 'Solicitação recusada', {
              type: 'error',
              colored: true,
              autoClose: 2.5
            })
          }}
        >
          Recuse
        </div>
      </div>
    </Base>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
