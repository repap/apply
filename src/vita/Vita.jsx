import React from 'react'

// import assets
import './style.css'

export default props => {
    const {datasets} = props
    
    return (
        <div className="vita">
            <header>
                Werdegang
            </header>
            <div className="vita-datasets">
                {datasets.map(createVitaDataset)}
            </div>
        </div>
    )
}

const createVitaDataset = (dataset, i) => (
    <React.Fragment key={i}>
        <div className={`placeholder placeholder-${i}`}>&nbsp;</div>
        <div className={`year year-${i} ${isHighlight(dataset.highlight)}`}><b>{dataset.year}</b></div>
        <div className={`activities activities-${i}`}>
            {dataset.activities.map(createActivity)}
        </div>
    </React.Fragment>
)


const createActivity = (activity, i) => (
    <div key={i} className={`activity`}>
        <div><b>{activity.name}</b></div>
        <div className="additional">{activity.additional}</div>
    </div>
)

const isHighlight = value => value ? 'highlight' : ''