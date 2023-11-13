import { Box, Divider, Typography } from '@mui/material'
import { PullRequestType } from '../../models/PullRequestType'
import AvatarBox from '../pullRequest/component/AvatarBox'
import colorConfigs from '../../config/colorConfigs'
import StatusBox from '../pullRequest/component/StatusBox'
import PullRequestDetailListBox from './component/PullRequestDetailListBox'

type Props = {
    pr: PullRequestType
}
const PullRequestDetailPage = (props: Props) => {
    return (
        <Box sx={{
            margin: "40px",
            padding: "20px",
        }}>
            <Box display="flex" justifyContent="space-between"
                sx={{
                    alignItems: "center",
                    width: "100%",
                    verticalAlign: "bottom"
                }}>
                <Box display="flex" sx={{
                    alignItems: "center",
                    width: "70%",
                }}>
                    <AvatarBox companyName={props.pr.companyName} />
                    <Box sx={{
                        marginX: "40px",
                        padding: "20px",
                        width: "30%",
                    }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>{props.pr.prName}</Typography>
                        <Typography sx={{ fontSize: "14px", color: colorConfigs.font.sub }}>
                            {props.pr.prTimeStamp}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingX: "20px"
                }}>
                    <StatusBox status={props.pr.status} count={props.pr.count}></StatusBox>
                </Box>
            </Box>
            <Divider></Divider>
            <PullRequestDetailListBox></PullRequestDetailListBox>
            
        </Box>
    )
}

export default PullRequestDetailPage