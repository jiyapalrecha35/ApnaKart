import React from 'react'
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        };
    }
    render() {
        return (
            <form
                className="row mb-5"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addItem(this.state.productName, Number(this.state.productPrice));
                }}>
                <div className="mb-3 col-4 mx-3">
                    <label htmlFor="inputName" className="form-label"><h5>Name of the product</h5></label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="name"
                        name="productname"
                        onChange={(e) => {
                            this.setState({ productName: e.currentTarget.value })
                        }}
                        value={this.state.productName} />

                </div>

                <div className="mb-3 col-4 mx-3">
                    <label htmlFor="price" className="form-label"><h5>Price</h5></label>
                    <input type="number" className="form-control" id="price"
                        name="productPrice"
                        onChange={(e) => {
                            this.setState({ productPrice: e.currentTarget.value })
                        }}
                        value={this.state.productPrice} />
                </div>
                
                <button type="submit" className="btn btn-primary col-2 mx-3"><h5>Add Item</h5></button>
            </form>

        );
    }
}

export default AddItem;
;