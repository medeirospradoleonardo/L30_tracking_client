export type LanguageType = {
  pages: []
  components: {
    Header: {
      tooltipLight: string
      tooltipDark: string
      tooltipLanguageSwitch: string
      modalLanguage: string
      buttonSignIn: string
      buttonSignOut: string
    }
    AlertList: {
      messageEmpty: string
      headerTitle: string
      headerAllRead: string
      notLogged: string
      deleteButton: string
    }
    UserList: {
      myProfile: string
      myOrders: string
      addOrder: string
      config: string
      signOut: string
    }
    Logo: {
      title: string
    }
  }
}
