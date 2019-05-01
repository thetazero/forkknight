let keyMap = {
    w: 'up',
    s: 'down',
    d: 'right',
    a: 'left',
    " ": 'space'
}

function keyDownHandler(e) {
    if (keyMap[e.key]) {
        input[keyMap[e.key]] = true
    }
}

function keyUpHandler(e) {
    if (keyMap[e.key]) {
        input[keyMap[e.key]] = false
    }
}

class Map {
    constructor(floorHue, width, height) {
        this.floorHue = floorHue;
        this.width = width;
        this.height = height;
        this.floorWidth = 25;
    }

    draw() {
        let xOff = Math.abs(this.width / 2)
        let yOff = Math.abs(this.height / 2)
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.width; y++) {
                ctx.fillStyle = `hsl(${this.floorHue},50%,${50+(x+y)%2*10}%)`
                rect((x - xOff) * this.floorWidth, (y - yOff) * this.floorWidth, this.floorWidth, this.floorWidth)
            }
        }
    }
}

class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 20;
    }

    draw() {
        ctx.fillStyle = "#666"
        circle(this.x, this.y, this.width)
        ctx.fillStyle = "#555"
        let dir = {
            y: !!input.up - !!input.down,
            x: !!input.right - !!input.left
        }
        etriangle(this.x + this.width / 2 * Math.sin(Math.atan2(dir.x, dir.y)), this.y - this.width / 2 * Math.cos(Math.atan2(dir.x, dir.y)), 20, Math.atan2(dir.x, dir.y))
    }
}