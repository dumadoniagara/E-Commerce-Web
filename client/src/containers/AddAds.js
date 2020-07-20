import React, { Component } from 'react';
import { postProduct } from '../actions/index';
import { connect } from 'react-redux';

class AddAds extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         rate: 1,
         description: '',
         price: '',
         brand: '',
         detailProduct: '',
         category: ''
      }
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      this.props.postProduct(this.state)
   }

   render() {
      return (
         <div className="container">
            <div className="card">
               <div className="card-header">
                  Add Ads
               </div>
               <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                     <div className="row">
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Title</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Title..."
                                 name="title"
                                 required={true}
                                 value={this.state.title}
                                 onChange={this.handleChange}
                              />
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Category</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <select className="custom-select custom-select" value={this.state.category} required={true} name="category" className="form-control" onChange={this.handleChange}>
                                 <option className="form-control" value="" disabled>Choose category</option>
                                 <option className="form-control" value="phone">Phone/Smartphone</option>
                                 <option className="form-control" value="fashion">Fashion</option>
                                 <option className="form-control" value="vehicle">Car/Motorcycle</option>
                                 <option className="form-control" value="electronic">Electronic</option>
                              </select>
                           </div>
                        </div>
                     </div>


                     <div className="row">
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Rate</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <select className="custom-select custom-select" value={this.state.rate} required={true} name="rate" className="form-control" onChange={this.handleChange}>
                                 <option className="form-control" value="1">1</option>
                                 <option className="form-control" value="2">2</option>
                                 <option className="form-control" value="3">3</option>
                                 <option className="form-control" value="4">4</option>
                                 <option className="form-control" value="4">5</option>
                              </select>
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Description</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <textarea
                                 className="form-control"
                                 placeholder="Type description.."
                                 rows="5"
                                 name="description"
                                 required={true}
                                 value={this.state.description}
                                 onChange={this.handleChange}
                              />
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Price</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <input
                                 type="text"
                                 value={this.state.price}
                                 onChange={this.handleChange}
                                 className="form-control"
                                 placeholder="Price"
                                 name="price"
                              />
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Brand</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <input
                                 name="brand"
                                 value={this.state.brand}
                                 onChange={this.handleChange}
                                 type="text"
                                 className="form-control"
                                 placeholder="Brand" />
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Detail Product</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <textarea
                                 className="form-control"
                                 placeholder="Detail product (using markdown)"
                                 rows="5"
                                 name="detailProduct"
                                 value={this.state.detailProduct}
                                 onChange={this.handleChange}
                              />
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-4 offset-2">
                           <button type="submit" className="btn btn-success">Submit ads</button>
                           <button className="btn btn-warning ml-2">Cancel</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   postProduct: (form) => dispatch(postProduct(form))
})

export default connect(
   null,
   mapDispatchToProps
)(AddAds)