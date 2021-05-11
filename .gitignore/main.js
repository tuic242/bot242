const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '_';

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`En ligne`)
    client.user.setActivity('Tuic242_ le coder (sa fait peur je vous jure)', ({type: "WATCHING"}))
})


client.on('guildMemberAdd', (member) => {
    let channelID = '613703562060496922';
    if(member.guild.id != '354263712430948354') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('Bienvenue 👋 !')
    .setDescription(`${member.user.tag} Bonjours a toi ! Hesite pas aller lire le reglement.`)
    .setColor('#FFFFFF')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})
client.on('guildMemberRemove', (member) => {
    let channelID = '613703562060496922';
    if(member.guild.id != '354263712430948354') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('A Bientot !')
    .setDescription(`${member.user.tag} Quitte le serveur.`)
    .setColor('#FFFFFF')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})

client.login(process.env.TOKEN)
