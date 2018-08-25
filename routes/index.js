const fs = require('fs');
const path = require('path');
const claptrap = require('../B2ClaptrapRingtones');

// holder to a VoiceConnection once the bot has joined channel
let voice;

const ready = client => {
  return () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(
      `Bot has started, with ${client.users.size} users, in ${
        client.channels.size
      } channels of ${client.guilds.size} guilds.`
    );
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the 'ClientUser'.
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  };
};

const guildCreate = client => {
  return guild => {
    // This event triggers when the bot joins a guild.
    console.log(
      `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${
        guild.memberCount
      } members!`
    );
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  };
};

const guildDelete = client => {
  return guild => {
    // This event triggers when the bot leaves a guild.
    console.log(
      `Leaving guild: ${guild.name} (id: ${guild.id}). This guild has ${
        guild.memberCount
      } members!`
    );
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  };
};

// Joins the channel the user is on
const join = message => {
  // Only try to join the sender's voice channel if they are in one themselves
  if (!message.member.voiceChannel) {
    return message.reply('You need to join a voice channel first!');
  }

  return message.member.voiceChannel
    .join()
    .then(connection => {
      // Connection is an instance of VoiceConnection
      message.reply('I have successfully connected to the channel!');
      voice = connection;

      return connection;
    })
    .catch(console.log);
};

const play = async message => {
  const randomClaptrap = claptrap.random();
  const mp3 = path.join(__dirname, '../B2ClaptrapRingtones', randomClaptrap);
  console.log('Claptrap sound', randomClaptrap);
  console.log('Playing mp3', mp3);

  await message.reply('Playing random sound! ' + randomClaptrap);
  // await message.reply(`Playing mp3 ${mp3}`);

  const dispatcher = voice.playFile(mp3);

  dispatcher.on('start', async () => {
    // The song has finished
    await message.reply(`${randomClaptrap} has started ...`);
    console.log('Song has started');
  });

  dispatcher.on('end', async reason => {
    // The song has finished
    await message.reply(`${randomClaptrap} has ended ...`);
    console.log('Song has ended', reason);
  });

  dispatcher.on('error', e => {
    // Catch any errors that may arise
    console.log(e);
  });

  dispatcher.setVolume(0.5);
};

const onMessage = client => {
  // This event triggers when a message is posted on the given server
  return async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (message.content === '!join') {
      return await join(message);
    }

    if (message.content === '!claptrap') {
      if (!voice) {
        voice = await join(message);
      }

      return play(message);
    }
  };
};

module.exports = {
  ready,
  guildCreate,
  guildDelete,
  onMessage,
  join,
  play
};
