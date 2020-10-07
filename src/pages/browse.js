import React from 'react'
import {useContent} from '../hooks'
import selectionFilter from '../utils/selection-map'
import { BrowserContainer } from '../container/browser';

function Browse() {
    // we need the series and the films
    const { series } = useContent('series');
    const { films } = useContent('films');
    //console.log(films)
    // we need slides
    const slides = selectionFilter({ series, films });
    console.log(slides);
    // pass it to the browse container.
    return (
        <BrowserContainer slides ={slides}/>
    )
}

export default Browse