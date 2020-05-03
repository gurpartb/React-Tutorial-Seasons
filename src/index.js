import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component{

    // Babel.io for detailed translation
    state = {lat: null, errorMessage: ''};

    // 'Life Cycle Method' componentDidMount
    // gets called once after the render function is called
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setstate!!!
                this.setState({lat: position.coords.latitude})
            },
            err => {
                // we called setstate!!!
                this.setState({errorMessage: err.message})
            }
        )
    }

    renderContent(){
        if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        if(this.state.errorMessage){
            return <SeasonDisplay errorMessage={this.state.errorMessage} />
        }

        return <Spinner />;
    }

    // React says we have to define render!!
    render(){

        return (
            <div className='border red'>{this.renderContent()}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)