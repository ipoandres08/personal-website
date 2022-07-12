import React from 'react';
import ReactDom from 'react-dom/client';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {AboutPage} from './pages/About_Page/about_page';
import {ContactPage} from './pages/Contact_Page/contact_page';
import { BlogPage } from 'pages/Blog_Page/blog_page';
import { BlogPostPage } from 'pages/BlogPost_Page/blog_post_page';

const container = document.getElementById('root')
const root = ReactDom.createRoot(container!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
      <Route path="/blog"  element={<BlogPage/>}></Route>
      <Route path="/blog/:id" element={<BlogPostPage/>}></Route>  
      <Route path='/' element={<Navigate replace to="/about" />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
