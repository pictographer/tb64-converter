/* tslint:disable */
/* eslint-disable */
/**
* Attempt to parse a string as TaggedBase64. If successful return the value as a string,
* otherwise return a JsError.
* 
* Note, the tag is not returned.
* 
* Note, the value is converted to UTF8 for demonstration purposes, but this would be lossy if the
* encoded TaggedBase64's value was not UTF8.
* @param {string} tb64
* @returns {string}
*/
export function parse_tb64(tb64: string): string;
/**
* Attempt to encode a tag and value as TaggedBase64. If successful, return the string representation
* of the TaggedBase64 value, otherwise return a JsError.
* 
* Note, TaggedBase64 supports arbitary non-UTF8 values, but this interface does not make that easy.
* @param {string} tag
* @param {string} value
* @returns {string}
*/
export function encode_tb64(tag: string, value: string): string;
/**
* Converts a TaggedBase64 value to a String.
* @param {TaggedBase64} tb64
* @returns {string}
*/
export function to_string(tb64: TaggedBase64): string;
/**
* JavaScript-compatible wrapper for TaggedBase64
*
* The primary difference is that JsTaggedBase64 returns errors
* of type JsValue.
*/
export class JsTaggedBase64 {
  free(): void;
/**
* @param {string} tag
* @param {Uint8Array} value
*/
  constructor(tag: string, value: Uint8Array);
/**
* Parses a string of the form tag~value into a TaggedBase64 value.
*
* The tag is restricted to URL-safe base64 ASCII characters. The tag
* may be empty. The delimiter is required.
*
* The value is a base64-encoded string, using the URL-safe character
* set, and no padding is used.
* @param {string} tb64
* @returns {TaggedBase64}
*/
  static parse(tb64: string): TaggedBase64;
/**
* Gets the tag of a TaggedBase64 instance.
* @returns {string}
*/
  tag(): string;
/**
* Gets the value of a TaggedBase64 instance.
* @returns {Uint8Array}
*/
  value(): Uint8Array;
/**
* Sets the tag of a JsTaggedBase64 instance.
* @param {string} tag
*/
  set_tag(tag: string): void;
/**
* Sets the value of a JsTaggedBase64 instance.
* @param {Uint8Array} value
*/
  set_value(value: Uint8Array): void;
/**
* Formats the JsTaggedBase64 instance as a URL-safe string.
* @returns {string}
*/
  to_string(): string;
}
/**
* A structure holding a string tag, vector of bytes, and a checksum
* covering the tag and the bytes.
*/
export class TaggedBase64 {
  free(): void;
}
