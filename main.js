import './style.css'
import javascriptLogo from './javascript.svg'
import { Emitter, useEmitter } from './src/emitter'
import './src/bind'

const emitter = new Emitter()
const emitter2 = useEmitter()

// class Emitter
console.log('# class Emitter')
emitter.emit('update-value', 'hi')
emitter.emit('update-value', 'hello')
emitter.on('update-value', (value) => {
  console.log(value)
})

// useEmitter
console.log('# useEmitter')
emitter2.emit('update-value', 'hi')
emitter2.emit('update-value', 'hello')
emitter2.on('update-value', (value) => {
  console.log(value)
})

// useEmitter clear
emitter2.emit('run', 1)
emitter2.emit('run', 2)
emitter2.emit('play', 233)
emitter2.clear('run')
emitter2.on('run', (params) => {
  console.log('run - params')
  console.log(params)
})
emitter2.on('play', (params) => {
  console.log('play - params')
  console.log(params)
})

// bind2
console.log('# bind2')
const obj1 = {
  x: 42,
  getX() {
    return this?.x;
  }
};

const unboundGetX = obj1.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind2(obj1);
console.log('boundGetX')
console.log(boundGetX());
// expected output: 42
