import React, { useEffect, useState } from "react";
import { Calendar, CalendarProps } from "react-native-calendars";
import { CalendaryListProps } from "./type";

export const CalendaryList: React.FC<CalendaryListProps> = ({ selected, handler }) => {
  return (
    <Calendar
      onDayPress={day => {
        const days = day.dateString
        handler(days);
      }}
      markedDates={{
        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
      }}
    />



  )
}
