import { NextResponse } from 'next/server';
import { attendance } from "@/app/api/employee/updated_attendance_data";
import talentCardData from "../../../lib/talentCardData.json";

function generateProgress(skillData: any[]) {
  return skillData.map(skill => {
    const totalRequired = skill.requirement.reduce((sum: number, req: { amount: number }) => sum + req.amount, 0);
    const hoursPerformed = Math.floor(Math.random() * totalRequired); // Ensure it's less than total required

    return {
      skill: skill.skill,
      hoursPerformed
    };
  });
}

// Generate progress data for each industry
const progress = {
  carpenter: { skills: generateProgress(talentCardData.carpenter) },
  roofing: { skills: generateProgress(talentCardData.roofing) },
  concrete: { skills: generateProgress(talentCardData.concrete) },
};

// Calculate total worked hours per industry
const totalIndustryHours = {
  carpenter: progress.carpenter.skills.reduce((sum, skill) => sum + skill.hoursPerformed, 0),
  roofing: progress.roofing.skills.reduce((sum, skill) => sum + skill.hoursPerformed, 0),
  concrete: progress.concrete.skills.reduce((sum, skill) => sum + skill.hoursPerformed, 0),
};

// Calculate total worked hours across all industries
const totalWorkedHours = totalIndustryHours.carpenter + totalIndustryHours.roofing + totalIndustryHours.concrete;

// Assign industry percentage contribution at the industry level
if (totalWorkedHours > 0) {
  Object.keys(totalIndustryHours).forEach(industry => {
    (progress[industry as keyof typeof progress] as { skills: { skill: any; hoursPerformed: number; }[]; percentageOfTotal?: string }).percentageOfTotal =
        ((totalIndustryHours[industry as keyof typeof totalIndustryHours] / totalWorkedHours) * 100).toFixed(2) + "%";
  });
}

