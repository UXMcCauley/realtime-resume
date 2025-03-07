'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { CareerOverview } from '@/components/CareerOverview';
import { Badges } from '@/components/Badges';
import {Timeline} from '@/components/Timeline';
import { EmploymentMetrics } from '@/components/EmploymentMetrics';
import { CareerSnapshot } from '@/components/CareerSnapshot';
import { TalentProgress } from '@/components/TalentProgress';
// @ts-ignore
import CareerTotality from "@/components/CareerTotality";
import { ThemeToggle } from '@/components/ThemeToggle';
import { SectionDivider } from '@/components/SectionDivider';
import About from "@/components/About";
// import {WageChart} from "@/components/WageChart";
import {attendance} from "@/app/api/employee/updated_attendance_data";

export default function Home() {
  interface Employee {
    timeline: any; // Replace 'any' with the correct type for 'timeline'
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    qr: string;
    badges: {
      name: string;
      img: string;
      primaryColor: string;
      value: number;
      date: string;
      note: string;
      earned: boolean;
    }[];
  }

  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/employee')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setEmployee(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center">
        <div className="text-white text-xl">Error loading data</div>
      </div>
    );
  }

  // @ts-ignore
  const { timeline, ...rest } = employee;

  const { badges } = employee;
  // console.log(badges)
  // @ts-ignore
  return (
    <div id={`root`} className="min-h-screen bg-[#2e2c2c] flex justify-center">
      <div id="employee-container">
       <div className="absolute top-5 right-5">
          <ThemeToggle />
        </div>
        <Header employee={employee} />
        <About employee={employee} />
        <SectionDivider />
        {badges && <Badges employee={employee}/>}
        <SectionDivider />
        <Timeline employee={attendance} height={320} />
        {/*<WageChart employee={attendance} height={220} />*/}
        <SectionDivider />
        <CareerOverview employee={employee} />
        <SectionDivider />
        <EmploymentMetrics employee={employee} />
        <SectionDivider />
        <CareerSnapshot employee={employee} />
        <SectionDivider />
        <TalentProgress employee={attendance} />
          <CareerTotality employee={employee} />
        {/*<CareerTotality employee={employee} />*/}
      </div>
    </div>
  );
}
