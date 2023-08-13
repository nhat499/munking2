import { Box, BoxProps } from "@mui/material";

export type cardProp = {
    id: number,
    cardName: String,
    description: String,
    cardType: string,
}

function Card({cardName, cardType, description}: cardProp) {
    return (
        <Box sx={{
            border:"1px solid black",
            borderRadius:"5px",
            bgcolor:"brown",
            padding: "5px",
            overflow: "hidden",
            ":last-child": {
                overflow:"visible"
            },
            ":hover": {
                overflow:"visible"
            }
        }}>
            <Box sx={[{
                    
                    border:"1px solid black", 
                    bgcolor:"tan",
                    width:"100px",
                    minWidth:"20px",
                    height:"200px", 
                    display:'flex',
                    flexDirection:"column",
                    borderRadius:"10px"
                    
                    },
                ]}>
                    <Box sx={{display:"flex", flexDirection: "row"}}>
                        <p>{cardType}</p>
                        
                        
                    </Box>
                    <p>{cardName}</p>
                
                
                <p>{description}</p>
            </Box>
        </Box>
    )
}

export default Card;