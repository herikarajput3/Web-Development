import React, { memo } from 'react'

const Children = ({ myFunc }) => {
    console.log(myFunc());

    return (
        <>
        </>
    )
}

// export default memo(Children);
export default Children;