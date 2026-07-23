import React from 'react';

const IndianPlayers = () => {

    const IndianTeam = [
        "Sachin1",
        "Dhoni2",
        "Virat3",
        "Rohit4",
        "Yuvraj5",
        "Raina6"
    ];

    const [
        first,
        second,
        third,
        fourth,
        fifth,
        sixth
    ] = IndianTeam;

    const oddPlayers = [first, third, fifth];
    const evenPlayers = [second, fourth, sixth];

    const T20players = [
        "First Player",
        "Second Player",
        "Third Player"
    ];

    const RanjiTrophyPlayers = [
        "Fourth Player",
        "Fifth Player",
        "Sixth Player"
    ];

    const mergedPlayers = [
        ...T20players,
        ...RanjiTrophyPlayers
    ];

    return (
        <div>

            <h1>Odd Players</h1>

            {oddPlayers.map((player, index) => (
                <li key={index}>
                    {player}
                </li>
            ))}

            <h1>Even Players</h1>

            {evenPlayers.map((player, index) => (
                <li key={index}>
                    {player}
                </li>
            ))}

            <h1>List of Indian Players Merged:</h1>

            {mergedPlayers.map((player, index) => (
                <li key={index}>
                    {player}
                </li>
            ))}

        </div>
    );
};

export default IndianPlayers;