const Time = require('Time')
const Instruction = require('Instruction')
const show = Time.ms.lt(5000);
Instruction.bind(show, 'open_mouth')
