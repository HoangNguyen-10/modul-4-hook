import React from "react"
class ComponentCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 10,
            data: []
        }
    }

    increment = () => {
        this.setState(prevState => {
            return {
                ...prevState, counter: prevState.counter + 1,
                data: [...this.state.data, 1]
            }

        })
    }
    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <p>data: {this.state.data.join(',')}</p>
                <button onClick={this.increment}>click</button>
            </div>
        )
    }
}
export default ComponentCounter
