import React, { Component } from 'react'

export default class LifeCycleChild extends Component {

    componentWillUnmount(){
        console.log("child is unmounting")
    }
  render() {
    return (
      <>
        <h1>LifeCycleChild</h1>
      </>
    )
  }
}
