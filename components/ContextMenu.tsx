import React, { useState, useRef, useEffect } from "react";

interface ContextMenuProps {
    onPlayNext: (item: string) => void;
    onAddToPlaylist: (item: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ onPlayNext, onAddToPlaylist }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = () => setVisible(false);
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setVisible(true);
        setPosition({ x: event.clientX, y: event.clientY });
        const clickedText = event.currentTarget.innerText;
        setSelectedItem(clickedText);
    };

    const handleAddToPlaylist = async (item: string) => {
        try {
            const response = await fetch("/api/saveItem", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ item }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Item added to playlist!");
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error("Failed to add to playlist", error);
        }
    };

    return (
        <>
            <div onContextMenu={handleContextMenu} style={{ width: "100%", height: "100%" }}>
                {/* This div wraps the entire page to capture right-clicks */}
            </div>

            {visible && selectedItem && (
                <div
                    ref={menuRef}
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
                    <button onClick={() => onPlayNext(selectedItem)} style={buttonStyle}>Play Next</button>
                    <button onClick={() => onAddToPlaylist(selectedItem)} style={buttonStyle}>Add to Playlist</button>
                    <button style={buttonStyle} disabled>Share (Coming Soon)</button>
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
