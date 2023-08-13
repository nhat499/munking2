import Card, { cardProp } from "./card"
import Box from "@mui/material/Box/Box";



const cards = [
        {id:1, cardName: "dinosaur", description: "something1"},
        {id:2, cardName: "dinosaur1", description: "something1"},
        {id:3, cardName: "dinosau2", description: "something2"},
        {id:4, cardName: "dinosaur3", description: "something3"},
        {id:5, cardName: "dinosaur3", description: "something3"},
        {id:6, cardName: "dinosaur3", description: "something3"},
        {id:7, cardName: "dinosaur3", description: "something3"},
        {id:8, cardName: "dinosaur3", description: "something3"},
    ]



type DeckProp = {
    cardArray: cardProp[]
}

const Deck = ({cardArray}: DeckProp) => {

    const startEndDeg = cardArray.length / 2 * 20;
    const xDeg = startEndDeg * 2 / (cardArray.length);

    return <Box sx={{
        display:"flex",
        flexDirection:"row",
        maxWidth:"700px", 
    }}>
    {cardArray.map((card:any, index) => {
        return <Card 
        key={card.id}
        id={card.id}
        cardType={card.cardType}
        cardName={card.cardName} 
        description={card.description}/>
        
      })}
    </Box>
}

export default Deck;