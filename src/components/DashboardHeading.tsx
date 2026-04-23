
interface props {
    title: string,
    subtitle: string
}


export default function DashboardHeading({ title, subtitle }: props) {
    return (
        <div>
            <h1 className="text-[#121721] font-bold text-[18px] sm:text-2xl">{title}</h1>
            <h2 className="text-[#737B8C] text-[12px]  sm:text-xl">{subtitle}</h2>
        </div>
    )
}
