import { clearObject } from "../clearObject";

describe("clearObject tests", () => {
  it('Should return empty object', () => {
    const object = {};

    clearObject(object);

    expect(object).toEqual({})
  }) 

  it('Should clear all fields in object', () => {
    const object = {
            age: 18,
            name: 'John',
    };

    clearObject(object);

    expect(object).toEqual({})
  })
})