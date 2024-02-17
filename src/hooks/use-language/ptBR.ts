import { LanguageType } from './languageType'

const languagesPT_BR = {
  pages: [],
  components: {
    Header: {
      tooltipLight: 'Modo Claro',
      tooltipDark: 'Modo Escuro',
      tooltipLanguageSwitch: 'Mudar idioma',
      modalLanguage: 'Escolha o seu idioma',
      buttonSignIn: 'Entrar',
      buttonSignOut: 'Criar conta'
    },
    AlertList: {
      messageEmpty: 'Sem nenhuma notificação',
      headerTitle: 'Notificações',
      headerAllRead: 'Marcar tudo como lido',
      notLogged: 'Você precisa estar logado para ver as notificações',
      deleteButton: 'Excluir'
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
    }
  }
} as LanguageType

export default languagesPT_BR
