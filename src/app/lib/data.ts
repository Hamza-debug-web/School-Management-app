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
      id: 1,
      studentId: "786",
      name: "Hamza",
      email: "Hamza@gmail.com", 
      photo: "/images/boy1.png",
      phone: "03334567890",
      grade: 5,
      classes: "1B",
      address: "Shadbagh Lahore",
    },
    {
      id: 2,
      studentId: "787",
      name: "Sara",
      email: "Sara@gmail.com", 
      photo: "/images/girl1.webp",
      phone: "03334567891",
      grade: 4,
      classes: "2A",
      address: "Gulberg Lahore",
    },
    {
      id: 3,
      studentId: "788",
      name: "Ali",
      email: "Ali@gmail.com", 
      photo: "/images/boy2.png",
      phone: "03334567892",
      grade: 3,
      classes: "3C",
      address: "Model Town Lahore",
    },
    {
      id: 4,
      studentId: "789",
      name: "Fatima",
      email: "Fatima@gmail.com", 
      photo: "/images/girl2.webp",
      phone: "03334567893",
      grade: 5,
      classes: "1A",
      address: "DHA Lahore",
    },
    {
      id: 5,
      studentId: "790",
      name: "Ahmed",
      email: "Ahmed@gmail.com", 
      photo: "/images/boy3.png",
      phone: "03334567894",
      grade: 2,
      classes: "2C",
      address: "Johar Town Lahore",
    },
    {
      id: 6,
      studentId: "791",
      name: "Mariam",
      email: "Mariam@gmail.com", 
      photo: "/images/girl3.png",
      phone: "03334567895",
      grade: 1,
      classes: "3A",
      address: "Iqbal Town Lahore",
    },
    {
      id: 7,
      studentId: "792",
      name: "Usman",
      email: "Usman@gmail.com", 
      photo: "/images/boy4.webp",
      phone: "03334567896",
      grade: 4,
      classes: "2B",
      address: "Samanabad Lahore",
    },
    {
      id: 8,
      studentId: "793",
      name: "Ayesha",
      email: "Ayesha@gmail.com", 
      photo: "/images/girl4.png",
      phone: "03334567897",
      grade: 3,
      classes: "3B",
      address: "Wapda Town Lahore",
    },
    {
      id: 9,
      studentId: "794",
      name: "Bilal",
      email: "Bilal@gmail.com", 
      photo: "/images/boy5.jpg",
      phone: "03334567898",
      grade: 5,
      classes: "1C",
      address: "Township Lahore",
    },
    {
      id: 10,
      studentId: "795",
      name: "Hiba",
      email: "Hiba@gmail.com", 
      photo: "/images/girl5.png",
      phone: "03334567899",
      grade: 2,
      classes: "2D",
      address: "Cantt Lahore",
    },
  ];  
   
   // Menu data for parents
   export const parentsData = [
    {
      id: 1,
      students: ["Hamza", "Qasim", "Junaid"],
       name: "Hamza",
      email: "Hamza@gmail.com", 
      phone: "03334567890",
      address: "Shadbagh Lahore",
    },
    {
      id: 2,
      students: ["Sara", "Ali"],
      name: "Ayesha",
      email: "Ayesha@gmail.com", 
      phone: "03334567891",
      address: "Gulberg Lahore",
    },
    {
      id: 3,
      students: ["Usman"],
      name: "Khalid",
      email: "Khalid@gmail.com", 
      phone: "03334567892",
      address: "Model Town Lahore",
    },
    {
      id: 4,
      students: ["Fatima", "Ahmed"],
      name: "Hassan",
      email: "Hassan@gmail.com", 
      phone: "03334567893",
      address: "DHA Lahore",
    },
    {
      id: 5,
      students: ["Ali", "Hiba"],
      name: "Raza",
      email: "Raza@gmail.com", 
      phone: "03334567894",
      address: "Johar Town Lahore",
    },
    {
      id: 6,
      students: ["Mariam"],
      name: "Sana",
      email: "Sana@gmail.com", 
      phone: "03334567895",
      address: "Iqbal Town Lahore",
    },
    {
      id: 7,
      students: ["Bilal", "Usman"],
      name: "Naveed",
      email: "Naveed@gmail.com", 
      phone: "03334567896",
      address: "Samanabad Lahore",
    },
    {
      id: 8,
      students: ["Ayesha", "Hiba"],
      name: "Farah",
      email: "Farah@gmail.com", 
      phone: "03334567897",
      address: "Wapda Town Lahore",
    },
    {
      id: 9,
      students: ["Sara", "Ahmed"],
      name: "Kamran",
      email: "Kamran@gmail.com", 
      phone: "03334567898",
      address: "Township Lahore",
    },
    {
      id: 10,
      students: ["Usman", "Hamza"],
      name: "Iqbal",
      email: "Iqbal@gmail.com", 
      phone: "03334567899",
      address: "Cantt Lahore",
    },
  ];
  
   
   // Menu data for subjects
   export const subjectsData = [
    {
      id: 1,
      name: "Math",
      teachers: ["Fatima", "Hamza"],
    },
    {
      id: 2,
      name: "Science",
      teachers: ["Ayesha", "Usman"],
    },
    {
      id: 3,
      name: "English",
      teachers: ["Sara", "Khalid"],
    },
    {
      id: 4,
      name: "History",
      teachers: ["Ali", "Raza"],
    },
    {
      id: 5,
      name: "Geography",
      teachers: ["Naveed", "Mariam"],
    },
    {
      id: 6,
      name: "Physics",
      teachers: ["Kamran", "Iqbal"],
    },
    {
      id: 7,
      name: "Chemistry",
      teachers: ["Bilal", "Fatima"],
    },
    {
      id: 8,
      name: "Biology",
      teachers: ["Hassan", "Ayesha"],
    },
    {
      id: 9,
      name: "Computer Science",
      teachers: ["Farah", "Usman"],
    },
    {
      id: 10,
      name: "Islamic Studies",
      teachers: ["Ahmed", "Khalid"],
    },
  ];
  
   
   // Menu data for classes
   export const classesData = [
    {
      id: 1,
      name: "1A",
      capacity: 30,
      grade: 1,
      supervisor: "Ms. Fatima",
    },
    {
      id: 2,
      name: "1B",
      capacity: 28,
      grade: 1,
      supervisor: "Mr. Hamza",
    },
    {
      id: 3,
      name: "2A",
      capacity: 32,
      grade: 2,
      supervisor: "Ms. Ayesha",
    },
    {
      id: 4,
      name: "2B",
      capacity: 25,
      grade: 2,
      supervisor: "Mr. Usman",
    },
    {
      id: 5,
      name: "3A",
      capacity: 30,
      grade: 3,
      supervisor: "Ms. Sara",
    },
    {
      id: 6,
      name: "3B",
      capacity: 29,
      grade: 3,
      supervisor: "Mr. Khalid",
    },
    {
      id: 7,
      name: "4A",
      capacity: 31,
      grade: 4,
      supervisor: "Ms. Aliya",
    },
    {
      id: 8,
      name: "4B",
      capacity: 27,
      grade: 4,
      supervisor: "Mr. Raza",
    },
    {
      id: 9,
      name: "5A",
      capacity: 33,
      grade: 5,
      supervisor: "Ms. Mariam",
    },
    {
      id: 10,
      name: "5B",
      capacity: 30,
      grade: 5,
      supervisor: "Mr. Kamran",
    },
   ];
   
   // Menu data for lessons
   export const lessonsData = [
    { id: 1, subject: "Mathematics", class: "Grade 5", teacher: "Mr. John Doe" },
    { id: 2, subject: "Science", class: "Grade 6", teacher: "Ms. Jane Smith" },
    { id: 3, subject: "History", class: "Grade 7", teacher: "Mr. Albert Johnson" },
    { id: 4, subject: "English", class: "Grade 5", teacher: "Mrs. Emma Brown" },
    { id: 5, subject: "Physical Education", class: "Grade 8", teacher: "Coach Mike Davis" },
    { id: 6, subject: "Geography", class: "Grade 9", teacher: "Ms. Lisa Wilson" },
    { id: 7, subject: "Biology", class: "Grade 10", teacher: "Dr. Sarah Lee" },
    { id: 8, subject: "Chemistry", class: "Grade 11", teacher: "Mr. James Taylor" },
    { id: 9, subject: "Physics", class: "Grade 12", teacher: "Ms. Anna Thomas" },
    { id: 10, subject: "Art", class: "Grade 6", teacher: "Mrs. Carol Martin" },
    { id: 11, subject: "Music", class: "Grade 7", teacher: "Mr. George Harris" },
    { id: 12, subject: "Computer Science", class: "Grade 10", teacher: "Mr. Chris Lee" },
    { id: 13, subject: "Literature", class: "Grade 8", teacher: "Ms. Patricia Clark" },
    { id: 14, subject: "French", class: "Grade 9", teacher: "Mme. Sophie Laurent" },
    { id: 15, subject: "Economics", class: "Grade 12", teacher: "Mr. Brian King" },
   ];
   
   // Menu data for exams
   export const examsData = [
    { id: 1, subject: "Mathematics", class: "Grade 5", teacher: "Mr. John Doe", date: "2024-11-10" },
    { id: 2, subject: "Science", class: "Grade 6", teacher: "Ms. Jane Smith", date: "2024-11-12" },
    { id: 3, subject: "History", class: "Grade 7", teacher: "Mr. Albert Johnson", date: "2024-11-14" },
    { id: 4, subject: "English", class: "Grade 5", teacher: "Mrs. Emma Brown", date: "2024-11-16" },
    { id: 5, subject: "Physical Education", class: "Grade 8", teacher: "Coach Mike Davis", date: "2024-11-18" },
    { id: 6, subject: "Geography", class: "Grade 9", teacher: "Ms. Lisa Wilson", date: "2024-11-20" },
    { id: 7, subject: "Biology", class: "Grade 10", teacher: "Dr. Sarah Lee", date: "2024-11-22" },
    { id: 8, subject: "Chemistry", class: "Grade 11", teacher: "Mr. James Taylor", date: "2024-11-24" },
    { id: 9, subject: "Physics", class: "Grade 12", teacher: "Ms. Anna Thomas", date: "2024-11-26" },
    { id: 10, subject: "Art", class: "Grade 6", teacher: "Mrs. Carol Martin", date: "2024-11-28" },
   ];
 
   export const AssignmentData = [
    { id: 1, subject: "Mathematics", class: "Grade 5", teacher: "Mr. John Doe", dueDate: "2024-11-10" },
    { id: 2, subject: "Science", class: "Grade 6", teacher: "Ms. Jane Smith", dueDate: "2024-11-12" },
    { id: 3, subject: "History", class: "Grade 7", teacher: "Mr. Albert Johnson", dueDate: "2024-11-14" },
    { id: 4, subject: "English", class: "Grade 5", teacher: "Mrs. Emma Brown", dueDate: "2024-11-16" },
    { id: 5, subject: "Physical Education", class: "Grade 8", teacher: "Coach Mike Davis", dueDate: "2024-11-18" },
    { id: 6, subject: "Geography", class: "Grade 9", teacher: "Ms. Lisa Wilson", dueDate: "2024-11-20" },
    { id: 7, subject: "Biology", class: "Grade 10", teacher: "Dr. Sarah Lee", dueDate: "2024-11-22" },
    { id: 8, subject: "Chemistry", class: "Grade 11", teacher: "Mr. James Taylor", dueDate: "2024-11-24" },
    { id: 9, subject: "Physics", class: "Grade 12", teacher: "Ms. Anna Thomas", dueDate: "2024-11-26" },
    { id: 10, subject: "Art", class: "Grade 6", teacher: "Mrs. Carol Martin", dueDate: "2024-11-28" },
   ];
 
   export const ResultsData = [
    { id: 1, subject: "Mathematics", class: "Grade 5", teacher: "Mr. John Doe", student: "Alice Johnson", type: "exam", date: "2024-11-10", score: 85 },
    { id: 2, subject: "Science", class: "Grade 6", teacher: "Ms. Jane Smith", student: "Bob Williams", type: "assignment", date: "2024-11-12", score: 92 },
    { id: 3, subject: "History", class: "Grade 7", teacher: "Mr. Albert Johnson", student: "Charlie Brown", type: "exam", date: "2024-11-14", score: 78 },
    { id: 4, subject: "English", class: "Grade 5", teacher: "Mrs. Emma Brown", student: "Diana Evans", type: "assignment", date: "2024-11-16", score: 88 },
    { id: 5, subject: "Physical Education", class: "Grade 8", teacher: "Coach Mike Davis", student: "Ethan Thompson", type: "exam", date: "2024-11-18", score: 91 },
    { id: 6, subject: "Geography", class: "Grade 9", teacher: "Ms. Lisa Wilson", student: "Fiona White", type: "assignment", date: "2024-11-20", score: 84 },
    { id: 7, subject: "Biology", class: "Grade 10", teacher: "Dr. Sarah Lee", student: "George Miller", type: "exam", date: "2024-11-22", score: 89 },
    { id: 8, subject: "Chemistry", class: "Grade 11", teacher: "Mr. James Taylor", student: "Hannah Scott", type: "assignment", date: "2024-11-24", score: 95 },
    { id: 9, subject: "Physics", class: "Grade 12", teacher: "Ms. Anna Thomas", student: "Ian Young", type: "exam", date: "2024-11-26", score: 76 },
    { id: 10, subject: "Art", class: "Grade 6", teacher: "Mrs. Carol Martin", student: "Jack Baker", type: "assignment", date: "2024-11-28", score: 90 },
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
    { id: 1, title: "Math Exam", class: "Grade 5", date: "2024-11-10", startTime: "09:00", endTime: "11:00" },
    { id: 2, title: "Science Fair", class: "Grade 6", date: "2024-11-12", startTime: "10:00", endTime: "15:00" },
    { id: 3, title: "History Presentation", class: "Grade 7", date: "2024-11-14", startTime: "11:00", endTime: "13:00" },
    { id: 4, title: "English Reading Day", class: "Grade 5", date: "2024-11-16", startTime: "09:30", endTime: "11:30" },
    { id: 5, title: "PE Sports Day", class: "Grade 8", date: "2024-11-18", startTime: "08:00", endTime: "12:00" },
    { id: 6, title: "Geography Quiz", class: "Grade 9", date: "2024-11-20", startTime: "14:00", endTime: "15:30" },
    { id: 7, title: "Biology Field Trip", class: "Grade 10", date: "2024-11-22", startTime: "08:30", endTime: "16:00" },
    { id: 8, title: "Chemistry Lab Session", class: "Grade 11", date: "2024-11-24", startTime: "13:00", endTime: "15:00" },
    { id: 9, title: "Physics Workshop", class: "Grade 12", date: "2024-11-26", startTime: "09:00", endTime: "11:00" },
    { id: 10, title: "Art Exhibition", class: "Grade 6", date: "2024-11-28", startTime: "10:00", endTime: "14:00" },
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
    { id: 1, title: "School Holiday Announcement", class: "All Grades", date: "2024-11-01" },
    { id: 2, title: "Parent-Teacher Meeting", class: "Grade 5", date: "2024-11-05" },
    { id: 3, title: "Field Trip to Science Museum", class: "Grade 6", date: "2024-11-07" },
    { id: 4, title: "Sports Day Registration Open", class: "Grade 7", date: "2024-11-10" },
    { id: 5, title: "Art Competition Announcement", class: "Grade 8", date: "2024-11-12" },
    { id: 6, title: "New Library Hours", class: "All Grades", date: "2024-11-15" },
    { id: 7, title: "Scholarship Applications Now Open", class: "Grade 9", date: "2024-11-18" },
    { id: 8, title: "End of Term Exams Schedule", class: "Grade 10", date: "2024-11-20" },
    { id: 9, title: "School Clean-Up Day", class: "Grade 11", date: "2024-11-22" },
    { id: 10, title: "Book Fair Coming Soon", class: "Grade 12", date: "2024-11-25" },
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
 
      {
       title: "Computer",
       allDay: false,
       start: new Date(2024, 6, 8, 14, 0), // Adjusted to July 12
       end: new Date(2024, 6, 8, 14, 45),   // Adjusted to July 12
     },
   ];