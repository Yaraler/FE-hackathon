import * as React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper'
import { ErrorFieldProps } from './type';
export const ErrorField: React.FC<ErrorFieldProps> = ({ error }) => {
  return (
    <View style={{ padding: 16 }}>
      <HelperText type="error" >
        {error}
      </HelperText>
    </View>
  );

}
