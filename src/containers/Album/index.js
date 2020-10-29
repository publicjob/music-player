import React from 'react'
import { AlbumWrapper, AlbumHeader, AlbumBody } from './style'
import Back from '../../common/components/Back'

const Album = ({ history }) => {
  const handleBack = () => {
    history.goBack()
  }
  return (
    <AlbumWrapper>
      <AlbumHeader>
        <Back onBack={handleBack}>返回</Back>
      </AlbumHeader>
      <AlbumBody></AlbumBody>
    </AlbumWrapper>
  )
}

export default Album