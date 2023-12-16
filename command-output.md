# Command Output

## wasm-pack build

wasm-pack build may appear to hang the first time it is run. By default, it writes to a directory called `pkg`.

<pre>
corbett@nao:~/git/tagged-base64-converter$ wasm-pack build
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
   Compiling proc-macro2 v1.0.70
   Compiling unicode-ident v1.0.12
   Compiling libc v0.2.150
   Compiling autocfg v1.1.0
   Compiling syn v1.0.109
   Compiling num-traits v0.2.17
   Compiling wasm-bindgen-shared v0.2.89
   Compiling serde v1.0.193
   Compiling typenum v1.17.0
   Compiling version_check v0.9.4
   Compiling quote v1.0.33
   Compiling once_cell v1.19.0
   Compiling log v0.4.20
   Compiling bumpalo v3.14.0
   Compiling syn v2.0.39
   Compiling generic-array v0.14.7
   Compiling cc v1.0.83
   Compiling rand_core v0.6.4
   Compiling cfg-if v1.0.0
   Compiling serde_json v1.0.108
   Compiling ppv-lite86 v0.2.17
   Compiling rand_chacha v0.3.1
   Compiling backtrace v0.3.69
   Compiling wasm-bindgen-backend v0.2.89
   Compiling gimli v0.28.1
   Compiling wasm-bindgen-macro-support v0.2.89
   Compiling serde_derive v1.0.193
   Compiling itoa v1.0.9
   Compiling memchr v2.6.4
   Compiling doc-comment v0.3.3
   Compiling adler v1.0.2
   Compiling ryu v1.0.15
   Compiling wasm-bindgen v0.2.89
   Compiling miniz_oxide v0.7.1
   Compiling object v0.32.1
   Compiling wasm-bindgen-macro v0.2.89
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
   Compiling tb64-wasm-shim v0.1.0 (/home/corbett/git/tagged-base64-converter)
    Finished release [optimized] target(s) in 29.41s
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional field missing from Cargo.toml: 'repository'. This is not necessary, but recommended
[INFO]: ✨   Done in 31.02s
[INFO]: 📦   Your wasm pkg is ready to publish at /home/corbett/git/tagged-base64-converter/pkg.
corbett@nao:~/git/tagged-base64-converter$ 
</pre>

Second and subsequent times, successful output looks like this

<pre>
corbett@nao:~/git/tagged-base64-converter$ wasm-pack build
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
    Finished release [optimized] target(s) in 0.07s
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional field missing from Cargo.toml: 'repository'. This is not necessary, but recommended
[INFO]: ✨   Done in 1.82s
[INFO]: 📦   Your wasm pkg is ready to publish at /home/corbett/git/tagged-base64-converter/pkg.
corbett@nao:~/git/tagged-base64-converter$ 
</pre>

## npm start

<pre>
corbett@nao:~/git/tagged-base64-converter/www$ NODE_OPTIONS=--openssl-legacy-provider npm start

> create-wasm-app@0.1.0 start
> webpack-dev-server

(node:19668) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /home/corbett/git/tagged-base64-converter/www
ℹ ｢wdm｣: Hash: 76e91286faf45de64ab0
Version: webpack 4.43.0
Time: 691ms
Built at: 12/15/2023 10:41:15 AM
                           Asset      Size  Chunks                         Chunk Names
                  0.bootstrap.js  21.4 KiB       0  [emitted]              
0af5613fab82954aa5d0.module.wasm  55.9 KiB       0  [emitted] [immutable]  
                    bootstrap.js   369 KiB    main  [emitted]              main
                      index.html  4.08 KiB          [emitted]              
