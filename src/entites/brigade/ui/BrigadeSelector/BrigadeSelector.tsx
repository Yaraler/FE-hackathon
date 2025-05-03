import { Text, View } from "react-native";
import { useGetBrigadesQuery } from "../../api/useQuery"
import { CardBrigade } from "../CardBrigade/CardBrigade";
import { IBrigade } from "../../type/IBirgade";
import React from "react";
import { BrigadeSelectorProps } from "./type";
import { useNavigation } from "@react-navigation/native";


export const BrigadeSelector: React.FC<BrigadeSelectorProps> = ({ handlerSubmit, setValue }) => {
  const { data, isLoading, error } = useGetBrigadesQuery()
  const handlerChooseSubmit = async (id: string) => {
    setValue("brigadId", id)
    handlerSubmit()
  }
  if (isLoading && error) {
    return (<Text>
      er;
    </Text>)
  }
  return (
    <View>
      {
        data?.map((elem: IBrigade) =>
          <CardBrigade brigade={elem} key={elem._id} handler={() => handlerChooseSubmit(elem._id)} />
        )
      }


    </View>
  )
}
