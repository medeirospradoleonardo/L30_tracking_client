import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineUserCircle,
  HiOutlineChevronRight,
  HiOutlineWrench,
  HiOutlinePlus,
  HiOutlineInboxStack
} from 'react-icons/hi2'

type UserList = {
  firstName: string
  lastName: string
}

const UserList = ({ firstName, lastName }: UserList) => {
  const { language } = useLanguage()
  const logged = true

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          {/* <HiOutlineUserCircle size={24} /> */}
          <S.HeaderTitle>{`${firstName} ${lastName}`}</S.HeaderTitle>
          <S.HeaderDescription>
            <span>{language.components.UserList.myProfile}</span>
            <HiOutlineChevronRight />
          </S.HeaderDescription>
        </S.Header>
        <S.Divider />
        <S.Link>
          <HiOutlineInboxStack size={24} />
          <span>{language.components.UserList.myOrders}</span>
        </S.Link>
        {/* <S.Divider /> */}
        <S.Link>
          <HiOutlinePlus size={24} />
          <span>{language.components.UserList.addOrder}</span>
        </S.Link>
        <S.Divider />
        <S.Link>
          <HiOutlineWrench size={24} />
          <span>{language.components.UserList.config}</span>
        </S.Link>
        <S.Divider />
        <S.Link role="button">
          <HiOutlineArrowRightOnRectangle size={24} />
          <span>{language.components.UserList.signOut}</span>
        </S.Link>
      </S.Content>
    </S.Container>
  )
}

export default UserList
