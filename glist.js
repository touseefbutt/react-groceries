class Glist extends React.Component{
    state={
        purchase : this.props.list.isPurchased
    }
        clickHandler =(e)=>{
            this.setState({
                purchase : !this.props.list.isPurchased
            })
        }

    render(){
        return(
            (!this.state.purchase ?
            <div className="list">
                <h4><span>Item:</span> {this.props.list.item}</h4>
                <h4><span>Brand:</span> {this.props.list.brand}</h4>
                <h4><span>Units:</span> {this.props.list.units}</h4>
                <h4><span>Quantity:</span> {this.props.list.quantity}</h4>
                <button onClick={this.clickHandler}>Remove</button>
            </div>
            :null

        ))
    }
}