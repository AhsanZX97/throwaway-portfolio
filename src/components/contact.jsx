import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <section class="page-section" id="contact">
              <div class="container">

                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>

                <div class="row">
                  <div class="col-lg-8 mx-auto">
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                      <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Name</label>
                          <input class="form-control" id="name" type="text" placeholder="Name" required="required"
                            data-validation-required-message="Please enter your name."> </input>
                          <p class="help-block text-danger"></p>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Email Address</label>
                          <input class="form-control" id="email" type="email" placeholder="Email Address"
                            required="required"
                            data-validation-required-message="Please enter your email address."></input>
                          <p class="help-block text-danger"></p>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Phone Number</label>
                          <input class="form-control" id="phone" type="tel" placeholder="Phone Number"
                            required="required"
                            data-validation-required-message="Please enter your phone number."></input>
                          <p class="help-block text-danger"></p>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Message</label>
                          <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required"
                            data-validation-required-message="Please enter a message."></textarea>
                          <p class="help-block text-danger"></p>
                        </div>
                      </div>
                      <br></br>
                      <div id="success"></div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </section>
        )
    }
}