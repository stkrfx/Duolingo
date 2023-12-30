import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = React.useState();
  const [loaded, setLoaded] = React.useState();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Duolingo.Provider value={{user, setUser, theme}}>
        <StatusBar
          backgroundColor={theme.backgrounds.primary}
          barStyle={theme.colors.barStyle}
        />
        {loaded ? (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                freezeOnBlur: true,
              }}>
              <Stack.Screen name="onboarding" component={Onboarding} />
              <Stack.Screen name="chats" component={Chats} />
              <Stack.Screen name="new" component={New} />
              <Stack.Screen name="chat" component={Chat} />
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <Splash />
        )}
      </Duolingo.Provider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => App);
