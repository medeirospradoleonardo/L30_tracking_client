import { LanguageType } from './languageType'

const languagesEN_US = {
  templates: {
    Auth: {
      HeaderSignUp: 'Sign Up',
      HeaderSignIn: 'Sign In',
      HeaderForgotPassword: 'Request new password',
      HeaderResetPassword: 'Reset password'
    }
  },
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
      linkSuggestions: 'Suggestions',
      links: 'Links',
      services: 'Services',
      serviceTracking: 'Tracking'
    },
    FormSignOut: {
      inputName: 'Name',
      inputEmail: 'Email',
      inputPassword: 'Password',
      inputConfirmPassword: 'Confirm password',
      buttonSignUp: 'Sign up now',
      buttonSignIn: 'Sign in',
      haveAccount: 'Already have an account?',
      passwordRuleCheck: {
        minAndMax: '8-30 characters',
        leastOneLower: 'At least 1 lowercase letter',
        leastOneUpper: 'At least 1 capital letter',
        leastOneSpecial: 'At least 1 special character'
      },
      validation: {
        name: {
          required: 'Fill in the Name. Empty field.',
          min: 'The Name must have at least % characters.',
          max: 'The Name must have a maximum of % characters.'
        },
        email: {
          required: 'Fill in the Email. Empty field.',
          min: 'Email must have at least % characters.',
          max: 'Email must have a maximum of % characters.',
          email: 'Invalid Email. Try again.'
        },
        password: {
          required: 'Fill in the Password. Empty field.',
          min: 'The Password must have at least % characters.',
          max: 'The Password must have a maximum of % characters.',
          leastOneLower: 'The Password must have at least 1 lowercase letter.',
          leastOneUpper: 'The Password must have at least 1 capital letter.',
          leastOneSpecial:
            'The Password must have at least 1 special character.'
        },
        confirmPassword: {
          required: 'Fill in the Confirm password. Empty field.',
          equal: 'The passwords are not the same. Try again.'
        }
      }
    },
    FormSignIn: {
      inputEmail: 'Email',
      inputPassword: 'Password',
      buttonSignIn: 'Sign in now',
      forgotPassword: 'Forgot your password?',
      buttonSignUp: 'Sign up',
      notHaveAccount: "Don't have an account?"
    },
    FormForgotPassword: {
      buttonSendEmail: 'Send email',
      validation: {
        email: {
          required: 'Fill in the Email. Empty field.',
          min: 'Email must have at least % characters.',
          max: 'Email must have a maximum of % characters.',
          email: 'Invalid Email. Try again.'
        }
      }
    }
  }
} as LanguageType

export default languagesEN_US
