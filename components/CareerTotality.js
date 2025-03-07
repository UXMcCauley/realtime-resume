import * as React from "react";
import * as ReactDOM from "react-dom";
import { CareerTreeMap } from "./CareerTreeMap"; // Import the new component

const data = [
    { Category: "Employees", Country: "USA", JobDescription: "Sales", JobGroup: "Executive", EmployeesCount: 20 },
    { Category: "Employees", Country: "USA", JobDescription: "Sales", JobGroup: "Analyst", EmployeesCount: 30 },
    { Category: "Employees", Country: "USA", JobDescription: "Marketing", JobGroup: "Advertising", EmployeesCount: 40 },
    { Category: "Employees", Country: "USA", JobDescription: "Management", JobGroup: "Lead", EmployeesCount: 80 },
    { Category: "Employees", Country: "India", JobDescription: "Technical", JobGroup: "Testers", EmployeesCount: 100 },
    { Category: "Employees", Country: "India", JobDescription: "HR Executives", JobGroup: "Recruiters", EmployeesCount: 30 },
    { Category: "Employees", Country: "India", JobDescription: "Accounts", JobGroup: "Finance", EmployeesCount: 40 },
    { Category: "Employees", Country: "Germany", JobDescription: "Sales", JobGroup: "Executive", EmployeesCount: 50 },
    { Category: "Employees", Country: "Germany", JobDescription: "Sales", JobGroup: "Analyst", EmployeesCount: 60 },
    { Category: "Employees", Country: "Germany", JobDescription: "Marketing", JobGroup: "Advertising", EmployeesCount: 70 },
    { Category: "Employees", Country: "Germany", JobDescription: "Technical", JobGroup: "Testers", EmployeesCount: 80 },
    { Category: "Employees", Country: "Germany", JobDescription: "Management", JobGroup: "Lead", EmployeesCount: 10 },
    { Category: "Employees", Country: "Germany", JobDescription: "Accounts", JobGroup: "Finance", EmployeesCount: 20 },
];

const container = document.getElementById("root");
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<CareerTreeMap data={data} />);
} else {
    console.error("Root element not found");
}
