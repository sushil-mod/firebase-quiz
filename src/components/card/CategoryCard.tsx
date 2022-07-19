import { Button, Card, CardActions, Typography } from '@mui/material';
import React from 'react'
import './CategoryCard.css';
import {CategoryType} from '../../features/category/categorySlice.type';
import { useNavigate } from 'react-router-dom';

function CategoryCard(Props : CategoryType) {

  const navigate = useNavigate();
  console.log("Props",Props);
  const { categoryName , description ,id ,image  } = Props;


  return (
    <Card className='category-card-container' >
        <img className='category-card-img' src={image.srcURL} alt={image.altText} />
        <div className='text-overlay-container' >
            <div className='text-overlay' >
                <Typography variant='h4' className='category-title'>{ categoryName }</Typography>
                <CardActions className='overlay-btn' >
                <Button onClick={ ()=>navigate(`/quiz/${id}`) }  className='play-btn' variant='contained' size='medium' color="primary"> Play Quiz </Button>
                </CardActions>
            </div>
        </div>
    </Card>
  )
}

export default CategoryCard;
