if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>n(e,t),o={module:{uri:t},exports:a,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FJgsyf4kE2Zr7KVMrPkKg/_buildManifest.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/FJgsyf4kE2Zr7KVMrPkKg/_middlewareManifest.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/FJgsyf4kE2Zr7KVMrPkKg/_ssgManifest.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/chunks/main-bc4b0320a9a4651f.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/chunks/pages/_app-7611051f39b2090f.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/chunks/pages/index-e76563402c18bc95.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/_next/static/css/61492db6d36ad36f.css",revision:"FJgsyf4kE2Zr7KVMrPkKg"},{url:"/favicon.png",revision:"151d623791c15be83db4adb9df16b54b"},{url:"/icons/icon-128x128.png",revision:"24ef1587ab4f202e8a4f75c7507f8cc1"},{url:"/icons/icon-144x144.png",revision:"3de430a141dcd12c5a2efd528540e097"},{url:"/icons/icon-152x152.png",revision:"3f69feb1497530459dc6351a14e2e841"},{url:"/icons/icon-16x16.png",revision:"7c28e92f0b2f5841297a8488fa2be545"},{url:"/icons/icon-192x192.png",revision:"e019c4162c524dcdcef2ad364b24c2f4"},{url:"/icons/icon-32x32.png",revision:"1f3e43d28dc2a2d21cc70d5a27c11aff"},{url:"/icons/icon-384x384.png",revision:"50fcf224a113c863d07ae597e46c6ed0"},{url:"/icons/icon-512x512.png",revision:"30e096985ae83f21d22657fe793c8bb4"},{url:"/icons/icon-72x72.png",revision:"43de885bb2fbc42d852217a1f6e0fc6f"},{url:"/icons/icon-96x96.png",revision:"c29b679289aa10719913d4c6f3a0e068"},{url:"/manifest.json",revision:"06e26ca1e74de8fca9199178776d41e6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));