import path from 'path';

const rootDir = path.resolve(__dirname, '../../');

const config = {
	// resolves from test to snapshot path
	resolveSnapshotPath: (testPath: string, snapshotExtension: string) => {
		if (testPath.includes(rootDir)) {
			/**
			 * Add snapshots result file to the root
			 */

			const splitted = testPath.split('');
			splitted.splice(rootDir.length, 0, '\\__snapshots__');
			const result = splitted.join('') + snapshotExtension;

			return result;
		}

		return testPath.replace('__tests__', '__snapshots__') + snapshotExtension;
	},

	// resolves from snapshot to test path
	resolveTestPath: (snapshotFilePath: string, snapshotExtension: string) => {
		return snapshotFilePath
			.replace('__snapshots__', '__tests__')
			.slice(0, -snapshotExtension.length);
	},

	// Example test path, used for preflight consistency check of the implementation above
	testPathForConsistencyCheck: '/some/__tests__/example.test.js',
};

export default config;
