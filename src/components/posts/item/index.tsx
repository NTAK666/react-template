import { FC } from 'react';
import { Post } from '@/entities/post.entity';

type PostItemProps = {
  post: Post;
};

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <>
      <div className="flex max-w-[450px] flex-col items-center space-y-10 md:max-w-[1000px]">
        <h1 className="text-center text-2xl font-semibold">{post.title}</h1>
        <p className="text-center">{post.body}</p>
      </div>
    </>
  );
};

export default PostItem;
