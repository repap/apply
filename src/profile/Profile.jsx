import React from 'react'

// import assets
import './style.css'
import profilePicture from './profile-picture.jpg'

export default props => {
    const {datasets} = props
    
    return (
        <div className="profile container">
            <header>
                Profile
            </header>
            <div className="profile-picture">
                <img src={profilePicture} alt="" />
            </div>
            <div className="profile-datasets">
                {datasets.map(createProfileDataset)}
            </div>
        </div>
    )
}

const createProfileDataset = (dataset, i) => (
    <React.Fragment key={i}>
        <span className="profile-dataset-type">
            <b>{dataset.type}</b>
        </span> 
        <span className="profile-dataset-content">
            {dataset.content}
        </span>
    </React.Fragment>
)