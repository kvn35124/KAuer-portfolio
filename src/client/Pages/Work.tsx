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