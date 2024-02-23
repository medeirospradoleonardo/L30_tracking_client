import { useLanguage } from 'hooks/use-language'
import * as S from './styles'
import { Divider } from 'components/Divider'

import { HiTruck } from 'react-icons/hi2'
import { useAlert } from 'hooks/use-alert'
import Heading from 'components/Heading'

type AlertListProps = {
  closeModal?: () => void
}

const AlertList = ({ closeModal }: AlertListProps) => {
  const { language } = useLanguage()
  const logged = true

  const { alerts } = useAlert()

  return (
    <S.Container>
      <S.Header>
        {/* <S.HeaderTitle>
          {language.components.AlertList.headerTitle}
        </S.HeaderTitle> */}
        <Heading lineLeft size="small" light>
          {language.components.AlertList.headerTitle}
        </Heading>
        {logged && (
          <S.AllRead>{language.components.AlertList.headerAllRead}</S.AllRead>
        )}
      </S.Header>
      <Divider />
      <S.AlertListContainer $quantity={logged ? alerts.length : 0}>
        {logged ? (
          alerts.length > 0 ? (
            <>
              {alerts.map((alert, index) => (
                <div key={`${alert.title}-${index}`} onClick={closeModal}>
                  <S.AlertContainer
                    $isRead={alert.isRead}
                    $remove={language.components.AlertList.deleteButton}
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
                      $time={alert.time}
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
