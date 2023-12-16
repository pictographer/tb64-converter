# Testing Tagged Base64 Converter

Tagged Base64 Converter is a simple web application with two forms. Here's are some simple suggestions for manual testing.

## Decoding Happy Path

1. Copy `Hi~SGVsbG8sIHlvdSEs` to the **Tagged Base64** text area
1. Click the **Decode** button
1. Observe the text in the **Decoded value** text area. It should be `Hello, you!`
1. Repeat for the following

| TaggedBase64        | Decoded Value |
| :----------:        | :-----------: |
| Hi~SGVsbG8sIHlvdSEs | Hello, you!   |
| CARD~QeKZpTE        | A♥            |
| PHONE~ODY3NTMwOcQ   | 8675309       |
| zh-CN~5L2g5aW9WQ    | 你好           |
| ~AA                 |               |
| A~wA                |               |

Note: The last two rows decode to the empty string.

## Encoding Happy Path

1. Copy `Hi` to the **Tag** input, and copy `Hello, you!` to the **Value** text area
1. Click the **Encode** button
1. Observe the text in the **Tagged Base64** text area. It should be, `SGVsbG8sIHlvdSEs`

| Tag   |  Value           | Encoded TaggedBase64  |
| :---: | :--------------: | :-------------------: |
| Hi    | Hello, you!      | SGVsbG8sIHlvdSEs      |
| CARD  | A♥               | QeKZpTE               |
| PHONE | 8675309          | ODY3NTMwOcQ           |
| zh-CN | 你好              | 5L2g5aW9WQ            |
|       |                  | AA                    |
| A     |                  | wA                    |

## Encode Tagged Base64 Error Messages

The Tag input is restricted to upper case letter, lower case letters, digits, underscore, and hyphens. Any other characters should be rejected with an alert,

    Error: An invalid character was found in the tag.

There are no restrictions on the Value field.

## Decode Tagged Base64 Error Messages

Valid Tagged Base64 encodings have three parts

1. An optional tag
2. A tilde (~) separating the tag and value
3. A Base64 value with at least two characters

Arbitrary choices for the Base64 value are unlikely to decode successfully due to the checksum. The error messages come straight from
the TaggedBase64 crate (library) and are intended to help software developers. You may see any of the following error messages

    Error: Missing delimiter.

    Error: The length of the base64-encoded value is invalid.

    Error: The checksum was truncated or did not match.

    Error: The last non-padding input symbol's encoded 6 bits have nonzero bits that will be discarded. This is indicative of corrupted or truncated Base64. Unlike InvalidByte, which reports symbols that aren't in the alphabet, this error is for symbols that are in the alphabet but represent nonsensical encodings.

## Copy Buttons

Each form has a **Copy** button to write the output of the form to the clipboard to save the user from needing to select and copy it.

When either of the **Copy** buttons is pressed, a message

    Copied!

should appear for 3 seconds and then disappear without disturbing the page layout.

The clipboard should then have the contents of the corresponding text area. The copy buttons are handy for roundtrip testing where
the output of encoding is then decoded yielding the value that was encoded.