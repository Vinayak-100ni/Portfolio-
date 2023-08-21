import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Event} from '@mui/icons-material';
import Typography from '@mui/material/Typography';


const TimeLine = ({timelines=[]}) => {
  return (
    <div>
      <Timeline position="alternate">
        {
          timelines.map((item,index)=>(
            <TimelineItem key={index}>
              <TimelineOppositeContent
              sx={{m:"auto 0"}}
              color="text.secondary">
                x/x/xx
              </TimelineOppositeContent>

              <TimelineSeparator>
              <TimelineConnector/>

                <TimelineDot> <Event/>  </TimelineDot>

              <TimelineConnector/>
              </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6'>Timeline coming soon...</Typography>
              <Typography>SubTitle coming soon...</Typography>
            </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </div>
  )
}

export default TimeLine;
