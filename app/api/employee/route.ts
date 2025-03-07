import { NextResponse } from 'next/server';
import {attendance} from "@/app/api/employee/updated_attendance_data";

export async function GET() {
  const employee = {
    firstName: "John",
    lastName: "Developer",
    address: "123 Tech Street",
    city: "San Francisco",
    state: "CA",
    email: "john@developer.com",
    phone: "(555) 123-4567",
    title: "Senior Software Engineer",
    tagline: "Building the future of web development",
    qr: "https://github.com/johndeveloper",
    pay: 45,
    timeline: attendance,
    timeWithCompany: 18,
    pto: 15,
    flags: 0,
    progress: {
      concrete: {
        "Clean-Up": 75,
        "Moving Gravel": 300,
        "Puddling": 400,
        "Pulling Forms": 350,
        "Set-Up": 80,
        "Setting Forms": 450
      }
    },
    work: [
      { name: "roofing", percent: "33" },
      { name: "painting", percent: "21" },
      { name: "carpentry", percent: "18" },
      { name: "certifications", percent: "18" },
      { name: "education", percent: "10" }
    ],
    bio: "Experienced software engineer with a passion for building scalable web applications. Focused on creating efficient solutions and mentoring junior developers. Always learning and adapting to new technologies.",
    education: [
      {
        schoolName: "MIT",
        gradYear: "2018",
        major: "Computer Science",
        location: "Cambridge, MA"
      },
      {
        schoolName: "Stanford University",
        gradYear: "2016",
        major: "Software Engineering",
        location: "Stanford, CA"
      }
    ],
    certifications: [
      {
        certifier: "AWS",
        certification: "Solutions Architect Professional",
        certificationYear: "2023"
      },
      {
        certifier: "Google",
        certification: "Cloud Professional Architect",
        certificationYear: "2022"
      }
    ],
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
