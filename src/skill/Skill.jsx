import React from 'react'

// import assets
import './style.css'

export default props => {
    const {datasets} = props
    
    return (
        <div className="skill">
            <header>
                Skills
            </header>
            <div className="skill-datasets">
                {datasets.map(createSkillDataset)}
            </div>
        </div>
    )
}

const createSkillDataset = (dataset, i) => (
    <React.Fragment key={i}>
        <span><b>{dataset.name}</b></span>
        {createRating(dataset.rating, dataset.base)}
    </React.Fragment>
)

const createRating = (rating, base = 10) => {
    const dom = []
    let i = 0

    for(; i < base; i++) {
        dom.push(
            <div key={i} className={`bullet ${isActive(i, rating)}`}>
                &nbsp;
            </div>
        )
    }

    return (
        <span className="rating" style={{gridTemplateColumns: `repeat(${base}, .6em)`}}>
            {dom}
        </span>
    )
}

const isActive = (value, target) => value < target ? 'active' : ''