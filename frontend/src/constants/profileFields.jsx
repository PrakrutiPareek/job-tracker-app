import {
  User,
  Mail,
  Briefcase,
} from "lucide-react";
export const profileFields = [
    {
        label: "First Name",
        name: "firstName",
        placeholder: "Enter your First Name",
        type: "text",  
        icon: User, 
    },
    {
        label: "Last Name",
        name: "lastName",
        placeholder: "Enter your Last Name",
        type: "text",
        icon: User,
    },
    {
        label: "Email",
        name: "email",
        placeholder: "Enter your Email",
        type: "email",
        icon: Mail
    },
    {
        label: "Job Role",
        name: "jobRole",
        placeholder: "Enter your current job",
        type: "text",
        icon: Briefcase
    },
];