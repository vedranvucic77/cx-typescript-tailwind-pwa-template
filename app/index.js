import { Store } from "cx/data";
import {
  History,
  Widget,
  startHotAppLoop,
  enableCultureSensitiveFormatting,
} from "cx/ui";
import { Timing, Debug } from "cx/util";

enableCultureSensitiveFormatting();

const store = new Store();
History.connect(store, "url");

Widget.resetCounter();
Timing.enable("app-loop");
Debug.enable("app-data");

startHotAppLoop(
  module,
  document.getElementById("app"),
  store,
  <cx>
    <p>abc</p>
  </cx>
);
