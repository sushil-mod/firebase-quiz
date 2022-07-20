import { Box, Divider, Grid, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import './Result.css';

function Result() {

    const {  activeQuestion , categoryName , score , quizQuestions , selectedAnswer } = useAppSelector((state)=>state.quiz)

    

    const calTotalScore =()=>{
        var totalScore:number = 0 ;
        for(let i = 0 ; i < 5 ;i++){
            if(selectedAnswer[i] === quizQuestions[i].answer){
                totalScore= 10 + totalScore;
            }   
        }
        return totalScore ;
    }

    

  return (<>
    <Typography className='result-title' variant='h4' > Result For Pokemon Quiz </Typography>
    <Box className='result-paper-container'>
          <Paper className='result-paper' ><Typography variant='h5'> Final Score {calTotalScore()}  </Typography> </Paper>
    </Box>
    <Divider sx={{ margin:"1rem 0" }} />
    {quizQuestions.map(({ question , options ,answer },index)=><Box className='result-container' key={index} >
        
        <Box className='result-paper-question' >
          <Paper className='result-paper-que' ><Typography variant='h6' > Que {index}/{quizQuestions.length}  </Typography> </Paper>
          <Paper className='result-paper-que'> {question}  </Paper>
          {!selectedAnswer[index]?<Paper className='result-paper-que'sx={{ color:"red" }} ><Typography variant='h6'>No Option Selected</Typography> </Paper>:
          <Paper className='result-paper-que'  ><Typography variant='h6'>Question Points { selectedAnswer[index] === answer ? 10 : 0}/10  </Typography> </Paper>}
        </Box>
        
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs:1,sm:2,md:3 }}>
               {options.map((option,indexOption)=> <Grid item xs={6} key={indexOption} >
                <Paper 
                className={`result-option ${ (option === answer) ? "result-success":"" } ${ (selectedAnswer[index] !== answer)&&(selectedAnswer[index] === option )?"result-error":""} `}> 
                <ListItemButton  > 
                    <ListItemText primary={option} />
                </ListItemButton> 
                </Paper> 
                </Grid>) } 
            </Grid>
        </Box>
        <Divider sx={{ margin:"1rem 0"}}  />
    </Box>)}
    <Divider sx={{ margin:"1rem 0" }}  />
    
  </>
  )
}

export default Result;
