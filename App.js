import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { cats } from './breeds'
import { dogs } from './breeds'
import Item from './components/Item'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function DogsScreen() {
  return (
    <SafeAreaView>
      <FlatList 
        data={dogs}
        renderItem={({ item, index }) => {
          return <Item title={`${index} ${item.breed}`} data={item}/>
        }}
        keyExtractor={item => item.breed}
      />
    </SafeAreaView>
  );
}

function CatsScreen() {
  return (
    <SafeAreaView>
      <FlatList 
        data={cats}
        renderItem={({ item, index }) => {
          return <Item title={`${index} ${item.breed}`} data={item}/>
        }}
        keyExtractor={item => item.breed}
      />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Dogs') {
              iconName = 'ios-tennisball';
            } else if (route.name === 'Cats') {
              iconName = 'ios-paw';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dogs" component={DogsScreen} />
        <Tab.Screen name="Cats" component={CatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
