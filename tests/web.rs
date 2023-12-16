//! Minimal tests to demonstrate how to write WASM tests.
//! 
//! Run the tests with
//!  `wasmpack test --node`

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::wasm_bindgen_test;
use wasm_game_of_life::{encode_tb64, parse_tb64};

// Testing in a browser is slightly fussier than testing in Node, so let's use the default.
// wasm_bindgen_test_configure!(run_in_browser);

#[cfg(test)]
#[wasm_bindgen_test]
fn test_parse_happy() {
    match parse_tb64("~AA") {
        Ok(s) => assert!(s.is_empty()),
        Err(_) => assert!(false),
    }
}

#[cfg(test)]
#[wasm_bindgen_test]
fn test_parse_sad() {
    assert!(parse_tb64("~AB").is_err());
}

#[cfg(test)]
#[wasm_bindgen_test]
fn test_encode_tb64_happy() {
    match encode_tb64("", "") {
        Ok(s) => assert_eq!(s, "~AA"),
        Err(_) => assert!(false),
    }
}

#[cfg(test)]
#[wasm_bindgen_test]
fn test_encode_tb64_sad() {
    assert!(encode_tb64("~", "").is_err());
}