import React from 'react'

function TitreProfile({ icone, titre }) {
    return (
        <div>
            <div className="flex  items-center gap-x-1">
                {icone}
                <p className="font-bold ">{titre}</p>
            </div>
        </div>
    )
}

export default TitreProfile