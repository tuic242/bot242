const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '_';

const fs = require('fs');


client.on('ready', () => {
    console.log(`Bot Actif BB`)
    client.user.setActivity("Tuic242_", {
    type:"STREAMING",
    url: "https://www.twitch.tv/tuic242_"
      });
})

client.on('guildMemberAdd', (member) => {
    let channelID = '792002090800644116';
    if(member.guild.id != '721298461420421131') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('Bienvenue 👋 !')
    .setDescription(`<@${member.user.id}> Salut ;) Hésite pas a check le <#764436186076282942> pour avoir accès au discord !`)
    .setColor('#7300ff')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})

client.on('guildMemberRemove', (member) => {
    let channelID = '792002090800644116';
    if(member.guild.id != '721298461420421131') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('A Bientot !')
    .setDescription(`<@${member.user.id}> Ben aurevoir :(`)
    .setColor('#7300ff')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})

client.login(process.env.TOKEN)
