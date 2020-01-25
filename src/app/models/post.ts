export interface Post {
  uid: string;
  title: string;
  content: string;
  abstract: string;
  favorites: number;
  likes: number;
  comments: number;
  authorImageSource: string;
  authorName: string;
  date: string;
  imageSource: string;
  tags: any[];
}
