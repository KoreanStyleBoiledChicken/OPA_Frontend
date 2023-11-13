import React, { useState } from 'react'
import { Box, Collapse, Divider, List, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RelatedObject } from '../../../models/FileDenyType';

type Props = {
    obj: RelatedObject,
    altMsg: string
}

const RelatedCollaspItem = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <Box onClick={() => setOpen(!open)} sx={{ paddingY: "18px", alignItems: "center" }} display="flex" justifyContent="space-between">
                <Typography>{props.altMsg}</Typography>
                <KeyboardArrowDownIcon sx={{ marginX: "20px" }}></KeyboardArrowDownIcon>
            </Box>
            
            <Collapse in={open} timeout="auto">
                <List sx={{ marginX: "20px", marginBottom : "20px" }}>
                    <Box display="flex">
                        <Typography width="240px">api version</Typography>
                        <Typography>{props.obj.apiVersion}</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography width="240px">kind</Typography>
                        <Typography>{props.obj.kind}</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography width="240px">rules - api groups</Typography>
                        <Box>
                            {props.obj.rules?.map((rule, index) => (
                                rule.apiGroups.map((group) => (
                                    <Typography>{group}</Typography>
                                ))
                            ))}
                        </Box>
                    </Box>

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
                    </Box>}
                </List>
            </Collapse>
            <Divider />
        </Box>
    )
}

export default RelatedCollaspItem