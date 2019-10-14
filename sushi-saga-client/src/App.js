import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushisArr: [],
    counter: 0,
    wallet: 50
  }
  
  componentDidMount(){
    fetch(API).then(r => r.json()).then(sushisArr => this.setState({sushisArr})
    )
  }

  sushiClick = (id,price) =>{
    if(this.state.wallet < price){
      alert("You funds are low, Come again when you have more money")
      return
    }else{
       let cashLeft = this.state.wallet - price
       let newArr = this.state.sushisArr.map(sushi => {
        if(sushi.id ===id){
          sushi.wasEaten = true
        }
        return sushi
      })
       this.setState({
         sushisArr: newArr,
         wallet: cashLeft
       })
    }

  }

  displaySushi = () => {
    return this.state.sushisArr.filter(sushi => !sushi.wasEaten)
    .slice(this.state.counter, this.state.counter+4)
  }

  handleAddSushi = () =>{
    let check = this.state.sushisArr.filter(sushi => !sushi.wasEaten)
   if(check.length < this.state.counter+4){
      return this.setState({
        counter: 0
      })
    }
    return this.setState({
      counter: this.state.counter + 4
    })
  }

  filterEatenSushi = () => {
    return this.state.sushisArr.filter(sushi => sushi.wasEaten)
  };


  render() {
    console.log(this.state.sushisArr)
    return (
      <div className="app">
        <SushiContainer  
            sushiClick={this.sushiClick} 
            displaySushi={this.displaySushi}
            handleAddSushi={this.handleAddSushi}/>
        <Table wallet={this.state.wallet} filterEatenSushi={this.filterEatenSushi} />
      </div>
    );
  }
}

export default App;