export type LanguageType = {
  templates: {
    Auth: {
      HeaderSignUp: string
      HeaderSignIn: string
      HeaderForgotPassword: string
      HeaderResetPassword: string
    }
  }
  components: {
    Header: {
      tooltipLight: string
      tooltipDark: string
      tooltipLanguageSwitch: string
      modalLanguage: string
      buttonSignIn: string
      buttonSignOut: string
      linkContact: string
      linkTracking: string
    }
    AlertList: {
      messageEmpty: string
      headerTitle: string
      headerAllRead: string
      notLogged: string
      deleteButton: string
    }
    UserDropDown: {
      myProfile: string
      myOrders: string
      addOrder: string
      config: string
      signOut: string
      linkContact: string
      linkTracking: string
      buttonSignIn: string
      buttonSignOut: string
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
    Footer: {
      contactUs: string
      socialMedia: string
      linkTracking: string
      linkAboutUs: string
      linkFrequentlyAskedQuestions: string
      linkSuggestions: string
      links: string
      services: string
      serviceTracking: string
    }
    FormSignOut: {
      inputName: string
      inputEmail: string
      inputPassword: string
      inputConfirmPassword: string
      buttonSignUp: string
      buttonSignIn: string
      haveAccount: string
      passwordRuleCheck: {
        minAndMax: string
        leastOneLower: string
        leastOneUpper: string
        leastOneSpecial: string
      }
      validation: {
        name: {
          required: string
          min: string
          max: string
        }
        email: {
          required: string
          min: string
          max: string
          email: string
        }
        password: {
          required: string
          min: string
          max: string
          leastOneLower: string
          leastOneUpper: string
          leastOneSpecial: string
        }
        confirmPassword: {
          required: string
          equal: string
        }
      }
    }
    FormSignIn: {
      inputEmail: string
      inputPassword: string
      buttonSignIn: string
      forgotPassword: string
      buttonSignUp: string
      notHaveAccount: string
    }
    FormForgotPassword: {
      buttonSendEmail: string
      validation: {
        email: {
          required: string
          min: string
          max: string
          email: string
        }
      }
    }
  }
}
