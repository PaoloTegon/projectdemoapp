/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["projectdemoapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
