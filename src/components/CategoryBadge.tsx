// src/components/CategoryBadge.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Post } from '../data/posts';
import { theme } from '../theme/theme';

const CATEGORY_MAP: Record<Post['category'], { label: string; color: string }> = {
  announcement: { label: '📢 Announcement', color: theme.colors.primary },
  culture:      { label: '🎉 Culture',       color: theme.colors.primaryLight },
  leadership:   { label: '📣 Leadership',    color: theme.colors.accent },
  recognition:  { label: '⭐ Recognition',   color: theme.colors.accentLight },
};

interface CategoryBadgeProps {
  category: Post['category'];
  inverted?: boolean; // white text/border for use on dark backgrounds
}

export function CategoryBadge({ category, inverted = false }: CategoryBadgeProps) {
  const { label, color } = CATEGORY_MAP[category];
  return (
    <View style={[styles.badge, { backgroundColor: inverted ? 'transparent' : color + '22', borderColor: inverted ? 'rgba(255,255,255,0.5)' : color }]}>
      <Text style={[styles.label, { color: inverted ? 'rgba(255,255,255,0.9)' : color }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: theme.radius.full,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 3,
  },
  label: {
    ...theme.typography.badge,
    textTransform: 'uppercase',
  },
});
