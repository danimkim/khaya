import { filterPosts } from '../FeedScreen';
import { Post } from '../../data/posts';

const mockPosts: Post[] = [
  { id: '1', category: 'announcement', title: '', body: '', author: { name: '', role: '' }, timestamp: '', likes: 0, comments: [], featured: true },
  { id: '2', category: 'announcement', title: '', body: '', author: { name: '', role: '' }, timestamp: '', likes: 0, comments: [] },
  { id: '3', category: 'culture',      title: '', body: '', author: { name: '', role: '' }, timestamp: '', likes: 0, comments: [] },
];

test('all filter returns all posts', () => {
  expect(filterPosts(mockPosts, 'all')).toHaveLength(3);
});

test('category filter includes matching posts', () => {
  const result = filterPosts(mockPosts, 'culture');
  expect(result.map(p => p.id)).toContain('3');
});

test('category filter always includes featured posts', () => {
  const result = filterPosts(mockPosts, 'culture');
  expect(result.map(p => p.id)).toContain('1');
});

test('category filter excludes non-matching non-featured posts', () => {
  const result = filterPosts(mockPosts, 'culture');
  expect(result.map(p => p.id)).not.toContain('2');
});
