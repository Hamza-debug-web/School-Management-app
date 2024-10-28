import TableSearch from "@/app/components/TableSearch";
import { GiSettingsKnobs } from "react-icons/gi";
//import { FaPlus, FaEdit  } from "react-icons/fa";
import { BsSortDown } from "react-icons/bs";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
//import { MdDelete } from "react-icons/md";
// import Link from "next/link";
import {EventsData, role} from "@/app/lib/data";
import FormModel from "@/app/components/FormModel";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime:string;
  endTime:string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
   
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const EventListPage = () => {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurplelight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>

      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <FaEdit/>
            </button>
          </Link> */}
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <MdDelete />
            // </button>
            <>
            <FormModel table="assignment"  type="delete" id={item.id} />
            <FormModel table="event"  type="update" data={item}  />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="w-full md:w-[95%] xl:w-[98%] bg-white p-4 rounded-md flex-1 m-4 mt-20">
      {/* Top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />

          <div className="flex gap-4 items-center self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <GiSettingsKnobs />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <BsSortDown />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <FaPlus />
              // </button>

              <FormModel table="event"  type="create"  />
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={EventsData} />
      </div>

      {/* Pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default EventListPage;
