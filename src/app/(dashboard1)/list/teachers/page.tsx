import TableSearch from "@/app/components/TableSearch"
import { GiSettingsKnobs } from "react-icons/gi";
import {  FaEye } from "react-icons/fa";
import { BsSortDown} from "react-icons/bs";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
// import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { role, teachersData } from "@/app/lib/data";
import FormModel from "@/app/components/FormModel";

type Teacher = {
  id:number;
  teacherId:number;
  name:string;
  email:string;
  photo:string;
  phone:string;
  subjects:string[];
  classes:string[];
  address:string;
}

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
      header: "Action",
      accessor: "action",
  },
]



const TeacherListPage = () => {

  const renderRow = (item:Teacher) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurplelight">
      <td className="flex items-center gap-4 p-4">
        <Image 
        src={item.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-xs text-gray-500">{item.email}</p>
        </div> 
      </td>

      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
            <FaEye/>
          </button></Link>
          {role === "admin" && (
          //   <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
          //   <MdDelete/>
          // </button>
          <FormModel table="teacher"  type="delete" id={item.id}/>

          )}
        </div>
      </td>

    </tr>
  
)

    return (
        <div className="w-full md:w-[95%] xl:w-[98%] bg-white p-4 rounded-md flex-1 m-4 mt-20">
         {/* Top section */}
        <div className="flex items-center justify-between">
            <h1 className=" hidden md:block text-lg font-semibold">All Teacher</h1>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch/> 
 
               <div className="flex gap-4 items-center self-end">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><GiSettingsKnobs/></button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><BsSortDown/></button>
                 
                  
                  {role === "admin" && (
                      //   <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                      //       <FaPlus/>
                      //  </button>
                      <FormModel table="teacher"  type="create"/>
                     )}   

                </div> 
            </div>
        </div>

          {/* List */}
          <div className="">
            <Table columns = {columns} renderRow = {renderRow} data = {teachersData} />
          </div>

          {/* PAGINATION */}
          <div className="">
            <Pagination/>
          </div>

        </div>
    )
     
}

export default TeacherListPage