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
         category: '',
         file: null
      }
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
   }

   handleFileUpload = (event) => {
      
   }

   handleSubmit = (event) => {
      event.preventDefault();
      const { history } = this.props;
      console.log(history)
      this.props.postProduct(this.state, history);
   }


   render() {
      return (
         <div className="container">
            <div className="card">
               <div className="card-header">
                  Add Ads
               </div>
               <div className="card-body">
                  <form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
                        <div className="col-2">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <b>Product image</b>
                              </label>
                           </div>
                        </div>

                        <div className="col">
                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                              </div>
                              <div className="custom-file">
                                 <input
                                    className="custom-file-input"
                                    type="file"
                                    name="file"
                                    value={this.state.file}
                                    onChange={this.handleChange}
                                 />
                                 <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                              </div>
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
   postProduct: (form, history) => dispatch(postProduct(form, history))
})

export default connect(
   null,
   mapDispatchToProps
)(AddAds)