const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'about', memberName: 'about',
      description: 'Do you want know about LemKuuja?', group: 'general',
      guildOnly: true,
    });
  }
  run(msg) {
 msg.say(new RichEmbed()
        .setTitle(`:wave: Hello, i'm LemKuuja.`)
        .setDescription(`**LemKuuja** was created to **moderate** the bot list **Discord Bots Club**, created by **Lil Magik**. You can do awesome things with me, or. I can do awesome things! Like **lockdown a chat**, **provide to you advanced logs** and many more functions that you will love. The staff of **Discord Bots Club**.`)
        .addField(`Command Reactions`, `If I react your message with <:no:524976322930278432>, it means that **Action not avalible at this moment**.
If I react your message with <:yes:524976323861676052>, it means that **Action was succesfully executed**.
If I react your message with <:privated:524976336029220866> it means that **You don't have permissions**.`)
        )   
  }
}