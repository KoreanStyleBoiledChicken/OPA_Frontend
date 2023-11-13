import { Box, Divider, Typography } from '@mui/material'
import { PullRequestType } from '../../models/PullRequestType'
import AvatarBox from '../pullRequest/component/AvatarBox'
import colorConfigs from '../../config/colorConfigs'
import StatusBox from '../pullRequest/component/StatusBox'
import { data2, data3, data4 } from './PullRequestDetailTestData'
import { RuleEnum } from '../../enums/RuleEnum'
import { FileDenyList } from '../../models/FileDenyType'
import RelatedCollaspItem from './component/FileRelatedCollaspItem'
import { IngressDenyList } from '../../models/IngressDenyType'
import IngressCollaspItem from './component/IngressCollaspItem'
import { ImageDenyList } from '../../models/ImageDenyType'
import ImageCollaspItem from './component/ImageCollaspItem'

type Props = {
    pr: PullRequestType
}


const PullRequestDetailPage = (props: Props) => {


    const parsedData2: FileDenyList = JSON.parse(data2);
    const parsedData3: IngressDenyList = JSON.parse(data3);
    const parsedData4: ImageDenyList = JSON.parse(data4);

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
                <Box padding="10px"></Box>
                {
                    parsedData2.deny.map((deny, index) => (
                        deny.ruleId === "RBAC-002" ? (
                            <Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{RuleEnum.RBAC002}</Typography>
                                {deny.alertObject.externalObjects.relatedObjects.map((relateObj, index) => (
                                    <RelatedCollaspItem obj={relateObj} altMsg={deny.alertMessage}></RelatedCollaspItem>
                                ))}
                            </Box>) : null
                    ))
                }

                <Box padding="40px"></Box>
                {
                    parsedData3.deny.map((deny, index) => (
                        deny.ruleId === "RBAC-003" ? (
                            <Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{RuleEnum.RBAC003}</Typography>
                                {deny.alertObject.k8SApiObjects.map((obj, index) => (
                                    <IngressCollaspItem obj={obj} altMsg={deny.alertMessage}></IngressCollaspItem>
                                ))}
                            </Box>) : null
                    ))
                }

                <Box padding="40px"></Box>
                {
                    parsedData4.deny.map((deny, index) => (
                        deny.ruleId === "RBAC-004" ? (
                            <Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{RuleEnum.RBAC004}</Typography>
                                {deny.alertObject.k8SApiObjects.map((obj, index) => (
                                    <ImageCollaspItem obj={obj} altMsg={deny.alertMessage}></ImageCollaspItem>
                                ))}
                            </Box>) : null
                    ))
                }
            </Box>
        </Box>
    )
}

export default PullRequestDetailPage