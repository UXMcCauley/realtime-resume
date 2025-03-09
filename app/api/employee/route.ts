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
    work: [
      { name: "roofing", percent: "33" },
      { name: "painting", percent: "21" },
      { name: "carpentry", percent: "18" },
      { name: "certifications", percent: "18" },
      { name: "education", percent: "10" }
    ],
  };

  return NextResponse.json(employee);
}
