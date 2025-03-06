'use client';

import { useTheme } from 'next-themes';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

export function Header({ employee }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-[110px] h-[110px] flex items-center justify-center">
          <img
            src={theme === 'dark' ? '/img/Realtime Resume for Dark.svg' : '/img/Realtime Resume for Light.svg'}
            alt="Realtime Resume Logo"
            className="w-full h-full"
          />
        </div>
        <div className="ml-5 flex flex-col">
          <h1 className="text-[30px] font-extralight text-gray-800 dark:text-gray-200">
            Real-Time Resume™
          </h1>
          <h2 className="text-[30px] font-bold text-gray-800 dark:text-gray-200">
            {employee.firstName} {employee.lastName}
          </h2>
          <p className="text-[15px] font-extralight text-gray-500">
            {employee.address} {employee.city}, {employee.state} | {employee.email} | {employee.phone}
          </p>
        </div>
      </div>
      <div className="w-24 h-24">
        <QRCodeSVG
          value={employee.qr}
          size={86}
          level="L"
          className="dark:bg-white p-2 rounded-lg"
        />
      </div>
    </div>
  );
}
