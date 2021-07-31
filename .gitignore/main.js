const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '_';

const fs = require('fs');

client.on('ready', () => {
  console.log('On');
  client.user.setActivity("Tuic242_", {
    type:"STREAMING",
    url: "https://www.twitch.tv/tuic242_"
});


client.on('guildMemberAdd', (member) => {
    let channelID = '792002090800644116';
    if(member.guild.id != '721298461420421131') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('Bienvenue 👋 !')
    .setDescription(`${member.user.tag} Bonjours a toi ! Hesite pas aller lire le reglement.`)
    .setColor('#FFFFFF')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})
client.on('guildMemberRemove', (member) => {
    let channelID = '792002090800644116';
    if(member.guild.id != '721298461420421131') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('A Bientot !')
    .setDescription(`${member.user.tag} Quitte le serveur.`)
    .setColor('#FFFFFF')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})

client.on('message', function (message) {
    if (message.content === 'REGL1') {
        let embed = new Discord.MessageEmbed()
        .setTitle("__**Test**__")
        .setColor('#FFFFFF')
        .setDescription("Ceci est un test")
        .setTimestamp()
        client.message.channel.send({embed});
    }
})

client.login(process.env.TOKEN)
