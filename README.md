# Next.js Boilerplate for FiveM NUIs
This boilerplate is very bare bones, so it's easy to edit and add new things.
<br>
*Inspired by [OMikkels boilerplate](https://github.com/OMikkel/nextjs-omikkel-boilerplate).*

## Table of Contents
- [Features](#features)
- [Usage](#usage)
  - [SendNuiCallback to the FiveM Client](#sendnuicallback-to-the-fivem-client)
  - [RegisterNUICallback on the FiveM Client](#registernuicallback-on-the-fivem-client)
  - [SendNUIMessage to the Next.js App](#sendnuimessage-to-the-nextjs-app)
- [Guide](#guide)
- [License](#license)

## Features
- [zustand](https://github.com/pmndrs/zustand) for easy state-management.
- [TailwindCSS](https://tailwindcss.com) for styling the pages.
- FiveM Integration

## Usage
### SendNuiCallback to the FiveM Client
Gets data from the FiveM Client.
<br>
**Parameters**
- `endpoint` (Type: String): A string that points to the intended endpoint, e.g., "whoami".

- `data` (Type: Object): An object with the data to be sent (Optional when not using a callback).

- `cb` (Type: Function): A callback that returns the result of the function.

**Next.js app (With Callback)**
```js
SendNuiCallback('whoami', {}, (res) => {
  // do something with the data
})
```
**Next.js app (Without Callback)**
```js
SendNuiCallback('whoami')
```

### RegisterNUICallback on the FiveM Client
Registers a callback on the FiveM Client to call from the UI.
<br>
**Parameters**
- `endpoint` (Type: String): A string that points to the intended endpoint, e.g., "whoami".

- `data` (Type: Object): An object with the data recieved from the SendNuiCallback.

- `cb` (Type: Function): A callback that returns some data to the SendNuiCallback.

**FiveM Script (Client)**
```lua
RegisterNUICallback("whoami", function(data, cb)
    cb('fivem client')
end)
```

### SendNUIMessage to the Next.js App
Sends data to the UI from the FiveM Client.
<br>
**Parameters**
- `type` (Type: String): A string that specifies the type of update to perform. It has the following preset values:

  - `showUI`: Displays the UI.
  - `hideUI`: Hides the UI and triggers a callback to unfocus the UI.

- `data` (Type: Object): An object with the data to send.

**FiveM Script (Client)**
```lua
SendNUIMessage({
  type = "showUI",
  data = {
    value = "FiveM Value"
  }
})
```

## Guide
Clone this repository.
```
git clone https://github.com/Zuntie/nextjsfivem-boilerplate.git
```
<br>

**RESOURCENAME** is your FiveM Script's name. You can rename this to whatever.
<br>
Make sure you also change **RESOURCENAME** in `nextapp/.env` to match the new name.
<br>
<br>
> [!IMPORTANT]
> Make sure the Next.js application is always running, or the FiveM NUI will stop working.
> By default the Next.js application is listening on **port 3000**.

## License
MIT License

Copyright (c) 2023 [Zuntie](https://github.com/Zuntie)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
