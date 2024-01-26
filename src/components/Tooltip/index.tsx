import * as S from './styles'

type TooltipProps = {
  content: string
  children: React.ReactNode
  position: "bottom" | "left" | "right"
  limit?: "right" | "left" | null
}

const Tooltip = ({ content, children, position, limit = null }: TooltipProps) => {

  return (
    <S.TooltipWrapper>
      <S.TooltipChildren>{children}</S.TooltipChildren>
      <S.CenterContainer id='teste' position={position} limit={limit}>
        <S.TooltipBox position={position}>
          <S.TooltipText>{content}</S.TooltipText>
        </S.TooltipBox>
      </S.CenterContainer>
    </S.TooltipWrapper>
  )
}

export default Tooltip
