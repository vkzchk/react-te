import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere delectus molestiae error perspiciatis sint aspernatur rerum provident consectetur deserunt.</p>
      <button className="btn" onClick={() => history.push('/')}>Go to Todo list</button>
    </>
  )
}