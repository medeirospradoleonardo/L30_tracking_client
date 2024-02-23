import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
  light?: boolean
  marginBottom?: boolean
}

const Heading = ({
  children,
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium',
  light = false,
  marginBottom = false
}: HeadingProps) => (
  <S.Wrapper
    $lineLeft={lineLeft}
    $lineBottom={lineBottom}
    $lineColor={lineColor}
    $size={size}
    $light={light}
    $marginBottom={marginBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
