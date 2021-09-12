import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  // const categories = ['Matrix', 'Dragon ball', 'Dr. House'];
  const [categories, setCategories] = useState(['Matrix']);

  // const handleAdd = () => {
  //   setCategories(['Good Doctor', ...categories]);
  //   // setCategories(cats => [...cats,'Good Doctor']);
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          // categories.map((category) => {
          //   return <GifGrid category={category} />;
          // })
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
