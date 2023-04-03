import React from "react";

export default function Gif({id, title, url}) {
    return (
        <div>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url}></img>
        </div>
    )
}