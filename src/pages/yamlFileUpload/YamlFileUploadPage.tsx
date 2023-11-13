import { Box, Typography } from '@mui/material'
import React from 'react'
import { FileDragDrop } from './FileUploadBox'
import colorConfigs from '../../config/colorConfigs'

type Props = {}

const YamlFileUploadPage = (props: Props) => {
    return (
        <Box sx={{
        }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color:colorConfigs.green.shade5 }}>
                    File Upload
                </Typography>
                <Box padding="15px"></Box>
                <FileDragDrop></FileDragDrop>
        </Box>
    )
}

export default YamlFileUploadPage