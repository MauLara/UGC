import { Post } from '../entities/Post';

export interface IPostRepository {
  getAllPosts(): Promise<Post[]>;
  getPostsByCategory(category: string): Promise<Post[]>;
  getPostById(id: string): Promise<Post | null>;
}
