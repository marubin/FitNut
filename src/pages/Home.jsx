import React, { Component } from 'react';
import Navbar from '..//components/Navbar.jsx';
import SummaryView from '..//components/SummaryView.jsx';

class Home extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <div class="container-fluid">
        <SummaryView />
        {/*<h2>Welcome to FitNut</h2>
          <p>
            Get swole
          </p>
          <p>
            Get slim
          </p>*/}
        </div>
      </div>
      );
    }
  }

  export default Home
