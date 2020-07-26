import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Rater from 'react-rater';
import { connect } from 'react-redux'
import { addTestimonial } from '../../../actions/index';
import 'react-rater/lib/react-rater.css'

class BuyModal extends Component {
   constructor(props) {
      super(props)
      this.state = {
         rate: null,
         name: "",
         text: "",
         isValid: true
      };
   }

   componentDidUpdate() {
      console.log('CURRENT STARS:', this.state)
   }

   handleRatingClick = ({ rating }) => {
      this.setState({ rate: rating });
   }

   handleSend = e => {
      e.preventDefault();
      let { rate, name, text } = this.state;
      if (!rate || !name || !text) this.setSate({ isValid: false });
      else {
         this.setState({ isValid: true });
         this.props.sendTestimonial({ rate, name, text });
         this.props.closeModal();
      }
   }

   handleInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   }

   handleKeyUp = e => {
      if (e.keyCode === 13 && !e.shiftKey) {
         this.handleSend(e)
      }
   }

   render() {
      let { title, category, color, capacity, show, closeModal } = this.props;
      return (
         <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header>
               <Modal.Title id="contained-modal-title-vcenter">
                  <h3>Buy {title} success!!</h3>
               </Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <p>test test 123</p>
               <form id="addTestimonial" onSubmit={this.handleSend}>
                  <div className="col-12 col-sm-6 d-flex align-items-center">
                     <span
                        className="btn mr-2"
                        style={{
                           backgroundColor: color,
                           border: "1px solid black",
                           display: "inline"
                        }}
                     />

                     <p><strong>{capacity} GB </strong></p>
                  </div>

                  <div className="col-12 col-sm-6 d-flex align-items-center">
                     <Rater
                        onRate={this.handleRatingClick}
                        rating={this.state.rate || 0}
                     />
                  </div>

                  <div className="col-12 my-1">
                     <input
                        className="form-control"
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUp}
                     />
                  </div>
                  <div className="col-12 my-1">
                     <textarea
                        className="form-control"
                        placeholder={`Your testimonial / comment for ${title} ...`}
                        name="text"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUp}
                     />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <button
                  type="submit"
                  form="addTestimonial"
                  className="btn btn-primary"
               >
                  Send
               </button>

               <button
                  type="submit"
                  form="addTestimonial"
                  className="btn btn-primary"
                  onClick={closeModal}
               >
                  Close
               </button>
            </Modal.Footer>
         </Modal >
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   addTestimonial: (testimoni) => dispatch(addTestimonial(testimoni))
})

export default connect(
   null,
   mapDispatchToProps
)(BuyModal)