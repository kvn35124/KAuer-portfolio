import * as React from 'react';
// import Events from '../events.png'


class Work extends React.Component<IWorkProps, IWorkState> {

    render() {
        return (
            <>
                <div className="text-center">
                    <h1>My Projects</h1>
                </div>
                <main className="row justify-content-center">
                    <section className="col-10 ml-4 justify-content-center">
                        <div className="card shadow justify-content-center mb-5">
                            <div className="card-body">
                                <h3 className="font-weight-bold text-center">Event Master 3000</h3>
                                <p className="text-center">Event Master 3000 allows users to sign in and create events. Events can be edited or deleted and events are automatically deleted once the event date has passed.</p>
                                <p className="text-center"><span className="badge badge-dark mx-1">React</span><span className="badge badge-dark mx-1">Node.JS</span><span className="badge badge-dark mx-1">Passport.JS</span><span className="badge badge-dark mx-1">MySQL</span><span className="badge badge-dark mx-1">Express.JS</span></p>
                                <p><a href="https://github.com/kvn35124/calendar" className="badge border border-dark mx-1 text-dark">View Source Code</a><a href="https://frozen-earth-52489.herokuapp.com/" className="badge border border-dark mx-1 text-dark">View Live</a></p>
                                <div>
                                    <img className="pic p-3" src="images/register.png" alt="" height="525" width="525" />
                                    <img className="pic p-3" src="images/login.png" alt="" height="525" width="525" />
                                    <img className="pic p-3" src="images/admin.png" alt="" height="525" width="525" />
                                    <img className="pic p-3" src='images/events.png' alt="" height="525" width="525" />
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

interface IWorkProps { }

interface IWorkState { }


export default Work;