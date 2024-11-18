"use client"; 

// import Link from "next/link";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaBook, FaChartBar } from "react-icons/fa";
// import { GiTeacher } from "react-icons/gi";
// import { RiParentFill } from "react-icons/ri";
// import { FaChild, FaPencilAlt, FaUserCheck, FaCalendarAlt, FaComments, FaBullhorn, FaUserCircle, FaWrench, FaSignOutAlt } from "react-icons/fa";
// import { MdAssignment } from "react-icons/md";
// import { SiGoogleclassroom } from "react-icons/si";
// import { IoIosBook } from "react-icons/io";
// import { role } from "../lib/data"; // Assuming role is imported from your data file

// const menuItem = [
//   {
//     title: "MENU",
//     items: [
//       {
//         icon: <IoHomeOutline />,
//         label: "Home",
//         href: "/admin",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: <GiTeacher />,
//         label: "Teacher",
//         href: "/list/teachers",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: <FaChild />,
//         label: "Student",
//         href: "/list/students",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: <RiParentFill />,
//         label: "Parent",
//         href: "/list/parent",
//         visible: ["admin", "parent"],
//       },
//       {
//         icon: <FaBook />,
//         label: "Subject",
//         href: "/list/subject",
//         visible: ["admin"],
//       },
//       {
//         icon: <SiGoogleclassroom />,
//         label: "Classes",
//         href: "/list/classes",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: <IoIosBook />,
//         label: "Lesson",
//         href: "/list/lessons",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: <FaPencilAlt />,
//         label: "Exams",
//         href: "/list/exams",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: <MdAssignment />,
//         label: "Assignment",
//         href: "/list/assignment",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: <FaChartBar />,
//         label: "Results",
//         href: "/list/results",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: <FaUserCheck />,
//         label: "Attendance",
//         href: "/list/attendance",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: <FaCalendarAlt />,
//         label: "Events",
//         href: "/list/events",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: <FaComments />,
//         label: "Messages",
//         href: "/list/messages",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: <FaBullhorn />,
//         label: "Announcement",
//         href: "/list/announcements",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//     ],
//   },
//   {
//     title: "OTHER",
//     items: [
//       {
//         icon: <FaUserCircle />,
//         label: "Profile",
//         href: "/list/profile",
//         visible: ["admin", "teacher", "student", "parent"], // add visible array

//       },
//       {
//         icon: <FaWrench />,
//         label: "Settings",
//         href: "/list/settings",
//         visible: ["admin", "teacher", "student", "parent"], // add visible array

//       },
//       {
//         icon: <FaSignOutAlt />,
//         label: "Logout",
//         href: "/page",
//         visible: ["admin", "teacher", "student", "parent"], // add visible array

//       },
//     ],
//   },
// ];

// const Menu = () => {
//   return (
//     <div className="px-2 lg:px-0">
//       {menuItem.map((section) => (
//         <div className="flex flex-col gap-3" key={section.title}>
//           <span className="hidden lg:block text-gray-500 font-semibold px-4 my-4">{section.title}</span>
//           {section.items?.map((item) =>
//             item.visible.includes(role) ? (
//               <Link
//                 href={item.href}
//                 key={item.label}
//                 className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 rounded-md hover:bg-lamaSky md:px-4"
//               >
//                 <span className="">{item.icon}</span>
//                 <span className="hidden lg:block">{item.label}</span>
//               </Link>
//             ) : null
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;


//////////////////////////////////////////


import { useRouter } from "next/navigation";   
import { useState, useEffect } from "react";  // Import useState and useEffect
import Cookie from "js-cookie";  // Import js-cookie for cookie management
import Link from "next/link";  // Import Link
import { role } from "../lib/data";  // Assuming role is imported from your data file
 import { IoHomeOutline } from "react-icons/io5";
 import { FaBook, FaChartBar } from "react-icons/fa";
 import { GiTeacher } from "react-icons/gi";
 import { RiParentFill } from "react-icons/ri";
 import { FaChild, FaPencilAlt, FaUserCheck, FaCalendarAlt, FaComments, FaBullhorn, FaUserCircle, FaWrench, FaSignOutAlt } from "react-icons/fa";
 import { MdAssignment } from "react-icons/md";
 import { SiGoogleclassroom } from "react-icons/si";
 import { IoIosBook } from "react-icons/io";
// Define the menu items
const menuItem = [
  {
    title: "MENU",
    items: [
      { icon: <IoHomeOutline />, label: "Home", href: "/admin", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <GiTeacher />, label: "Teacher", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: <FaChild />, label: "Student", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: <RiParentFill />, label: "Parent", href: "/list/parent", visible: ["admin", "parent"] },
      { icon: <FaBook />, label: "Subject", href: "/list/subject", visible: ["admin"] },
      { icon: <SiGoogleclassroom />, label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: <IoIosBook />, label: "Lesson", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: <FaPencilAlt />, label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <MdAssignment />, label: "Assignment", href: "/list/assignment", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <FaChartBar />, label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <FaUserCheck />, label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <FaCalendarAlt />, label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <FaComments />, label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <FaBullhorn />, label: "Announcement", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: <FaUserCircle />, label: "Profile", href: "/list/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: <FaWrench />, label: "Settings", href: "/list/settings", visible: ["admin", "teacher", "student", "parent"] },
      {
        icon: <FaSignOutAlt />,
        label: "Logout",
        href: "#",  // Use a click handler for logout
        visible: ["admin", "teacher", "student", "parent"],
        action: "logout",  // Action identifier for logout
      },
    ],
  },
];

const Menu = () => {
  const [isClient, setIsClient] = useState(false);  // Track if we're on the client-side
  const router = useRouter();  // Next.js router for navigation

  // Use useEffect to make sure the code only runs on the client-side
  useEffect(() => {
    setIsClient(true);  // Set isClient to true when the component has mounted
  }, []);

  // Handle logout
  const handleLogout = () => {
    Cookie.remove("authToken");  // Remove authentication token from cookies
    localStorage.removeItem("userData");  // Remove user data from localStorage
    router.push("/");  // Redirect to login page
  };

  // Don't render the menu if we're not on the client-side yet
  if (!isClient) {
    return null;  // This prevents SSR issues, only render after mounting on the client
  }

  return (
    <div className="px-2 lg:px-0">
      {menuItem.map((section) => (
        <div className="flex flex-col gap-3" key={section.title}>
          <span className="hidden lg:block text-gray-500 font-semibold px-4 my-4">{section.title}</span>
          {section.items?.map((item) =>
            item.visible.includes(role) ? (
              item.label === "Logout" ? (
                <button
                  key={item.label}
                  onClick={handleLogout}  // Handle logout click
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 rounded-md hover:bg-lamaSky md:px-4"
                >
                  <span>{item.icon}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 rounded-md hover:bg-lamaSky md:px-4"
                >
                  <span>{item.icon}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              )
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;