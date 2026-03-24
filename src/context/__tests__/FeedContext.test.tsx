import React from 'react';
import { renderHook, act } from '@testing-library/react-native';
import { FeedProvider, useFeed } from '../FeedContext';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FeedProvider>{children}</FeedProvider>
);

test('likedPosts starts empty', () => {
  const { result } = renderHook(() => useFeed(), { wrapper });
  expect(result.current.likedPosts.size).toBe(0);
});

test('toggleLike adds a postId', () => {
  const { result } = renderHook(() => useFeed(), { wrapper });
  act(() => result.current.toggleLike('post-1'));
  expect(result.current.likedPosts.has('post-1')).toBe(true);
});

test('toggleLike removes a postId when already liked', () => {
  const { result } = renderHook(() => useFeed(), { wrapper });
  act(() => result.current.toggleLike('post-1'));
  act(() => result.current.toggleLike('post-1'));
  expect(result.current.likedPosts.has('post-1')).toBe(false);
});
