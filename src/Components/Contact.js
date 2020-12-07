import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">


         <div className="row">
            <div className="eight columns">
            

            <form action="mailto:alwissanthu@gmail.com" method="GET" target="_blank" encType="text/plain">
             <h1 class="title">For Enquiries, send me an Email!</h1>
             <br></br>
             <br></br>
               <div class="field"><label class="label" for="subject">Subject</label>
               <input name="subject" id="subject" type="text" class="input" value="Subject here"/></div>
                  <div class="field"><label class="label" for="body">Message</label>
                  <textarea class="textarea" name="body" id="body">Your enquiries here</textarea></div>
               <div><input type="submit" value="Create Email" class="button is-primary"/></div>
            </form>


           <div id="message-warning"> Error body</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
