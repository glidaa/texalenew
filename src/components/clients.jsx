import React, { Component } from "react";

export class client extends Component {
  render() {
    return (
      <div id="client">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Clients</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="client">
                      <div className="client-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default client;
