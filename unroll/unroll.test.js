const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  let smallSquare = [
    [1,2,3],
    [8,9,4],
    [7,6,5]
  ];

  let largeSquare = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ]

  it("should return unrolled array with small array", ()=>{
    expect(unroll(smallSquare)).toEqual([1,2,3,4,5,6,7,8,9])
  });

  it("should return unrolled array with larger array", ()=>{
    expect(unroll(largeSquare)).toEqual(
      [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13])
  });

});

