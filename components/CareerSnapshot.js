'use client';

import { Star, StarHalf } from 'lucide-react';

export function CareerSnapshot({ employee }) {
  // APR Gauge
  const aprMarks = Array.from({ length: 11 }, (_, i) => i);
  const aprAngle = (employee.timeline[employee.timeline.length - 1].apr / 10) * 180; // Convert 0-10 to 0-180 degrees

  // PPI Stars
  const ppiValue = employee.timeline[employee.timeline.length - 1].ppi || 0;
  const fullStars = Math.floor(ppiValue);
  const hasHalfStar = ppiValue % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(ppiValue);

  // Success Probability segments
  const successSegments = [
    { label: 'Low', range: [0, 25] },
    { label: 'Average', range: [25, 50] },
    { label: '+Average', range: [50, 75] },
    { label: 'High', range: [75, 100] }
  ];

  return (
    <section className="dashboard-section">
      <h2 className="section-title">Career Snapshot</h2>
      <div className="flex gap-4">
        {/* APR Gauge */}
        <div className="flex flex-1 flex-col items-center">
          <div className="relative w-40 h-24">
            {/* Gauge Background */}
            <div className="absolute bottom-0 w-[200px] h-[100px] rounded-t-full overflow-visible bg-[#000000] bg-opacity-30 ">
              {/* Gauge Marks */}
              {aprMarks.map((mark) => (
                <div
                  key={mark}
                  className="absolute bottom-0 left-1/2 origin-bottom"
                  style={{
                    height: '100%',
                    width: '2px',
                    transform: `rotate(${(mark / 10) * 180 - 90}deg)`,
                  }}
                >
                  <div
                    className="w-[12px] h-[1rem] rounded -ml-[6px]"
                    style={{
                      background: `hsl(${mark * 12}, 70%, 50%)`
                    }}
                  />
                </div>
              ))}
              {/* Needle */}
              <div
                className="absolute bottom-0 left-1/2 w-1 h-[90px] bg-white origin-bottom transition-transform duration-1000"
                style={{
                  transform: `rotate(${aprAngle - 90}deg)`,
                }}
              >
                <div className="absolute top-[82px] -left-1 w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

          </div>
          <div className={`flex items-center w-full justify-between mt-2 text-sm `}>
            <div className="">APR</div>
            <div className="">{(employee.timeline[employee.timeline.length - 1].apr ).toFixed(1)}%</div>
          </div>
        </div>

        {/* PPI Stars */}
        <div className="flex flex-col flex-1 items-center">
          <span className="text-sm text-gray-400 mb-2">PPI</span>
          <div className="flex gap-1">
            {[...Array(fullStars)].map((_, i) => (
              <Star key={`full-${i}`} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
            {hasHalfStar && <StarHalf className="w-8 h-8 fill-yellow-400 text-yellow-400" />}
            {[...Array(emptyStars)].map((_, i) => (
              <Star key={`empty-${i}`} className="w-8 h-8 text-gray-600" />
            ))}
          </div>
          <div className="mt-2 text-2xl font-bold">{employee.timeline[employee.timeline.length - 1].ppi.toFixed(1)}</div>
        </div>

        {/* Success Probability */}
        <div className="flex flex-col flex-1 items-center bg-[#000000] bg-opacity-15 h-full rounded-lg p-4">
          <span className="text-sm text-gray-400 mb-2">Success Probability</span>
          <div className="relative w-full h-8 bg-gray-800 rounded-full overflow-hidden">
            {/* Segments */}
            <div className="absolute inset-0 flex">
              {successSegments.map((segment, index) => (
                <div
                  key={segment.label}
                  className="flex-1 border-r last:border-r-0 border-gray-700 flex items-center justify-center"
                >
                  <span className="text-xs text-gray-400">{segment.label}</span>
                </div>
              ))}
            </div>
            {/* Progress Bar */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-1000"
              style={{ width: `${employee.timeline[employee.timeline.length - 1].sp*10}%` }}
            />
            {/* Marker */}
            <div
              className="absolute top-0 w-0.5 h-full bg-white"
              style={{ left: `${employee.timeline[employee.timeline.length - 1].sp*10}%` }}
            />
          </div>
          <div className="mt-2 text-2xl font-bold">{(employee.timeline[employee.timeline.length - 1].sp*10).toFixed(0)}%</div>
        </div>
      </div>
    </section>
  );
}