export async function GET() {
  const employee = {
    firstName: "John",
    lastName: "Masterson",
    address: "123 Amprest Street",
    city: "Milwaukee",
    state: "WI",
    email: "john@developer.com",
    phone: "(414) 846-4567",
    title: "Construction",
    bio: "I am a construction professional with 10 years of experience. I have worked in the construction industry for 10 years. I am a certified carpenter and have worked in the carpentry industry for 10 years.",
    education: [
      { schoolName: "University of Wisconsin", location: "Bachelor of Science", major: "Construction Management", gradYear: "2018" },
      { schoolName: "University of Wisconsin", location: "Bachelor of Science", major: "Construction Management", gradYear: "2018" },
    ],
    certifications: [
      {certification: "Carpenter", date: "2018", certifier: "University of Wisconsin", certificationYear: "2018"},
      {certification: "Carpenter", date: "2018", certifier: "University of Wisconsin", certificationYear: "2018"},
    ],
    qr: "https://github.com/johndeveloper",
    pay: 35.60,
    timeline: attendance,
    timeWithCompany: 18,
    pto: 15,
    flags: 0,
    progress: progress,  // Now includes industry percentages
    badges: [
      {
        name: "Customer Service",
        img: "/img/badges/CustomerService@3x.png",
        date: "2023-12-01",
        note: "Consistently delivers exceptional client satisfaction",
        value: 3,
        primaryColor: "#bed34e",
        earned: true,
      },
      {
        name: "Efficiency Expert",
        img: "/img/badges/EfficiencyExpert@3x.png",
        date: "2023-11-15",
        note: "Optimized workflows and improved team productivity",
        value: 2,
        primaryColor: "#3bbddd",
        earned: true,
      },
      {
        name: "Problem Solver",
        img: "/img/badges/ProblemSolver@3x.png",
        date: "2023-11-01",
        note: "Effectively resolves complex technical challenges",
        value: 1,
        primaryColor: "#FF6B6B",
        earned: true,
      },
      {
        name: "Leadership Star",
        img: "/img/badges/LeadershipStar@3x.png",
        date: "2023-10-15",
        note: "Demonstrates exceptional leadership qualities",
        value: 0,
        primaryColor: "#4ECDC4",
        earned: true,
      },
      {
        name: "Innovator",
        img: "/img/badges/Innovator@3x.png",
        date: "2023-10-01",
        note: "Brings creative solutions to technical challenges",
        value: 0,
        primaryColor: "#45B7D1",
        earned: false,
      },
      {
        name: "Mentorship",
        img: "/img/badges/Mentorship@3x.png",
        date: "2023-09-15",
        note: "Guides and supports team members' growth",
        value: 0,
        primaryColor: "#96CEB4",
        earned: false,
      },
      {
        name: "Attendance Ace",
        img: "/img/badges/AttendanceAce@3x.png",
        date: "2023-09-01",
        note: "Maintains excellent attendance record",
        value: 0,
        primaryColor: "#D4A5A5",
        earned: false,
      },
      {
        name: "Peak Performer",
        img: "/img/badges/PeakPerformer@3x.png",
        date: "2023-08-15",
        note: "Consistently exceeds performance expectations",
        value: 0,
        primaryColor: "#FF9EAA",
        earned: false,
      },
      {
        name: "Completion",
        img: "/img/badges/Completion@3x.png",
        date: "2023-08-01",
        note: "Successfully completes projects on time",
        value: 0,
        primaryColor: "#9B59B6",
        earned: false,
      },
      {
        name: "Flexibility",
        img: "/img/badges/Flexibility@3x.png",
        date: "2023-07-15",
        note: "Adapts well to changing requirements",
        value: 0,
        primaryColor: "#3498DB",
        earned: false,
      },
      {
        name: "Holiday Hero",
        img: "/img/badges/HolidayHero@3x.png",
        date: "2023-07-01",
        note: "Maintains productivity during holiday seasons",
        value: 0,
        primaryColor: "#E74C3C",
        earned: false,
      },
      {
        name: "Longevity",
        img: "/img/badges/Longevity@3x.png",
        date: "2023-06-15",
        note: "Demonstrates long-term commitment",
        value: 0,
        primaryColor: "#2ECC71",
        earned: false,
      },
      {
        name: "Overtime Champion",
        img: "/img/badges/OvertimeChampion@3x.png",
        date: "2023-06-01",
        note: "Goes above and beyond when needed",
        value: 0,
        primaryColor: "#F1C40F",
        earned: false,
      },
      {
        name: "Perfectionist",
        img: "/img/badges/Perfectionist@3x.png",
        date: "2023-05-15",
        note: "Maintains high quality standards",
        value: 0,
        primaryColor: "#1ABC9C",
        earned: false,
      },
      {
        name: "Rookie of the Year",
        img: "/img/badges/RookieOfTheYear@3x.png",
        date: "2023-05-01",
        note: "Outstanding performance as a new team member",
        value: 0,
        primaryColor: "#E67E22",
        earned: false,
      },
      {
        name: "Safety First",
        img: "/img/badges/SafetyFirst@3x.png",
        date: "2023-04-15",
        note: "Prioritizes security and best practices",
        value: 0,
        primaryColor: "#34495E",
        earned: false,
      },
      {
        name: "Skill Master",
        img: "/img/badges/SkillMaster@3x.png",
        date: "2023-04-01",
        note: "Demonstrates exceptional technical skills",
        value: 0,
        primaryColor: "#8E44AD",
        earned: false,
      },
      {
        name: "Task Master",
        img: "/img/badges/TaskMaster@3x.png",
        date: "2023-03-15",
        note: "Efficiently manages multiple tasks",
        value: 0,
        primaryColor: "#16A085",
        earned: false,
      },
      {
        name: "Weekend Warrior",
        img: "/img/badges/WeekendWarrior@3x.png",
        date: "2023-03-01",
        note: "Shows dedication beyond regular hours",
        value: 0,
        primaryColor: "#D35400",
        earned: false,
      },
      {
        name: "Collaboration Guru",
        img: "/img/badges/CollaborationGuru@3x.png",
        date: "2023-02-15",
        note: "Excels in team collaboration",
        value: 0,
        primaryColor: "#27AE60",
        earned: false,
      }
    ]
  };

  return NextResponse.json(employee);
}
