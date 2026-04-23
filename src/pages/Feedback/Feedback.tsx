import DashboardHeading from "../../components/DashboardHeading"
import { useDashboardTitle } from "../../Config/sendLocation"
import FeedbackList from "./FeedbackList"

export default function Feedback() {

  const { title, subtitle } = useDashboardTitle()

  return (
    <div className="sm:p-3 space-y-3">
      <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>

      <div>
        <FeedbackList></FeedbackList>
      </div>
    </div>
  )
}
