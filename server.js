// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const { CommandoClient } = require('discord.js-commando');
const { RichEmbed } = require('discord.js')
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '%',
    unknownCommandResponse: false,
    owner: '330332878070218754',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['general', 'General']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
  client.channels.get("532594516818133015").send(`**[LEM KUUJA]** Bot is online!`)
   client.channels.get("532594516818133015").send(new RichEmbed()
  .setTitle(`**Lem Kuuja** Information`)
  .setDescription(`**Prefix Selected**: ${client.commandPrefix}
  **Owner(s)**: ${client.users.get("330332878070218754").username}`)
  .setColor(`BLUE`))
    client.user.setActivity(`you`, {type:"watching"});
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


client.login('NTI4OTU0NTc2NDYwODQwOTYx.DxQgFQ.Sltvr1aeWKN4xXrP4ZvCEFKEZNk'); // this token don't work anymore!
