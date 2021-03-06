import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Their Say"
        description="£5 for 5 Their Say Credit Points"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="teal btn">BUY CREDITS</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
