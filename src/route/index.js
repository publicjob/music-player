import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import GlobalStyle from '../common/global-style'
import { routes, tabItems } from './config'
import TabItem from './TabItem'
import { HRouter, ViewWrapper, TabWrapper } from './style'

const Router = () => {
  return (
    <HRouter>
      <GlobalStyle />
      {/* 定义路由视图 */}
      <ViewWrapper>
      {routes.map((route, index) => {
        if (route.path === '/') return <Route path="/" exact render={() => (<Redirect to="/home" />)} key={index}/>
        return <Route path={route.path} component={route.component} key={index} />
      })}
      </ViewWrapper>
      {/* 定义路由导航 */}
      <TabWrapper>
        {
          tabItems.map((tabItem, index) => (<TabItem to={tabItem.to} icon={tabItem.icon} title={tabItem.title} key={index} />))
        }
      </TabWrapper>
    </HRouter>
  )
}

export default Router