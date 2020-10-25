import React from "react";
import {useParams} from "react-router-dom"

export function TablePage(){
    const tableNumberFromUrl = useParams();
    return <div>
        Welkom bij tafel {tableNumberFromUrl}!!
    </div>
}