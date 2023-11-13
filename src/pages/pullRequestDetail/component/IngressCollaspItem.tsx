import React, { useState } from 'react'
import { K8SapiObject } from '../../../models/IngressDenyType'
import { Box, Collapse, Divider, List, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
    obj: K8SapiObject,
    altMsg: string
}

const IngressCollaspItem = (props: Props) => {

    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Box onClick={() => setOpen(!open)} sx={{ paddingY: "18px", alignItems: "center" }} display="flex" justifyContent="space-between">
                <Typography>{props.altMsg}</Typography>
                <KeyboardArrowDownIcon sx={{ marginX: "20px" }}></KeyboardArrowDownIcon>
            </Box>

            <Collapse in={open} timeout="auto">
                <List sx={{ marginX: "20px", marginBottom: "20px" }}>
                    <Box display="flex">
                        <Typography width="240px">kind</Typography>
                        <Typography>{props.obj.kind}</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography width="240px">metadata - name</Typography>
                        <Typography>{props.obj.metadata.name}</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography width="240px">metadata - namespace</Typography>
                        <Typography>{props.obj.metadata.namespace}</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography width="240px">spec</Typography>
                        {props.obj.spec.rules.map((rule, index) => (
                                rule.http.paths.map((path) => (
                                    <Typography>{`${rule.host}${path.path}:${path.backend.servicePort}`}</Typography>
                                ))
                            ))
                        }
                    </Box>


              
{/* 
                    {props.obj.roleRef &&
                        (<Box display="flex">
                            <Typography width="240px">rules - role ref</Typography>
                            <Box>
                                {`${props.obj.roleRef?.apiGroup} `}
                                {`${props.obj.roleRef?.kind} `}
                                {`${props.obj.roleRef?.name} `}
                            </Box>
                        </Box>)
                    }

                    {props.obj.subjects &&
                        <Box display="flex">
                            <Typography width="240px">rules - subjects</Typography>
                            {props.obj.subjects?.map((sbj, index) => (
                                <Box>
                                    {`${sbj.apiGroup} `}
                                    {`${sbj.kind} `}
                                    {`${sbj.name} `}
                                    {`${sbj.namespace} `}
                                </Box>

                            ))}
                        </Box>} */}
                </List>
            </Collapse>
            <Divider />
        </Box>

    )
}

export default IngressCollaspItem