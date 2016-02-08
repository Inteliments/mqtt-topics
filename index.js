'use strict';

class MqttTopics {
  constructor() {    
    this.topicSeparator = '/';
  }
  
  match(topicFilter, topicName) {
    var patternSegments = topicFilter.split(this.topicSeparator);
    var topicSegments = topicName.split(this.topicSeparator);
    
    for (var i = 0; i < topicSegments.length; i++) {
      var topicSegment = topicSegments[i];
      var patternSegment = patternSegments[i];
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
    
    if(topicSegments.length !== patternSegments.length)
      return false;
    
    return true;
  }
}

module.exports = new MqttTopics();