import React from 'react'
import {Link} from 'react-router-dom'
import harvestTable from '../../images/harvestTable.png'
import keepBox from '../../images/keepbox.jpg'
import flag from '../../images/flag.jpg'
import garden from '../../images/garden.png'
import './Work.css'

export default function Work(){
    return(
        <div id="work" className="work">

                <div className="item">

                    <img src={harvestTable} alt="lemon in blue circle"/>

                    <div className="links">
                        <a id="harvest" href="https://harvest-table.vercel.app/" rel='noreferrer' target="_blank"><h4>Harvest Table</h4></a>
                        <h4 className="slash"> | </h4>
                        <a href="https://github.com/LaraDei/harvest-table" rel='noreferrer' target="_blank"><h4>GitHub Repo</h4></a>
                    </div>
                    <div className='skills'>
                        <ul>
                            <li>JS</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                        <ul>
                            <li>JWT</li>
                            <li>AJAX</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                    <p>Harvest Table is a responsive app designed to help reduce local food waste. 
                        In Los Angeles, it is common to see citrus trees covered with uneaten fruit. 
                        Harvest Table allows users to post their surplus produce to share with neighbors. 
                        It uses Google Maps, Places, and Geocoding as well as AWS. 
                    </p>
                    <hr></hr>
                </div>

                <div className="item">
                    <img src={keepBox} alt="random shapes"/>
                    <div className="links">
                        <a id="keepbox" href="https://keepbox.vercel.app/" rel='noreferrer' target="_blank"><h4>Keepbox</h4></a>
                        <h4 className="slash"> | </h4>
                        <a href="https://github.com/LaraDei/keepbox"  rel='noreferrer' target="_blank"><h4>GitHub Repo</h4></a>
                    </div>
                    <div className='skills'>
                        <ul>
                            <li>JS</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                        <ul>
                            <li>JWT</li>
                            <li>AJAX</li>
                        </ul>
                    </div>
                    <p>Keepbox is a responsive app that helps you keep track of your child's artistic 
                        and creative milestones. After the user creates an account, they can create 
                        albums and upload photos of their children's art. It is a full-stack app 
                        created with React, Node, and SQL. </p>
                    <hr></hr>
                </div>
 


                <div className="item">
                    <   img src={flag} alt="graffiti flag"/>
                    <div className="links">
                        <a id="reps" href="https://laradei.github.io/representatives-app/" rel='noreferrer' target="_blank"><h4>Find Your Representatives</h4></a>
                        <h4 className="slash"> | </h4>
                        <a href="https://github.com/LaraDei/representatives-app" rel='noreferrer' target="_blank"><h4>GitHub Repo</h4></a>
                    </div>
                    <div className='skills'>
                        <ul>
                            <li>JS</li>
                            <li>jQuery</li>
                            <li>HTML</li>
                        </ul>
                        <ul>
                            <li>AJAX</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <p>This app accepts your address and returns your U.S. representatives at the local, state, and federal level. 
                        It uses several endpoints from the Vote Smart API to gather the data as completely as possible.</p>
                    <hr></hr>
                </div>

                <div className="item">
                    <img src={garden} alt="palm leaves"/>
                    <div className="links">
                        <a id="quiz" href="https://laradei.github.io/garden-quiz-app/" rel='noreferrer' target="_blank"><h4>Garden Quiz</h4></a>
                        <h4 className="slash"> | </h4>
                        <a href="https://github.com/LaraDei/garden-quiz-app" rel='noreferrer' target="_blank"><h4>GitHub Repo</h4></a>
                    </div>
                    <div className='skills'>
                        <ul>
                            <li>JS</li>
                            <li>jQuery</li>
                            <li>HTML</li>
                        </ul>
                        <ul>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <p>This quiz app tests your gardening knowledge. I used responsive design and a11y best practices. 
                        The quiz includes a landing page, 5 multiple choice questions, and a results page.</p>
                    <hr></hr>
                </div>

        </div>
    )
}