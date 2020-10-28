import React from 'react'
import { CategoryWrapper, CategoryHeader, CategoryBody } from './style'
import Back from '../../../common/components/Back'

const Category = ({ history }) => {
  const handleBack = () => {
    history.goBack()
  }
  return (
    <CategoryWrapper>
      <CategoryHeader>
        <Back onBack={handleBack}>返回</Back>
      </CategoryHeader>
      <CategoryBody></CategoryBody>
    </CategoryWrapper>
  )
}

export default Category