'use client';
import ContextMenu from "@/components/ContextMenu";
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { CareerOverview } from '@/components/CareerOverview';
import { Badges } from '@/components/Badges';
import {Timeline} from '@/components/Timeline';
import { EmploymentMetrics } from '@/components/EmploymentMetrics';
import { CareerSnapshot } from '@/components/CareerSnapshot';
import { TalentProgress } from '@/components/TalentProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SectionDivider } from '@/components/SectionDivider';
import About from "@/components/About";
import {attendance} from "@/app/api/employee/updated_attendance_data";
import LifePlayer, { default as LifePlayerProps } from "@/components/LifePlayer";

export default function Home() {
    const [queue, setQueue] = useState<string[]>([]);
    const [playlist, setPlaylist] = useState<string[]>([]);

    const handlePlayNext = (item: string) => {
        setQueue([item, ...queue]);
    };

    const handleAddToPlaylist = (item: string) => {
        setPlaylist([...playlist, item]);
    };
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

  const { timeline, ...rest } = employee;
  const { badges } = employee;

    return (
        <div
            className="min-h-screen bg-[#2e2c2c] flex justify-center"
            onContextMenu={(e) => e.preventDefault()} // Prevents default browser menu
        >
            <ContextMenu onPlayNext={handlePlayNext} onAddToPlaylist={handleAddToPlaylist} />
            <div id="employee-container">
                <div className="absolute top-5 right-5">
                    <ThemeToggle />
                </div>
                <Header employee={employee} />
                <About employee={employee} />
                <LifePlayer queue={queue} playlist={playlist} />
                <SectionDivider />
                {badges && <Badges employee={employee} />}
                <SectionDivider />
                <Timeline employee={attendance} height={320} />
                <SectionDivider />
                <CareerOverview employee={employee} />
                <SectionDivider />
                <EmploymentMetrics employee={employee} />
                <SectionDivider />
                <CareerSnapshot employee={employee} />
                <SectionDivider />
                <TalentProgress employee={attendance} />
            </div>
    </div>
  );
}
