import React from 'react'

// import assets
import './style.css'

export default props => {
    const {datasets} = props
    
    return (
        <div className="language">
            <header>
                Sprachen
            </header>
        </div>
    )
}

const createVitaDataset = (dataset, i) => (
    <React.Fragment key={i}>
    </React.Fragment>
)