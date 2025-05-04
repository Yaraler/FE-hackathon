import { Image, View ,Text,StyleSheet} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
<Text style={styles.title}>Choose your team</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
backgroundColor:'#16120F',
        width:412,
        height:917,
    },

    title:{
        paddingTop:105,
        alignSelf:'center',
        fontSize:32,
        color:'#fff',
    }
})


