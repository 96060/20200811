import React , {Component} from 'react'

class Time extends Component {
    constructor(props) {
        super(props)
        this.state={
            date: new Date()
        }
    }

    toLocal =()=>{
        this.setState({
            date: "현재"
        })
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>{this.state.date.toLocaleDateString()}</h2>
                <button onClick={this.toLocal}>로컬시간</button>
            </div>
        )
    }
}

export default Time;