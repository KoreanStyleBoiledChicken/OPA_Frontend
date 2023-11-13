import { Box, Typography } from '@mui/material'
import React from 'react'
import sizeConfigs from '../../../config/sizeConfigs'
import colorConfigs from '../../../config/colorConfigs'
import LoopIcon from '@mui/icons-material/Sync';

type Props = {
    status: string,
    count?: number
}

const StatusBox = (props: Props) => {
    return (
        <Box sx={{
            alignContent: "center",
            display: "flex",
            width: sizeConfigs.statusBox,
        }}>
            {props.status === "검사중"
                ? <Box display="flex">
                    <Typography sx={{ color: colorConfigs.status.checking, fontWeight: "bold" }}>
                        검사중
                    </Typography>
                    <LoopIcon
                        sx={{
                            color: colorConfigs.status.checking, 
                            animation: "spin 2s linear infinite",
                            "@keyframes spin": {
                                "0%": {
                                    transform: "rotate(360deg)",
                                },
                                "100%": {
                                    transform: "rotate(0deg)",
                                },
                            },
                        }}
                    />
                </Box>
                : null}
            {props.status === "위험"
                ? <Box>
                    <Typography sx={{ color: colorConfigs.status.danger, fontWeight: "bold" }}>
                        위험 요소 {props.count}
                    </Typography>
                </Box>
                : null}

            {props.status === "경고"
                ? <Box>
                    <Typography sx={{ color: colorConfigs.status.warning, fontWeight: "bold" }}>
                        위험 요소 {props.count}
                    </Typography>
                </Box>
                : null}

            {props.status === "안전"
                ? <Box>
                    <Typography sx={{ color: colorConfigs.status.safety, fontWeight: "bold" }}>
                        안전
                    </Typography>
                </Box>
                : null}

        </Box>
    )
}

export default StatusBox