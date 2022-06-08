import { Framework } from "setaria-vue-component-library-ts";
import { getEnvParams } from "./utils";
import config from "./config";

import "setaria-vue-component-library-ts/style/index.scss";

new Framework(config, getEnvParams()).mount();
