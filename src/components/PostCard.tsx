// src/components/PostCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Post } from '../data/posts';
import { theme } from '../theme/theme';
import { CategoryBadge } from './CategoryBadge';
import { LikeButton } from './LikeButton';

interface PostCardProps {
  post: Post;
  onPress: () => void;
}

export function PostCard({ post, onPress }: PostCardProps) {
  const isFeatured = !!post.featured;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.card, isFeatured && styles.cardFeatured]}
    >
      <CategoryBadge category={post.category} inverted={isFeatured} />

      <Text
        style={[styles.title, isFeatured && styles.titleFeatured]}
        numberOfLines={2}
      >
        {post.title}
      </Text>

      <Text
        style={[styles.body, isFeatured && styles.bodyFeatured]}
        numberOfLines={3}
      >
        {post.body}
      </Text>

      <View style={styles.footer}>
        <View style={styles.authorBlock}>
          <Text style={[styles.authorName, isFeatured && styles.textLight]}>
            {post.author.name}
          </Text>
          <Text style={[styles.authorRole, isFeatured && styles.textLightSecondary]}>
            {post.author.role} · {post.timestamp}
          </Text>
        </View>
        <View style={styles.actions}>
          <LikeButton postId={post.id} baseLikes={post.likes} />
          <Text style={[styles.commentCount, isFeatured && styles.textLightSecondary]}>
            💬 {post.comments.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardFeatured: {
    backgroundColor: theme.colors.accent,
  },
  title: {
    ...theme.typography.heading,
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  titleFeatured: { color: '#FFFFFF' },
  body: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  bodyFeatured: { color: 'rgba(255,255,255,0.8)' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  authorBlock: { flex: 1 },
  authorName: { ...theme.typography.caption, fontWeight: '700', color: theme.colors.text },
  authorRole: { ...theme.typography.caption, color: theme.colors.textSecondary },
  actions: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md },
  commentCount: { ...theme.typography.caption, color: theme.colors.textSecondary },
  textLight: { color: '#FFFFFF' },
  textLightSecondary: { color: 'rgba(255,255,255,0.7)' },
});
