import { useState } from "react";
import Deck from "../component/deck";
import { Box } from "@mui/material";
import { cardProp } from "../component/card";
import Board from "../component/board";
import BattleButton from "../component/battleButton";

type GameScreenProps = {
    name: string
}

const cards:cardProp[] = [
    {id:1, cardName: "dinosaur", description: "something1", cardType: "type1"},
    {id:2, cardName: "dinosaur1", description: "something1", cardType: "type2"},
    {id:3, cardName: "dinosau2", description: "something2", cardType: "type3"},
    {id:4, cardName: "dinosaur3", description: "something3", cardType: "type4"},
    {id:5, cardName: "dinosaur3", description: "something3", cardType: "type5"},
    {id:6, cardName: "dinosaur3", description: "something3", cardType: "type6"},
    {id:7, cardName: "dinosaur3", description: "something3", cardType: "type7"},
    {id:8, cardName: "dinosaur3", description: "something3", cardType: "type8"},
]

const roomId="1jasj";


const GameScreen = ({name}:GameScreenProps) => {

    const [count, setCount] = useState<number>(0);

    function handleClick(e: React.MouseEvent) {
        if (count > 10) {
            setCount(0);
        } else {
            setCount(count+1);
            console.log("i am click", e);
        }
        
    }



    return (
        <Box sx={{
                display:"flex", 
                flexDirection: "column", 
                alignItems:"center",
                justifyContent: "space-around",
                height: "100vh"
            }}>
            <h1>RoomId: {roomId}</h1>
            <BattleButton/>
            <Board />
            <Deck cardArray={cards}/>
        </Box>
    )
}



export default GameScreen;