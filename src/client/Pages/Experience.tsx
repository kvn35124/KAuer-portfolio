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
                            <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
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



