import React from 'react'
import { SingerWrapper, SingerHeader, SingerBody } from './style'
import Back from '../../common/components/Back'

const Singer = ({ history }) => {
  const handleBack = () => {
    history.goBack()
  }
  return (
    <SingerWrapper>
    <SingerHeader>
      <Back onBack={handleBack}>返回</Back>
    </SingerHeader>
    <SingerBody></SingerBody>
  </SingerWrapper>
  )
}

export default Singer