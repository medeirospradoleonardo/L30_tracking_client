import Dropdown from 'components/Dropdown'
import UserIcon from 'components/UserIcon'
import UserList from 'components/UserList'

export type UserDropdownProps = {
  firstName: string
  lastName: string
}

const UserDropdown = ({ firstName, lastName }: UserDropdownProps) => {
  return (
    <Dropdown title={<UserIcon firstName={firstName} />}>
      <UserList firstName={firstName} lastName={lastName} />
    </Dropdown>
  )
}

export default UserDropdown
