import React, { createContext, useContext, useEffect, useState } from 'react';
import { Post } from '../core/domain/entities/Post';
import { MockPostRepository } from '../infrastructure/repositories/MockPostRepository';

interface PostsContextType {
  posts: Post[];
  loading: boolean;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  filteredPosts: Post[];
  getPostById: (id: string) => Promise<Post | null>;
}

const postRepository = new MockPostRepository();
const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await postRepository.getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error loading posts', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredPosts = selectedCategory === 'Todos'
    ? posts
    : posts.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const getPostById = async (id: string) => {
    return await postRepository.getPostById(id);
  };

  return (
    <PostsContext.Provider value={{ posts, loading, selectedCategory, setSelectedCategory, filteredPosts, getPostById }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) throw new Error('usePosts must be used within a PostsProvider');
  return context;
};
