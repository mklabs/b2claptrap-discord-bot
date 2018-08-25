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

Then, you need to download
[B2ClaptrapRingstones](https://majornelson.com/2012/11/21/borderlands-2-claptrap-sounds/).
Unzip it at the root of the repository in the `B2ClaptrapRingstones` directory.
MP3s needs to be right along `B2ClaptrapRingstones/index.js` file.

TODO: prism-media/src/transcoder/ffmpeg replace .ffmpegPath();

## Commands

- `!join` Joins the discord channel the current user is on.
- `!claptrap` Plays a random claptrap sound.

