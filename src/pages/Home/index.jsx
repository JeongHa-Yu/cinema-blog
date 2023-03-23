import React, { useState } from 'react';
import Empty from '../../components/common/Empty';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);

  return (
    <div>
      <Header />

      {!blogs.length ? <Empty /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
