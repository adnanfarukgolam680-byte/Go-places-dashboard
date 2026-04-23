import DashboardHeading from "../../components/DashboardHeading"
import { useDashboardTitle } from "../../Config/sendLocation"
import DispatchForm from "./DispatchForm"

export default function ManualDispatch() {

  const { title, subtitle } = useDashboardTitle()

  return (
    <div className="sm:p-3 space-y-2">
      <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>

<DispatchForm></DispatchForm>
    </div>
  )
}
