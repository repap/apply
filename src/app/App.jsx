import React from 'react'
import Profile from "../profile/Profile";

// import assets
import './app.css'
import Vita from '../vita/Vita';
import Skill from '../skill/Skill';
import Language from '../language/Language';
import Hobby from '../hobby/Hobby';

const profileDatasets = [
    { type: 'Name', content: 'Dennis Penning'},
    { type: 'Mobile', content: '+49 (0) 123 45 67 89'},
    { type: 'Geburtstag', content: '4. Mai 1984'},
    { type: 'E-Mail', content: 'penning.dennis@googlemail.com'},
    { type: 'Wohnort', content: 'Bremen'},
]

const vitaDatasets = [
    {
        year: 2003,
        activities: [
            {name: 'Zivildienst - Behindertenbetreuung', additional: 'Kindergarten Liebfrauen'},
            {name: 'Fachabitur - Grafik Design', additional: 'Wilhem-Wagenfeld-Schule'},
        ]
    },
    {
        year: 2005,
        activities: [
            {name: 'Kundenbetreuung', additional: 'o2 Germany'},
        ]
    },
    {
        highlight: true,
        year: 2008,
        activities: [
            {name: 'Ausbildung - Mediengestalter', additional: 'Konzeption & Visualisierung \n ATO interactive GmbH'},
        ]
    },
    {
        year: 2011,
        activities: [
            {name: 'Festanstellung - Mediengestalter', additional: 'Konzeption & Visualisierung \n ATO interactive GmbH'},
        ]
    },
    {
        highlight: true,
        year: 2015,
        activities: [
            {name: 'Front End Developer', additional: 'Sportradar - Virtual Gaming GmbH'},
        ]
    },
    {
        year: 2019,
        activities: [
            {name: 'Product Owner', additional: 'Sportradar - Virtual Gaming GmbH'},
        ]
    },
]
const skillDatasets = [
    {name: 'Adobe Photoshop', rating: 8},
    {name: 'Adobe Illustrator', rating: 6},
    {name: 'Javascript', rating: 9},
    {name: 'Node Js', rating: 7},
    {name: 'React', rating: 7},
    {name: 'CSS', rating: 8},
    {name: 'PHP', rating: 4},
]
const languageDatasets = []
const hobbyDatasets = [
    {name: 'Kochen', icon: 'cooking'},
    {name: 'Hörbücher', icon: 'audiobook'},
    {name: 'Fußball', icon: 'football'},
    {name: 'Filme', icon: 'movies'},
    {name: 'Garten', icon: 'garden'},
]

export default props => {
    const {} = props

    return (
        <div className="app">
            <Profile datasets={profileDatasets} />
            <Vita datasets={vitaDatasets} />
            <Skill datasets={skillDatasets} />
            <Language datasets={languageDatasets} />
            <Hobby datasets={hobbyDatasets} />
        </div>
    )
}