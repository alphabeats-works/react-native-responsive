
import {
    Dimensions,
    PixelRatio,
} from 'react-native';


const dpW = Dimensions.get('window').width;
const dpH = Dimensions.get('window').height;
const pixDens = PixelRatio.get();

const units = {
    PIXELS : 0,
    WPERC : 1,
    HPERC: 2,
    INCH: 3,
    MM: 4,
    DP: 5
}

class Size {
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

    getSize() {
        return this.dp
    }
}