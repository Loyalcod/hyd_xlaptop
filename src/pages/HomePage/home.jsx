import ManuBar from "../../layouts/MenuBar/ManuBar"
import FooterCon from "../../layouts/endpage/FooterCon"
import NavigationBar from "../../layouts/navigationBar/NavigationBar"
import { Outlet } from "react-router-dom"

function home() {
  return (
    <>
        <ManuBar />
        <NavigationBar />
        <div className="pageBody">
          <Outlet />
        </div>
        <FooterCon />
    </>
  )
}

export default home