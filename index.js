const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '$';

var version = 'Johnny Gat 0.0.1';

var servers = {};

bot.on('ready', () =>{
    console.log('Online!');
    bot.user.setActivity('the didgeridoo', { type: ""}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channel.find(channel => channel.name === "rules");
    if(!channel) return;
    channel.send(`${member}, So you are Julius new boy huh? You do not look like much. Then again, I do not look like I have an eight inch cock, so I guess we are both full of surprises.`)
});

bot.on('message', msg=>{

    if(msg.content === "Johnny, What's up?"){
        msg.reply('Text to be filled');
    }

    if(msg.content === "Vice Kings"){
        msg.react('gun emoji');
    }

    if(msg.content === "the Los Carnales"){
        msg.reply("It's The Carnales or Los Carnales, not The Los Carnales");
    }

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            msg.reply('list of commands: bio, life, chair, website, info, embed, and role.');
            break;
        case 'ls':
            msg.channel.sendMessage('list of commands: bio, chair, website, info, embed, and role.');
            break;
        case 'life':
            msg.reply('Johnny Gat alive? Rumors circulate about the notorious gangsters fate.');
            break;
        case 'bio':
            if (args[1] === 'Johnny'){
            msg.reply('insert Johnny Gat bio');
            }else{
            msg.reply('Who do you want more infomation about?');
        }
            break;
        case 'chair':
            msg.channel.sendMessage('Yeah, aside from almost getting sent to the chair I am fuckin great...hey you look different, you do somethin with your hair?')
             break;
        case 'Vogel':
            msg.reply('https:\\deckers.die');
            break;
        case 'website':
            msg.channel.sendMessage('https://www.saintsrowmods.com/forum/');
            break;
        case 'info':
            if (args[1] === 'version'){
                msg.channel.sendMessage(version);
            }else{
                msg.channel.sendMessage('Insert infomation here');
            }
            break;
        case 'clear':
            if(!args[1]) return msg.reply('error please define')
            msg.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('User Name', msg.author.username, true)
            .addField('Current Server', msg.guild.name, true)
            .addField('Version', version, true)
            .setColor(0xAC33FF)
            .setThumbnail(msg.author.avatarURL)
            .setFooter('Add something later')
            msg.channel.sendEmbed(embed);
            break;
        case 'role':
            if(!msg.member.roles.find(r => r.name === ("Lieutenants" || "Edit"))) return msg.reply('Where are your Adidas?').then(msg => msg.delete(5000));
            if(r => r.name === "Lieutenants") return msg.reply('Head Slav')
            if(r => r.name === "Edit") return msg.reply('Mini Slav')
            break;
        case 'react':
            msg.react(" ");
            break;
        case 'template':
            msg.channel.send('this is going to your message').then(msg.react('emoji'));
            break;
        
    }
})

bot.login(token);
