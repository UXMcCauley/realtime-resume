// src/components/LifePlayer.tsx
import React, { useState, useEffect } from "react";

interface LifePlayerProps {
    queue: string[];
    playlist: string[];
}

const PLAYBACK_SPEEDS = {
    "Slo-Mo": 5000,
    "Memoir": 3000,
    "Brunch": 1000,
};

const LOCAL_STORAGE_KEY = "lifePlayerQueue";
const SPEED_STORAGE_KEY = "lifePlayerSpeed";

const LifePlayer: React.FC<LifePlayerProps> = ({ queue, playlist }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [speed, setSpeed] = useState<number>(PLAYBACK_SPEEDS["Memoir"]);
    const [currentQueue, setCurrentQueue] = useState<string[]>(queue);

    // Load from local storage on mount
    useEffect(() => {
        const savedQueue = localStorage.getItem(LOCAL_STORAGE_KEY);
        const savedSpeed = localStorage.getItem(SPEED_STORAGE_KEY);

        if (savedQueue) {
            setCurrentQueue(JSON.parse(savedQueue));
        }
        if (savedSpeed) {
            setSpeed(Number(savedSpeed));
        }
    }, []);

    // Update local storage when queue changes
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentQueue));
    }, [currentQueue]);

    // Update local storage when speed changes
    useEffect(() => {
        localStorage.setItem(SPEED_STORAGE_KEY, speed.toString());
    }, [speed]);

    // Handle playback logic
    useEffect(() => {
        if (isPlaying && currentQueue.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % currentQueue.length);
            }, speed);

            return () => clearInterval(interval);
        }
    }, [isPlaying, currentQueue, speed]);

    const resetQueue = () => {
        setCurrentQueue([]);
        setCurrentIndex(0);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px" }}>
            <h2>Life Player</h2>

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    textAlign: "center",
                    fontSize: "1.5em",
                }}
            >
                {currentQueue.length > 0 ? currentQueue[currentIndex] : "No items in queue"}
            </div>

            <div style={{ marginTop: "20px" }}>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={resetQueue}>Reset</button>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>Speed: </label>
                {Object.entries(PLAYBACK_SPEEDS).map(([label, value]) => (
                    <button key={label} onClick={() => setSpeed(value)}>
                        {label}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: "20px" }}>
                <h3>Upcoming Queue</h3>
                <ul>
                    {currentQueue.slice(1).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h3>Playlist</h3>
                <ul>
                    {playlist.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LifePlayer;
