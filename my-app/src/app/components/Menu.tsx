import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FaBook, FaChartBar } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
import { FaChild, FaPencilAlt, FaUserCheck, FaCalendarAlt, FaComments, FaBullhorn, FaUserCircle, FaWrench, FaSignOutAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosBook } from "react-icons/io";
import { role } from "../lib/data"; // Assuming role is imported from your data file

const menuItem = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoHomeOutline />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <GiTeacher />,
        label: "Teacher",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FaChild />,
        label: "Student",
        href: "/list/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: <RiParentFill />,
        label: "Parent",
        href: "/list/parent",
        visible: ["admin", "parent"],
      },
      {
        icon: <FaBook />,
        label: "Subject",
        href: "/list/subject",
        visible: ["admin"],
      },
      {
        icon: <SiGoogleclassroom />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <IoIosBook />,
        label: "Lesson",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FaPencilAlt />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdAssignment />,
        label: "Assignment",
        href: "/list/assignment",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaChartBar />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaUserCheck />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaCalendarAlt />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaComments />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaBullhorn />,
        label: "Announcement",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <FaUserCircle />,
        label: "Profile",
        href: "/list/profile",
        visible: ["admin", "teacher", "student", "parent"], // add visible array

      },
      {
        icon: <FaWrench />,
        label: "Settings",
        href: "/list/settings",
        visible: ["admin", "teacher", "student", "parent"], // add visible array

      },
      {
        icon: <FaSignOutAlt />,
        label: "Logout",
        href: "/list/logout",
        visible: ["admin", "teacher", "student", "parent"], // add visible array

      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="px-2 lg:px-0">
      {menuItem.map((section) => (
        <div className="flex flex-col gap-3" key={section.title}>
          <span className="hidden lg:block text-gray-500 font-semibold px-4 my-4">{section.title}</span>
          {section.items?.map((item) =>
            item.visible.includes(role) ? (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 rounded-md hover:bg-lamaSky md:px-4"
              >
                <span className="">{item.icon}</span>
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
