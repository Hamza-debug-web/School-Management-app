 // Temporary data

 export const role = "admin"; 

 export const teachersData = [
  {
    id: 1,
    teacherId: "786",
    name: "Bilal",
    email: "Bilal@gmail.com", 
    photo: "/images/boy1.png",
    phone: "03334567890",
    subjects: ["Math", "Computer"],
    classes: ["10A", "2A", "3C"],
    address: "Main Shalimar In city Lahore",
  },
  {
    id: 2,
    teacherId: "987",
    name: "Sarah",
    email: "Sarah@gmail.com",
    photo: "/images/girl1.webp",
    phone: "03336543210",
    subjects: ["Physics", "Chemistry"],
    classes: ["12B", "11C"],
    address: "DHA, Lahore",
  },
  {
    id: 3,
    teacherId: "654",
    name: "Ali",
    email: "Ali@yahoo.com",
    photo: "/images/boy2.png",
    phone: "03214567890",
    subjects: ["Biology", "Science"],
    classes: ["7B", "9C", "11A"],
    address: "Gulberg, Lahore",
  },
  {
    id: 4,
    teacherId: "123",
    name: "kiran",
    email: "chatgpt@openai.com",
    photo: "/images/girl2.webp",
    phone: "0000000000",
    subjects: ["Artificial Intelligence", "Programming"],
    classes: ["AI101", "Prog202"],
    address: "Virtual Campus",
  },
  {
    id: 5,
    teacherId: "432",
    name: "Ayesha",
    email: "ayesha@gmail.com",
    photo: "/images/girl3.png",
    phone: "03455567890",
    subjects: ["English", "History"],
    classes: ["9B", "11D"],
    address: "Johar Town, Lahore",
  },
  {
    id: 6,
    teacherId: "6543",
    name: "Zain",
    email: "zain@yahoo.com",
    photo: "/images/boy3.png",
    phone: "03121234567",
    subjects: ["Economics", "Accounting"],
    classes: ["12A", "10B"],
    address: "Bahria Town, Lahore",
  },
  {
    id: 7,
    teacherId: "8765",
    name: "Hassan",
    email: "hassan@outlook.com",
    photo: "/images/boy4.webp",
    phone: "03001234567",
    subjects: ["Geography", "Social Studies"],
    classes: ["8A", "7C"],
    address: "Model Town, Lahore",
  },
  {
    id: 8,
    teacherId: "2345",
    name: "Nadia",
    email: "nadia@gmail.com",
    photo: "/images/girl4.png",
    phone: "03456671234",
    subjects: ["Urdu", "Islamiyat"],
    classes: ["5A", "6B"],
    address: "Faisal Town, Lahore",
  },
  {
    id: 9,
    teacherId: "9876",
    name: "Usman",
    email: "usman@hotmail.com",
    photo: "/images/boy5.jpg",
    phone: "03009998877",
    subjects: ["Physical Education", "Health"],
    classes: ["11B", "10C"],
    address: "Cavalry Ground, Lahore",
  },
  {
    id: 10,
    teacherId: "3456",
    name: "Maria",
    email: "maria@live.com",
    photo: "/images/girl5.png",
    phone: "03211234567",
    subjects: ["Art", "Music"],
    classes: ["4A", "5C"],
    address: "Garden Town, Lahore",
  }

  ];
  
  // Menu data for students
  export const studentsData = [
    {
      icon: "FaChild",
      label: "Student",
      href: "/list/student",
      visible: ["admin", "teacher"],
    },
  ];
  
  // Menu data for parents
  export const parentsData = [
    {
      icon: "RiParentFill",
      label: "Parent",
      href: "/list/parent",
      visible: ["admin", "parent"],
    },
  ];
  
  // Menu data for subjects
  export const subjectsData = [
    {
      icon: "FaBook",
      label: "Subject",
      href: "/list/subject",
      visible: ["admin"],
    },
  ];
  
  // Menu data for classes
  export const classesData = [
    {
      icon: "SiGoogleclassroom",
      label: "Classes",
      href: "/list/classes",
      visible: ["admin", "teacher"],
    },
  ];
  
  // Menu data for lessons
  export const lessonsData = [
    {
      icon: "IoIosBook",
      label: "Lesson",
      href: "/list/lessons",
      visible: ["admin", "teacher"],
    },
  ];
  
  // Menu data for exams
  export const examsData = [
    {
      icon: "FaPencilAlt",
      label: "Exams",
      href: "/list/exams",
      visible: ["admin", "teacher", "student", "parent"],
    },
  ];

  export const AssignmentData = [
    {
        icon: "MdAssignment",
         label: "Assignment",
         href: "/list//assignment",
         visible: ["admin", "teacher", "student", "parent"],
    },
  ];

  export const ResultsData = [
    {
        icon: "FaChartBar",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
    },
  ];

  export const AttendanceData = [
    {
        icon: "FaUserCheck" ,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],

    },
  ];

  export const EventsData = [
    {
        icon: "FaCalendarAlt" ,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
    },
  ];

  export const MessagesData = [
    {
        icon: "FaComments",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
    },
  ];

  export const AnnouncementData = [
    {
        icon: "FaBullhorn" ,
        label: "Announcement",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
    },
  ];


  export const myEventsList = [
    {
      title: "Math",
      allDay: false,
      start: new Date(2024, 6, 10, 8, 0), // Adjusted to July 12
      end: new Date(2024, 6, 10, 8, 35),   // Adjusted to July 12
    },
    {
      title: "Math",
      allDay: false,
      start: new Date(2024, 6, 9, 7, 0), // Adjusted to July 12
      end: new Date(2024, 6, 9, 7, 35),   // Adjusted to July 12
    },
    {
      title: "Math",
      allDay: false,
      start: new Date(2024, 6, 12, 7, 0), // Adjusted to July 12
      end: new Date(2024, 6, 12, 7, 45),   // Adjusted to July 12
    },
    {
      title: "English",
      allDay: false,
      start: new Date(2024, 6, 12, 9, 0), // Adjusted to July 12
      end: new Date(2024, 6, 12, 9, 45),   // Adjusted to July 12
    },
    {
      title: "English",
      allDay: false,
      start: new Date(2024, 6, 9, 9, 0), // Adjusted to July 12
      end: new Date(2024, 6, 9, 9, 25),   // Adjusted to July 12
    },
    {
      title: "Biology",
      allDay: false,
      start: new Date(2024, 6, 10, 10, 0), // Adjusted to July 12
      end: new Date(2024, 6, 10, 10, 45),   // Adjusted to July 12
    },
    {
      title: "Physics",
      allDay: false,
      start: new Date(2024, 6, 12, 11, 0), // Adjusted to July 12
      end: new Date(2024, 6, 12, 11, 45),   // Adjusted to July 12
    },
    {
      title: "Chemistry",
      allDay: false,
      start: new Date(2024, 6, 12, 12, 0), // Adjusted to July 12
      end: new Date(2024, 6, 12, 12, 45),   // Adjusted to July 12
    },
    {
      title: "History",
      allDay: false,
      start: new Date(2024, 6, 12, 13, 0), // Adjusted to July 12
      end: new Date(2024, 6, 12, 13, 45),   // Adjusted to July 12
    },
    {
      title: "Islamiyat",
      allDay: false,
      start: new Date(2024, 6, 12, 14, 0), // Adjusted to July 12
      end: new Date(2024, 6, 12, 14, 45),   // Adjusted to July 12
    },

    
  ];