Entrypoint main = bootstrap.js
[0] multi (webpack)-dev-server/client?http://localhost:8080 ./bootstrap.js 40 bytes {main} [built]
[../pkg/tb64_wasm_shim.js] 169 bytes {0} [built]
[./bootstrap.js] 279 bytes {main} [built]
[./index.js] 1.35 KiB {0} [built]
[./node_modules/ansi-html/index.js] 4.16 KiB {main} [built]
[./node_modules/ansi-regex/index.js] 135 bytes {main} [built]
[./node_modules/strip-ansi/index.js] 161 bytes {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
    + 23 hidden modules
ℹ ｢wdm｣: Compiled successfully.
</pre>

## npm start without NODE_OPTIONS=--openssl-legacy-provider

<pre>
corbett@nao:~/git/tagged-base64-converter$ (cd www && npm start)

> create-wasm-app@0.1.0 start
> webpack-dev-server

(node:19311) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /home/corbett/git/tagged-base64-converter/www
node:internal/crypto/hash:69
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:138:10)
    at module.exports (/home/corbett/git/tagged-base64-converter/www/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/home/corbett/git/tagged-base64-converter/www/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/home/corbett/git/tagged-base64-converter/www/node_modules/webpack/lib/NormalModule.js:471:10)
    at /home/corbett/git/tagged-base64-converter/www/node_modules/webpack/lib/NormalModule.js:503:5
    at /home/corbett/git/tagged-base64-converter/www/node_modules/webpack/lib/NormalModule.js:358:12
    at /home/corbett/git/tagged-base64-converter/www/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/home/corbett/git/tagged-base64-converter/www/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (/home/corbett/git/tagged-base64-converter/www/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/home/corbett/git/tagged-base64-converter/www/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:43:16)
    at /home/corbett/git/tagged-base64-converter/www/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:79:9
    at /home/corbett/git/tagged-base64-converter/www/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read/context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v20.5.1
</pre>


## cargo install wasm-pack

