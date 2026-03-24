// src/components/LikeButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useFeed } from '../context/FeedContext';
import { theme } from '../theme/theme';

interface LikeButtonProps {
  postId: string;
  baseLikes: number;
}

export function LikeButton({ postId, baseLikes }: LikeButtonProps) {
  const { likedPosts, toggleLike } = useFeed();
  const isLiked = likedPosts.has(postId);
  const count = baseLikes + (isLiked ? 1 : 0);

  return (
    <TouchableOpacity
      onPress={() => toggleLike(postId)}
      style={styles.btn}
      activeOpacity={0.7}
    >
      <Text style={[styles.icon, isLiked && styles.iconActive]}>
        {isLiked ? '❤️' : '🤍'}
      </Text>
      <Text style={[styles.count, isLiked && styles.countActive]}>{count}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  icon: { fontSize: 16 },
  iconActive: {},
  count: { ...theme.typography.caption, color: theme.colors.textSecondary },
  countActive: { color: theme.colors.primary, fontWeight: '600' },
});
