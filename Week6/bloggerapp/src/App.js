import React from 'react';
import './App.css';

import CourseDetails from './Components/CourseDetails';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';

function App() {

  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  return (
    <div className="App">

      <div className="container">

        <div className="section">
          {showCourses && <CourseDetails />}
        </div>

        <div className="section">
          {showBooks ? <BookDetails /> : <h2>No Book Details</h2>}
        </div>

        <div className="section">
          {showBlogs && <BlogDetails />}
        </div>

      </div>

    </div>
  );
}

export default App;