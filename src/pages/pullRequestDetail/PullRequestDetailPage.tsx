import { Box, Divider, Typography } from '@mui/material'
import { PullRequestType } from '../../models/PullRequestType'
import AvatarBox from '../pullRequest/component/AvatarBox'
import colorConfigs from '../../config/colorConfigs'
import StatusBox from '../pullRequest/component/StatusBox'
import PullRequestDetailListBox from './component/PullRequestDetailListBox'
import { useLocation } from 'react-router-dom'


const PullRequestDetailPage = () => {
    const location = useLocation();
    const state = location.state as { pr: PullRequestType  };

    return (
        <Box sx={{
        }}>
            <Box display="flex" justifyContent="space-between"
                sx={{
                    alignItems: "center",
                    verticalAlign: "bottom"
                }}>
                <Box display="flex" sx={{
                    alignItems: "center",

                }}>
                    <AvatarBox companyName={state.pr.companyName} />
                    <Box sx={{
                        marginX: "40px",
                        padding: "20px",
                    }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>{state.pr.prName}</Typography>
                        <Typography sx={{ fontSize: "14px", color: colorConfigs.font.sub }}>
                            {state.pr.prTimeStamp}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingX: "20px"
                }}>
                    <StatusBox status={state.pr.status} count={state.pr.count}></StatusBox>
                </Box>
            </Box>
            <Divider></Divider>
            {state.pr.status === '검사중' ? null
                : <PullRequestDetailListBox></PullRequestDetailListBox>
            }
        </Box>
    )
}

export default PullRequestDetailPage