import React from 'react';
import {View, StatusBar, Image} from 'react-native';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.backgrounds.splash,
      }}>
      <StatusBar
        translucent
        barStyle={theme.colors.splash}
        backgroundColor={theme.backgrounds.splash}
      />
      <Image source={theme.images.splash} style={{width: 136, height: 136}} />
    </View>
  );
};

export default Splash;
