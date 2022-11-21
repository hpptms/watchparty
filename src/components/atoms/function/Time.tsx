import { Box, useColorModeValue } from "@chakra-ui/react";
import { useTime } from "react-timer-hook";
import { css } from '@emotion/react';

export const Time = () => {
    const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

    const days = () => {

        const d = new Date();

        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let date = d.getDate().toString();
        let dayNum = d.getDay();
        const weekday = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
        let day = weekday[dayNum];

        date = date.length < 2 ? '0' + date : date;

        let today = `${year}.${month}.${date} ${day}`;
        return { 'today': today };

    }

    return (
        <Box css={Digital} bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.600", "white")}>
            <Box>{days()['today']}
                <Box>{`${ampm} ${hours}:${minutes}:${seconds}`}</Box>
            </Box>
        </Box >
    )
}

const Digital = css({
    padding: '5px',
    borderAdius: '5px',
    width: '12%',
    fontSize: "0.6em"
});