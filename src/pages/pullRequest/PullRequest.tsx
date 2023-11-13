import { Avatar, Box, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import pullRequestTestData from './PullRequestTest'
import colorConfigs from '../../config/colorConfigs'
import StatusBox from './component/StatusBox'



const PullRequest = () => {

    function getRandomColor(seed : string) {
        const seedNumber = seed.charCodeAt(0);
      
        const random = (seed : number) => {
          const x = Math.sin(seed) * 10000;
          return x - Math.floor(x);
        };
      
        const r = Math.floor(random(seedNumber) * 256);
        const g = Math.floor(random(seedNumber + 1) * 256);
        const b = Math.floor(random(seedNumber + 2) * 256);
      
        const hexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
      
        return hexColor;
      }

    return (
        <Box sx={{
            margin: "40px",
            padding: "20px",
            display: "flex",
        }}>
            <Box sx={{width : "100%"}}>
                <Typography variant="h4" sx={{fontWeight : "bold"}}>
                    Pull Request
                </Typography>
                {/* 리스트뷰 */}
                <Box sx={{
                    marginTop : "20px"
                }}>
                    <Paper>
                        <Table 
                            aria-labelledby="tableTitle">
                            {pullRequestTestData.map((item, index) => (
                                <TableBody sx = {{ width : "100%"}}>
                                    <TableRow hover>
                                        <TableCell align='center' sx={{ width: "10%" }}>
                                            <Box width="40px" alignContent="center" sx={{justifyContent: "center", paddingLeft: "20px"}}>
                                                <Avatar sx={{ bgcolor: getRandomColor(item.companyName[0]) }}>
                                                    {item.companyName[0]}
                                                </Avatar>
                                                <Typography sx={{fontSize : "14px"}}>{item.companyName}</Typography>
                                                
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ width: "70%" }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontSize : "17px",
                                                    fontWeight : "bold"
                                                }}> 
                                                    {item.prName}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize : "14px",
                                                    color : colorConfigs.font.sub
                                                }}>
                                                    {item.prTimeStamp}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell align='center' sx={{ width: "20%" }}>
                                            <StatusBox status={item.status} count={item.count}/>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            ))}
                        </Table>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}

export default PullRequest
