# device-orientation
monitor mobile devices orientation

## usage
```js
  <script src="./dist/device-orientation.js"></script>
  <script>
    const deviceOrientation = new DeviceOrientation

    deviceOrientation.onChange = function (orientation) {
      console.log('orientation', orientation) // landscape or portrait
    }
  </script>
```