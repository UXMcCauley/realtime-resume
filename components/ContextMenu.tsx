import React, { useState, useEffect } from "react";

interface ContextMenuProps {
    onPlayNext: (item: string) => void;
    onAddToPlaylist: (item: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ onPlayNext, onAddToPlaylist }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    useEffect(() => {
        const handleClick = () => setVisible(false);
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();

        // Get the element under the right-clicked position
        const target = event.target as HTMLElement;
        const clickedText = target.innerText || "Unknown Item";

        setSelectedItem(clickedText);
        setPosition({ x: event.pageX, y: event.pageY });
        setVisible(true);
    };

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenu);
        return () => document.removeEventListener("contextmenu", handleContextMenu);
    }, []);

    return (
        <>
            {visible && selectedItem && (
                <div
                    style={{
                        position: "absolute",
                        top: position.y,
                        left: position.x,
                        background: "#333",
                        color: "#fff",
                        padding: "10px",
                        borderRadius: "5px",
                        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                        zIndex: 1000,
                    }}
                >
                    <p style={{ margin: 0, fontWeight: "bold" }}>{selectedItem}</p>
                    <hr />
                    <button onClick={() => onPlayNext(selectedItem)} style={buttonStyle}>
                        Play Next
                    </button>
                    <button onClick={() => onAddToPlaylist(selectedItem)} style={buttonStyle}>
                        Add to Playlist
                    </button>
                    <button style={buttonStyle} disabled>
                        Share (Coming Soon)
                    </button>
                </div>
            )}
        </>
    );
};

const buttonStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    background: "none",
    border: "none",
    color: "#fff",
    padding: "8px",
    textAlign: "left",
    cursor: "pointer",
};

export default ContextMenu;
