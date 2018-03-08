import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SummaryView.css';

class SummaryView extends Component {
  render() {
    return (
    <div class="container-fluid">
      {/*<div className="row" style={{height:'4vh'}}>
        <div className="col-md-2 text-center"><h3>Calendar</h3></div>
        <div className="col-md-2 text-center"><h3>Grocery List</h3></div>
        <div className="col-md-2 text-center"><h3>Fitness</h3></div>
        <div className="col-md-2 text-center"><h3>Nutrition</h3></div>
        <div className="col-md-2 text-center"><h3>Profile</h3></div>
        <div className="col-md-2 text-center"><h3>FAQ</h3></div>
      </div>*/}
      <div className="row" style={{height:'93vh'}}>
        <div className="col-md-8 scrollable">
          <div className="row">
            <div className="col-md-2 text-center">
              <h5> 12 <br/> Monday</h5>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center">
              <h5>13 <br/> Tuesday </h5>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center">
              <h5>14 <br/> Wednesday </h5>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center">
              <h5>15 <br/> Thursday </h5>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center">
              <h5>16 <br/> Friday </h5>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center">
              <h5>17 <br/> Saturday </h5>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center">
              <h5>18 <br/> Sunday </h5>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
            <div className="col-md-5">
              <h4>Meals</h4>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
              <p> Eggplant parm ... 600 cal </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <p> Goals go here </p>
        </div>
      </div>

    </div>
    );
  }
}
export default SummaryView
