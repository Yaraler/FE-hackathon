import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { UserIconProps } from './type';
import userImg from "../../../../../assets/images/MaleUser.png"
export const UserIcon: React.FC<UserIconProps> = ({ icon }) => {
  return (
    <Image
      style={styles.img}
      source={icon ? { uri: icon } : userImg}
    />
  );
}
const styles = StyleSheet.create({
  img: {
    width: 93,
    height: 93
  }
})
