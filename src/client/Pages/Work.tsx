import * as React from 'react';


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
                                <p><span className="badge border border-dark mx-1">View Source Code</span><span className="badge border border-dark mx-1">View Live</span></p>
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