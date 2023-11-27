const { Testing } = require('cdktf')
require('ts-node').register()

const MyStack = require('./stack')


const app = Testing.app();

const stack = new MyStack(app, 'test', {
    organization: 'test',
    region: 'us-east-1',
    subs: ['test'],
})

const synthesized = Testing.synth(stack)

console.log(synthesized)
