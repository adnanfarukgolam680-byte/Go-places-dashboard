import DashboardHeading from "../../components/DashboardHeading"
import { useDashboardTitle } from "../../Config/sendLocation"
import ActiveAndOnlineDrivers from "./ActiveAndOnlineDrivers"
import GoogleMapComponent from "./GoogleMapComponent"

export default function Livemap() {

  const { title, subtitle } = useDashboardTitle()

  return (
    <div className="p-0 sm:p-3">

      <div>
        <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>

      </div>



      <div className="h-150 my-4 w-full relative mb-10 overflow-hidden rounded-2xl ">
        <GoogleMapComponent />
      </div>

      <div>
        <ActiveAndOnlineDrivers></ActiveAndOnlineDrivers>
      </div>



    </div>
  )
}
