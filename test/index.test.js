const { describe, test } = require("node:test");
const assert = require("node:assert");

const {musik,createMusicFiles} = require("../index");

describe("musik data", () => {
  test("should contain 3 artists", () => {
    assert.strictEqual(musik.length,3);
});
  test("each artist should have 5 songs", () => {
    musik.forEach((artis) => {
    assert.strictEqual(artis.lagu.length,5);
    });
  });
  test("artist name should be string", () => {
    musik.forEach((artis) => {
    assert.strictEqual(typeof artis.nama,"string");
    });
  });
    test("lagu should be array", () => {
    musik.forEach((artis) => {
    assert.ok(Array.isArray(artis.lagu));
    });
  });
    test("createMusicFiles should be function", () => {
     assert.strictEqual(typeof createMusicFiles,"function");
    });
});