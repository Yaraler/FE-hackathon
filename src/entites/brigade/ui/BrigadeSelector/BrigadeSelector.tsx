import { StyleSheet, Text, View } from "react-native";
import { useGetBrigadesQuery } from "../../api/useQuery"
import { CardBrigade } from "../CardBrigade/CardBrigade";
import { IBrigade } from "../../type/IBirgade";
import React, { useState } from "react";
import { BrigadeSelectorProps } from "./type";
import { BrigadeChooseInfo } from "../BrigadeChooseInfo/BrigadeChooseInfo";
import { ITypePage } from "@/shared/type/ITypePage/ITypePage";
import { BrigadeSelectorCard } from "../BrigadeSelectorCard/BrigadeSelectorCard";


export const BrigadeSelector: React.FC<BrigadeSelectorProps> = ({ handlerSubmit, setValue, stateRegister, handlerNextPage }) => {
  const {data, isLoading, error} = useGetBrigadesQuery()
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
        {/* Обертка для первых двух карточек */}
        {stateRegister == 1 && (
            <Text style={styles.title}>Choose your team</Text>
        )}

        {stateRegister == 1 && (
            <View style={styles.grid}>
              {data?.map((brigade, index) => (
                  <View
                      key={brigade._id}
                      style={[
                        styles.cardContainer,
                        index % 2 === 0 ? styles.leftCard : styles.rightCard
                      ]}
                  >
                    <CardBrigade
                        brigade={brigade}
                        handler={() => handlerBrigadeInfo(brigade)}
                    />
                  </View>
              ))}

        )}
            </View>
        )}

        {/* Блок BrigadeChooseInfo (оставляем как было) */}
        {stateRegister == 2 && brigade && (
            <BrigadeChooseInfo
                handlerSubmit={handlerChooseSubmit}
                brigade={brigade}
            />
        )}
      </View>
  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

  },
  title: {
    color: 'white',
    paddingTop:100,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,

  },
  cardContainer: {
    width: '48%',
    aspectRatio: 1,
  },
});