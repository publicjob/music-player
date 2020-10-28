import React from 'react'
import { VideoWrapper, VideoHeader, VideoBody } from './style'
import Back from '../../../common/components/Back'


const Video = ({ history }) => {
  const handleBack = () => {
    history.goBack()
  }
  return (
    <VideoWrapper>
      <VideoHeader>
        <Back onBack={handleBack}>返回</Back>
      </VideoHeader>
      <VideoBody></VideoBody>
    </VideoWrapper>
  )
}

export default Video