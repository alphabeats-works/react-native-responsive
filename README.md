# [rn-responsive-units](https://github.com/alphabeats-works/react-native-responsive)

* **Conversion of units**  - pixels, percentages, dp, inch, mm

## Installation & Usage

```sh
npm install react-native-responsive
```

### Include all the Components

```js
import React from 'react'
import { units, Size } from 'rn-responsive-units'
```

### Get the desired units by one of the 2 conversion methods:
1. Make objects of type *Size* and get it's DP value
```js
w = (new Size(50, units.DP)).getSize();
h = (new Size(40, units.INCH)).getSize()
<View style = {{
    width: w,
    height: h,
}}
```
2. Use the static methods of *Size* to get the DP value.
```js
w = Size.mmToDP(50);
h = Size.heightPercToDP(20);
<View style = {{
    width: w,
    height: h,
}}
```

### Possible units and their respective methods

```js
units.PIXELS, pixelsToDP(size);
units.WPERC, widthPercToDP(size);
units.HPERC, heightPercToDP(size);
units.INCH, inchToDP(size);
units.MM, mmToDP(size);
units.DP, //can be ommitted since it's the base unit

```

### Some documentation

React uses density-indipendent pixels (DP, pronouncend "dips") as main units. DP is a unit which is created to consistenly display elements on screens with various pixel densities. This package can convert one to another