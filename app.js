class App extends React.Component{
        state = {
            groceryList:gList,
            item:'',
            brand:'',
            units:'',
            quantity:0,
            isPurchased:false
        }

        handleChange = (event)=>{
            console.log(event.target.value)
            //BAD PRACTICE. 
            // this.state.value = event.target.value;
            this.setState({
                [event.target.id]:event.target.value
            });
        }

        handleSubmit= (event)=>{
            event.preventDefault();
            const newGrocery = {
                item: this.state.item,
                brand: this.state.brand,
                units: this.state.units,
                quantity: this.state.quantity
            }
            // console.log(newGrocery)
            this.setState({
                groceryList :[newGrocery, ...this.state.groceryList]
            })
        }

        togglePurchase = ()=>{
            this.setState({
                isPurchased: !this.state.isPurchased
            })
        }

    render(){
        return(
            <div>
                <h1 className="storename">React Groceries</h1>
                <form className="list" onSubmit={this.handleSubmit}>
                    <label htmlFor="item"> Item Name: </label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item"/>
                    <label htmlFor="brand"> Brand: </label>
                    <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"/>
                    <label htmlFor="units"> Units: </label>
                    <input type="text" value={this.state.units} onChange={this.handleChange} id="units"/>
                    <label htmlFor="quantity"> Quantity: </label>
                    <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity"/> <br/><br/>
                    <button onClick={this.togglePurchase}>Register Grocery</button>
                </form>
                
                <h2 className="storename">List of Groceries</h2>
                <div className="container">
                    {this.state.groceryList.map(grocery => <Glist list={grocery} />)}
                </div>
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
)