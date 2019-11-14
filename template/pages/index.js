import React, { Component } from "react";
import Link from 'next/link';
import '../static/css/index.css';
import '../static/css/animate.css';

class HomePage extends Component {
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
            <h1>My blog</h1>
            <ul>
              <li>
                <Link href="/blog/Get a new friend - Donald Trump">
                  <a>
                    Get a new friend - Donald Trump
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog/Learning Chinese history - Beijing University">
                  <a>
                    Learning Chinese history - Beijing University
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog/The Last Samuai - My Tokoy travel">
                  <a>
                    The Last Samuai - My Tokoy travel
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;