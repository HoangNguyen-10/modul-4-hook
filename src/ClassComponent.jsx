import React from "react";
class ClassComponent extends React.Component {

    state = {
        counter: 10,
        data: [],
        isShown: true,
        user: {
            name: 'camnh'
        }
    }

    increment = (number) => {
        const myState = { ...this.state }
        myState.counter = myState.counter + number
        myState.data.push(1)

        this.setState({
            counter: myState.counter,
            data: myState.data
        })
    }

    toggle = () => {
        let { isShown } = { ...this.state }
        if (isShown) {
            isShown = false
        } else if (!isShown) {
            isShown = true
        }

        this.setState({
            isShown
        })
    }


    changeName = () => {
        this.setState({
            user: {
                name: 'nguyen cong'
            }
        })
    }
    render() {
        const { counter, data, isShown, user } = this.state
        return (
            <div>
                {isShown &&
                    <>
                        <p>counter: {counter}</p>
                        <p>data: {data.join(',')}</p>
                        <p>name: {user.name}</p>
                    </>
                }

                <button onClick={() => this.increment(3)}>click</button>
                <button onClick={this.toggle}>toggle</button>
                <button onClick={this.changeName}>change me</button>
            </div>
        )
    }
}
export default ClassComponent