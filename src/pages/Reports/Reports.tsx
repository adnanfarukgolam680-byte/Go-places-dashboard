import DashboardHeading from "../../components/DashboardHeading"
import { useDashboardTitle } from "../../Config/sendLocation"
import RidesByType from "../DashboardHome/RidesByType"
import MonthlyRidesChart from "./MonthlyRidesChart"
import ReportStats from "./ReportStats"

export default function Reports() {


  const { title, subtitle } = useDashboardTitle()

  return (
    <div className="sm:p-3 space-y-3">

      <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>

      <div>
        <ReportStats></ReportStats>
      </div>


      <div className="flex flex-col sm:flex-row justify-between gap-6 w-full">


        <div className="w-full sm:w-1/2  rounded-xl overflow-hidden">
          <MonthlyRidesChart />
        </div>

        <div className="w-full sm:w-1/2  rounded-xl overflow-hidden">
          <RidesByType />
        </div>

      </div>
    </div>
  )
}
