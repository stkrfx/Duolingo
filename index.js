import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Duolingo} from './src/constants/credentials';
import theme from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/screens/Onboarding';
import Chats from './src/screens/Chats';
import New from './src/screens/New';
import Chat from './src/screens/Chat';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = React.useState();
  const [loaded, setLoaded] = React.useState(true);

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
              {user ? (
                <>
                  <Stack.Screen name="chats" component={Chats} />
                  <Stack.Screen name="new" component={New} />
                  <Stack.Screen name="chat" component={Chat} />
                </>
              ) : (
                <Stack.Screen name="login" component={Login} />
              )}
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
