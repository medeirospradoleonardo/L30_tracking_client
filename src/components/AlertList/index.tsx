import { useLanguage } from 'hooks/use-language'
import * as S from './styles'
import { Divider } from 'components/Divider'

const AlertList = () => {
  const { language } = useLanguage()

  const alerts = [
    {
      title: 'Doogee S110',
      description: 'De VALINHOS-SP para BAURU-SP',
      time: '22:47',
      read: true
    },
    {
      title: 'Mini Secador',
      description: 'De CURITIBA-PR para BAURU-SP',
      time: 'Ontem',
      read: false
    }
  ]
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>Notificações</S.HeaderTitle>
      </S.Header>
      <Divider />
      {alerts.length > 0 ? (
        <S.MessageListContainer>
          {alerts.map((alert, index) => (
            <>
              <S.MessageContainer
                key={`${alert.title}-${index}`}
                read={alert.read}
              >
                <S.MessageTitle>{alert.title}</S.MessageTitle>
                <S.MessageDescription>{alert.description}</S.MessageDescription>
                <S.MessageTime>{alert.time}</S.MessageTime>
              </S.MessageContainer>
              {alerts.length != index + 1 && <Divider />}
            </>
          ))}
        </S.MessageListContainer>
      ) : (
        <S.Empty>{language.components.AlertList.messageEmpty}</S.Empty>
      )}
    </S.Container>
  )
}

export default AlertList
