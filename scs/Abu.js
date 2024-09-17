const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
const axios = require("axios");
const util = require('util');
const fs = require('fs-extra');
const { adams } = require(__dirname + "/../Ibrahim/adams");
const { format } = require(__dirname + "/../Ibrahim/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../config");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

adams({ nomCom: "sp", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../Ibrahim//adams");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

   const menuMessage = generateWAMessageFromContent(dest.from, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
            },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Contact Owner',
                    url: 'https://wa.me/+254710772666?text=Hey_Mr_Ibrahim_Adams',
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Click Here To Fork',
                    url: 'https://github.com/devibraah/BWM-XMD/fork',
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Join Our Community',
                    url: 'https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y',
                  }),
                },
              ],
            }),
            contextInfo: {
              mentionedJid: [dest.sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          }),
        },
      },
    }, {});

    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    
    
            
                
    }
         });
      
