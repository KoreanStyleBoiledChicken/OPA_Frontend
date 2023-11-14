import { Box, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import colorConfigs from '../config/colorConfigs'

type Props = {}

const TobBar = (props: Props) => {
    return (
        <Box sx={{ height: "80px", paddingX:"40px", marginBottom:"20px", background:colorConfigs.green.tint5, width: `calc(100% - 80px)`,
        display: "table"  }} display="flex" justifyContent="flex-end">
            <Typography variant='h5'  paddingY="10px" sx={{verticalAlign: "middle", display: "table-cell"}}>지리산영계백숙</Typography>
            <Box sx={{ verticalAlign: "middle", display: "table-cell", textAlign:"end"}}>
                <IconButton component={Link} to="/pull-requests" sx={{padding:"15px"}}>
                    <Typography fontWeight="bold">pull request</Typography>
                </IconButton>
                <IconButton component={Link} to="/yaml/file-uploads" sx={{padding:"15px"}}>
                    <Typography fontWeight="bold">file upload</Typography>
                </IconButton>
            </Box>
        </Box>
    )
}

export default TobBar