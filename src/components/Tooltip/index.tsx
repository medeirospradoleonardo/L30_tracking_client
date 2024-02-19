import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type TooltipProps = {
  content: string
  children: React.ReactNode
  position: 'bottom' | 'left' | 'right'
  limit?: 'right' | 'left' | null
}

const Tooltip = ({
  content,
  children,
  position,
  limit = null
}: TooltipProps) => {
  return (
    <S.TooltipWrapper>
      <S.TooltipChildren>{children}</S.TooltipChildren>
      <MediaMatch $greaterThan="medium">
        <S.CenterContainer $position={position} $limit={limit}>
          <S.TooltipBox $position={position}>
            <S.TooltipText>{content}</S.TooltipText>
          </S.TooltipBox>
        </S.CenterContainer>
      </MediaMatch>
    </S.TooltipWrapper>
  )
}

export default Tooltip
