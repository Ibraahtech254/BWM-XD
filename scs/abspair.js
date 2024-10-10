const { adams } = require('../Ibrahim/adams');
const traduire = require("../Ibrahim/traduction") ;
const { default: axios } = require('axios');
const pkg = require('@whiskeysockets/baileys');
const { generateWAMessageFromContent, proto } = pkg;
adams({ nomCom: "rent", reaction: "🚘", categorie: "User" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

 try {
    if (!arg || arg.length === 0) {
      return repondre('Example Usage: .rent 254xxxxxxxx.');
    }

    await repondre('Generating your code.....');
    const text = encodeURIComponent(arg.join(' '));
    const apiUrl = `https://ibraah-adams-432q.onrender.com/code?number=${text}`;
    
    const response = await axios.get(apiUrl);
    const result = response.data;

    if (result && result.code) {
      const getsess = result.code;
      const answer = `*Here is your code =* *${getsess}*\n\n BMW MD`;

      const buttons = [
        {
          name: "cta_copy",
          buttonParamsJson: JSON.stringify({
            display_text: "📋 COPY CODE",
            id: "copy_code",
            copy_code: getsess
          /*})
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "FOLLOW 🤍 CHANNEL",
            url: `https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P`*/
          })
        }
      ];

      const msg = generateWAMessageFromContent(dest, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: answer
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: " *Made by Ibrahim Adams*"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: buttons
              })
            })
          }
        }
      }, {});

      await zk.relayMessage(dest, msg.message, {
        messageId: msg.key.id
      });
    } else {
      throw new Error('Invalid response from Api.');
    }
  } catch (error) {
    console.error('Error getting Api response:', error.message);
    repondre('Error getting response from Api.');
  }
});



adams({ nomCom: "rent1", reaction: "🚘", categorie: "User" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

 try {
    if (!arg || arg.length === 0) {
      return repondre('Example Usage: .rent 254xxxxxxxx.');
    }

    await repondre('Generating your code.....');
    const text = encodeURIComponent(arg.join(' '));
    const apiUrl = `https://ibraah-adams-432q.onrender.com/code?number=${text}`;
    
    const response = await axios.get(apiUrl);
    const result = response.data;

    if (result && result.code) {
      const getsess = result.code;
     /* const answer = `*Here is your code =* *${getsess}*\n\n BMW MD`;*/
           const answer = `*╭─────═━┈┈━═──━┈⊷\nʙᴏᴛ ɴᴀᴍᴇ: *ʙᴍᴡ ᴍᴅ*\nᴠᴇʀꜱɪᴏɴ: *6.0.3*\nurb: *${getsess}*\nᴅᴇᴠ: *sɪʀ ɪʙʀᴀʜɪᴍ*\n╰─────═━┈┈━═──━┈⊷*`;


      const buttons = [
        {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📜 COMMAND LIST",
                    id: ".command",
                  }),
                },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "⏳ PING",
                    id: ".ping",
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📂 REPO",
                    url: 'https://github.com/devibraah/BWM-XMD',
                  }),
                },
                {
                 name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📽 HOW TO DEPLOY",
                    url: 'https://ibrahim-adams.vercel.app/Deploy.html',
                  }),
                },
                    {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "FOLLOW 🤍 CHANNEL",
            url: `https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P`
          })
        }
      ];

      const msg = generateWAMessageFromContent(dest, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: answer
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: " *Made by Ibrahim Adams*"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: buttons
              })
            })
          }
        }
      }, {});

      await zk.relayMessage(dest, msg.message, {
        messageId: msg.key.id
      });
    } else {
      throw new Error('Invalid response from Api.');
    }
  } catch (error) {
    console.error('Error getting Api response:', error.message);
    repondre('Error getting response from Api.');
  }
});
