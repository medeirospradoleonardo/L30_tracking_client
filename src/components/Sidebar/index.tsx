import React, { useState } from 'react'
import * as S from './styles'

import { AiOutlineLeft } from 'react-icons/ai'

type SlementsSidebarProps = {
  label: string
  icon: React.ReactNode
  to: string
  quantity?: number
  divider?: boolean
}

type SidebarProps = {
  elementsSidebar: SlementsSidebarProps[]
  session?: boolean
  isActive?: boolean
}

const Sidebar = ({
  elementsSidebar,
  session = true,
  isActive = false
}: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <S.Container>
        <S.Sidebar isOpen={sidebarOpen}>
          <>
            <S.SidebarButton
              isOpen={sidebarOpen}
              onClick={() => setSidebarOpen((p) => !p)}
            >
              <AiOutlineLeft />
            </S.SidebarButton>
          </>
          {elementsSidebar.map((e) => (
            <>
              <S.LinkContainer
                key={e.label}
                isActive={isActive}
                session={session}
                title={!session ? 'Você precisa estar logado' : ''}
              >
                <S.Link session={session}>
                  <>
                    <S.LinkIcon>{e.icon}</S.LinkIcon>
                    {sidebarOpen && (
                      <>
                        <S.LinkLabel>{e.label}</S.LinkLabel>
                        {!session && <S.NaoLogado>Não logado</S.NaoLogado>}
                      </>
                    )}

                    {sidebarOpen &&
                      e.to == '/' &&
                      !!session &&
                      e.quantity &&
                      e.quantity >= 0 && (
                        <S.LinkNotification>{e.quantity}</S.LinkNotification>
                      )}
                  </>
                </S.Link>
              </S.LinkContainer>
              {e.divider && <S.Divider />}
            </>
          ))}
        </S.Sidebar>
      </S.Container>
    </>
  )
}

export default Sidebar
