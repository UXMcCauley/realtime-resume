'use client';

export function EmploymentMetrics({ employee }) {
  const formatPercentage = (value) => `${value}%`;
  const formatCurrency = (value) => `$${value}/hr`;
  const formatTime = (months) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return years > 0
      ? `${years}y ${remainingMonths}m`
      : `${remainingMonths}m`;
  };
  const formatPTO = (days) => `${days} days`;
  const formatFlags = (count) => count.toString();

  const metrics = [
    {
      label: 'Attendance',
      value: formatPercentage(employee.attendance || 98)
    },
    {
      label: 'Hourly Rate',
      value: formatCurrency(employee.pay || 45)
    },
    {
      label: 'Time w/ Company',
      value: formatTime(employee.timeWithCompany || 18)
    },
    {
      label: 'PTO',
      value: formatPTO(employee.pto || 15)
    },
    {
      label: 'Employer Flags',
      value: formatFlags(employee.flags || 0)
    }
  ];

  return (
    <section className="dashboard-section">
      <h2 className="section-title-no-indent">Employment Metrics</h2>
      <div className="flex justify-between items-center">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-1">{metric.label}</span>
            <span className="text-xl font-bold text-white">{metric.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
