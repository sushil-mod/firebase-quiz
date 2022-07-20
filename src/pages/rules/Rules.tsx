import { Button, Card, CardActions, CardContent, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCategories } from '../../features/category/categorySlice';
import { getQuizQuestion, updateNextActiveQue, updateSelectedAnswer } from '../../features/quiz/quizSlice';
import './Rules.css';

 function Rules() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 
    const { quizId } = useParams();   
    const [ selectedOption , setSelectedOption ] = useState<string | "">("")

    const { activeQuestion , categoryName , score , quizQuestions , selectedAnswer  } = useAppSelector( (state)=>state.quiz );

    const { categories } = useAppSelector((state) => state.categoryList) ;

  

    const id : string = quizId || "";
    const cat = categories.find((category)=>category.id === id ) ;
    
    
    
   
    let currentQue = quizQuestions[activeQuestion]
    const isOptionSelected = (option:string) =>{
      if(selectedOption === option) return true
      return false 
    }
    const selectedOptionHandler = (option:string) =>{
      setSelectedOption(option);
      dispatch(updateSelectedAnswer(option));
    }

    const nextQueHandler = () =>{
      if(selectedOption === ""){ 
        dispatch(updateSelectedAnswer(selectedOption));
      }
      dispatch(updateNextActiveQue());
      setSelectedOption("");
    }
   
    useEffect(()=>{
      dispatch(getCategories());
  },[dispatch])

  return <> 
    { activeQuestion < 0   ?  (<> <Typography variant='h4' className='rule-container-title' > Rules For { cat ? cat?.categoryName : "Games" } </Typography>
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
          <Button className='rule-btn' variant='contained' size='medium' color='primary' onClick={()=>dispatch(getQuizQuestion(id))} > Start </Button>
        </CardActions>
      </Card> </>)
    : <><Typography className='quiz-title' variant='h4'>{categoryName}</Typography>
      <Box className='quiz-container'>
        <Box className='quiz-paper-container'>
          <Paper className='quiz-paper'>Questions {activeQuestion+1}/5</Paper>
          <Paper className='quiz-paper'>Points 10 </Paper>
        </Box>
        <Box className='quiz-question-container'>
          <Paper className='quiz-question'>{currentQue.question}</Paper>
        </Box>
        <Card className='quiz-card' elevation={3}>
          <img className='quiz-card-img' src={currentQue.image} alt={`${currentQue.answer}+banner`}/>
        </Card>
        <Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs:1,sm:2,md:3 }}>
            {currentQue.options.map((option,index)=> <Grid item xs={6} onClick={()=>{selectedOptionHandler(option)}} key={index}>
              <Paper className='quiz-option' >
                <ListItemButton selected={ isOptionSelected(option) }> <ListItemText primary={option} /> </ListItemButton>
              </Paper>
            </Grid>)}
          </Grid>
        </Box>
        {activeQuestion<4 ?<Button className='quiz-next-btn' variant='contained' sx={{ml:'auto'}} onClick={nextQueHandler} > Next </Button>
          :
        <Button className='quiz-next-btn' variant='contained' sx={{ml:'auto'}} color='success' onClick={()=>navigate('/result',{ replace: true })} > Submit </Button>
        }
        
      </Box>
      </>
    }</>
}

export default Rules;


