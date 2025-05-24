function InvestorCard({ name, role, image, details, financials }) {
  return (
    <div className="bg-[#1e293b] rounded-xl p-6 flex flex-col md:flex-row md:justify-between gap-6">
      <div className="md:w-1/2">
        <div className="flex items-center space-x-4 mb-4">
          <img src={image} className="w-12 h-12 rounded-full" alt={`${name} avatar`} />
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
        <ul className="text-sm space-y-1">
          {details.map((item, index) => (
            <li key={index}>
              <strong>{item.label}:</strong>{' '}
              {item.label === 'Email' ? (
                <a href={`mailto:${item.value}`}>{item.value}</a>
              ) : (
                item.value
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 space-y-1 text-sm">
        {financials.map((item, index) => (
          <p key={index}>
            <strong>{item.label}:</strong>
            {item.label === 'Bank Details' ? (
              <>
                <br />
                {item.value.split('<br/>').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </>
            ) : (
              ` ${item.value}`
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

export default InvestorCard;