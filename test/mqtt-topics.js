'use strict';

var assert = require('chai').assert;
var MqttTopics = require('../index.js');

var topicFilter1 = 'sport/tennis/+/score';
var topicFilter2 = 'sport/tennis/#';
var topicFilter3 = 'sport/tennis/+/score/#';
var topicFilter4 = '+/+';

describe(`Topic filter ${topicFilter1}`, function() {  
  var topicName1 = 'sport/tennis/player1/score';
	it(`should match topic name ${topicName1}`, function() {
		assert.equal(MqttTopics.match(topicFilter1, topicName1), true, `'${topicName1}' does not match '${topicFilter1}'`);
	});
    
  var topicName2 = 'sport/tennis/player1';
	it(`should not match topic name ${topicName2}`, function() {
		assert.equal(MqttTopics.match(topicFilter1, topicName2), false, `'${topicName2}' matches '${topicFilter1}'`);
	});
});

describe(`Topic filter ${topicFilter2}`, function() {
  var topicName1 = 'sport/tennis/player1/score/';  
	it(`should match topic name ${topicName1}`, function() {
		assert.equal(MqttTopics.match(topicFilter2, topicName1), true, `'${topicName1}' does not match '${topicFilter2}'`);
	});
  
  var topicName2 = 'sport';  
	it(`should not match topic name ${topicName2}`, function() {
		assert.equal(MqttTopics.match(topicFilter2, topicName2), false, `'${topicName2}' matches '${topicFilter2}'`);
	});
  
  var topicName3 = 'sport/tennis';  
	it(`should match topic name ${topicName3}`, function() {
		assert.equal(MqttTopics.match(topicFilter2, topicName3), true, `'${topicName3}' does not match '${topicFilter2}'`);
	});
});

describe(`Topic filter ${topicFilter3}`, function() {
  var topicName1 = 'sport/tennis/player1/score/wimbledon/men';  
	it(`should match topic name ${topicName1}`, function() {
		assert.equal(MqttTopics.match(topicFilter3, topicName1), true, `'${topicName1}' does not match '${topicFilter3}'`);
	});
});

describe(`Topic filter ${topicFilter4}`, function() {
  var topicName1 = 'sport/tennis';  
	it(`should match topic name ${topicName1}`, function() {
		assert.equal(MqttTopics.match(topicFilter4, topicName1), true, `'${topicName1}' does not match '${topicFilter4}'`);
	});
  
  var topicName2 = 'sport/';  
	it(`should match topic name ${topicName2}`, function() {
		assert.equal(MqttTopics.match(topicFilter4, topicName2), true, `'${topicName2}' does not match '${topicFilter4}'`);
	});
  
  var topicName3 = 'sport';  
	it(`should not match topic name ${topicName3}`, function() {
		assert.equal(MqttTopics.match(topicFilter4, topicName3), false, `'${topicName3}' matches '${topicFilter4}'`);
	});
});
