// src/screens/PostDetailScreen.tsx
import React from 'react';
import {
  ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { FeedStackParamList } from '../navigation/RootNavigator';
import { posts } from '../data/posts';
import { theme } from '../theme/theme';
import { CategoryBadge } from '../components/CategoryBadge';
import { LikeButton } from '../components/LikeButton';
import { CommentItem } from '../components/CommentItem';

type Props = NativeStackScreenProps<FeedStackParamList, 'PostDetail'>;

export function PostDetailScreen({ route, navigation }: Props) {
  const post = posts.find(p => p.id === route.params.postId)!;

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient
        colors={[theme.colors.primaryLight, theme.colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{post.title}</Text>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <CategoryBadge category={post.category} />

        <Text style={styles.title}>{post.title}</Text>

        <View style={styles.authorBlock}>
          <Text style={styles.authorName}>{post.author.name}</Text>
          <Text style={styles.authorMeta}>{post.author.role} · {post.timestamp}</Text>
        </View>

        <Text style={styles.body}>{post.body}</Text>

        <View style={styles.likeRow}>
          <LikeButton postId={post.id} baseLikes={post.likes} />
        </View>

        <View style={styles.divider} />

        <Text style={styles.commentsHeading}>Comments ({post.comments.length})</Text>

        {post.comments.map(c => (
          <CommentItem key={c.id} comment={c} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  backBtn: { padding: 4 },
  backIcon: { fontSize: 22, color: 'white' },
  headerTitle: { ...theme.typography.heading, color: 'white', flex: 1 },
  scroll: { flex: 1 },
  content: { padding: theme.spacing.lg, paddingBottom: 40 },
  title: { ...theme.typography.postTitle, color: theme.colors.text, marginTop: theme.spacing.md, marginBottom: theme.spacing.sm },
  authorBlock: { marginBottom: theme.spacing.lg },
  authorName: { ...theme.typography.caption, fontWeight: '700', color: theme.colors.text },
  authorMeta: { ...theme.typography.caption, color: theme.colors.textSecondary },
  body: { ...theme.typography.body, color: theme.colors.text, marginBottom: theme.spacing.lg },
  likeRow: { flexDirection: 'row', marginBottom: theme.spacing.lg },
  divider: { height: 1, backgroundColor: theme.colors.border, marginBottom: theme.spacing.lg },
  commentsHeading: { ...theme.typography.heading, color: theme.colors.text, marginBottom: theme.spacing.md },
});
