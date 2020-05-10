class Tile {
    constructor(color, shape) {
        switch (color) {
            case 'blue':
            case 'green':
            case 'orange':
            case 'purple':
            case 'red':
            case 'yellow':
                this.color = color;
                break;
            default:
                throw new Error('Cannot create a Tile with given color: ' + color);
        }

        switch (shape) {
            case 'asterisk':
            case 'circle':
            case 'diamond':
            case 'jack':
            case 'plus':
            case 'square':
                this.shape = shape;
                break;
            default:
                throw new Error('Cannot create a Tile with given shape: ' + shape);
        }
    }
}

module.exports = Tile;