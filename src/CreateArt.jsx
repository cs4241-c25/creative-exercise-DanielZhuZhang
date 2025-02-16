import  { useState } from "react";

const CreateArt = () => {
    // State to hold the points of the polygon
    const [points, setPoints] = useState("0,0 90,0 90,10 10,10 10,90 0,90");

    // Function to generate random integer
    const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to add points to the polygon
    const addPoints = () => {
        let newPoints = points;
        for (let i = 0; i < 3; i++) {
            const x = getRandomInteger(0, 500);
            const y = getRandomInteger(0, 500);
            newPoints += ` ${x},${y}`;
        }
        setPoints(newPoints);
    };

    return (
        <div>
            <h2>Create Art</h2>
            <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <polygon
                    id="Spiral"
                    points={points}
                    stroke="blue"
                    strokeWidth="3"
                    fill="lime"
                />
            </svg>
            <button onClick={addPoints}>Start Art Creation</button>
            <svg height="150" width="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="30%">
                        <stop offset="0%" stopColor="yellow" />
                        <stop offset="90%" stopColor="red" />
                    </radialGradient>
                </defs>
                <ellipse
                    cx="100"
                    cy="70"
                    rx="85"
                    ry="55"
                    fill="url(#grad1)"
                />
                <text
                    x="50"
                    y="80"
                    fontSize="30"
                    fontFamily="Arial"
                    fontWeight="bold"
                    fill="black"
                >
                    :)
                </text>
            </svg>
        </div>
    );
};

export default CreateArt;
