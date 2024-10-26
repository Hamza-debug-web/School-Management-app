 "use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { myEventsList } from '../lib/data'

const localizer = momentLocalizer(moment)


const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)
  

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView)
  }

  return (
    <div className="">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}  
        view={view}
        onView={handleOnChangeView}
        min={new Date(2024, 6, 12, 7, 0)}
        max={new Date(2024, 6, 12, 17, 0)}
        defaultDate={new Date(2024, 6, 12)}
        style={{height: "98%"}}
      />
    </div>
  )
}

export default BigCalendar