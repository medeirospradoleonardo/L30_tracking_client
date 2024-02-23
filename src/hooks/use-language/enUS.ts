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
      linkContact: 'Contact us',
      linkTracking: 'Track an order'
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
      linkContact: 'Contact us',
      linkTracking: 'Track an order',
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
    },
    Footer: {
      contactUs: 'Contact us',
      socialMedia: 'Social media',
      linkTracking: 'Track an order',
      linkAboutUs: 'About us',
      linkFrequentlyAskedQuestions: 'Frequently asked questions',
      linkSuggestions: 'Suggestions'
    }
  }
} as LanguageType

export default languagesEN_US
