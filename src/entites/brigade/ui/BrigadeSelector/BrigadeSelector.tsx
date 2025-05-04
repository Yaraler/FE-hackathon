import { StyleSheet, Text, View } from "react-native";
import { useGetBrigadesQuery } from "../../api/useQuery"
import { CardBrigade } from "../CardBrigade/CardBrigade";
import { IBrigade } from "../../type/IBirgade";
import React, { useState } from "react";
import { BrigadeSelectorProps } from "./type";
import { BrigadeChooseInfo } from "../BrigadeChooseInfo/BrigadeChooseInfo";
import { ITypePage } from "@/shared/type/ITypePage/ITypePage";


export const BrigadeSelector: React.FC<BrigadeSelectorProps> = ({ handlerSubmit, setValue, stateRegister, handlerNextPage }) => {
  const { data, isLoading, error } = useGetBrigadesQuery()
  const [brigade, setBrigade] = useState<IBrigade | undefined>()

  const handlerChooseSubmit = async (id: string) => {
    if (!id) return
    setValue("brigadId", id)
    handlerSubmit()
  }
  if (isLoading && error) {
    return (<Text>
      load or error
    </Text>)
  }
  const handlerBrigadeInfo = (data: IBrigade) => {
    setBrigade(data)
    handlerNextPage()
  }
  return (
    <View style={styles.container}>
      {stateRegister == 1 &&
        data?.map((elem: IBrigade) => (
          <CardBrigade brigade={elem} key={elem._id} handler={() => handlerBrigadeInfo(elem)} />
        ))
      }
      {stateRegister == 2 && brigade ? (
        <BrigadeChooseInfo
          handlerSubmit={handlerChooseSubmit}
          brigade={brigade}
        />
      ) : null}


    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    height: 400
  }
})
