import { useLanguage } from 'hooks/use-language'
import * as S from './styles'
import { Divider } from 'components/Divider'

import { HiTruck } from 'react-icons/hi2'

const AlertList = () => {
  const { language } = useLanguage()
  const logged = true

  const alerts = [
    {
      title: 'Doogee S110',
      description: 'De VALINHOS-SP para BAURU-SP',
      time: '22:47',
      read: false
    },
    {
      title: 'Mini Secador',
      description: 'De CURITIBA-PR para BAURU-SP',
      time: 'Ontem',
      read: true
    },
    {
      title: 'R36S',
      description: 'Objeto saiu para entrega ao destinatário',
      time: '02/02',
      read: true
    }
  ]

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>
          {language.components.AlertList.headerTitle}
        </S.HeaderTitle>
        {logged && (
          <S.AllRead>{language.components.AlertList.headerAllRead}</S.AllRead>
        )}
      </S.Header>
      <Divider />
      <S.AlertListContainer quantity={logged ? alerts.length : 0}>
        {logged ? (
          alerts.length > 0 ? (
            <>
              {alerts.map((alert, index) => (
                <div key={`${alert.title}-${index}`}>
                  <S.AlertContainer
                    read={alert.read.toString()}
                    remove={language.components.AlertList.deleteButton}
                  >
                    <S.AlertIcon>
                      <HiTruck size={40} />
                    </S.AlertIcon>
                    <div>
                      <S.AlertTitle>{alert.title}</S.AlertTitle>
                      <S.AlertDescription>
                        {alert.description}
                      </S.AlertDescription>
                    </div>
                    <S.AlertTime
                      time={alert.time}
                      // onClick={() => console.log()}
                    />
                  </S.AlertContainer>
                  {alerts.length != index + 1 && <Divider />}
                </div>
              ))}
            </>
          ) : (
            <S.Empty>{language.components.AlertList.messageEmpty}</S.Empty>
          )
        ) : (
          <S.Empty>{language.components.AlertList.notLogged}</S.Empty>
        )}
      </S.AlertListContainer>
    </S.Container>
  )
}

export default AlertList
