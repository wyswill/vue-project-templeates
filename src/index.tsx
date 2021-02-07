import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "normalizecss/normalize.css";
import "swiper/swiper.less";
import Myrouter from "./router";
import "react-pullload/dist/ReactPullLoad.css";
ReactDOM.render(<Myrouter />, document.getElementById("root"));

reportWebVitals();
