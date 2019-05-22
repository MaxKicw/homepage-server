import React, { Component } from 'react';
import './App.css';
import Lottie from 'lottie-react-web';
import animation from './kleiderstange.json';

class App extends Component {
state = {
    greetings:"中国人乒乓球打得很好对吧",
    autoplay:false,
    loop:false,
    abstand:1,
    segmentArray:[0,1],
    desktop: 1000,
    tablet: 745,
    mobile: 425,
    animation: {deskTab:[0,36],tabPhone:[45,89],phoneTab:[90,130],tabDesk:[135,175]},
    stills: {wide:[178,179],middle:[42,43],narrow:[88,89]},
    setWindowSize:"",
    dollars:0,
};
componentDidMount = () => {
  this.fetchData();
  this.setWindowSize();
  window.addEventListener('resize', this.updateWindowSize);
};

setWindowSize = () =>{
  if (window.innerWidth > this.state.tablet) {
    this.setState({setWindowSize:"Desktop"})
    this.setState({segmentArray:this.state.stills.wide});
  } else if (window.innerWidth > this.state.mobile) {
    this.setState({setWindowSize:"Tablet"})
    this.setState({segmentArray:this.state.stills.middle});
  } else if (window.innerWidth <= this.state.mobile) {
    this.setState({setWindowSize:"Smartphone"})
    this.setState({segmentArray:this.state.stills.narrow});
  }
} 

updateWindowSize = () => {
  // Desktop <- Tablet
  if (window.innerWidth > this.state.desktop && this.state.setWindowSize === "Tablet") {
    this.setState({segmentArray:this.state.animation.tabDesk});
    this.setState({setWindowSize:"Desktop"})
  // Tablet <- Phone
  } else if (window.innerWidth < this.state.desktop && window.innerWidth > this.state.mobile && this.state.setWindowSize === "Smartphone") {
    this.setState({segmentArray:this.state.animation.phoneTab});
    this.setState({setWindowSize:"Tablet"})
  // Phone <- Tablet
  } else if (window.innerWidth < this.state.mobile && this.state.setWindowSize === "Tablet") {
    this.setState({segmentArray:this.state.animation.tabPhone});
    this.setState({setWindowSize:"Smartphone"})
    this.upTheDollar();
  // Tablet <- Desktop
  } else if (window.innerWidth < this.state.desktop && window.innerWidth > this.state.mobile && this.state.setWindowSize === "Desktop"){
    this.setState({segmentArray:this.state.animation.deskTab});
    this.setState({setWindowSize:"Tablet"})
  }
}

upTheDollar = () => {
    let newBank = this.state.dollars + 4;
    this.setState({dollars:newBank})
}


fetchData = () => {
    fetch(new Request ('https://www.maximilian-wick.de/api', {
            method: 'GET',
            headers: new Headers({
                    'Content-Type':'application/json',
                    'Origin':"https://www.maximilian-wick.de",
                    'Access-Control-Request-Methode':"GET",
		    'Access-Control-Request-Headers':"X-Custom-Header",
            }),
    }))
    .then(function(response){
            return response.json()
    })
    .then(function(res){
  console.log(res);
  
    });
};

  render() {
    return (
      <div className="App" onClick={this.tablet}>
        <div className="Menu Styling">
          <p>Du hast {this.state.dollars}$ bis jetzt geschüttelt</p>
        </div>
        <div className="Header">
          <Lottie 
                  options={{animationData: animation,loop:this.state.loop,autoplay:this.state.autoplay}}
                  isPaused={this.state.isPaused}
                  segments={this.state.segmentArray}
                  forceSegments={true}
                />
        </div>
      </div>
    );
  }
}

export default App;
