import { LanguageType } from './languageType'

const languagesPT_BR = {
  templates: {
    Auth: {
      HeaderSignUp: 'Criar uma conta',
      HeaderSignIn: 'Entrar',
      HeaderForgotPassword: 'Solicitar nova senha',
      HeaderResetPassword: 'Resetar senha'
    }
  },
  components: {
    Header: {
      tooltipLight: 'Modo Claro',
      tooltipDark: 'Modo Escuro',
      tooltipLanguageSwitch: 'Mudar idioma',
      modalLanguage: 'Escolha o seu idioma',
      buttonSignIn: 'Entrar',
      buttonSignOut: 'Criar conta',
      linkContact: 'Fale conosco',
      linkTracking: 'Rastreie uma encomenda'
    },
    AlertList: {
      messageEmpty: 'Sem nenhuma notificação',
      headerTitle: 'Notificações',
      headerAllRead: 'Marcar tudo como lido',
      notLogged: 'Você precisa estar logado para ver as notificações',
      deleteButton: 'Excluir'
    },
    UserDropDown: {
      myProfile: 'Meu perfil',
      myOrders: 'Minhas encomendas',
      addOrder: 'Adicionar encomenda',
      config: 'Configurações',
      signOut: 'Sair',
      linkContact: 'Fale conosco',
      linkTracking: 'Rastreie uma encomenda',
      buttonSignIn: 'Entrar',
      buttonSignOut: 'Criar conta'
    },
    UserList: {
      myProfile: 'Meu perfil',
      myOrders: 'Minhas encomendas',
      addOrder: 'Adicionar encomenda',
      config: 'Configurações',
      signOut: 'Sair'
    },
    Logo: {
      title: 'Rastreamento'
    },
    Footer: {
      contactUs: 'Fale conosco',
      socialMedia: 'Redes sociais',
      linkTracking: 'Rastreie uma encomenda',
      linkAboutUs: 'Sobre Nós',
      linkFrequentlyAskedQuestions: 'Dúvidas Frequentes',
      linkSuggestions: 'Sugestões',
      links: 'Links',
      services: 'Serviços',
      serviceTracking: 'Rastreio'
    },
    FormSignOut: {
      inputName: 'Nome',
      inputEmail: 'Email',
      inputPassword: 'Senha',
      inputConfirmPassword: 'Confirmar senha',
      buttonSignUp: 'Criar uma conta',
      buttonSignIn: 'Entrar',
      haveAccount: 'Já possui uma conta?',
      passwordRuleCheck: {
        minAndMax: '8-30 caracteres',
        leastOneLower: 'No minimo 1 letra minúscula',
        leastOneUpper: 'No minimo 1 letra maiúscula',
        leastOneSpecial: 'No minimo 1 caractere especial'
      },
      validation: {
        name: {
          required: 'Preencha o Nome. Campo vazio.',
          min: 'O Nome precisa ter no mínimo % caracteres.',
          max: 'O Nome precisa ter no máximo % caracteres.'
        },
        email: {
          required: 'Preencha o Email. Campo vazio.',
          min: 'O Email precisa ter no mínimo % caracteres.',
          max: 'O Email precisa ter no máximo % caracteres.',
          email: 'Email inválido. Tente novamente.'
        },
        password: {
          required: 'Preencha a Senha. Campo vazio.',
          min: 'A Senha precisa ter no mínimo % caracteres.',
          max: 'A Senha precisa ter no máximo % caracteres.',
          leastOneLower: 'A Senha precisa ter no mínimo 1 letra minúscula.',
          leastOneUpper: 'A Senha precisa ter no mínimo 1 letra maiúscula.',
          leastOneSpecial: 'A Senha precisa ter no mínimo 1 caractere especial.'
        },
        confirmPassword: {
          required: 'Preencha o Confirmar senha. Campo vazio.',
          equal: 'As senhas não são iguais. Tente novamente.'
        }
      }
    },
    FormSignIn: {
      inputEmail: 'Email',
      inputPassword: 'Senha',
      buttonSignIn: 'Entrar',
      forgotPassword: 'Esqueceu sua senha?',
      buttonSignUp: 'Criar uma conta',
      notHaveAccount: 'Não possui uma conta?'
    },
    FormForgotPassword: {
      buttonSendEmail: 'Enviar email',
      validation: {
        email: {
          required: 'Preencha o Email. Campo vazio.',
          min: 'O Email precisa ter no mínimo % caracteres.',
          max: 'O Email precisa ter no máximo % caracteres.',
          email: 'Email inválido. Tente novamente.'
        }
      }
    }
  }
} as LanguageType

export default languagesPT_BR
