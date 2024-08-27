import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';
import AppLoading from 'expo-app-loading';


function fontmain(){
    let [fontsLoaded] = useFonts({
        Itim_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
}