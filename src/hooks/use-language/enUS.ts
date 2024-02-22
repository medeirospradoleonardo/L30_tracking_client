import { LanguageType } from './languageType'

const languagesEN_US = {
  pages: [],
  components: {
    Header: {
      tooltipLight: 'Light Mode',
      tooltipDark: 'Dark Mode',
      tooltipLanguageSwitch: 'Change language',
      modalLanguage: 'Choose your language',
      buttonSignIn: 'Sign In',
      buttonSignOut: 'Sign Up',
      labelContact: 'Contact us',
      labelTracking: 'Track an order'
    },
    AlertList: {
      messageEmpty: 'Without any notifications',
      headerTitle: 'Notifications',
      headerAllRead: 'Mark all as read',
      notLogged: 'You need to be logged in to see notifications',
      deleteButton: 'Remove'
    },
    UserDropDown: {
      myProfile: 'My profile',
      myOrders: 'My orders',
      addOrder: 'Add order',
      config: 'Settings',
      signOut: 'Exit',
      labelContact: 'Contact us',
      labelTracking: 'Track an order',
      buttonSignIn: 'Sign In',
      buttonSignOut: 'Sign Up'
    },
    UserList: {
      myProfile: 'My profile',
      myOrders: 'My orders',
      addOrder: 'Add order',
      config: 'Settings',
      signOut: 'Exit'
    },
    Logo: {
      title: 'Tracking'
    }
  }
} as LanguageType

export default languagesEN_US
