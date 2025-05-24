function OverviewCard({ title, value, icon, iconColor, extra }) {
  return (
    <div className="bg-[#1B2A3B] rounded-md p-4">
      <p className="text-xs text-[#7A7A7A] mb-1 flex justify-between items-center">
        {title}
        {extra && <i className={`fa-solid fa-arrow-trend-down text-[#B07A3A] text-xs ml-1`}></i>}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm">{value}</span>
        <i className={`fas ${icon} text-${iconColor} text-sm`}></i>
      </div>
      {extra && (
        <div className="flex items-center justify-between">
          <span></span>
          <span className="text-[#B07A3A] font-semibold text-xs">{extra}</span>
        </div>
      )}
    </div>
  );
}

export default OverviewCard;