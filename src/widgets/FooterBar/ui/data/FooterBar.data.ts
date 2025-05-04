import { ItemFooterBarProps } from "../ItemFooterBar/type";
import HomeImg from "../../../../../assets/images/iconFooter/Home (1).png"
import ProfileImg from "../../../../../assets/images/iconFooter/Account.png"
import CalendarImg from "../../../../../assets/images/iconFooter/Tear-Off Calendar.png"
import BarChartImg from "../../../../../assets/images/iconFooter/Bar Chart.png"
import WorkoutsImg from "../../../../../assets/images/iconFooter/Fire.png"

export const footerBarData: ItemFooterBarProps[] = [
  {
    icon: HomeImg,
    name: "Home",
    type: false,
    link: '/main'
  },
  {
    icon: CalendarImg,
    type: false,
    name: "Workouts",
    link: '/main/workouts'
  },
  {
    icon: WorkoutsImg,
    name: "Workouts",
    type: true,
    link: '/main/workouts'
  },

  {
    icon: BarChartImg,
    name: "Statictic",
    type: false,
    link: '/main/workouts'
  },
  {
    icon: ProfileImg,
    type: false,
    name: "Profile",
    link: '/profile'
  },


]
