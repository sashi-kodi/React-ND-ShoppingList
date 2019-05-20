import React, {Component} from 'react';
class AddItem extends Component{
  state={value:''}
 handleChange = event => {
    this.setState({ value: event.target.value });
  };
  inputIsEmpty = () => {
    return this.state.value === '';
  };
handleSubmit = (e)=>{
  e.preventDefault();
  this.props.addItem(this.state.value);
}
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange} />
    
          <button type="submit" disabled={this.inputIsEmpty()}>Add</button>
        </form>
)
  }  

}
export default AddItem;