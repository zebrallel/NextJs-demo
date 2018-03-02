import './Person.scss'
import React from 'react'

class Person extends React.Component {
    state = {
        name: 'xuxuejian'
    }
    buttonClickHandler = () => {
        this.setState({
            name: 'callie'
        })
    }
    render() {
        return (
            <div className="person">
                <p>hello {this.state.name}</p>
                <button onClick={this.buttonClickHandler}>Click Me</button>
            </div>
        )
    }
}

export default Person
