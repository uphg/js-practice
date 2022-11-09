import './style.css'
import javascriptLogo from './javascript.svg'
import { Emitter, useEmitter } from './src/emitter'
import './src/bind'
import { getSelectedTree } from './src/getSelectedTree'

const a =  [{
  label: '1',
  children: [{
    label: '1-1',
    children: [{
      label: '1-1-1'
    }]
  }]
}, {
  label: '2',
  children: [{
    label: '2-1',
    children: [{
      label: '2-1-1'
    }]
  }, {
    label: '2-2',
    children: [{
      label: '2-2-1'
    }]
  }]
}, {
  label: '3',
  children: [{
    label: '3-1',
    children: [{
      label: '3-1-1'
    }]
  }, {
    label: '3-2',
    children: [{
      label: '3-2-1'
    }]
  }]
}]

// const emitter = new Emitter()
// const emitter2 = useEmitter()

// // class Emitter
// emitter.on('update-value', (value) => {
//   console.log(value)
// })
// console.log('# class Emitter')
// emitter.emit('update-value', 'hi')
// emitter.emit('update-value', 'hello')


// // useEmitter
// emitter2.on('update-value', (value) => {
//   console.log(value)
// })
// console.log('# useEmitter')
// emitter2.emit('update-value', 'hi')
// emitter2.emit('update-value', 'hello')


// // useEmitter clear
// emitter2.on('run', (params) => {
//   console.log('run - params')
//   console.log(params)
// })
// emitter2.on('play', (params) => {
//   console.log('play - params')
//   console.log(params)
// })
// emitter2.emit('run', 1)
// emitter2.emit('run', 2)
// emitter2.emit('play', 233)
// emitter2.clear('run')
// emitter2.emit('run', 500)


// // bind2
// console.log('# bind2')
// const obj1 = {
//   x: 42,
//   getX() {
//     return this?.x;
//   }
// };

// const unboundGetX = obj1.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind2(obj1);
// console.log('boundGetX')
// console.log(boundGetX());
// // expected output: 42


const p1 = getSelectedTree(a, (item) => item.label === '2-2-1')

console.log('p1')
console.log(p1)

const a2 = [1, 2, 3, 4, 5]

console.log('\n# break')

for (const item of a2) {
  if (item === 3) {
    break
  }
  console.log('item')
  console.log(item)
}

console.log('\n# continue')

for (const item of a2) {
  if (item === 3) {
    continue
  }
  console.log('item')
  console.log(item)
}