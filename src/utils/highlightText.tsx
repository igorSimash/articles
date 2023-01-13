import React, {ReactFragment} from "react";

export function highlightText(text: string, filter: string): ReactFragment {
    const parts = text.split(new RegExp(`(${filter})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {
                part.toLowerCase() === filter.toLowerCase()
                ?
                (<span style={{backgroundColor: "#FFF619"}}>{part}</span>)
                :
                (part)
            }
        </React.Fragment>
    ));
}