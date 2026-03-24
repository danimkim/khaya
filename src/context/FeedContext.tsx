import React, { createContext, useContext, useState } from 'react';

interface FeedContextType {
  likedPosts: Set<string>;
  toggleLike: (postId: string) => void;
}

const FeedContext = createContext<FeedContextType | undefined>(undefined);

export function FeedProvider({ children }: { children: React.ReactNode }) {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
      }
      return next;
    });
  };

  return (
    <FeedContext.Provider value={{ likedPosts, toggleLike }}>
      {children}
    </FeedContext.Provider>
  );
}

export function useFeed(): FeedContextType {
  const ctx = useContext(FeedContext);
  if (!ctx) throw new Error('useFeed must be used within FeedProvider');
  return ctx;
}
