import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', alignContent:'center', alignItems:'center' }}>
      <View style={{ paddingHorizontal: 25}}>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', objectFit: "cover"}}>
        <Image source={require('../assets/images/illustrations/logo-vertical.png')} style={{ height: 300, width: 300, resizeMode: "countain" }} />
      </View>
      <View style={{flex: 0, width:'80%'}}>
      <CustomButton label={'Continuar'} onPress={() => {navigation.navigate('Login')}}/>
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
