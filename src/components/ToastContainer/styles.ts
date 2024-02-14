import styled from 'styled-components'

export const ContainerTopLeft = styled.div`
  position: absolute;
  top: 64px;
  left: 0px;
  width: 356px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerTopRight = styled.div`
  position: absolute;
  top: 64px;
  right: 0px;
  width: 356px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerTopCenter = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  width: 356px;
  padding-top: 64px;
  /* height: 100px; */
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
`
export const ContainerBottomLeft = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0px;
  width: 356px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerBottomRight = styled.div`
  position: absolute;
  bottom: 16px;
  right: 0px;
  width: 366px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerBottomCenter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  width: 356px;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
