import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Event } from '@mui/icons-material';
import Typography from '@mui/material/Typography';


const TimeLine = ({ timelines = [] }) => {

  const timeline = [
    {
      date: "OCT 2023",
      title: "Intership",
      subtitle: "TechnoHacks",
    },
    {
      date: "2021-2025",
      title: "B.Tech",
      subtitle: "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
    },
    {
      date: "2019-2020",
      title: "12TH",
      subtitle: "St. Antony's Convent Hr. Sec. School"
    },
  ]
  return (
    <div>
      <Timeline position="alternate">
        {
          timeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                color="text.secondary">
                {item.date}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector />

                <TimelineDot> <Event />  </TimelineDot>

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography>{item.subtitle}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </div>
  )
}

export default TimeLine;
