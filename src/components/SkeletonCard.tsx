// src/components/SkeletonCard.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

export function SkeletonCard() {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.4, duration: 600, useNativeDriver: true }),
      ])
    );
    anim.start();
    return () => anim.stop();
  }, [opacity]);

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={styles.badge} />
      <View style={styles.titleLine} />
      <View style={styles.bodyLine} />
      <View style={[styles.bodyLine, styles.bodyShort]} />
      <View style={styles.actions} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  badge:     { height: 18, width: 100, borderRadius: theme.radius.full, backgroundColor: theme.colors.border, marginBottom: theme.spacing.sm },
  titleLine: { height: 16, width: '80%', borderRadius: 4, backgroundColor: theme.colors.border, marginBottom: theme.spacing.sm },
  bodyLine:  { height: 12, width: '100%', borderRadius: 4, backgroundColor: theme.colors.border, marginBottom: 6 },
  bodyShort: { width: '60%' },
  actions:   { height: 12, width: 60, borderRadius: 4, backgroundColor: theme.colors.border, marginTop: theme.spacing.sm },
});
