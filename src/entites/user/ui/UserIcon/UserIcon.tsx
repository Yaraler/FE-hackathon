import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { UserIconProps } from './type';
export const UserIcon: React.FC<UserIconProps> = ({ icon }) => {
  return (
    <Image
      source={{
        uri: icon ? icon : 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
  )
}
const styles = StyleSheet.create({})
