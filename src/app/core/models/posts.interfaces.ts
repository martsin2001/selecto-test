export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ViewPost extends Post {
  name: string;
}

export interface Comment {
  id: number;
  name: string;
  body: string;
  email: string;
  postId: number;
}