<pre>
corbett@nao:~/git/tagged-base64-converter$ cargo install wasm-pack
    Updating crates.io index
  Installing wasm-pack v0.12.1
    Updating crates.io index
  Downloaded anstyle-parse v0.2.3
  Downloaded human-panic v1.2.2
  Downloaded filetime v0.2.23
  Downloaded anstyle-query v1.0.2
  Downloaded xattr v1.1.3
  Downloaded itoa v1.0.10
  Downloaded anstream v0.6.5
  Downloaded byteorder v1.5.0
  Downloaded cargo-platform v0.1.5
  Downloaded spin v0.9.8
  Downloaded untrusted v0.9.0
  Downloaded iana-time-zone v0.1.58
  Downloaded sct v0.7.1
  Downloaded ryu v1.0.16
  Downloaded uuid v1.6.1
  Downloaded flate2 v1.0.28
  Downloaded base64 v0.21.5
  Downloaded ureq v2.9.1
  Downloaded webpki-roots v0.25.3
  Downloaded winnow v0.5.28
  Downloaded rustls-webpki v0.101.7
  Downloaded syn v2.0.41
  Downloaded rustls v0.21.10
  Downloaded rustix v0.38.28
  Downloaded libc v0.2.151
  Downloaded zstd-sys v2.0.9+zstd.1.5.5
  Downloaded ring v0.17.7
  Downloaded 27 crates (7.7 MB) in 3.16s (largest was `ring` at 4.1 MB)
   Compiling libc v0.2.151
   Compiling proc-macro2 v1.0.70
   Compiling unicode-ident v1.0.12
   Compiling cfg-if v1.0.0
   Compiling serde v1.0.193
   Compiling typenum v1.17.0
   Compiling version_check v0.9.4
   Compiling quote v1.0.33
   Compiling generic-array v0.14.7
   Compiling jobserver v0.1.27
   Compiling syn v2.0.41
   Compiling pkg-config v0.3.27
   Compiling cc v1.0.83
   Compiling getrandom v0.2.11
   Compiling autocfg v1.1.0
   Compiling rustix v0.38.28
   Compiling crypto-common v0.1.6
   Compiling subtle v2.5.0
   Compiling block-buffer v0.10.4
   Compiling bitflags v2.4.1
   Compiling adler v1.0.2
   Compiling linux-raw-sys v0.4.12
   Compiling miniz_oxide v0.7.1
   Compiling ring v0.17.7
   Compiling zstd-sys v2.0.9+zstd.1.5.5
   Compiling digest v0.10.7
   Compiling crc32fast v1.3.2
   Compiling equivalent v1.0.1
   Compiling log v0.4.20
   Compiling hashbrown v0.14.3
   Compiling spin v0.9.8
   Compiling serde_derive v1.0.193
   Compiling cpufeatures v0.2.11
   Compiling untrusted v0.9.0
   Compiling tinyvec_macros v0.1.1
   Compiling tinyvec v1.6.0
   Compiling indexmap v2.1.0
   Compiling bzip2-sys v0.1.11+1.0.8
   Compiling utf8parse v0.2.1
   Compiling zstd-safe v5.0.2+zstd.1.5.2
   Compiling serde_json v1.0.108
   Compiling anstyle-parse v0.2.3
   Compiling unicode-normalization v0.1.22
   Compiling inout v0.1.3
   Compiling percent-encoding v2.3.1
   Compiling base64ct v1.6.0
   Compiling rand_core v0.6.4
   Compiling ryu v1.0.16
   Compiling anstyle-query v1.0.2
   Compiling itoa v1.0.10
   Compiling powerfmt v0.2.0
   Compiling unicode-bidi v0.3.14
   Compiling rustls v0.21.10
   Compiling colorchoice v1.0.0
   Compiling anstyle v1.0.4
   Compiling anstream v0.6.5
   Compiling idna v0.5.0
   Compiling deranged v0.3.10
   Compiling password-hash v0.4.2
   Compiling form_urlencoded v1.2.1
   Compiling cipher v0.4.4
   Compiling flate2 v1.0.28
   Compiling sha2 v0.10.8
   Compiling hmac v0.12.1
   Compiling backtrace v0.3.69
   Compiling toml_datetime v0.6.5
   Compiling serde_spanned v0.6.4
   Compiling lock_api v0.4.11
   Compiling num-traits v0.2.17
   Compiling anyhow v1.0.75
   Compiling semver v1.0.20
   Compiling gimli v0.28.1
   Compiling camino v1.1.6
   Compiling thiserror v1.0.50
   Compiling time-core v0.1.2
   Compiling parking_lot_core v0.9.9
   Compiling memchr v2.6.4
   Compiling time v0.3.30
   Compiling object v0.32.1
   Compiling addr2line v0.21.0
   Compiling toml_edit v0.21.0
   Compiling pbkdf2 v0.11.0
   Compiling aes v0.8.3
   Compiling url v2.5.0
   Compiling xattr v1.1.3
   Compiling sha1 v0.10.6
   Compiling thiserror-impl v1.0.50
   Compiling filetime v0.2.23
   Compiling dirs-sys-next v0.1.2
   Compiling rustc-demangle v0.1.23
   Compiling scopeguard v1.2.0
   Compiling smallvec v1.11.2
   Compiling winnow v0.5.28
   Compiling once_cell v1.19.0
   Compiling webpki-roots v0.25.3
   Compiling heck v0.4.1
   Compiling byteorder v1.5.0
   Compiling clap_lex v0.6.0
   Compiling base64 v0.21.5
   Compiling constant_time_eq v0.1.5
   Compiling lazy_static v1.4.0
   Compiling strsim v0.10.0
   Compiling unicode-width v0.1.11
   Compiling fastrand v2.0.1
   Compiling console v0.15.7
   Compiling tempfile v3.8.1
   Compiling toml_edit v0.19.15
   Compiling clap_builder v4.4.11
   Compiling clap_derive v4.4.7
   Compiling dirs-next v2.0.0
   Compiling tar v0.4.40
   Compiling toml v0.8.8
   Compiling cargo-platform v0.1.5
   Compiling os_info v3.7.0
   Compiling uuid v1.6.1
   Compiling fs2 v0.4.3
   Compiling is_executable v0.1.2
   Compiling hex v0.4.3
   Compiling home v0.5.5
   Compiling either v1.9.0
   Compiling zeroize v1.7.0
   Compiling iana-time-zone v0.1.58
   Compiling same-file v1.0.6
   Compiling siphasher v0.3.11
   Compiling shell-words v1.1.0
   Compiling dialoguer v0.10.4
   Compiling walkdir v2.4.0
   Compiling chrono v0.4.31
   Compiling which v4.4.2
   Compiling human-panic v1.2.2
   Compiling cargo_metadata v0.15.4
   Compiling clap v4.4.11
   Compiling parking_lot v0.12.1
   Compiling toml v0.7.8
   Compiling serde_ignored v0.1.9
   Compiling env_logger v0.10.1
   Compiling atty v0.2.14
   Compiling glob v0.3.1
   Compiling bzip2 v0.4.4
   Compiling sct v0.7.1
   Compiling rustls-webpki v0.101.7
   Compiling ureq v2.9.1
   Compiling zstd v0.11.2+zstd.1.5.2
   Compiling zip v0.6.6
   Compiling binary-install v0.2.0
   Compiling wasm-pack v0.12.1
    Finished release [optimized] target(s) in 2m 09s
  Installing /home/corbett/.cargo/bin/wasm-pack
   Installed package `wasm-pack v0.12.1` (executable `wasm-pack`)
