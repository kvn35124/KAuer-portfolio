import * as React from 'react';




class Experience extends React.Component<IExperienceProps, IExperienceState> {

    constructor(props: IExperienceProps) {
        super(props);
        this.state = {};
    }


    render() {


        return (
            <main className="container">
                <section className="row">
                    <article className="col">
                        <div className="d-flex justify-content-center">
                            <h1>Where I Have Learned</h1>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Covalence</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">University of Alabama at Birmingham</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="card mt-2 mb-5">
                                    <div className="card-body shadow">
                                        <h2 className="card-title">Covalence</h2>
                                        <h4>Full Time Web Development Certification</h4>
                                        <p>Birmingham, AL (July 2019 - October 2019)</p>
                                        <ul>
                                            <li>Completed Covalence full time software engineering bootcamp in Birmingham, AL.</li>
                                        </ul>
                                        <div className="d-flex justify-content-around">
                                            <div className="card-deck col-8 d-flex justify-content-between">
                                                <div className="card" >
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item bg-dark text-primary">Front-end </li>
                                                        <li className="list-group-item">HTML</li>
                                                        <li className="list-group-item">CSS</li>
                                                        <li className="list-group-item">Bootstrap</li>
                                                        <li className="list-group-item">JavaScript</li>
                                                        <li className="list-group-item">JQuery</li>
                                                        <li className="list-group-item">React</li>
                                                        <li className="list-group-item">Typescript</li>
                                                    </ul>
                                                </div>
                                                <div className="card" >
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item bg-dark text-primary">Back-end </li>
                                                        <li className="list-group-item">Node.JS</li>
                                                        <li className="list-group-item">Express.JS</li>
                                                        <li className="list-group-item">Passport.JS</li>
                                                        <li className="list-group-item">MySQL</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="card m-2">
                                    <div className="card-body shadow">
                                        <h2 className="card-title">University of Alabama at Birmingham</h2>
                                        <h4>Bachelor of Science in Biomedical Science, Master of Science in Biotechnology</h4>
                                        <p>Birmingham, AL (2013 - 2018)</p>
                                        <ul>
                                            <li>I was introduced into working with a team in the Biomedical Science program at UAB where I learned communication is crucial for effective team workflow.</li>
                                            <li>While working on school projects in the Biotechnology program, I learned how crucial it was for the team to meet all deadlines.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        )
    }
}


interface IExperienceProps { }

interface IExperienceState { }


export default Experience;



