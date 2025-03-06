'use client';

export function CareerOverview({ employee }) {
  const colors = [
    { bg: 'bg-blue-500', text: 'text-white' },
    { bg: 'bg-green-500', text: 'text-white' },
    { bg: 'bg-yellow-500', text: 'text-gray-900' },
    { bg: 'bg-purple-500', text: 'text-white' },
    { bg: 'bg-pink-500', text: 'text-white' }
  ];

  // Calculate the starting position for each label
  const getLabelPosition = (index) => {
    let position = 0;
    for (let i = 0; i < index; i++) {
      position += parseFloat(employee.work[i].percent);
    }
    return position;
  };

  return (
    <section className="">
      <h2 className="section-title text-center">Career Overview</h2>
      {/* Labels and Visualization */}
      <div className="mb-8">
        {/* Labels */}
        <div className="relative h-6 mb-2">
          {employee.work.map((item, index) => {
            const startPosition = getLabelPosition(index);
            const width = parseFloat(item.percent);

            return (
              <div
                key={item.name}
                className="absolute text-sm transform -translate-x-1/2"
                style={{
                  left: `${startPosition + (width / 2)}%`,
                }}
              >
                <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
              </div>
            );
          })}
        </div>

        {/* Visualization Bar */}
        <div className="h-10 w-full flex rounded-full overflow-hidden relative">
          {employee.work.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === employee.work.length - 1;

            return (
              <div
                key={item.name}
                className={`${colors[index].bg} h-full flex items-center justify-center transition-all
                  ${isFirst ? 'rounded-l-full' : ''} 
                  ${isLast ? 'rounded-r-full' : ''}`}
                style={{ width: `${item.percent}%` }}
              >
                <span className={`text-sm font-medium ${colors[index].text}`}>
                  {item.percent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
