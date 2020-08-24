import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import EntypoIcons from 'react-native-vector-icons/Entypo';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import InfoScreen from './screens/Info';
import MapScreen from './screens/Map';
import HomeScreen from './screens/Home';
import PeopleScreen from './screens/People';
import ProfileScreen from './screens/Profile';

import Button from './components/Button';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            backgroundColor: '#000',
            borderTopColor: 'rgba(255, 255, 255, 0.3)',
          },
          activeTintColor: '#fff',
        }}
      >
        <Tab.Screen
          name="Info" component={InfoScreen} options={{
            tabBarIcon: ({ size, color }) => <EntypoIcons name="info" size={size} color={color} />
          }}
        />
        <Tab.Screen name="Map" component={MapScreen} options={{
            tabBarIcon: ({ size, color }) => <EntypoIcons name="location-pin" size={size} color={color} />
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} options={{
            title: '',
            tabBarIcon: ({ size, color, focused }) => <Button focused={focused} />
          }}
        />
        <Tab.Screen name="People" component={PeopleScreen} options={{
            tabBarIcon: ({ size, color }) => <AntDesignIcons name="contacts" size={size} color={color} />
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ size, color }) => <IoniconsIcons name="person" size={size} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
