'use strict';

class MqttTopics {
  constructor() {    
    this.topicSeparator = '/';
  }
  
  match(topicFilter, topicName) {
    var filterSegments = topicFilter.split(this.topicSeparator);
    var nameSegments = topicName.split(this.topicSeparator);
    
    for (var i = 0; i < filterSegments.length; i++) {
      var topicSegment = nameSegments[i];
      var patternSegment = filterSegments[i];
      var match = false;
      
      if(topicSegment === patternSegment)
        match = true;      
      
      if(patternSegment === '+')
        match = true;
            
      if(patternSegment === '#') 
        return true;      
      
      if(match === false) 
        return false;      
    } 
    
    if(nameSegments.length !== filterSegments.length)
      return false;
    
    return true;
  }
}

module.exports = new MqttTopics();