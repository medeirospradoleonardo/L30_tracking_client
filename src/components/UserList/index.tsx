import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineHeart,
  HiOutlineUserCircle
} from 'react-icons/hi2'
import Link from 'next/link'

const UserList = () => {
  const { language } = useLanguage()
  const logged = true

  return (
    <S.Nav>
      <Link href="/profile/me" passHref style={{ textDecoration: 'none' }}>
        <S.Link>
          <HiOutlineUserCircle />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/wishlist" passHref style={{ textDecoration: 'none' }}>
        <S.Link>
          <HiOutlineHeart />
          <span>Wishlist</span>
        </S.Link>
      </Link>
      <S.Link role="button" title="Sign out">
        <HiOutlineArrowRightOnRectangle />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  )
}

export default UserList
