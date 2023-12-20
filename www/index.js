/// tb64-wasm-shim is in the pkg directory
import * as wasm from "../pkg/tb64-wasm-shim";

/// Write to the clipboard and display a message about it for a few seconds.
///
///     text - text to write to the clipboard
///     statusOut - id of the element in which to display the status
///
/// On error display an alert.
function setClipboard(text, statusOut) {
    const PAUSE_MS = 3000; // 3 seconds

    navigator.clipboard.writeText(text).then(
      () => {
        document.getElementById(statusOut).value = "Copied!";
        setTimeout(() => {
            document.getElementById(statusOut).value = "";
        }, PAUSE_MS);
      },
      () => {
        alert("Copy not supported by browser or something.")
      },
    );
}

/// Encode the text in the tag_in and value_in elements as Tagged Base64
/// and put the serialization in the tb64_out element.
///
/// On error display an alert.
document.getElementById('encode').onclick = () => {
    try {
        let tag = document.getElementById('tag_in');
        let value = document.getElementById('value_in');
        let tb64 = document.getElementById('tb64_out');
        tb64.value = wasm.encode_tb64(tag.value, value.value);
    } catch (error) {
        alert(error);
    }
}

/// Copy the Tagged Base64 result to the clipboard.
///
/// On error display an alert.
document.getElementById('copy_tb64').onclick = () => {
    setClipboard(document.getElementById('tb64_out').value, 'status_encode_copy')
}

/// Decode Tagged Base64 in element tb64_in and write the value to 
/// element decoded_out.
///
/// On error display an alert.
document.getElementById('decode').onclick = () => {
    try {
        let tb64 = document.getElementById('tb64_in');
        let decoded = document.getElementById('decoded_out');
        decoded.value = wasm.parse_tb64(tb64.value.trim());
    } catch (error) {
        alert(error);
    }
}

/// Copy the value of a decoded Tagged Base64 string in element decoded_out to the clipboard.
///
/// On error display an alert.
document.getElementById('copy_decoded').onclick = () => {
    setClipboard(document.getElementById('decoded_out').value, 'status_decode_copy')
}
