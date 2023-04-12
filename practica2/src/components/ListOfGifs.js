import React, { useState, useEffect } from 'react';
import Gif from "./gif";
import getGifs from "../services/getGifs"

export default function ListOfGifs({ params }) {

    const {keyword} = params

    const [gifs, setGif] = useState([])

    useEffect(function () {
        getGifs({ keyword }).then(gifs => setGif(gifs))
    }, [keyword])

    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}