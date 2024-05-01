import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import School from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Work from '@mui/icons-material/Work';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Padding } from '@mui/icons-material';
import TimelineIcon from '@mui/icons-material/Timeline';

export default function CustomizedTimeline() {
    return (
        <div className="h-screen w-screen max-w-7xl m-center pb-20 ">
            <div className='flex flex-row items-center justify-center text-5xl' >
                <TimelineIcon fontSize="large" />
                <p >My Journey</p>
            </div>
            <Timeline position="alternate" className='mt-8'>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined" className="enlarge">
                            <LaptopMacIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Card className='bg-white drop-shadow-2xl'>
                            <CardMedia
                                sx={{
                                    height: 100,
                                    bgcolor: 'gray',
                                }}
                            >
                                <div className='h-full flex flex-col justify-center '>
                                    <h3 className="text-center text-base  md:text-2xl text-gray-100 pt-2"> Freelance</h3>
                                </div>
                            </CardMedia>

                            <CardContent>
                                <h3 className="text-center text-base md:text-2xl text-gray-500">November 2023 - Present</h3>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className="enlarge">
                            <School fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Card className='bg-white drop-shadow-2xl'>
                            <CardMedia
                                sx={{
                                    bgcolor: 'gray',
                                }}

                            >
                                <div className='flex flex-col justify-center p-2'>
                                    <h3 className="text-center text-base md:text-2xl text-gray-100  ">BS Computer Science at University of Caloocan City</h3>
                                </div>
                            </CardMedia>

                            <CardContent>
                                <h3 className="text-center text-base md:text-2xl text-gray-500"> July 2020 - July 2024</h3>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined" className="enlarge">
                            <Work fontSize="large" />
                        </TimelineDot>

                    </TimelineSeparator>
                    <TimelineContent >
                        <Card className='bg-white drop-shadow-2xl'>
                            <CardMedia
                                sx={{
                                    height: 100,
                                    bgcolor: 'gray',
                                }}
                            >
                                <div className='h-full flex flex-col justify-center '>
                                    <h3 className="text-center text-base md:text-2xl text-gray-100 pt-2">   Fullstack Developer Internship at Ingco PH</h3>
                                </div>
                            </CardMedia>

                            <CardContent>
                                <h3 className="text-center text-base md:text-2xl text-gray-500"> June 2023 - August 2023</h3>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>


            </Timeline>

        </div>
    );
}