corbett@nao:~/git/tagged-base64-converter$ 
</pre>

## cargo install cargo-generate

<pre>
corbett@nao:~/git/tagged-base64-converter$ cargo install cargo-generate
    Updating crates.io index
  Downloaded cargo-generate v0.19.0
  Downloaded 1 crate (96.2 KB) in 0.33s
  Installing cargo-generate v0.19.0
    Updating crates.io index
  Downloaded crossbeam-deque v0.8.4
  Downloaded gix-hash v0.13.3
  Downloaded gix-ref v0.39.1
  Downloaded faster-hex v0.9.0
  Downloaded crossbeam-epoch v0.9.16
  Downloaded gix-object v0.39.0
  Downloaded memmap2 v0.9.0
  Downloaded crossbeam-utils v0.8.17
  Downloaded gix-config v0.32.1
  Downloaded zerocopy v0.7.31
  Downloaded 10 crates (467.8 KB) in 0.55s
   Compiling proc-macro2 v1.0.70
   Compiling unicode-ident v1.0.12
   Compiling libc v0.2.151
   Compiling autocfg v1.1.0
   Compiling thiserror v1.0.50
   Compiling memchr v2.6.4
   Compiling quote v1.0.33
   Compiling syn v2.0.41
   Compiling cfg-if v1.0.0
   Compiling serde v1.0.193
   Compiling aho-corasick v1.1.2
   Compiling regex-syntax v0.8.2
   Compiling jobserver v0.1.27
   Compiling bitflags v2.4.1
   Compiling cc v1.0.83
   Compiling regex-automata v0.4.3
   Compiling pkg-config v0.3.27
   Compiling once_cell v1.19.0
   Compiling vcpkg v0.2.15
   Compiling thiserror-impl v1.0.50
   Compiling serde_derive v1.0.193
   Compiling bstr v1.8.0
   Compiling num-traits v0.2.17
   Compiling same-file v1.0.6
   Compiling rustix v0.38.28
   Compiling powerfmt v0.2.0
   Compiling time-core v0.1.2
   Compiling gix-trace v0.1.4
   Compiling time-macros v0.2.15
   Compiling deranged v0.3.10
   Compiling walkdir v2.4.0
   Compiling linux-raw-sys v0.4.12
   Compiling itoa v1.0.10
   Compiling num_threads v0.1.6
   Compiling time v0.3.30
   Compiling faster-hex v0.9.0
   Compiling gix-hash v0.13.3
   Compiling openssl-sys v0.9.97
   Compiling libz-sys v1.1.12
   Compiling prodash v26.2.2
   Compiling sha1_smol v1.0.0
   Compiling smallvec v1.11.2
   Compiling lock_api v0.4.11
   Compiling gix-features v0.36.1
   Compiling crunchy v0.2.2
   Compiling ucd-trie v0.1.6
   Compiling parking_lot_core v0.9.9
   Compiling version_check v0.9.4
   Compiling fastrand v2.0.1
   Compiling libssh2-sys v0.3.0
   Compiling getrandom v0.2.11
   Compiling winnow v0.5.28
   Compiling tinyvec_macros v0.1.1
   Compiling static_assertions v1.1.0
   Compiling percent-encoding v2.3.1
   Compiling pest v2.7.5
   Compiling scopeguard v1.2.0
   Compiling tiny-keccak v2.0.2
   Compiling tinyvec v1.6.0
   Compiling pest_meta v2.7.5
   Compiling tempfile v3.8.1
   Compiling regex v1.10.2
   Compiling memoffset v0.9.0
   Compiling lazy_static v1.4.0
   Compiling crossbeam-utils v0.8.17
   Compiling log v0.4.20
   Compiling home v0.5.5
   Compiling gix-path v0.10.1
   Compiling pest_generator v2.7.5
   Compiling unicode-normalization v0.1.22
   Compiling parking_lot v0.12.1
   Compiling gix-fs v0.8.1
   Compiling gix-date v0.8.1
   Compiling btoi v0.4.3
   Compiling libgit2-sys v0.16.1+1.7.1
   Compiling unicode-bidi v0.3.14
   Compiling either v1.9.0
   Compiling itertools v0.10.5
   Compiling idna v0.5.0
   Compiling gix-actor v0.28.1
   Compiling pest_derive v2.7.5
   Compiling gix-tempfile v11.0.1
   Compiling const-random-macro v0.1.16
   Compiling form_urlencoded v1.2.1
   Compiling kstring v2.0.0
   Compiling rand_core v0.6.4
   Compiling smartstring v1.0.1
   Compiling ahash v0.8.6
   Compiling gix-utils v0.1.6
   Compiling gix-validate v0.8.1
   Compiling liquid-derive v0.26.4
   Compiling option-ext v0.2.0
   Compiling ppv-lite86 v0.2.17
   Compiling unicode-width v0.1.11
   Compiling portable-atomic v1.6.0
   Compiling hashbrown v0.14.3
   Compiling anymap2 v0.13.0
   Compiling bitflags v1.3.2
   Compiling doc-comment v0.3.3
   Compiling equivalent v1.0.1
   Compiling nix v0.26.4
   Compiling indexmap v2.1.0
   Compiling rand_chacha v0.3.1
   Compiling console v0.15.7
   Compiling dirs-sys v0.4.1
   Compiling gix-object v0.39.0
   Compiling liquid-core v0.26.4
   Compiling gix-lock v11.0.1
   Compiling crossbeam-epoch v0.9.16
   Compiling const-random v0.1.17
   Compiling url v2.5.0
   Compiling toml_datetime v0.6.5
   Compiling serde_spanned v0.6.4
   Compiling memmap2 v0.9.0
   Compiling cvt v0.1.2
   Compiling fs-err v2.11.0
   Compiling clap_lex v0.6.0
   Compiling paste v1.0.14
   Compiling anyhow v1.0.75
   Compiling anstyle v1.0.4
   Compiling openssl-probe v0.1.5
   Compiling semver v1.0.20
   Compiling heck v0.4.1
   Compiling unicode-segmentation v1.10.1
   Compiling names v0.14.0
   Compiling zerocopy v0.7.31
   Compiling liquid-lib v0.26.4
   Compiling clap_derive v4.4.7
   Compiling clap_builder v4.4.11
   Compiling fs_at v0.1.10
   Compiling gix-ref v0.39.1
   Compiling toml_edit v0.21.0
   Compiling crossbeam-deque v0.8.4
   Compiling dirs v5.0.1
   Compiling rand v0.8.5
   Compiling gix-config-value v0.14.1
   Compiling gix-glob v0.14.1
   Compiling globset v0.4.14
   Compiling is-terminal v0.4.9
   Compiling rhai_codegen v1.6.0
   Compiling path-dedot v3.1.1
   Compiling gix-sec v0.10.1
   Compiling terminal-prompt v0.2.3
   Compiling termcolor v1.4.0
   Compiling number_prefix v0.4.0
   Compiling humantime v2.1.0
   Compiling zeroize v1.7.0
   Compiling shell-words v1.1.0
   Compiling normpath v1.1.1
   Compiling unicode-bom v2.0.3
   Compiling remove_dir_all v0.8.2
   Compiling gix-config v0.32.1
   Compiling dialoguer v0.11.0
   Compiling env_logger v0.10.1
   Compiling rhai v1.16.3
   Compiling indicatif v0.17.7
   Compiling path-absolutize v3.1.1
   Compiling ignore v0.4.21
   Compiling liquid v0.26.4
   Compiling toml v0.8.8
   Compiling clap v4.4.11
   Compiling sanitize-filename v0.5.0
   Compiling git2 v0.18.1
   Compiling auth-git2 v0.5.3
   Compiling cargo-generate v0.19.0
    Finished release [optimized] target(s) in 5m 09s
  Installing /home/corbett/.cargo/bin/cargo-generate
   Installed package `cargo-generate v0.19.0` (executable `cargo-generate`)
</pre>