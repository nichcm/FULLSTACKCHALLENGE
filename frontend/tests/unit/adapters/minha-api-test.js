import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | minha api', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:minha-api');
    assert.ok(adapter);
  });
});
