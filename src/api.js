import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToNewRounds(cb) {
    socket.on('newRound', payload => { cb(null,payload) });
    socket.emit('subscribeToNewRounds');
}

export { subscribeToNewRounds };