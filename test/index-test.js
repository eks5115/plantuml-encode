import {describe, it} from "mocha";
import assert from 'assert';

const plantumlEncode = require('../lib/plantuml-encode.js');

describe('plantuml-encode',  () => {
  describe('#encode()', () => {
    it('should encode "Bob -> Alice : hello"', () => {
      const encoded = plantumlEncode.encode('Bob -> Alice : hello');
      assert.equal('SyfFKj2rKt3CoKnELR1Io4ZDoSa70000', encoded);
    })
  })
});