import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, TouchableWithoutFeedback, StatusBar} from 'react-native';

const Onboarding = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 18,
        alignItems: 'center',
        backgroundColor: theme.backgrounds.primary,
      }}>
      <StatusBar translucent />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          loop
          autoPlay
          source={theme.images.onboarding}
          style={{width: 200, height: 200}}
        />
        <Text
          allowFontScaling={false}
          style={{
            fontSize: 30,
            marginBottom: 14,
            fontFamily: 'Primary',
            color: theme.colors.primary,
          }}>
          duolingo
        </Text>
        <Text
          allowFontScaling={false}
          style={{
            fontSize: 18,
            lineHeight: 26,
            textAlign: 'center',
            fontFamily: 'Secondary',
            color: theme.colors.secondary,
          }}>
          The free, fun, and effective way{'\n'}to learn a language!
        </Text>
      </View>
      <TouchableWithoutFeedback>
        <View
          style={{
            height: 50,
            width: '100%',
            borderRadius: 12,
            marginBottom: 16,
            paddingBottom: 4,
            backgroundColor: theme.backgrounds.secondary,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderWidth: 2,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: theme.backgrounds.tertiary,
              backgroundColor: theme.backgrounds.tertiary,
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 17,
                fontFamily: 'SecondaryBold',
                color: theme.colors.tertiary,
              }}>
              GET STARTED
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View
          style={{
            height: 50,
            width: '100%',
            borderRadius: 12,
            paddingBottom: 2,
            backgroundColor: 'rgb( 229,229,229 )',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderWidth: 2,
              paddingBottom: 2,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'rgb( 229,229,229 )',
              backgroundColor: '#fff',
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 17,
                fontFamily: 'SecondaryBold',
                color: theme.colors.primary,
              }}>
              I ALREADY HAVE AN ACCOUNT
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Onboarding;
