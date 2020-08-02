import React from 'react'

export const Gate = ({status}) => {
    return (
        <div>
            {status==="open"?"Open":"Close"}
        </div>
    )
}
