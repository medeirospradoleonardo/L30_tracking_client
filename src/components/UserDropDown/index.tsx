import Dropdown from 'components/Dropdown'
import UserIcon from 'components/UserIcon'
import UserList from 'components/UserList'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown title={<UserIcon username={username} />}>
      <UserList />
    </Dropdown>
  )
}

export default UserDropdown
