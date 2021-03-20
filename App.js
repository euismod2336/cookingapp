import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BrowsePage from "./pages/BrowsePage";
import Header from "./components/Shared/Header";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="BrowsePage"
                  component={BrowsePage}
                  options={{
                      title: 'Browse Recipes',
                      headerRight: Header,
                      headerRightContainerStyle: {
                          padding: 20
                      }
                  }}
              />

          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
