import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(){
        super()
        this.state= {
            hasError: false
        }
    }

    static getDerivedStateFromError(){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

  render() {
    console.log(this)
    if(this.state.hasError === true){
        return <h1>server is currently busy, Please Wait</h1>
    }else{
        return this.props.children
    }
  }
}
