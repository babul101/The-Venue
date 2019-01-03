import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../utils/myButton'

class Discount extends Component {
    state = {
        discountStart:0,
        discountEnd:30
    }

    percentage =() =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart:this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },40)
    }
  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
        <Fade onReveal = {()=>this.percentage()}>
            <div className='discount_percentage'>
                <span>{this.state.discountStart}%</span>
                <span>OFF</span>
            </div>
        </Fade>

        <Slide right>
            <div className='discount_description'>
                <h3>Grab the offers ASAP</h3>
                <p>To book the tickets click the button below</p>
                <MyButton  text='Book Tickets' bck='#ffa800' color='#ffffff' link='http://www.camilacabello.com'/>
            </div>
        </Slide>
            
            
        </div>  
      </div>
    )
  }
}


export default Discount;