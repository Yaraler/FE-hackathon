import * as React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { ErrorFieldProps } from './type';
import { StyleSheet } from 'react-native';

export const ErrorField: React.FC<ErrorFieldProps> = ({ error }) => {
    return (
        <View style={styles.error}>
            <HelperText type="error" style={styles.helperText}>
                {error}
            </HelperText>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        width: '100%',
        maxWidth: 412,
        alignSelf: 'center',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 20
    },
    helperText: {
        fontSize: 12,
        lineHeight: 16,
        paddingVertical: 0,
        paddingHorizontal: 0,
        textAlign: 'left',
        paddingLeft:20
    }
});