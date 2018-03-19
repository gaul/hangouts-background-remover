// Copyright 2018 Andrew Gaul <andrew@gaul.org>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

function listener(details) {
    let url = new URL(details.url);
    if (url.hostname == "www.gstatic.com" && url.pathname.startsWith("/chat/hangouts/bg/")) {
        return {cancel: true};
    } else if (url.hostname == "lh3.googleusercontent.com" && url.pathname.lastIndexOf("/") == 0) {
        return {cancel: true};
    }
    return null;
}

browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["*://www.gstatic.com/chat/hangouts/bg/*", "*://lh3.googleusercontent.com/*"], types: ["image"]},
    ["blocking"]
);
