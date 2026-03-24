// src/components/CommentItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Comment } from '../data/posts';
import { theme } from '../theme/theme';

interface CommentItemProps {
  comment: Comment;
}

export function CommentItem({ comment }: CommentItemProps) {
  const initial = comment.author.charAt(0).toUpperCase();

  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.initial}>{initial}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.meta}>
          <Text style={styles.author}>{comment.author}</Text>
          <Text style={styles.time}>{comment.timestamp}</Text>
        </View>
        <Text style={styles.body}>{comment.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  content: { flex: 1 },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: 2,
  },
  author: { ...theme.typography.caption, fontWeight: '700', color: theme.colors.text },
  time:   { ...theme.typography.caption, color: theme.colors.textSecondary },
  body:   { ...theme.typography.body, color: theme.colors.text },
});
