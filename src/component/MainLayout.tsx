import { Box } from "@mui/material";
import TobBar from "./TobBar";
import { ReactNode } from "react";

type Props = {
    children : ReactNode
}

const MainLayout = (props : Props) => {

    return (
        <Box sx={{ width : "100%", minHeight:"100vh"}}>
            <TobBar/>
            <Box  paddingX="40px">
                {props.children}
            </Box>
            
        </Box>
    )
}

export default MainLayout; 