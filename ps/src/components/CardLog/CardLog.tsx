import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineDotProps} from "@mui/lab/TimelineDot";

interface ITimelineItem extends TimelineDotProps {
    description: string;
    isFirstItem: boolean;
}

export default function BasicTimeline() {

    /**
     * Установка timeLineItem по данным
     */
     const setTimeLineItem = ({color, description, isFirstItem}: ITimelineItem) => {
        return (
            <TimelineItem>
                <TimelineSeparator>
                    {isFirstItem ? null : <TimelineConnector/>}
                    <TimelineDot color={color}/>
                </TimelineSeparator>
                <TimelineContent>{description}</TimelineContent>
            </TimelineItem>
        )
    }

    /**
     * Возвращаем коллекцию timeLineItem по данным с БЛ
     */
    const setAllTimeLineItem = (someTimeCollection: ITimelineItem[]) => {
        return(
            someTimeCollection.map((TimeLineItem) => {
               setTimeLineItem(TimeLineItem);
            })
        )
    }


    return (
        <div className="TimeLineContainer">
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                { setTimeLineItem({color: 'grey', description: 'Sleep', isFirstItem: true}) }
            </Timeline>
        </div>
    );
}