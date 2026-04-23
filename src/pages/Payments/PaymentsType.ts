import { Check, CheckCircle, Clock, DollarSign, Inbox, Repeat, X, XCircle } from "lucide-react";



export const payMentstatsType = [
  {
    key: "totalSentAmount",
    title: "Total Sent Amount",
    value: 5000,
    icon: DollarSign,
    color: "bg-green-100 text-green-600"
  },
  {
    key: "totalTransactions",
    title: "Total Transactions",
    value: 10,
    icon: Repeat,
    color: "bg-blue-100 text-blue-600"
  },
  {
    key: "successfulTransactions",
    title: "Successful Transactions",
    value: 8,
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    key: "failedTransactions",
    title: "Failed Transactions",
    value: 2,
    icon: XCircle,
    color: "bg-red-100 text-red-600"
  },
  {
    key: "pendingTransactions",
    title: "Pending Transactions",
    value: 0,
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    key: "totalRequests",
    title: "Total Requests",
    value: 12,
    icon: Inbox,
    color: "bg-purple-100 text-purple-600"
  },
  {
    key: "pendingRequests",
    title: "Pending Requests",
    value: 5,
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    key: "completedRequests",
    title: "Completed Requests",
    value: 6,
    icon: Check,
    color: "bg-green-100 text-green-600"
  },
  {
    key: "rejectedRequests",
    title: "Rejected Requests",
    value: 1,
    icon: X,
    color: "bg-red-100 text-red-600"
  }
];