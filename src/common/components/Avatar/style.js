import styled from 'styled-components'

const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
`
const Image = styled.img`
  width: 100%;
  height:100%;
  border-radius: ${props => props.shape === 'circle' ? '50%' : '0'}
`

export {
  ImageWrapper,
  Image
}