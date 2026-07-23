import React from 'react';

const ListofPlayers = () => {

    const players = [
        { name: "Sachin", score: 95 },
        { name: "Dhoni", score: 80 },
        { name: "Virat", score: 85 },
        { name: "Rohit", score: 65 },
        { name: "Yuvraj", score: 70 },
        { name: "Raina", score: 60 },
        { name: "Jadeja", score: 75 },
        { name: "Ashwin", score: 55 },
        { name: "Bumrah", score: 50 },
        { name: "Shami", score: 45 },
        { name: "Hardik", score: 68 }
    ];

    const lowScorePlayers = players.filter(
        player => player.score < 70
    );

    return (
        <div>

            <h1>List of Players</h1>

            {players.map((player, index) => (
                <div key={index}>
                    <li>
                        Mr. {player.name} <span>{player.score}</span>
                    </li>
                </div>
            ))}

            <h1>List of Players having Scores Less than 70</h1>

            {lowScorePlayers.map((player, index) => (
                <div key={index}>
                    <li>
                        Mr. {player.name} <span>{player.score}</span>
                    </li>
                </div>
            ))}

        </div>
    );
};

export default ListofPlayers;