import { posts } from '../posts';

test('has 8 posts', () => {
  expect(posts).toHaveLength(8);
});

test('exactly one featured post', () => {
  expect(posts.filter(p => p.featured)).toHaveLength(1);
});

test('all 4 categories are represented', () => {
  const cats = new Set(posts.map(p => p.category));
  expect(cats).toContain('announcement');
  expect(cats).toContain('culture');
  expect(cats).toContain('leadership');
  expect(cats).toContain('recognition');
});

test('each post has at least 2 comments', () => {
  posts.forEach(p => expect(p.comments.length).toBeGreaterThanOrEqual(2));
});
