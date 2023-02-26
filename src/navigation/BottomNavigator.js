import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Outdoor from '../screens/Outdoor';
import Indoor from '../screens/Indoor';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <bottom.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          ...style.shadow,
        },
      }}>
      <bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assests/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <bottom.Screen
        name="Indoor"
        component={Indoor}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assests/icons/indoor.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Indoor
              </Text>
            </View>
          ),
        }}
      />
      <bottom.Screen
        name="Outdoor"
        component={Outdoor}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assests/icons/outdoor.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Outdoor
              </Text>
            </View>
          ),
        }}
      />
      <bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assests/icons/profile.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </bottom.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#696969',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomNavigator;
