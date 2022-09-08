// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:
// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

//P: given 3 arrays, fighters list in type string, position in type number and moves in type string
//R: return the character selected after each move, starting at the position given
//E:

function characterSelect(fighters, position, moves) {
    let characters = []
    moves.forEach((move) => {
        if (move === 'up') {
            if (position[0] !== 0) {
                position[0] = 0
            }
        } else if (move === 'down') {
            if (position[0] === 0) {
                position[0] = 1
            }
        } else if (move === 'left') {
            if (position[1] === 0) {
                position[1] = 5
            } else {
                position[1] = position[1] - 1
            }
        } else {
            if (position[1] === 5) {
                position[1] = 0
            } else {
                position[1] = position[1] + 1
            }
        }
        characters.push(fighters[position[0]][position[1]])
    })
    return characters
}


let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
console.log(characterSelect(fighters, [0, 0], ['up', 'left', 'right', 'left', 'left']))//['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
console.log(characterSelect(fighters, [0, 0], ["left", "left", "left", "left", "left", "left", "left", "left"]))//['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']
console.log(characterSelect(fighters, [0, 0], ["up", "left", "down", "right", "up", "left", "down", "right"]))//['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']