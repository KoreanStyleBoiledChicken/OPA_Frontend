import { Box, FormControl, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import pullRequestTestData from './PullRequestTest'
import colorConfigs from '../../config/colorConfigs'
import StatusBox from './component/StatusBox'
import AvatarBox from './component/AvatarBox'
import { PullRequestType } from '../../models/PullRequestType'
import { setAppState } from '../../redux/appslice'
import { useNavigate } from 'react-router-dom'



const PullRequestPage = () => {

    const [company, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    const navigate = useNavigate();

    function handleLinkClick (e : any, prType : PullRequestType ) {
        e.preventDefault();
        setAppState(prType);
        console.log(prType.companyName);
        navigate(`/pull-requests/${prType.id}`,{state: {pr : prType}}
        );
      }

    return (

        <Box sx={{ width: "100%" }}>
            <Box justifyContent="space-between" display="flex">
                <Typography variant="h4" sx={{ fontWeight: "bold", color:colorConfigs.green.shade5 }}>
                    Pull Request
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select
                        value={company}
                        onChange={handleChange}
                        displayEmpty>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {pullRequestTestData.map((item, index) => (
                            <MenuItem value={item.companyName}>{item.companyName}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            {/* 리스트뷰 */}
            <Box sx={{
                marginTop: "20px"
            }}>
                <Paper>
                    <Table
                        aria-labelledby="tableTitle">
                        <TableBody sx={{ width: "100%" }}>
                            {pullRequestTestData.map((item, index) => (
                                <TableRow hover >
                                    <TableCell align='center' sx={{ width: "10%" }}>
                                        <AvatarBox companyName={item.companyName}></AvatarBox>
                                    </TableCell>


                                        <TableCell onClick={(e) => (handleLinkClick(e, item))} sx={{ width: "70%" }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontSize: "17px",
                                                    fontWeight: "bold"
                                                }}>
                                                    {item.prName}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: "14px",
                                                    color: colorConfigs.font.sub
                                                }}>
                                                    {item.prTimeStamp}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    <TableCell align='center' sx={{ width: "20%" }}>
                                        <StatusBox status={item.status} count={item.count} />
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </Box>

    )
}

export default PullRequestPage
