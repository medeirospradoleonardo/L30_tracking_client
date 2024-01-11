import * as S from './styles'

import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'

const Header = () => {
  return (
    <S.Container>
      <S.Left>Logo</S.Left>
      <S.Right>
        <S.Icon>
          <HiOutlineSun
            size={25}
            onClick={() => console.log('A lua me traiu')}
          />
        </S.Icon>
        {/* <S.Icon>
          <HiOutlineMoon
            size={23}
            onClick={() => console.log('Achei que era pra valer')}
          />
        </S.Icon> */}
      </S.Right>
    </S.Container>
  )
}

export default Header
