import { Box } from "@mui/material"



const levels = Array.from(Array(10).keys());

const Board = ({}) => {
    
    return <Box sx={{
        display:"flex",
        flexDirection:"row",
        gap:"10px"
    }}>
        {levels.map((level, index) => (
            <LevelContainer key={index} level={index}/>
        ))}
    </Box>
}


type LevelContainerProp = {
    level: number
}

const LevelContainer = ({level}:LevelContainerProp) => {
    return <Box sx={{
            padding:"5px",
            border:"1px solid black",
            
        }}>
        <Box sx={{
                border:"1px solid black", 
                width:"100px",
                height:"100px"
            }}>
            <p>{level}</p>
        </Box>
    </Box>
}

export default Board;