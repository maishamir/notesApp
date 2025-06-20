import SideBar from '../SideBar/SideBar'
import ViewArea from '../ViewArea/ViewArea'
import "./MainView.scss"

type Props = {}

function MainView({}: Props) {
  return (
    <div className='mainView'>
      <SideBar />
      <ViewArea />
    </div>
  )
}

export default MainView