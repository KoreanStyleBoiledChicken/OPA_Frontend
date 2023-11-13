import { Box, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {}

const TobBar = (props: Props) => {
    return (
        <Box sx={{ height: "80px", paddingX:"40px" }} display="flex" justifyContent="space-between">
            <Typography variant='h5'  paddingY="10px">지리산영계백숙</Typography>
            <Box>
                <IconButton component={Link} to="/pull-requests" sx={{verticalAlign : "middle", padding:"15px"}}>
                    <Typography fontWeight="bold">pull request</Typography>
                </IconButton>

                <IconButton component={Link} to="/yaml/file-uploads" sx={{verticalAlign : "middle", padding:"15px"}}>
                    <Typography fontWeight="bold">file upload</Typography>
                </IconButton>

            </Box>
        </Box>
    )
}

export default TobBar