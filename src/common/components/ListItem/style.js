import styled from 'styled-components'

const ListItemWrapper = styled.div`
  box-sizing: border-box;
  display:flex;
  justify-content:space-between;
  align-items: center;
  margin: 0 15px;
  margin-bottom: 15px;
  padding: 0 10px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
`
const TitleWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`

const Icon = styled.i`
  width: 25px;
  height: 25px;
  font-size: 25px;
  line-height: 25px;
`

const Title = styled.span`
  color: #ffffff;
  margin-left: 10px;
  line-height: 25px;
`

const Arrow = styled.i``

export {
  ListItemWrapper,
  TitleWrapper,
  Icon, 
  Title, 
  Arrow 
}