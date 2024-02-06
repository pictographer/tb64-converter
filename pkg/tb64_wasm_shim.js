import * as wasm from "./tb64_wasm_shim_bg.wasm";
import { __wbg_set_wasm } from "./tb64_wasm_shim_bg.js";
__wbg_set_wasm(wasm);
export * from "./tb64_wasm_shim_bg.js";
