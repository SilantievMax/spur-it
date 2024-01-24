import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";

import App from "./App";

import "@vkontakte/vkui/dist/vkui.css";
import "./index.css";

bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {});
}
