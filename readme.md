# b2claptrap-discord-bot

Just a testing bot to learn things.

## Description

This bot provides few commands to join a channel and play local mp3 in a given
voice channel. It currently enables you to play a random Claptrap sound from
Borderlands 2.

Claptrap Sounds comes from
[B2ClaptrapRingstones](https://majornelson.com/2012/11/21/borderlands-2-claptrap-sounds/)
and are included in this repository for convenience.

*Note: These audio clips are provided for personal, non-commercial use only.*

## Get Started

Make sure to have latest node / npm from https://nodejs.org/en/ (current version: 10.5.0) installed. Then:

        git clone <thisrepo>
        cd b2claptrap-discord-bot

        npm install
        node app.js

`TODO: prism-media/src/transcoder/ffmpeg replace .ffmpegPath();` Meanwhile, you
can install ffmpeg manually with (example on Ubuntu) `sudo apt-get install
ffmpeg`.

Then you need to create a discord application using
https://discordapp.com/developers/applications/ and it to your server. You can
check [this wiki page from
jagrosh/MusicBot](https://github.com/jagrosh/MusicBot/wiki/Adding-Your-Bot-To-Your-Server)
for further details on how to set it up.

Once you got your application token, you need to create a `./config.json` file
with something like:

```js
{
  "token"  : "YourToken"
}
```

## Commands

- `!join` Joins the discord channel the current user is on.
- `!claptrap` Plays a random claptrap sound.

