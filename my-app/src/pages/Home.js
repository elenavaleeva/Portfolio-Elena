import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";



function Home() {
    return (

        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Elena</h2>
                <div className="prompt">
                    <p> A Web Developer with a passion for learning and creating</p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GitHubIcon />
                </div>
            </div>

            <div className="skills">
                <h1> My Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2> Front-End </h2>

                        <span>
                            HTML, CSS, JavaScript, React, Redux, Node.js, Express.js,
                            MySQL, Sequelize, Sequelize
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Back-End </h2>
                        <span>
                            Node.js, Express.js, MySQL, Sequelize, Sequelize,
                            MongoDB
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Languages </h2>
                        <span>
                            Python, JavaScript, SQL, SQL Server, Typescript
                        </span>
                    </li>
                </ol>
            </div>
            /</div>
    );
}

export default Home;