import React, { Component } from "react";
import Router from 'next/router';
import '../static/css/index.css';
import '../static/css/animate.css';

class Blog extends Component {
  static getInitialProps(ctx) {
    if (ctx.query) {
      let { id } = ctx.query;
      return { id: id }
    }
  };

  back = () => {
    Router.back()
  }
  render() {
    return (
      <div>
        <nav>
          Logo
        </nav>
        <div className="layout">
          <div className="animated bounceInLeft">
            <center>
              <a href="https://cloud-wave.cn/" target="_blank">
                <img src="/static/images/logo.jpg" alt="logo" className="logo" />
              </a>
            </center>
          </div>
          <div className="animated bounceInRight">
            <h1>{this.props.id}</h1>
            <p>balabala....</p>
            <p>balabala....</p>
            <p>balabala....</p>
            <p>balabala....</p>
            <p>balabala....</p>
            <a onClick={this.back} href="#"> Back Home Page</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog;