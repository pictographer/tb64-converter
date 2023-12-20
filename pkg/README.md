# Tagged Base64 Converter

Tagged Base64 Converter is a simple web app for encoding and decoding information in Tagged Base64 format. It is intended to be practical, but also to be a clear example of a web interface to a Rust library.

## Technologies Used
www
Several tools and libraries are used in this project.

### WebAssembly from Rust

WebAssembly (Wasm) provides the means for JavaScript to use Rust in the browser. The tooling for compiling Rust to Wasm and creating wrappers for JavaScript was first released in 2018 and still feels somewhat new, but interoperation between Rust and JavaScript works well for simple things like this.

For more complex Rust WebAssembly projects, there are challenges
- Many otherwise suitable Rust crates assume the standard library will be available; Wasm is more like an embedded target
- Asynchronous code is tricky in one language, and even more so in two
- Not all Rust types are supported
- Memory management is primitive
- Error handling is pretty good but not seamless
- The browser Wasm sandbox has security restrictions
- Debugging support is primitive
- Needed tools are not entirely integrated into Cargo, Node.js, and webpack
- Unless you already know how to develop in both languages, the documentation may not give you everything you need

As your needs grow, you'll find some useful stuff in https://github.com/rustwasm

### TaggedBase64, Base64, and CRC8

TaggedBase64 uses Base64 and CRC8. Base64 encoding was invented in the 90's to send binary data over channels that only reliably transmitted text. CRC8 is a common error-detecting code and is used here to make it possible to detect transcription and transmission errors.

### Node.js and npm

Node.js and npm are used to
- Set up the initial web project
- Serve the assets locally
- Execute tests

The configuration file `package.json` points to the wasm-related resources.

JavaScript, HTML, and CSS are used to interface with Rust and present a form user interface in a web browser.

No big libraries or frameworks such as jquery or React are used to keep this project as simple and broadly applicable as possible while showcasing Rust in the browser.

[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) provides a convenient developement environment because it reloads web assets when they are changed, so usually it is not necessary to restart the web server. It's not intended for production, however.

## Setup

- [Install or update Rust](https://www.rust-lang.org/tools/install)
- [Install Node.js](https://nodejs.org/en/download)
- [update npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
- cargo install wasm-pack
- wasm-pack build
- (cd www && npm install)
- (cd www && NODE_OPTIONS=--openssl-legacy-provider npm start)

## Development

When you change the Rust code, you need to use wasm-pack build to recreate the .wasm and wrappers.
- wasm-pack build

<details>
<summary>First Rust build output</summary>
<pre>
corbett@nao:~/git/wasm/tagged-base64-converter$ wasm-pack build
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
   Compiling proc-macro2 v1.0.70
   Compiling unicode-ident v1.0.12
   Compiling libc v0.2.150
   Compiling autocfg v1.1.0
   Compiling syn v1.0.109
   Compiling num-traits v0.2.17
   Compiling wasm-bindgen-shared v0.2.89
   Compiling typenum v1.17.0
   Compiling bumpalo v3.14.0
   Compiling quote v1.0.33
   Compiling version_check v0.9.4
   Compiling serde v1.0.193
   Compiling log v0.4.20
   Compiling syn v2.0.39
   Compiling once_cell v1.19.0
   Compiling generic-array v0.14.7
   Compiling cc v1.0.83
   Compiling ppv-lite86 v0.2.17
   Compiling serde_json v1.0.108
   Compiling rand_core v0.6.4
   Compiling cfg-if v1.0.0
   Compiling backtrace v0.3.69
   Compiling rand_chacha v0.3.1
   Compiling wasm-bindgen-backend v0.2.89
   Compiling itoa v1.0.9
   Compiling adler v1.0.2
   Compiling memchr v2.6.4
   Compiling wasm-bindgen-macro-support v0.2.89
   Compiling serde_derive v1.0.193
   Compiling wasm-bindgen v0.2.89
   Compiling doc-comment v0.3.3
   Compiling ryu v1.0.15
   Compiling gimli v0.28.1
   Compiling wasm-bindgen-macro v0.2.89
   Compiling object v0.32.1
   Compiling miniz_oxide v0.7.1
   Compiling addr2line v0.21.0
   Compiling rand v0.8.5
   Compiling rustc-demangle v0.1.23
   Compiling heck v0.4.1
   Compiling snafu-derive v0.7.5
   Compiling ark-std v0.3.0
   Compiling digest v0.9.0
   Compiling ark-serialize-derive v0.3.0
   Compiling tagged-base64-macros v0.2.0 (https://github.com/EspressoSystems/tagged-base64.git?tag=0.2.4#9b9a5fae)
   Compiling base64 v0.13.1
   Compiling ark-serialize v0.3.0
   Compiling crc-any v2.4.3
   Compiling snafu v0.7.5
   Compiling console_error_panic_hook v0.1.7
   Compiling tagged-base64 v0.2.4 (https://github.com/EspressoSystems/tagged-base64.git?tag=0.2.4#9b9a5fae)
   Compiling tb64-wasm-shim v0.1.0 (/home/corbett/git/wasm/tagged-base64-converter)
    Finished release [optimized] target(s) in 25.93s
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional field missing from Cargo.toml: 'repository'. This is not necessary, but recommended
[INFO]: ✨   Done in 27.64s
[INFO]: 📦   Your wasm pkg is ready to publish at /home/corbett/git/wasm/tagged-base64-converter/pkg.
corbett@nao:~/git/wasm/tagged-base64-converter$ 
</pre>
</details>

When you motify the JavaScript or HTML, things may reload automatically. Otherwise, kill and rerun npm run start and reload the browser window.
- (cd www && NODE_OPTIONS=--openssl-legacy-provider npm run start)

wasm-pack inherits an issue from webpack. A change to OpenSSL left a hash algorithm deprecated. Webpack is planning to migrate to a different function for webpack 6. Meanwhile, setting the environment variable NODE_OPTIONS gets us past an error in wasm-pack.

https://github.com/webpack/webpack/issues/14532

package.json tells NPM where to find things including the Wasm bytecodes and the JavaScript wrappers.

If you want to create your own project without copying this one, you can use a template. The only thing the template does over a straight copy is to substitute the project/directory name and author names in a few places.

- cargo install cargo-generate
- cargo generate --git https://github.com/rustwasm/wasm-pack-template 

- Setup an NPM package directory in `www`
- npm init wasm-app www
- This creates the following files
  - bootstrap.js
  - index.html
  - index.js
  - LICENSE-APACHE
  - LICENSE-MIT
  - package.json
  - package-lock.json
  - README.md
  - webpack.config.js

## Troubleshooting NPM

If NODE_OPTIONS=--openssl-legacy-provider isn't set, `npm run start` will fail and the errors can be a bit mystifying.
<details>
    <summary>Errors without OpenSSL Workaround</summary>
<pre>
corbett@nao:~/git/wasm/wasm-game-of-life/www$ npm run start

\> create-wasm-app@0.1.0 start
\> webpack-dev-server

(node:669154) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /home/corbett/git/wasm/wasm-game-of-life/www
node:internal/crypto/hash:69
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:138:10)
    at module.exports (/home/corbett/git/wasm/wasm-game-of-life/www/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/home/corbett/git/wasm/wasm-game-of-life/www/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/home/corbett/git/wasm/wasm-game-of-life/www/node_modules/webpack/lib/NormalModule.js:471:10)
    at /home/corbett/git/wasm/wasm-game-of-life/www/node_modules/webpack/lib/NormalModule.js:503:5
    at /home/corbett/git/wasm/wasm-game-of-life/www/node_modules/webpack/lib/NormalModule.js:358:12
    at /home/corbett/git/wasm/wasm-game-of-life/www/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/home/corbett/git/wasm/wasm-game-of-life/www/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (/home/corbett/git/wasm/wasm-game-of-life/www/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/home/corbett/git/wasm/wasm-game-of-life/www/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:43:16)
    at /home/corbett/git/wasm/wasm-game-of-life/www/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:79:9
    at /home/corbett/git/wasm/wasm-game-of-life/www/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read/context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v20.5.1
</pre>
</details>

<p>&nbsp;</p>
<p>NPM expects package.json and if it doesn't find it, the messages are a bit long.
</p>
<details>
    <summary>Running NPM in the wrong directory</summary>
<pre>
corbett@nao:~/git/wasm/wasm-game-of-life$ NODE_OPTIONS=--openssl-legacy-provider npm run start
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /home/corbett/git/wasm/wasm-game-of-life/package.json
npm ERR! errno -2
npm ERR! enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/home/corbett/git/wasm/wasm-game-of-life/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in: /home/corbett/.npm/_logs/2023-12-14T00_50_56_632Z-debug-0.log
</pre>
</details>

## Testing

UI testing is performed manually following [Testing Tagged Base64 Converter
](test-procedure.md). Automated testing of the Rust entry points is performed by running

```shell
wasm-pack test --node
```
The test output looks something like this
```shell
corbett@nao:~/git/wasm/wasm-game-of-life$ wasm-pack test --node
[INFO]: 🎯  Checking for the Wasm target...
   Compiling wasm-game-of-life v0.1.0 (/home/corbett/git/wasm/wasm-game-of-life)
    Finished dev [unoptimized + debuginfo] target(s) in 0.36s
[INFO]: ⬇️  Installing wasm-bindgen...
    Finished test [unoptimized + debuginfo] target(s) in 0.05s
     Running unittests src/lib.rs (target/wasm32-unknown-unknown/debug/deps/wasm_game_of_life-bf4ee8c890b2fe2e.wasm)
no tests to run!
     Running tests/web.rs (target/wasm32-unknown-unknown/debug/deps/web-cb883d2f91322c00.wasm)
Set timeout to 20 seconds...
running 4 tests                                   

test web::test_encode_tb64_sad ... ok
test web::test_encode_tb64_happy ... ok
test web::test_parse_sad ... ok
test web::test_parse_happy ... ok

test result: ok. 4 passed; 0 failed; 0 ignored
```

This web interface is so simple it doesn't have extensive tests of its own, relying on TaggedBase64's extensive tests.

## Versions

The project was built and tested on Linux, specifically Ubuntu 22.04.3 LTS using

### Rust

[Rust](https://www.rust-lang.org/)
- Target stable-x86_64-unknown-linux-gnu (default)
- Compiler rustc 1.74.1 (a28077b28 2023-12-04)

[TaggedBase64](https://github.com/EspressoSystems/tagged-base64) version 0.2.4

[wasm-pack](https://rustwasm.github.io/docs/wasm-pack/) version 0.12.1

[create-web-app]() A Node script in www/.bin used to clone a template project

### Node.js

[Node.js®](https://nodejs.org/en/about) version v20.5.1

### WebAssembly (Wasm)

[WebAssembly](https://webassembly.org/)

### Web Browsers

- [Chromium](https://www.chromium.org/Home/) 119.0.6045.159 (Official Build) snap (64-bit)
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) 120.0

## Directories

- pkg - WASM and associated JavaScript and TypeScript wrappers
- src - Rust sources
- tests - Rust tests
- www - Created by 

## License

Licensed under either of

- [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.