// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FeedProvider } from './src/context/FeedContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <FeedProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </FeedProvider>
  );
}
