// src/components/Emoji.jsx
import React, { useContext } from "react";
import { useEmoji } from "../context/EmojiContext"; 
import { useTheme } from "../context/ThemeContext"; 
import '../App.css'; 

function Emoji() {
    const { theme, updateTheme } = useTheme(); // Get theme and updateTheme from ThemeContext
    const { isHappy, toggleMood } = useEmoji(); // Use custom hook to access context

    const handleChangeMood = () => {
        toggleMood();
        updateTheme(!isHappy); // Update theme based on the new mood
    };

    return (
        <div className="container" style={{ background: theme.background }}>
            <div className="emoji-content">
                <h2>How you going mate?</h2>
                <span style={{ fontSize: '4rem' }}>{isHappy ? "😊" : "😢"}</span>
                <br />
                <button 
                    onClick={handleChangeMood} 
                    className="emoji-button"
                >
                    Change Mood
                </button>
            </div>
        </div>
    );
}

export default Emoji;