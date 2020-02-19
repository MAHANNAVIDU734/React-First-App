import React, { Component } from "react";

class Hero extends Component{
    state = {
        heroId: 1001,
        heroName: "Hero 1"
    };
    render(){
    return (
    <React.Fragment>
    <h1>Hero Component : {this.isHero()}</h1>
    <h1>Hero Id Is {this.state.heroId}</h1>
    <button>Click Me !</button>
    </React.Fragment>
    );
 };

isHero() {
//     if (this.state.heroId < 1000) {
//         return "Avenger";
// }else{
//     return "Not An Avenger";
//     }
    return (this.state.heroId < 1000) ? "Avenger" : "Not an Avenger";

  } 
}
export default Hero;