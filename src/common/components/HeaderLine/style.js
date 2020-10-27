import styled from 'styled-components'

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 15px;
`

const Title = styled.span`
  font-size: 40px;
  color: #ffffff
`

export {
  HeaderWrapper,
  Title
}