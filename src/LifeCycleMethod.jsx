import React, {Component} from 'react'
import LifeCycleChild from './LifeCycleChild'
class LifeCycleMethod extends Component {

    //mounting phase
    constructor(){
        super()
        this.state = {
            student: "varun vatsal"
        }

        console.log("constructor is calling")
    }

    static getDerivedStateFromProps(){
        console.log("static getDerivedStateProps is calling")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount is calling")
    }

    changeState = () => {
        this.setState({
            student: "pratik"
        })
    }

    //updation phase
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate calling...")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate is calling...")
        return null
    }

    componentDidUpdate(){
        console.log("componentDidUpdate is calling....")
    }


    render(){
        console.log("render is calling")

        return (
            <>
                <h1>{this.state.student}</h1>
                <button onClick={this.changeState}>CHANGE STATE</button>
                {this.state.student === "varun vatsal" && <LifeCycleChild />}
            </>
        )
    }
}


export default LifeCycleMethod