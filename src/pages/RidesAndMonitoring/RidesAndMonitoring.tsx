import DashboardHeading from "../../components/DashboardHeading"
import { useDashboardTitle } from "../../Config/sendLocation"
import RideList from "./RideList"
import RiderStats from "./RiderStats"

export default function RidesAndMonitoring() {

  const { title, subtitle } = useDashboardTitle()



  return (
    <div className="sm:p-3 space-y-4">

      <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>

      <div>
        <RiderStats></RiderStats>
      </div>

      <div>
        <RideList></RideList>
      </div>
    </div>
  )
}
