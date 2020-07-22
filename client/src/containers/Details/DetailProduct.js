import React, { Component } from 'react';
import '../../styles/buy.css';
import { connect } from 'react-redux';
import { loadDetails } from '../../actions/index';

class DetailProduct extends Component {
   constructor(props) {
      super(props)

   }

   componentDidMount() {
      this.props.loadDetails();
   }

   render() {
      return (
         <div class="container">
            <div class="card mb-3">
               <div class="row no-gutters">
                  <div class="col-md-4">
                     <img src="..." class="card-img" alt="..." />
                  </div>
                  <div class="col-md-8">
                     <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   product: state.detail
})

const mapDispatchToProps = (dispatch) => ({
   loadDetails: () => dispatch(loadDetails())
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(DetailProduct)