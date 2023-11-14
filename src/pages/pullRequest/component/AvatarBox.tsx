import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

type Props = {
    companyName : string
}

const AvatarBox = (props: Props) => {

    function getRandomColor(seed: string) {
        const seedNumber = seed.charCodeAt(0);
        const random = (seed: number) => {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };
        const r = Math.floor(random(seedNumber) * 256);
        const g = Math.floor(random(seedNumber + 1) * 256);
        const b = Math.floor(random(seedNumber + 2) * 256);
        const hexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
        return hexColor;
    }

    return (
        <Box width="40px" alignContent="center" sx={{ justifyContent: "center", paddingLeft: "20px" }}>
            <Avatar sx={{ bgcolor: getRandomColor(props.companyName[0]) }}>
                {props.companyName[0]}
            </Avatar>
            <Box padding="1px"></Box>
            <Typography sx={{ fontSize: "14px",  }}>{props.companyName}</Typography>
        </Box>
    )
}

export default AvatarBox