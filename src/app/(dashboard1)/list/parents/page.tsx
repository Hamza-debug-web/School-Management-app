import TableSearch from "@/app/components/TableSearch"
import { GiSettingsKnobs } from "react-icons/gi";
//import {  FaEdit } from "react-icons/fa";
import { BsSortDown} from "react-icons/bs";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
// import { MdDelete } from "react-icons/md";

import { parentsData, role } from "@/app/lib/data";
import FormModel from "@/app/components/FormModel";

type Parent = {
  id:number;
  name:string;
  students:string[];
  phone:string;
  email?:string;
  address:string;
}

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
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



const ParentListPage = () => {

  const renderRow = (item:Parent) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurplelight">
      <td className="flex items-center gap-4 p-4">
    
        <div className="flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div> 
      </td>

      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>

      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
            <FaEdit/>
          </button>
        
          </Link> */}
          {role === "admin" && (
          //   <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
          //   <MdDelete/>
          // </button>
          <> 
          <FormModel table="parent"  type="delete" id={item.id}/>
          <FormModel table="parent"  type="update" data={item}/>
          </>
         
          )}
        </div>
      </td>
    </tr>
  
)

    return (
        <div className="w-full md:w-[95%] xl:w-[98%] bg-white p-4 rounded-md flex-1 m-4 mt-20">
         {/* Top section */}
        <div className="flex items-center justify-between">
            <h1 className=" hidden md:block text-lg font-semibold">All Parents</h1>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch/> 
 
               <div className="flex gap-4 items-center self-end">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><GiSettingsKnobs/></button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><BsSortDown/></button>
                  {role === "admin" && (
              //  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><FaPlus/></button>
              <FormModel table="parent"  type="create"/>
                 )}

               </div> 
            </div>
        </div>

          {/* List */}
          <div className="">
            <Table columns = {columns} renderRow = {renderRow} data = {parentsData} />
          </div>

          {/* PAGINATION */}
          <div className="">
            <Pagination/>
          </div>

        </div>
    )
     
}

export default ParentListPage