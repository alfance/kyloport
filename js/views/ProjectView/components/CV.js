import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class Cv extends React.Component {
    getExperience(array) {
        return array.map((each, index) => {
            return (<div key={each.number}>
                <p className={each.sectionClass}>
                    <div className='experience-year'><div className='experience-dot' />{each.year}</div>
                    <b>{each.role}</b><br/> <div className='experience-company'>{each.company}</div>
                    {LayoutHelper.layoutArrayContent(each.description)}</p>
            </div>)
        })
    }
    render() {
        return (
            <div className='project-expriences '>
            <h3>My Journey</h3>
            <div className='project-layout-13'>
                <div className='study-container div-left'>
                    {this.getExperience(this.props.content.study)}
                </div>
                <div className='experience-container div-right'>
                    {this.getExperience(this.props.content.work)}
                </div>
            </div>
        </div>)
    }
}
