import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.backgrounds.tertiary,
      }}>
      <StatusBar backgroundColor={theme.backgrounds.tertiary} />
      <Text style={{color: theme.colors.tertiary}}>duolingo</Text>
    </View>
  );
};

export default Splash;
