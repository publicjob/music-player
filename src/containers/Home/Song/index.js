import React from 'react'
import { SongWrapper, SongHeader, SongBody } from './style'
import Back from '../../../common/components/Back'


const Song = ({ history, location }) => {
  console.log(location)
  console.log(history)
  const handleBack = () => {
    history.goBack()
  }
  return (
    <SongWrapper>
      <SongHeader>
       <Back onBack={(e) => { handleBack(e) }}>返回</Back>
      </SongHeader>
      <SongBody></SongBody>
    </SongWrapper>
  )
}

export default Song