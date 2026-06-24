<<<<<<< HEAD
// Import the symbol
import {Mail} from "lucide-react";
=======
// Import the symbol 
import { Mail } from 'lucide-react';
>>>>>>> c2ad6dee22814b45fbb8d7f82ee58449929a58a2

const Contact = () => {
  return (
    // Page background and card centre
<<<<<<< HEAD
    <main className="flex items-center justify-center h-full">
      {/* Container for the Card */}
      <div className="bg-(--navy-blue) rounded-xl px-12 py-10 text-center max-w-lg w-full mx-4">
        {/* Main heading */}
        <h1 className="text-(--yellow) font-bold text-3xl mb-3">
          Get In Touch
        </h1>

        {/* Paragraph for subtitle text */}
        <p className="text-(--gray) text-sm mb-4">
          If you have any questions and feedback feel free to contact us
        </p>

        {/* Email row including icon, label and email address*/}
        <div className="flex items-center justify-center gap-3 text-sm">
=======
    <main className="flex-grow flex items-center justify-center min-h-screen bg-(--black)">

      {/* Container for the Card */}
      <div className="bg-(--navy-blue) rounded-xl px-12 py-10 text-center max-w-lg w-full mx-4">

        {/* Main heading */}
        <h1 className="font-headings text-(--yellow) font-bold text-3xl mb-3">Get In Touch</h1>

        {/* Paragraph for subtitle text */}
        <p className="text-(--gray) text-sm mb-4">If you have any questions and feedback feel free to contact us</p>

        {/* Email row including icon, label and email address*/}
        <div className="flex items-center justify-center gap-3 text-sm">

>>>>>>> c2ad6dee22814b45fbb8d7f82ee58449929a58a2
          {/* Mail icon imported from lucide- react */}
          <Mail size={18} className="text-(--white)" />

          {/* Email Us text */}
          <span className="text-(--white) font-semibold">Email Us</span>

          {/* Added clickable email address that will open default email app, change colour on hover*/}
<<<<<<< HEAD
          <a
            href="mailto:JobEase@email.com"
            className="text-(--gray) hover:text-(--yellow) underline transition-            colors"
          >
            JobEase@email.com
          </a>
=======
            <a href="mailto:JobEase@email.com"className="text-(--gray) hover:text-(--yellow) underline transition-colors">JobEase@email.com</a>

>>>>>>> c2ad6dee22814b45fbb8d7f82ee58449929a58a2
        </div>
      </div>
    </main>
  );
};

export default Contact;
