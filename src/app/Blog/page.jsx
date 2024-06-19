import Link from "next/link";
import React from "react";

const blogPage = () => {
  return (
    <div>
      <h2>This is blog</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {blogs.map((blog, idx) => (
          <div className="border-2 p-4" key={idx}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <button className="btn bg-yellow-500 p-2">
              <Link href={`/Blog/${blog.id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
const blogs = [
  {
    id: "1",
    title: "The Future of AI: What's Next?",
    author: "Jane Doe",
    content:
      "Exploring the advancements and future applications of artificial intelligence.",
  },
  {
    id: "2",
    title: "10 Tips for a Healthy Lifestyle",
    author: "John Smith",
    content: "Simple and effective tips to maintain a healthy lifestyle.",
  },
  {
    id: "3",
    title: "Travel Guide: Top Destinations for 2024",
    author: "Emily Johnson",
    content:
      "A comprehensive guide to the best travel destinations for this year.",
  },
  {
    id: "4",
    title: "The Importance of Mental Health Awareness",
    author: "Michael Brown",
    content:
      "Discussing the significance of mental health and ways to support those in need.",
  },
  {
    id: "5",
    title: "Beginner's Guide to Investing in Stocks",
    author: "Laura Wilson",
    content: "An introductory guide to investing in the stock market.",
  },
  {
    id: "6",
    title: "How to Start a Successful Blog",
    author: "David Miller",
    content:
      "Step-by-step instructions for starting and maintaining a successful blog.",
  },
  {
    id: "7",
    title: "The Best Coding Bootcamps of 2024",
    author: "Sarah Davis",
    content: "A review of the top coding bootcamps available this year.",
  },
  {
    id: "8",
    title: "Delicious Vegan Recipes for Beginners",
    author: "Matthew Martinez",
    content:
      "Easy and tasty vegan recipes for those new to plant-based eating.",
  },
  {
    id: "9",
    title: "Home Workout Routines for Busy Professionals",
    author: "Jessica Garcia",
    content:
      "Effective workout routines that can be done at home with limited time.",
  },
  {
    id: "10",
    title: "The Benefits of Learning a Second Language",
    author: "Daniel Rodriguez",
    content:
      "Exploring the cognitive and social benefits of becoming bilingual.",
  },
  {
    id: "11",
    title: "A Guide to Sustainable Living",
    author: "Karen Lewis",
    content:
      "Tips and practices for living a more sustainable and eco-friendly life.",
  },
  {
    id: "12",
    title: "Understanding Cryptocurrency",
    author: "Chris White",
    content: "An overview of what cryptocurrency is and how it works.",
  },
  {
    id: "13",
    title: "Top 5 Productivity Apps for 2024",
    author: "Patricia Harris",
    content: "A review of the best apps to boost your productivity this year.",
  },
  {
    id: "14",
    title: "How to Create a Minimalist Wardrobe",
    author: "Mark Clark",
    content: "Tips for building a versatile and minimalist wardrobe.",
  },
  {
    id: "15",
    title: "The Power of Mindfulness Meditation",
    author: "Nancy Walker",
    content: "Benefits and techniques for practicing mindfulness meditation.",
  },
  {
    id: "16",
    title: "DIY Home Improvement Projects",
    author: "Steven Hall",
    content: "Easy and affordable DIY projects to enhance your home.",
  },
  {
    id: "17",
    title: "Exploring the Latest in Renewable Energy",
    author: "Megan Allen",
    content: "Innovations and trends in the renewable energy sector.",
  },
  {
    id: "18",
    title: "Parenting Tips for the Modern Family",
    author: "Thomas Young",
    content: "Advice and strategies for raising children in today's world.",
  },
  {
    id: "19",
    title: "The Evolution of Social Media",
    author: "Barbara King",
    content:
      "How social media has changed over the years and its impact on society.",
  },
  {
    id: "20",
    title: "Effective Time Management Strategies",
    author: "Andrew Scott",
    content:
      "Techniques to manage your time more efficiently and increase productivity.",
  },
];

export default blogPage;
