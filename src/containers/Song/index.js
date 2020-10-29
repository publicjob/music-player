import React from 'react'
import { SongWrapper, SongHeader, SongBody } from './style'
import Back from '../../common/components/Back'


const Song = ({ history }) => {
  const handleBack = () => {
    history.goBack()
  }
  return (
    <SongWrapper>
      <SongHeader>
        <Back onBack={handleBack}>返回</Back>
      </SongHeader>
      <SongBody>
      </SongBody>
    </SongWrapper>
  )
}

export default Song