# MQTT Topics 
> Tool to match MQTT topic name against topic filter regarding [MQTT specification](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718106).

## Installation

```sh
npm install mqtt-topics --save
```

## Example

```js
var MqttTopics = require('mqtt-topics');
var result = MqttTopics.match('sport/tennis/+/score', 'sport/tennis/player1/score');

console.log(result);
// Outputs 'true' to the console
```

## License

MIT