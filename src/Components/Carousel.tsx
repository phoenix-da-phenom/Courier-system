import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import slider1 from "../assets/slide1.jpg";
import slider2 from "../assets/slide2.jpg";
import slider3 from "../assets/slide3.jpg";
import slider4 from "../assets/slide4.jpg";
import slider5 from "../assets/slide5.jpg";
import slider6 from "../assets/slide6.jpg";
import slider7 from "../assets/slide7.jpeg";
import slider8 from "../assets/slide8.webp";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Carousel() {
  return (
    <div className="my-container">
      <AutoplaySlider
        className="awesome-slider"
        play
        cancelOnInteraction={false}
        interval={3000}
      >
        <div data-src={slider1}>
          <div className="slide-caption">
            <h2>Fast Delivery</h2>
            <p>We deliver your packages safely and on time</p>
          </div>
        </div>

        <div data-src={slider2}>
          <div className="slide-caption">
            <h2>Worldwide Coverage</h2>
            <p>Shipping to every state in the world</p>
          </div>
        </div>

        <div data-src={slider3}>
          <div className="slide-caption">
            <h2>Real-Time Tracking</h2>
            <p>Track your parcel every step of the way</p>
          </div>
        </div>

        <div data-src={slider4}>
          <div className="slide-caption">
            <h2>Secure Handling</h2>
            <p>Your goods are handled with care</p>
          </div>
        </div>

        <div data-src={slider5}>
          <div className="slide-caption">
            <h2>24/7 Support</h2>
            <p>We’re always here when you need us</p>
          </div>
        </div>

        <div data-src={slider6}>
          <div className="slide-caption">
            <h2>Smart Courier System</h2>
            <p>Manage shipments, track progress, and get notifications in one place</p>
          </div>
        </div>

        <div data-src={slider7}>
          <div className="slide-caption">
            <h2>Same-Day Dispatch</h2>
            <p>Orders are processed and shipped without delay to save you time.</p>
          </div>
        </div>

        <div data-src={slider8}>
          <div className="slide-caption">
            <h2>Instant Delivery Updates</h2>
            <p>Receive SMS or email alerts at every stage of your delivery.</p>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}
