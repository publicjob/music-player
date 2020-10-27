import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const TabItemWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  color: #ffffff;
  &.selected {
    & div, i, span {
      color: #00AC5A;
    }
  }
`

const IconWrapper = styled.i`
  width: 20px;
  height: 20px;
  font-size: 16px;
  margin-bottom: 5px;
  text-align:center;
`
const TitleWrapper = styled.span`
  font-size: 12px;
  text-align: center;
`

export {
  TabItemWrapper,
  IconWrapper,
  TitleWrapper
}