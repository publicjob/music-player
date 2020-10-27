import styled from 'styled-components'
import { HashRouter } from 'react-router-dom'

const HRouter = styled(HashRouter)`
  position: relative;
`
const ViewWrapper = styled.div`
  height: calc(100vh - 50px)
`
const TabWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom:0;
  width: 100%;
  height: 50px;
  padding: 2px 0;
  display: flex;
  justify-content: space-around;
  background-color:#000000;
`

export {
  HRouter,
  ViewWrapper,
  TabWrapper
}