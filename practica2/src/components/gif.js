import React from "react";
import "./gif.css"

export default function Gif({ id, title, url }) {
    return (
        <a href={`${id}`} className="gif">
                <h4>{title}</h4>
                <img alt={title} src={url}></img>
        </a>
    )
}