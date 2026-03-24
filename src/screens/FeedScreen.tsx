// src/screens/FeedScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { FeedStackParamList } from '../navigation/RootNavigator';
import { posts, Post } from '../data/posts';
import { theme } from '../theme/theme';
import { PostCard } from '../components/PostCard';
import { SkeletonCard } from '../components/SkeletonCard';

type Props = NativeStackScreenProps<FeedStackParamList, 'Feed'>;

const CHIPS = [
  { key: 'all',          label: 'All' },
  { key: 'announcement', label: 'Announcement' },
  { key: 'culture',      label: 'Culture' },
  { key: 'leadership',   label: 'Leadership' },
  { key: 'recognition',  label: 'Recognition' },
];

export function filterPosts(allPosts: Post[], activeCategory: string): Post[] {
  if (activeCategory === 'all') return allPosts;
  return allPosts.filter(p => p.featured || p.category === activeCategory);
}

export function FeedScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered = filterPosts(posts, activeCategory);

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient
        colors={[theme.colors.primaryLight, theme.colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.appName}>Khaya</Text>
        <Text style={styles.tagline}>Your place at the table</Text>
      </LinearGradient>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipRow}
        contentContainerStyle={styles.chipContent}
      >
        {CHIPS.map(chip => (
          <TouchableOpacity
            key={chip.key}
            onPress={() => setActiveCategory(chip.key)}
            style={[styles.chip, activeCategory === chip.key && styles.chipActive]}
          >
            <Text style={[styles.chipLabel, activeCategory === chip.key && styles.chipLabelActive]}>
              {chip.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {loading ? (
        <View style={styles.skeletons}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </View>
      ) : filtered.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>📭</Text>
          <Text style={styles.emptyText}>No posts yet</Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={p => p.id}
          renderItem={({ item }) => (
            <PostCard
              post={item}
              onPress={() => navigation.navigate('PostDetail', { postId: item.id })}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  header: {
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  appName: { ...theme.typography.appName, color: 'white' },
  tagline: { ...theme.typography.caption, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  chipRow: { maxHeight: 48, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  chipContent: { paddingHorizontal: theme.spacing.lg, paddingVertical: theme.spacing.sm, gap: theme.spacing.sm, flexDirection: 'row', alignItems: 'center' },
  chip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 6,
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  chipActive: {
    backgroundColor: theme.colors.accent,
    borderColor: theme.colors.accent,
  },
  chipLabel: { ...theme.typography.caption, color: theme.colors.textSecondary, fontWeight: '600' },
  chipLabelActive: { color: 'white' },
  skeletons: { paddingTop: theme.spacing.lg },
  list: { paddingTop: theme.spacing.lg, paddingBottom: 32 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyIcon: { fontSize: 40, marginBottom: theme.spacing.md },
  emptyText: { ...theme.typography.heading, color: theme.colors.textSecondary },
});
