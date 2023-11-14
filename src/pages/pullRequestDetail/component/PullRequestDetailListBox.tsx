import { Box, Typography } from '@mui/material'
import React from 'react'
import { FileDenyList } from '../../../models/FileDenyType';
import { IngressDenyList } from '../../../models/IngressDenyType';
import { ImageDenyList } from '../../../models/ImageDenyType';
import RelatedCollaspItem from './FileRelatedCollaspItem';
import { RuleEnum } from '../../../enums/RuleEnum';
import IngressCollaspItem from './IngressCollaspItem';
import ImageCollaspItem from './ImageCollaspItem';
import { data1, data2, data3, data4 } from '../PullRequestDetailTestData';

type Props = {}

const PullRequestDetailListBox = (props: Props) => {

    const parsedData1: FileDenyList = JSON.parse(data1);
    const parsedData2: FileDenyList = JSON.parse(data2);
    const parsedData3: IngressDenyList = JSON.parse(data3);
    const parsedData4: ImageDenyList = JSON.parse(data4);
    return (
        <Box sx={{
            padding: "20px"
        }}>
            <Box padding="10px"></Box>
            {
                parsedData1.deny.map((deny, index) => (
                    deny.ruleId === "RBAC-001" ? (
                        <Box>
                            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{RuleEnum.RBAC001}</Typography>
                            {deny.alertObject.externalObjects.relatedObjects.map((relateObj, index) => (
                                <RelatedCollaspItem obj={relateObj} altMsg={deny.alertMessage}></RelatedCollaspItem>
                            ))}
                        </Box>) : null
                ))
            }

            <Box padding="40px"></Box>
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
    )
}

export default PullRequestDetailListBox