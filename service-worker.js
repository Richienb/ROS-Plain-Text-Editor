/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_config.yml",
    "revision": "474f14a024e368440e2f95769cff7bb4"
  },
  {
    "url": "404.html",
    "revision": "a9ad7186d668528581b6f5f9e578ce8b"
  },
  {
    "url": "config.txt",
    "revision": "b0eee78989b2e84093f5080802103273"
  },
  {
    "url": "favicon.ico",
    "revision": "3c5abbe38ec0c53ddab8a2d42908f3ee"
  },
  {
    "url": "index.html",
    "revision": "a42ea92a339f137f63998427804c0abf"
  },
  {
    "url": "manifests/browserconfig.xml",
    "revision": "666d7cb5d190ef064554843604ff3848"
  },
  {
    "url": "manifests/site.webmanifest",
    "revision": "76e7392e3758847dc0a2f57361f4b8b3"
  },
  {
    "url": "no-javascript.html",
    "revision": "819ac091369ecf7a4055ed487fe5202a"
  },
  {
    "url": "README.md",
    "revision": "50afd0800c5e491bccc179e918a50702"
  },
  {
    "url": "resources/android-chrome-36x36.png",
    "revision": "478e3a0081dadf64b22ab6d4b59a4ca4"
  },
  {
    "url": "resources/android-chrome-48x48.png",
    "revision": "e6f2f1d583540558a8479481c434082a"
  },
  {
    "url": "resources/android-chrome-72x72.png",
    "revision": "013ad6ccc0954fde3a85edf04d41d03f"
  },
  {
    "url": "resources/android-chrome-96x96.png",
    "revision": "4c4bcd2f4cac5d44cad93f22972f2305"
  },
  {
    "url": "resources/mstile-150x150.png",
    "revision": "cc1a6d612f03cba82285cf5dcce6b92f"
  },
  {
    "url": "workbox-config.js",
    "revision": "1667d76c538bdf070575a34a89885767"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
