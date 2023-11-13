import { Box, Typography } from '@mui/material'
import React from 'react'
import { FileDragDrop } from './FileUploadBox'

type Props = {}

const PullRequestFileUploadPage = (props: Props) => {
    return (
        <Box sx={{
            padding: "60px",
            display : "flex"
        }}>
            <Box width="100%">
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    File Upload
                </Typography>
                <Box padding="15px"></Box>
                <FileDragDrop></FileDragDrop>
            </Box>
        </Box>
            

    )
}

export default PullRequestFileUploadPage