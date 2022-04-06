const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", (bot) => {
  console.log(`${bot.user.username} is ready`);

  client.user.setActivity(`.help first command`, {
    type: "WATCHING",
  });
});

client.on("messageCreate", async (message) => {
  if (message.channel.type === "dm" || message.author.bot) return;

  let prefix = '!';

  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()

  if(command === 'start'){
    message.channel.send("Welcome to Dicsyto")
  }

  if(command === 'help'){
    message.reply(`this is a test`)
  }

  if(command !== 'start' && command !== 'help'){
    message.reply('command not found')
  }
});

client.login(`OTYxMDkzMDA1MDUyMzUwNTQ1.Ykz9nA.AzeSgJybpotXxbiloVJ_OBF8nOU`)