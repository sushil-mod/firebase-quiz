
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CategoryCard from '../../components/card/CategoryCard';
import { getCategories } from '../../features/category/categorySlice';
import { CategoryType } from '../../features/category/categorySlice.type';
import './Home.css';


function Home() {

    const { categories } = useAppSelector((state) => state.categoryList)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getCategories());
    },[dispatch])

    console.log("categories",categories);

  return (
    <Box className="home-container">
      <Typography variant='h4' className='home-title'>Quiz Categories</Typography>
      <Box className='category-container'>{ categories.map((category)=><CategoryCard {...category } key={category.id} /> )   } </Box>
    </Box>
  )
}

export default Home;
