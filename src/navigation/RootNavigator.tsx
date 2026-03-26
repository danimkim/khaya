// src/navigation/RootNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { FeedScreen } from '../screens/FeedScreen';
import { PostDetailScreen } from '../screens/PostDetailScreen';
import { PlaceholderScreen } from '../screens/PlaceholderScreen';
import { theme } from '../theme/theme';

export type FeedStackParamList = {
  Feed: undefined;
  PostDetail: { postId: string };
};

const Stack = createNativeStackNavigator<FeedStackParamList>();
const Tab = createBottomTabNavigator();

function FeedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.border },
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🏠</Text> }}
      />
      <Tab.Screen
        name="Events"
        component={PlaceholderScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>📅</Text> }}
      />
      <Tab.Screen
        name="Profile"
        component={PlaceholderScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text> }}
      />
    </Tab.Navigator>
  );
}
