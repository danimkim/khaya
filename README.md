# Khaya

An internal employee communication app for staying connected with company news, culture, and people.

## Overview

Khaya is a mobile app where employees can follow company announcements, leadership messages, culture highlights, and recognition posts — all in one scrollable feed.

## Features

- **Feed** — browse and filter posts by category (announcement, culture, leadership, recognition)
- **Post detail** — read full posts, view comments, and like content
- **Skeleton loading** — smooth loading states throughout the app
- **Tab navigation** — Home, Events, and Profile sections

## Tech Stack

- [Expo](https://expo.dev) ~54.0.0
- React Native 0.81.5 / React 19
- TypeScript
- React Navigation (Bottom Tabs + Native Stack)
- expo-linear-gradient
- Jest + Testing Library

## Project Structure

```
src/
├── components/     # PostCard, CommentItem, LikeButton, CategoryBadge, SkeletonCard
├── context/        # FeedContext (likes state)
├── data/           # Post data
├── navigation/     # RootNavigator
├── screens/        # FeedScreen, PostDetailScreen, PlaceholderScreen
└── theme/          # Colors and design tokens
```

## Demo
https://khaya-pi.vercel.app/

## Getting Started

```bash
npm install
npm start        # Start Expo dev server
npm run ios      # iOS simulator
npm run android  # Android emulator
npm test         # Run unit tests
```
