import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
const posts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();
  // if (data) {
  //   redirect(`/Post/${data[0].id}`);
  // }
  return data;
};
const postPage = async () => {
  const data = await posts();
  console.log(data);
  return (
    <div>
      <h2>all posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {data.map((d, idx) => (
          <div className="border-2" key={idx}>
            <h2>{d.title}</h2>
            <p>{d.body}</p>
            <button className="btn bg-yellow-400 p-2">
              <Link href={`/Post/${d.id}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default postPage;
