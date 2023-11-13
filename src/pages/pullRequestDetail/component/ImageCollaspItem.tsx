import React, { useState } from 'react'
import { K8SapiObject } from '../../../models/ImageDenyType'
import { Box, Collapse, Divider, List, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
    obj: K8SapiObject,
    altMsg: string
}

const ImageCollaspItem = (props: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Box onClick={() => setOpen(!open)} sx={{ paddingY: "18px", alignItems: "center" }} display="flex" justifyContent="space-between">
                <Typography>{props.altMsg}</Typography>
                <KeyboardArrowDownIcon sx={{ marginX: "20px" }}></KeyboardArrowDownIcon>
            </Box>

            <Collapse in={open} timeout="auto">
                <List sx={{ marginX: "20px", marginBottom: "20px" }}>
                    <Box display="flex" padding="8px">
                        <Typography width="240px">kind</Typography>
                        <Typography>{props.obj.kind}</Typography>
                    </Box>
                    <Box display="flex" padding="8px">
                        <Typography width="240px">metadata - name</Typography>
                        <Typography>{props.obj.metadata.name}</Typography>
                    </Box>
                    <Box display="flex" padding="8px">
                        <Typography width="240px">container</Typography>
                        <Box>
                        {props.obj.spec.containers.map((container, index) => (
                            <Box>
                                <Box display="flex" paddingRight="8px">
                                    <Typography paddingRight="4px">name: </Typography>
                                    <Typography>{container.name}</Typography>
                                </Box>
                                <Box display="flex" sx={{paddingY : "8px"}}>
                                    <Typography paddingRight="4px">image : </Typography>
                                    <Typography>{container.image}</Typography>
                                </Box>
                            </Box>
                        ))
                        }
                        </Box>
                    </Box>
                </List>
            </Collapse>
            <Divider />
        </Box>
    )
}

export default ImageCollaspItem