import DashboardHeading from "../../components/DashboardHeading";
import { useDashboardTitle } from "../../Config/sendLocation";
import PayMentList from "./PayMentList";
import PaymentStats from "./PaymentStats";

export default function Payments() {


  const { title, subtitle } = useDashboardTitle();



  return (
    <div className=" sm:p-3">

      <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>


      <div className="my-4">

        <PaymentStats></PaymentStats>
      </div>

      <div>

        <PayMentList></PayMentList>
      </div>

    </div>
  )
}
