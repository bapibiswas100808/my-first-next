import React from "react";

const getPostDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
const postDetailPage = async ({ params }) => {
  const id = params.id;
  const postDetail = await getPostDetails(id);
  return (
    <div>
      <h2>post details of {id}</h2>
      <h2>{postDetail?.title}</h2>
      <p>{postDetail?.body}</p>
    </div>
  );
};

export default postDetailPage;
