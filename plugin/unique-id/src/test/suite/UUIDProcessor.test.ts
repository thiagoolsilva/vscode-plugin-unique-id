
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import { UUIDProcessor } from '../../command/commands/uuid/processor/UUIDProcessor';

suite('UUID Processor', () => {

	test('Test if uuid was created', () => {
    const processor = new UUIDProcessor();

    const id = processor.createUUid();
    assert.notEqual(id, '');
    assert.notEqual(id, undefined);
	});

  test('Test if error message was created', () => {
    const processor = new UUIDProcessor();

    processor.showErrorMessage();
	});
});
