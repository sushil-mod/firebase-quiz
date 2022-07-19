import { Button, Card, CardActions, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import './Rules.css';

function Rules() {

    const { quizId } = useParams();   
    const quizState = useAppSelector((state) => state.quiz) ;
    const { categories } = useAppSelector((state) => state.categoryList) ;
    console.log( "categories" ,categories );
    const id : string = quizId || "";
    const cat = categories.find((category)=>category.id === id ) ;
    console.log( cat ) ;

    
    console.log(" quizState", quizState );

  return (<>
      <Typography variant='h4' className='rule-container-title' > Rules For { cat ? cat?.categoryName : "Games" } </Typography>
      <Card className='rule-container' >
        <CardContent>
          <List>
            <ListItem> <ListItemText primary="1. Each correct answer will give you 10 points." />  </ListItem>
          </List>
          <List>
            <ListItem> <ListItemText primary="2. You cannot select multiple answers for one question." />  </ListItem>
          </List>
          <List>
            <ListItem> <ListItemText primary="3. You cannot go back to the previous question." />  </ListItem>
          </List>
        </CardContent>
        <CardActions className='rule-btn-container' >
          <Button className='rule-btn' variant='contained' size='medium' color='primary' > Start </Button>
        </CardActions>
      </Card>
  </>
   
  )
}

export default Rules;
