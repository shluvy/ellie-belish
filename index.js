
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  
  if (message.content === 'avatar') {
    
    message.reply(message.author.avatarURL);
  }
});



client.login('NjAxMjcyMTcyNDA4ODY0NzY4.XTVbvw.8RHoLCQjKpYc3wtIToq0CysV4z4');
