import React, { Component } from 'react';

export default class AddAds extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         rate: 0,
         description: '',
         price: '',
         brand: '',
         detailProduct: ''
      }
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
   }

   render() {
      return (
         <div className="container">
            <div className="card">
               <div className="card-header">
                  Add Ads
               </div>
               <div className="card-body">
                  <form id="addForm">

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
                                 <b>Rate</b>
                              </label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="form-group">
                              <select className="custom-select custom-select" className="form-control">
                                 <option className="form-control">1</option>
                                 <option className="form-control">2</option>
                                 <option className="form-control">3</option>
                                 <option className="form-control">4</option>
                                 <option className="form-control">5</option>
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
                              <input type="text" className="form-control" placeholder="Price" />
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
                              <input type="text" className="form-control" placeholder="Brand" />
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
                              <textarea className="form-control" placeholder="Detail product (using markdown)" rows="5" />
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-4 offset-2">
                           <a href="#" className="btn btn-success">Submit ads</a>
                           <a href="#" className="btn btn-warning ml-2">Cancel</a>
                        </div>
                     </div>




                  </form>

               </div>
            </div>
         </div>
      )
   }
}