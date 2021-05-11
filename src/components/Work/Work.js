import React from 'react'
import harvestTable from '../../images/harvestTable.png'
import keepBox from '../../images/keepbox.jpg'
import flag from '../../images/flag.jpg'
import garden from '../../images/garden.png'
import workStore from './WorkStore'
import './Work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from'@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons"

export default function Work(){
    return(
        <div id="work" className="work">
                    <h3>Portfolio</h3>
                    <hr className="title"></hr>
            <div className="work wrapper">
            {workStore.map((item, index) => {
                return(
                    <div className="item" key={index}>
                            <div className="pic">
                                    <img src={Object.values(item.img)} alt="logo"/>
                            </div>
                            <div className="text">
                                <h2 className="work-title">{item.name}</h2>
                                <p className="work-summary">{item.summary}
                                </p>
                                <div className='skills'>
                                    <ul>
                                        {item.skills.map((skill, index)=>{
                                            return(
                                                <li key={item + skill + index}>{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="links">
                                        <a id={item.name} href={item.url} rel='noreferrer' target="_blank"><h4><FontAwesomeIcon icon={faGlobeAmericas}/> Visit Website</h4></a>
                                        <a href={item.github} rel='noreferrer' target="_blank"><h4><FontAwesomeIcon icon={faGithub}/> Repo</h4></a>
                                </div>
                            </div>
                    </div>        
                )
            })}
            </div>
        </div>
    )
}