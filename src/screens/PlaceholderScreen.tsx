// src/screens/PlaceholderScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { theme } from '../theme/theme';

export function PlaceholderScreen() {
  const route = useRoute<RouteProp<Record<string, undefined>>>();
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🚧</Text>
      <Text style={styles.text}>{route.name} coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 40, marginBottom: theme.spacing.md },
  text: { ...theme.typography.heading, color: theme.colors.textSecondary },
});
