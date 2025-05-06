import { useEffect, useState } from "react";
import { useGetWorkouts } from "../../model/hook/useGetWorkouts";
import { View } from "react-native";
import { CalendaryList } from "../CalendaryList/CalendaryList";
import { IWorkoutsResponse } from "@/shared/type/Workouts/WokroutsResponse/WorkoutsResponse";
import { CalendaryWorkouts } from "../CalendaryWorkouts/CalendaryWorkouts";

export const CalendaryMain = ({ }) => {
  const [selected, setSelected] = useState('2025-05-06');
  const [currentDay, setCurrentDay] = useState<IWorkoutsResponse | undefined>()
  const { data } = useGetWorkouts()
  const hander = (days: string) => setSelected(days)
  useEffect(() => {
    if (!data) return;
    const foundItem = data.find(item => {
      const date = new Date(item.workouts.day)
      const itemDateStr = date.toISOString().split('T')[0];

      return itemDateStr === selected;
    });
    if (foundItem) setCurrentDay(foundItem)
    console.log(foundItem)
  }, [selected, data])
  return (
    <View>
      <CalendaryList selected={selected} handler={hander} />
      {currentDay &&
        <CalendaryWorkouts day={selected} workouts={currentDay} />}
    </View>
  )
}
