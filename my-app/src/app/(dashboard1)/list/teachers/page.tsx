import TableSearch from "@/app/components/TableSearch"
import { GiSettingsKnobs } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { BsSortDown } from "react-icons/bs";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";

type Teacher = {
  id:number;
  TeacherId:number;
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

  
   

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-8">TeachersList
         {/* Top section */}
        <div className="flex items-center justify-between">
            <h1 className=" hidden md:block text-lg font-semibold">All Teacher</h1>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch/> 
 
               <div className="flex gap-4 items-center self-end">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><GiSettingsKnobs/></button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><BsSortDown/></button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><FaPlus/></button>
               </div> 
            </div>
        </div>

          {/* List */}
          <div className="">
            <Table columns = {columns} />
          </div>

          {/* PAGINATION */}
          <div className="">
            <Pagination/>
          </div>

        </div>
    )
     
}

export default TeacherListPage