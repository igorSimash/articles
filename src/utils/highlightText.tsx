import React, {ReactFragment} from "react";

export function highlightText(text: string, filter: string): ReactFragment {
    try{
        const splitedFilter = filter.split(' ').map(element => {
            return element.toLowerCase();
        });

        const joinedFilter = splitedFilter.join('|');

        const parts = text.split(new RegExp(`(${joinedFilter})`, "gi"));
        return parts.map((part, index) => (
            <React.Fragment key={index}>
                {
                    // part.toLowerCase() === filter.toLowerCase()
                    splitedFilter.includes(part.toLowerCase())
                        ?
                        (<span style={{backgroundColor: "#FFF619"}}>{part}</span>)
                        :
                        (part)
                }
            </React.Fragment>
        ));
    }
    catch (e) {
        return text;
    }


}