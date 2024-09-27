import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Animal from './src/pages/Animal';
import Plantas from './src/pages/Plantas';
import Fungos from './src/pages/Fungi';
import Protista from './src/pages/Protista';
import Monera from './src/pages/Monera';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Reino Animal' }}
        />
        <Stack.Screen name="Animal" component={Animal} />
        <Stack.Screen name="Plantae" component={Plantas} />
        <Stack.Screen name="Fungi" component={Fungos} />
        <Stack.Screen
          name="Protista"
          component={Protista}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen name="Monera" component={Monera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
