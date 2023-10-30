//Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class CodingChallenge {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
}

console.log(CodingChallenge.getVolumeOfCuboid(1,2,2)) //should output 4
console.log(CodingChallenge.getVolumeOfCuboid(6.3,2,5)) //should output 63