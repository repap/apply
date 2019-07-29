import React from 'react'

// import assets
import './style.css'

export default props => {
    const {datasets} = props
    
    return (
        <div className="hobby">
            <header>
                Hobby
            </header>
            <div style={{ gridTemplateColumns: `${datasets.length}, minmax(6em, 10em)`}}>
                {datasets.map(createHobbyDataset)}
            </div>
        </div>
    )
}

const createHobbyDataset = (dataset, i) => (
    <div className="hobby-dataset" key={i}>
        <div className="icon"></div>
        <span>{dataset.name}</span>
    </div>
)