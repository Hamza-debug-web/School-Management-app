
"use client"
import Image from "next/image";
const FormModel = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    table,
    type,
    data,
    id,
}: {
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  id?: number;
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
      type === "create"
        ? "bg-lamaYellow"
        : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";

        const imagePath = `/images/${type}.png`; // Adjust this path as needed
  
    return (
        <>
        <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
       
      >
        <Image src={imagePath} alt={`${type} icon`} width={16} height={16} />

      </button>
        </>
    )
}

export default FormModel;