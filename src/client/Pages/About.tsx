import * as React from 'react';


class About extends React.Component<IAboutProps, IAboutState> {

    render() {
        return (
            <div className="jumbotron"></div>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

                )
    }
}

interface IAboutProps { }

interface IAboutState { }


export default About;