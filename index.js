
//import {
//    Dimensions,
//    PixelRatio,
//} from 'react-native';


const dpW = 20//Dimensions.get('window').width;
const dpH = 20//Dimensions.get('window').height;
const pixDens = 20//PixelRatio.get();

export const units = {
    PIXELS : 0,
    WPERC : 1,
    HPERC: 2,
    INCH: 3,
    MM: 4,
    DP: 5
}

export class Size {
    constructor(size, type) {
        if (type == units.PIXELS) {
            this.dp = size / pixDens;
        } else if (type == units.WPERC) {
            this.dp = dpW * size / 100;
        } else if (type == units.HPERC) {
            this.dp = dpH * size / 100;
        } else if (type == units.INCH) {
            this.dp = size * 160;
        } else if (type == units.MM) {
            this.dp = size * 160 / 25.4;
        } else if (type == units.DP) {
            this.dp = size;
        } else {
            console.log("unknown type: " + type)
        }
    }

    static pixelsToDP(size) {
        return size / pixDens;
    }

    static widthPercToDP(size) {
        return dpW * size / 100;
    }

    static heightPercToDP(size) {
        return dpH * size / 100;
    }

    static inchToDP(size) {
        return size * 160;
    }

    static mmToDP(size) {
        return size * 160 / 25.4;
    }
    

    getSize() {
        return this.dp
    }
}



module.exports = {
    Size: Size,
    units: units
}