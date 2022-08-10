import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// Pages
import Account from '../Pages/Account';
import Browse from '../Pages/Browse';
import Home from '../Pages/Home';
import MyList from '../Pages/MyList';
import Simulcasts from '../Pages/Simulcasts';

export type RootTabProps = {
  Home: undefined;
  MyList: undefined;
  Browse: undefined;
  Simulcasts: undefined;
  Account: undefined;
};

const Tabs = createBottomTabNavigator<RootTabProps>();

function Routes() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        sceneContainerStyle={{
          backgroundColor: '#ccc',
        }}
      >
        <Tabs.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name='home-outline' size={24} color='black' />
            ),
          }}
        />

        <Tabs.Screen
          name='MyList'
          component={MyList}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name='turned-in-not' size={24} color='black' />
            ),
          }}
        />

        <Tabs.Screen
          name='Browse'
          component={Browse}
          options={{
            tabBarIcon: () => (
              <Ionicons name='grid-outline' size={24} color='black' />
            ),
          }}
        />

        <Tabs.Screen
          name='Simulcasts'
          component={Simulcasts}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name='auto-awesome' size={24} color='black' />
            ),
          }}
        />

        <Tabs.Screen
          name='Account'
          component={Account}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name='user-circle' size={24} color='black' />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
