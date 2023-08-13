import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginScreenProps = {
    useName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

const LogInScreen = ({useName, setUserName}: LoginScreenProps) => {
    // const [useName, setUserName] = useState<string>("");
    const navigate = useNavigate();

    return <div>
        <h1>
            Munking
        </h1>
        <input 
            value={useName} 
            onChange={(e) => {
                console.log("i am changing");
                setUserName(e.target.value);
            }}
            
        />

        <button onClick={(e) => {
            navigate("/game")
        }}>submit</button>
        
    </div>
}

export default LogInScreen;