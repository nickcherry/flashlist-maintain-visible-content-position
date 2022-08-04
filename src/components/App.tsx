import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatListExample } from './FlatListExample';
import { FlashListExample } from './FlashListExample';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="FlatList" component={FlatListExample} />
            <Tab.Screen name="FlashList" component={FlashListExample} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

export { App };
