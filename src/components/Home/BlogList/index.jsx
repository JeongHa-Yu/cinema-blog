import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
  // BlogList 함수 컴포넌트는 blogs props를 받아들이고,
  return (
    <div className='blogList-wrap'>
      {/* 각각의 블로그 항목을 포함하는 <div> 요소를 반환 */}
      {blogs.map((blog) => (
        // blogs 배열의 각 항목에 대해 BlogItem 컴포넌트를 반복적으로 호출
        <BlogItem blog={blog} />
        // 전체 블로그 목록을 렌더링하기 위한 레이아웃을 정의하고, 이를 기반으로 각각의 블로그 항목을 표시하는 역할을 함
      ))}
    </div>
  );
};

export default BlogList;
