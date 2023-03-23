import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './flip-transition.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const BlogItem = ({
  blog: {
    createdAt,
    authorName,
    cover,
    id,
  },
}) => {
  const [showFront, setShowFront] = useState(true);

  return (

    <div className='blogItem-wrap'>
      <Link to={`/blog/${id}`}>
        <div className='flippable-card-container'>
          <CSSTransition in={showFront} timeout={300} classNames='flip'>
            <div className='card' onClick={() => setShowFront(v => !v)}>
              <div className='card-back'>
                <img src={cover} alt='back' />
              </div>
              <div className='card-front'>
                <img src={cover} alt='front' />
              </div>
            </div>
          </CSSTransition>
        </div>
      </Link>
      <footer>
        <div className='blogItem-author'>
            <h4>{authorName}</h4>
            <div>
              <p>{createdAt}</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;
