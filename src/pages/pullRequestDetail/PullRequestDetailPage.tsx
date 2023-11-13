import { Box, Divider, Typography } from '@mui/material'
import { PullRequestType } from '../../models/PullRequestType'
import AvatarBox from '../pullRequest/component/AvatarBox'
import colorConfigs from '../../config/colorConfigs'
import StatusBox from '../pullRequest/component/StatusBox'
import { DenyList } from '../../models/DenyType'
import { data } from './PullRequestDetailTestData'
import { RuleEnum } from '../../enums/RuleEnum'
import RelatedCollaspItem from './component/RelatedCollaspItem'

type Props = {
    pr: PullRequestType
}


const PullRequestDetailPage = (props: Props) => {

    const parsedData: DenyList = JSON.parse(data);

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
            <Box sx={{
                padding: "20px"
            }}>
                {
                    parsedData.deny.map((deny, index) => (
                        deny.ruleId === "RBAC-001" ? (
                            <Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>{RuleEnum.RBAC001}</Typography>
                                {deny.alertObject.externalObjects.relatedObjects.map((relateObj, index) => (
                                    <RelatedCollaspItem obj={relateObj} altMsg={deny.alertMessage}></RelatedCollaspItem>
                                ))}
                            </Box>) : null
                    ))
                }
            </Box>
        </Box>
    )
}

export default PullRequestDetailPage