var slf4j_adapter = require('binford-slf4j-adapter');
var slf4j = require('binford-slf4j');
var should = require('should');

describe('log4js-tests', function(){
	beforeEach(function(done){
		slf4j.setLoggerFactory(slf4j_adapter.winston().loggerFactory);

		// this line, while made through the adapter, is specific to the implementation
		// all loggers created with with this configuration
		slf4j.loadConfig({
			level : 3
		});
		done();
	});

	it('should allow logging to the console', function(){
		var l = slf4j.getLogger("test-winston");

		l.should.not.be.empty;

		l.errorm("user1", "first errorm");
		l.warnm("user1", "second msgm");
		l.infom("user1", "third msgm");
		l.debugm("user1", "fourth msgm");
		l.tracem("user1", "fifth msgm");

		l.error("first error");
		l.warn("second msg");
		l.info("third msg");
		l.debug("fourth msg");
		l.trace("fifth msg");
	});
});