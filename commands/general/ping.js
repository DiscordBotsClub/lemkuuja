const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'role-ping', memberName: 'role-ping',
      description: 'Get a ping role for announcements.', group: 'general',
      guildOnly: true,
    });
  }
  run(msg, {args}) {
    if(msg.member.roles.find("name", "Ping")) {
      msg.say("I removed you from the **Announcements Role**.")
      msg.member.removeRole(msg.guild.roles.find('name', 'Ping').id)
    } else {
      msg.say("I added you to the **Announcements Role**.")
      msg.member.addRole(msg.guild.roles.find('name', 'Ping').id)
    }

}
  
}