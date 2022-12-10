import React, {useState} from "react";

import PackageContext from './context.js';

const Provider = (props) => {

    const [mission, setMission] = useState({
        mname:"learn react",
        agent: "007",
        accept: "not accepted"
    });
    return (
        <PackageContext.Provider
            value = {{
                data: mission,
                isMissionAccepted: () => {
                    setMission({...mission, accept:"accepted"})
                }
            }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;