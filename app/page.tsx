'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import CareerOverview from '@/components/CareerOverview';
import { Badges } from '@/components/Badges';
import {TimelineGraphs} from '@/components/Timeline';
import { EmploymentMetrics } from '@/components/EmploymentMetrics';
import { CareerSnapshot } from '@/components/CareerSnapshot';
import { TalentProgress } from '@/components/TalentProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SectionDivider } from '@/components/SectionDivider';
import About from "@/components/About";

  export default function Home() {
  interface Employee {
    attendance: any; // Replace 'any' with the correct type for 'timeline'
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
    progress: {
        carpenter: { level: number; completed: boolean; percentageOfTotal: string; skills: Array<any> };
        roofing: { level: number; completed: boolean; percentageOfTotal: string; skills: Array<any> };
        concrete: { level: number; completed: boolean; percentageOfTotal: string; skills: Array<any> };
      };
    attendance_percentage: number;
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

  return (
      <div id="employee-container">
          <div className="absolute top-5 right-5">
              <ThemeToggle />
          </div>
          <Header employee={employee} />
          {employee.progress ? <CareerOverview progress={employee.progress} /> : <div>Loading progress...</div>}
          <SectionDivider />
          <About employee={employee} />
          <SectionDivider />
          {employee.badges && <Badges employee={employee}/>}
          <SectionDivider />
          <TimelineGraphs employee={employee.attendance} height={320} />
          <SectionDivider />
          <EmploymentMetrics employee={employee} />
          <SectionDivider />
          <CareerSnapshot employee={employee} />
          <SectionDivider />
          {employee.progress ? <TalentProgress progress={employee.progress} /> : <div>Loading progress...</div>}

      </div>
  );
}
