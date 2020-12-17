import React from "react";
import { Button } from "reactstrap";
import "./Meme.css";

const Meme = ({id, imageUrl, topText, bottomText, remove}) => {
    const handleDelete = () => {
        console.log("deleting this meme!")
        remove(id)
    }
    return (
        <div className="Meme">
            <div className="meme">
                <img src={imageUrl} alt="meme"></img>
                <p className="top">{topText}</p>
                <p className="bottom">{bottomText}</p>
            </div>
            <div>
                <Button size="sm"onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    )
};

export default Meme;