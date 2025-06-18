import React from 'react'
import SideBar from '../SideBar/SideBar'
import ViewArea from '../ViewArea/ViewArea'

type Props = {}

function MainView({}: Props) {
  return (
    <div>
      <SideBar />
      <ViewArea />
    </div>
  )
}

export default MainView