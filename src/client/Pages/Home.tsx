import * as React from 'react';


class Home extends React.Component<IHomeProps, IHomeState> {

    render() {
        return (
            <>
                <main className="row">
                    <section className="col-6 ml-4">
                        <div>
                            <h1 className="display-4 font-weight-bolder">Kevin Auer</h1>
                            <p className="lead">Software Engineer</p>
                            <p>Birmingham, AL</p>
                            <hr />
                        </div>
                        <div className="card shadow justify-content-center mb-5">
                            <div className="card-body">
                                <h3 className="font-weight-bold">About me...</h3>
                                <p className="card-text">
                                    Hi, my name is Kevin and I am a software engineer with a background and education in biotechnology.
                                </p>
                                <p className="card-text">
                                    I have a passion for coming up with innovative solutions to particularly hard problems. This passion led me to explore research opportunities.
                                    After working in research, I decided to pursue an exciting and challenging career in software development where timetables for projects are much smaller
                                    which allows me to solve problems at a quicker pace.
                                    I am currently a recent grad of Covalence and working as a paramedic while I continue to build fun and exciting projects that allows
                                    me to expand my knowledge of the current tech that I know.
                                </p>
                                <p className="card-text">
                                    I thrive in fast paced environments, surrounded by people with similar interests.
                                    I get excited about helping others learn how to code, and see them get excited about things they are able to build. I love to be challenged every day whether it
                                    be a new algorithm challenge or designing and developing an application with technology I've never used before.
                                </p>
                                <p className="card-text">
                                    Tech I am currently using includes:
                                </p>
                                <p className="card-text">-HTML/CSS</p>
                                <p className="card-text">-JavaScript</p>
                                <p className="card-text">-Bootstrap</p>
                                <p className="card-text">-JQuery</p>
                                <p className="card-text">-ReactJS</p>
                                <p className="card-text">-NodeJS</p>
                                <p className="card-text">-ExpressJS</p>
                                <p className="card-text">-Typescript</p>
                                <p className="card-text">-MySQL</p>
                                <p className="card-text">-PassportJS</p>
                                <p className="card-text">-React Native</p>
                                <p className="card-text">
                                    In my free time you can find me attending local tech meetups, trying a new restaurant, 
                                    or exploring the outdoors with my blue heeler named Blue.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </>

        )
    }
}

interface IHomeProps { }

interface IHomeState { }


export default Home;