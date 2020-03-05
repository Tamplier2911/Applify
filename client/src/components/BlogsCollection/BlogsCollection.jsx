import "./BlogsCollection.scss";
import React from "react";

// components
import BlogPostView from "../BlogPostView/BlogPostView";

// JS Rendering CSS
import {} from "./BlogsCollectionStyles";

// sample blog view data
const blogs = [
  {
    id: 1000,
    title: "Most Important React Libraries In 2020",
    theme: "JavaScript, React",
    date: new Date("2020-1-12"),
    like: 321,
    image: "https://bit.ly/2PQ72s5",
    liked: true
  },
  {
    id: 1001,
    title: "Why You Should Start Learning Code TODAY",
    theme: "Coding",
    date: new Date("2020-1-24"),
    like: 119,
    image: "https://bit.ly/2VLGiN2",
    liked: false
  },
  {
    id: 1002,
    title: "Which Language To Pick?",
    theme: "Programming",
    date: new Date("2020-2-3"),
    like: 429,
    image: "https://bit.ly/2PRWHM5",
    liked: false
  },
  {
    id: 1003,
    title: "Learn Concepts Of Node.js",
    theme: "Node.js",
    date: new Date("2020-2-11"),
    like: 643,
    image: "https://bit.ly/3atu2ol",
    liked: true
  },
  {
    id: 1004,
    title: "What Is MERN Stack?",
    theme: "React.js, Node.js, Express, MongoDB",
    date: new Date("2020-3-1"),
    like: 306,
    image: "https://bit.ly/2PR1zRz",
    liked: false
  },
  {
    id: 1005,
    title: "Web Development Pros and Cons",
    theme: "Development",
    date: new Date("2020-3-5"),
    like: 306,
    image: "https://bit.ly/2TpFA6m",
    liked: true
  }
];

// say you get 50 objects array from db
// loop over that data create an object with sets
// each sets contains 6 elements 0 - 5 / 6 - 11 / 12 - 17 / 18 - 23 / 24 - 29...
// this is n modulues 6 === 0  /  n modulus 6 === 5 and so on
// create data structure with this knowlage that looks like
// each key represents set, each value array of 6 elements
// {1: [{}, {}, {}, {}, {}, {}], 2: [{}, {}, {}, {}, {}, {}]}
// when clicked chevrons < >
// new set is loaded
// amount of numbers will be represented as Object.keys(structure).map(key => <div>{key}</div>)
// each key will have action that going to load new set related to it
// 1 going to load structure[1] / 2 going to load structure[2] and so on

// THEN CREATE SINGLE BLOG POST OVERVIEW PAGE

const BlogsCollection = () => {
  let count = -1;
  return (
    <div className="blogs-collection">
      <h2 className="blogs-collection__title">Recent blog posts:</h2>
      <div className="blogs-collection__blogs">
        {blogs.reverse().map(blog => {
          const { id } = blog;
          count++;
          return <BlogPostView {...blog} key={id} pos={count} />;
        })}
        <div className="blogs-collection__navigation">
          <div className="blogs-collection__navigation--left">&#x3c;</div>
          <div className="blogs-collection__navigation--1">1</div>
          <div className="blogs-collection__navigation--2">2</div>
          <div className="blogs-collection__navigation--3">3</div>
          <div className="blogs-collection__navigation--newSet">...</div>
          <div className="blogs-collection__navigation--right">&#x3e;</div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCollection;
