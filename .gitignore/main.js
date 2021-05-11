const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '_';

const fs = require('fs');

client.on('ready', () => {
    console.log(`En ligne`)
    client.user.setActivity('Tuic242_ le coder (sa fait peur je vous jure)', ({type: "WATCHING"}))
})


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

client.login(process.env.TOKEN)
