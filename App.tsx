import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Overpass_900Black } from '@expo-google-fonts/overpass';


export default function App() {
  let [fontsLoaded] = useFonts({
    Overpass_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Overpass_900Black', fontSize: 40 }}>Olá mundo com Overpass Black</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
