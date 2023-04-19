import React, { FC } from 'react';
import { usePosts } from '@/services/post.service';
import LoadingComponent from '@/components/loading';
import PostItem from '@/components/posts/item';

type FetchPageProps = {};

const FetchPage: FC<FetchPageProps> = ({}) => {
  const { data, isFetching, refetch } = usePosts();

  return (
    <>
      <button
        onClick={() => void refetch()}
        disabled={isFetching}
        className="rounded bg-red-500 px-4 py-2 font-semibold text-white"
      >
        Refetch
      </button>
      {isFetching ? (
        <LoadingComponent />
      ) : (
        <>
          {data?.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </>
      )}
    </>
  );
};

export default FetchPage;
