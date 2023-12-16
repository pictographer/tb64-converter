mod utils;

use tagged_base64::TaggedBase64;
use wasm_bindgen::prelude::*;

/// Attempt to parse a string as TaggedBase64. If successful return the value as a string,
/// otherwise return a JsError.
/// 
/// Note, the tag is not returned.
/// 
/// Note, the value is converted to UTF8 for demonstration purposes, but this would be lossy if the
/// encoded TaggedBase64's value was not UTF8.
#[wasm_bindgen]
pub fn parse_tb64(tb64: &str) -> Result<String, JsError> {
    match TaggedBase64::parse(tb64) {
        Ok(tb64) => Ok(String::from_utf8_lossy(&tb64.value()).into_owned()),
        Err(e) => Err(e.into()),
    }
}

/// Attempt to encode a tag and value as TaggedBase64. If successful, return the string representation
/// of the TaggedBase64 value, otherwise return a JsError.
/// 
/// Note, TaggedBase64 supports arbitary non-UTF8 values, but this interface does not make that easy.
#[wasm_bindgen]
pub fn encode_tb64(tag: &str, value: &str) -> Result<String, JsError> {
    match TaggedBase64::new(tag, value.as_bytes()) {
        Ok(tb64) => Ok(tb64.to_string()),
        Err(e) => Err(e.into()),
    }
}
