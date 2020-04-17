import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions/carActions";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props.item)}>
        Add
      </button>
      {props.item.name} (+{props.item.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    AdditionalFeature: state.AdditionalFeature,
    car: state.car,
  };
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
