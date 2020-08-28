# [React Native Responsive](https://github.com/alphabeats-works/react-native-responsive)

* **Conversion of units**  - pixels, percentages, dp, inch, mm

## Installation & Usage

```sh
npm install react-native-responsive
```

### Include the Component

```js
import React from 'react'
import { units, Size } from 'react-native-responsive'
```

```
<View style={{
    width:(new Size(50, units.DP)).getSize(),
    height:(new Size(40, units.INCH)).getSize(),
}}
```

### Possible units

```js
units.PIXELS,
units.WPERC,
units.HPERC,
units.INCH,
units.MM,
units.DP,

```