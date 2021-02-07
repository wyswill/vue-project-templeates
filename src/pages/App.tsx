import React, { useContext, useState } from "react";
import "../less/pages.less";
import "swiper/components/pagination/pagination.less";
import { History } from "history";
import { observer } from "mobx-react";

interface I_App {
  history: History;
}

function App(props: I_App) {
  return (
    <div className="App">
      app
    </div>
  );
}

export default observer(App);

