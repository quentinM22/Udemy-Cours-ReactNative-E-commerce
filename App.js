import { Provider } from 'react-redux';
import store from './src/RTK/store';
import Landing from './src/Screens/Landing';
import { View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1, alignItems: "center", marginVertical: 30}}>
        <Landing />
      </View>
      
    </Provider>
  
  );
}


