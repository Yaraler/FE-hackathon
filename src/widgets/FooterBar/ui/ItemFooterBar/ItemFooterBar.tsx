import React from "react"
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ItemFooterBarProps } from "./type"
import { useLocalSearchParams, useRouter } from "expo-router";

export const ItemFooterBar: React.FC<ItemFooterBarProps> = ({ name, link, icon }) => {
  const router = useRouter();
  const handlerNav = () => router.navigate(link)
  const local = useLocalSearchParams();
  console.log(local)
  return (
    <TouchableOpacity onPress={handlerNav} style={styles.container}>
      <Image
        style={styles.icon}
        source={icon}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 102,
    width: 77
  },
  icon: {
    width: 40,
    height: 40
  }
})
