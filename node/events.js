const Emmiter = require('events')

const emmiter = new Emmiter();

const callback = (data) => {
    console.log('Вы ' + data)
}

emmiter.on('message', callback)

const text = 'text';

if(text) {
    emmiter.emit('message', `прислали сообщение ${text}`)   
} else emmiter.emit('message', `не прислали сообщение`)   
