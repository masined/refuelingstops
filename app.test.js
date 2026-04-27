import { describe, test, it, expect } from "vitest"
import { refuelingStops } from "./app"

describe('refuelingStops', () => {
  it('Should execute all tests',()=>{
    // Arrange Act Assert
    const stations = [
        [1,2],
        [3,4],
        [5,6],
        [7,8],
        [9,10]
    ]
    expect(refuelingStops(10, 2, stations)).toBe(3)
  })
})
