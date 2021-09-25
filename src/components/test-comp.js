import React, { Component } from 'react';

class TestComp extends Component {
    constructor(props) {
        super()
        this.state = {
            name : props.name,
            state_color : "blue",
            isShowing : true
        }
        this.displayed = "block"
        this.changeColor = this.changeColor.bind(this)
        this.hideOrShow = this.hideOrShow.bind(this)
        console.log('Constructor :', props.name)
    }

    hideOrShow() {
        if(this.state.isShowing) {
            this.displayed = "none"
            this.setState({isShowing : false})
        } else {
            this.displayed = "block"
            this.setState({isShowing : true})
        }
        console.log('hideOrShow log: ', this.displayed)
    }

    changeColor = () => {
        if(this.state.state_color === "blue"){
            this.setState({
                state_color: "red",
                
            })
        } else {
            this.setState({state_color : "blue"})
        }
    }

    componentDidMount() {
        this.setState({
            name : this.props.name
        }, console.log('test mounted:', this.props.name))
        setInterval(this.changeColor, 1000)
        
    }

    shouldComponentUpdate() {
        console.log('should component update?')
        return true
    }

    componentWillUpdate() {
        console.log('component will update')
    }

    componentDidUpdate() {
        console.log('component updated')
    }

    componentWillUnmount() {
        this.setState({}, console.log('test is unmounting:', this.props.name))
        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({name: nextProps.name})
    }

    // static getDeriveStateFromProps(props, state) {
    //     this.setState({name: props.name})
    // }

    render() {
        return (
            <div>
                <button type="button" onClick={this.hideOrShow}>Toggle</button>
            <div style={{display : this.displayed}}>
                <h1 style={{backgroundColor : this.state.state_color}}>Hello there, {this.state.name}</h1>
                <button onClick={this.changeColor}>Change Color</button>
                {console.log('JSX created: ', this.props.name)}
            </div>
            </div>
        );
    }
}


export default TestComp;