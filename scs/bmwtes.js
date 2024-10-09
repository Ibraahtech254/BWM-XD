
/**
const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
const BaseUrl = 'https://abu-2f6def455bb4.herokuapp.com';
adams({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // https://abu-2f6def455bb4.herokuapp.com/download/ytmp3?url=https://music.youtube.com/watch?v=6POZlJAZsok&si=FgIl9XCg__1V8m4_}`);
      const apiResponse = await fetch(`https://abu-2f6def455bb4.herokuapp.com/download/ytmp4?url=${encodeURIComponent(videoUrl)}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 'success ✅') {
        const videoDlUrl = apiResult.data.download;
        const fileInfo = {
          title: apiResult.data.title,
          fileSize: apiResult.data.file_size,
          quality: apiResult.data.quality
        };

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\n
> ©Ibrahim Adams`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4',
          
        }, { quoted: ms });

        repondre('Downloded Successfully ✅');
     } else {
        repondre('Searching...⏳');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('Searching...⏳');
  }
});

adams({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio downlhttps://abu-2f6def455bb4.herokuapp.com/download/ytmp3oad URL
      const apiResponse = await fetch(`${BaseUrl}/download/ytmp3?url=${encodeURIComponent(videoUrl)}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});


function _0x5d02(){const _0xdf175c=['&apikey=','title','download_url','song','\x20by\x20','join','*\x0a\x0a*®Adams\x202024*','\x0a\x0a\x0a>\x20©Ibrahim\x20Adams','225876vlAazW','9471SepstT','success','1437403VGVspW','status','An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20audio.','1067575MfRfdg','*Bmw\x20Just\x20Downloaded\x20','306855xTgbVg','4RFOmdo','url','No\x20audio\x20found.','timestamp','*BMW\x20SONG\x20PLAYER*\x0a\x0a*◁\x20II\x20▷\x201:00\x20•၊၊||၊|။||။||၊|||။\x20၊|•','12204720LJYXte','Bmw\x20is\x20downloading\x20','thumbnail','play','json','videos','video/mp4','\x0a\x20Time\x20:\x20','*\x0a\x0a*©Ibrahim\x20Adams*','/api/download/ytmp3?url=','3381482kYimzu','Searching...⏳','length','304wXBrjW','Download','No\x20videos\x20found.','sendMessage','https://giftedapis.us.kg','Please\x20insert\x20a\x20song/video\x20name.','author','Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.','audio/mp4','Error\x20from\x20API:','result','error','/api/download/ytmp4?url=','4818ZUsczZ','ibrahimtech_ai','../Ibrahim/adams','Please\x20insert\x20a\x20song\x20name.','yt-search'];_0x5d02=function(){return _0xdf175c;};return _0x5d02();}function _0x52fd(_0x2f6e1c,_0x433bee){const _0x5d0206=_0x5d02();return _0x52fd=function(_0x52fd03,_0x54ce18){_0x52fd03=_0x52fd03-0x1a8;let _0xfa18cb=_0x5d0206[_0x52fd03];return _0xfa18cb;},_0x52fd(_0x2f6e1c,_0x433bee);}const _0x5f4d92=_0x52fd;(function(_0x266011,_0x210240){const _0x1b729a=_0x52fd,_0x1cacd3=_0x266011();while(!![]){try{const _0x32fcfd=parseInt(_0x1b729a(0x1ab))/0x1+-parseInt(_0x1b729a(0x1c0))/0x2+-parseInt(_0x1b729a(0x1a8))/0x3*(parseInt(_0x1b729a(0x1b1))/0x4)+-parseInt(_0x1b729a(0x1ae))/0x5+parseInt(_0x1b729a(0x1d0))/0x6*(-parseInt(_0x1b729a(0x1a9))/0x7)+-parseInt(_0x1b729a(0x1c3))/0x8*(-parseInt(_0x1b729a(0x1b0))/0x9)+parseInt(_0x1b729a(0x1b6))/0xa;if(_0x32fcfd===_0x210240)break;else _0x1cacd3['push'](_0x1cacd3['shift']());}catch(_0x534a35){_0x1cacd3['push'](_0x1cacd3['shift']());}}}(_0x5d02,0xd8ab6));const {adams}=require(_0x5f4d92(0x1d2)),yts=require(_0x5f4d92(0x1d4)),BaseUrl=_0x5f4d92(0x1c7),giftedapikey=_0x5f4d92(0x1d1);adams({'nomCom':'video','categorie':'Search','reaction':'🎥'},async(_0x3e4e75,_0x16916a,_0x2febb9)=>{const _0x4181ff=_0x5f4d92,{ms:_0x12d2b6,repondre:_0x5b1719,arg:_0x5425e3}=_0x2febb9;if(!_0x5425e3[0x0]){_0x5b1719(_0x4181ff(0x1c8));return;}try{let _0x45f113=_0x5425e3[_0x4181ff(0x1da)]('\x20'),_0x200130=[];const _0x48af21=await yts(_0x45f113);_0x200130=_0x48af21[_0x4181ff(0x1bb)];if(_0x200130&&_0x200130['length']>0x0){const _0x1776d9=_0x200130[0x0][_0x4181ff(0x1b2)],_0x2755ed=await fetch(BaseUrl+_0x4181ff(0x1cf)+encodeURIComponent(_0x1776d9)+_0x4181ff(0x1d5)+giftedapikey),_0x55abad=await _0x2755ed[_0x4181ff(0x1ba)]();if(_0x55abad[_0x4181ff(0x1ac)]===0xc8&&_0x55abad[_0x4181ff(0x1aa)]){const _0x3efbd0=_0x55abad[_0x4181ff(0x1cd)]['download_url'],_0x5ba3b9={'image':{'url':_0x200130[0x0][_0x4181ff(0x1b8)]},'caption':_0x4181ff(0x1b7)+_0x55abad[_0x4181ff(0x1cd)]['title']+_0x4181ff(0x1d9)+_0x200130[0x0][_0x4181ff(0x1c9)]['name']+_0x4181ff(0x1bd)+_0x200130[0x0][_0x4181ff(0x1b4)]+_0x4181ff(0x1dc)};await _0x16916a['sendMessage'](_0x3e4e75,_0x5ba3b9,{'quoted':_0x12d2b6}),await _0x16916a[_0x4181ff(0x1c6)](_0x3e4e75,{'video':{'url':_0x3efbd0},'mimetype':_0x4181ff(0x1bc)},{'quoted':_0x12d2b6}),_0x5b1719('Downloded\x20Successfully\x20✅');}else _0x5b1719(_0x4181ff(0x1c1));}else _0x5b1719(_0x4181ff(0x1c5));}catch(_0x54ffb0){console[_0x4181ff(0x1ce)](_0x4181ff(0x1cc),_0x54ffb0),_0x5b1719(_0x4181ff(0x1c1));}}),adams({'nomCom':_0x5f4d92(0x1b9),'categorie':_0x5f4d92(0x1c4),'reaction':'🎧'},async(_0x109e32,_0x541b13,_0x2bb58a)=>{const _0x491e18=_0x5f4d92,{ms:_0x3ba1bc,repondre:_0x2780bd,arg:_0x74f582}=_0x2bb58a;if(!_0x74f582[0x0]){_0x2780bd(_0x491e18(0x1d3));return;}try{let _0x373f6a=_0x74f582[_0x491e18(0x1da)]('\x20'),_0x29880b=[];const _0x1ef01d=await yts(_0x373f6a);_0x29880b=_0x1ef01d[_0x491e18(0x1bb)];if(_0x29880b&&_0x29880b[_0x491e18(0x1c2)]>0x0){const _0x5d449f=_0x29880b[0x0]['url'],_0x1eb6c8=await fetch(BaseUrl+_0x491e18(0x1bf)+encodeURIComponent(_0x5d449f)+'&apikey='+giftedapikey),_0x1b0976=await _0x1eb6c8[_0x491e18(0x1ba)]();if(_0x1b0976[_0x491e18(0x1ac)]===0xc8&&_0x1b0976[_0x491e18(0x1aa)]){const _0x43c935=_0x1b0976[_0x491e18(0x1cd)][_0x491e18(0x1d7)],_0x5a9cca={'image':{'url':_0x29880b[0x0]['thumbnail']},'caption':_0x491e18(0x1b5)+_0x29880b[0x0][_0x491e18(0x1b4)]+_0x491e18(0x1be)};await _0x541b13[_0x491e18(0x1c6)](_0x109e32,_0x5a9cca,{'quoted':_0x3ba1bc}),await _0x541b13[_0x491e18(0x1c6)](_0x109e32,{'audio':{'url':_0x43c935},'mimetype':_0x491e18(0x1cb)},{'quoted':_0x3ba1bc}),_0x2780bd(_0x491e18(0x1af)+_0x1b0976[_0x491e18(0x1cd)][_0x491e18(0x1d6)]+_0x491e18(0x1db));}else _0x2780bd(_0x491e18(0x1ca));}else _0x2780bd(_0x491e18(0x1b3));}catch(_0x2c836c){console[_0x491e18(0x1ce)](_0x491e18(0x1cc),_0x2c836c),_0x2780bd(_0x491e18(0x1ad));}}),adams({'nomCom':_0x5f4d92(0x1d8),'categorie':'Download','reaction':'🎸'},async(_0x45e4c2,_0x13130e,_0x28fcd5)=>{const _0x30be3c=_0x5f4d92,{ms:_0x515f7a,repondre:_0x14ab71,arg:_0xf9b2d0}=_0x28fcd5;if(!_0xf9b2d0[0x0]){_0x14ab71(_0x30be3c(0x1d3));return;}try{let _0x39fd72=_0xf9b2d0[_0x30be3c(0x1da)]('\x20'),_0x5d27b9=[];const _0xf48ec1=await yts(_0x39fd72);_0x5d27b9=_0xf48ec1[_0x30be3c(0x1bb)];if(_0x5d27b9&&_0x5d27b9[_0x30be3c(0x1c2)]>0x0){const _0x8b9b11=_0x5d27b9[0x0][_0x30be3c(0x1b2)],_0x519224=await fetch(BaseUrl+_0x30be3c(0x1bf)+encodeURIComponent(_0x8b9b11)+_0x30be3c(0x1d5)+giftedapikey),_0x3b61ef=await _0x519224['json']();if(_0x3b61ef[_0x30be3c(0x1ac)]===0xc8&&_0x3b61ef[_0x30be3c(0x1aa)]){const _0x22181d=_0x3b61ef[_0x30be3c(0x1cd)][_0x30be3c(0x1d7)],_0x199167={'image':{'url':_0x5d27b9[0x0]['thumbnail']},'caption':'*BMW\x20SONG\x20PLAYER*\x0a\x0a*◁\x20II\x20▷\x201:00\x20•၊၊||၊|။||။||၊|||။\x20၊|•'+_0x5d27b9[0x0][_0x30be3c(0x1b4)]+_0x30be3c(0x1be)};await _0x13130e[_0x30be3c(0x1c6)](_0x45e4c2,_0x199167,{'quoted':_0x515f7a}),await _0x13130e[_0x30be3c(0x1c6)](_0x45e4c2,{'audio':{'url':_0x22181d},'mimetype':_0x30be3c(0x1cb)},{'quoted':_0x515f7a}),_0x14ab71('*Bmw\x20Just\x20Downloaded\x20'+_0x3b61ef[_0x30be3c(0x1cd)]['title']+'*\x0a\x0a*®Adams\x202024*');}else _0x14ab71('Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.');}else _0x14ab71(_0x30be3c(0x1b3));}catch(_0xcc348b){console[_0x30be3c(0x1ce)](_0x30be3c(0x1cc),_0xcc348b),_0x14ab71(_0x30be3c(0x1ad));}});


adams({
  nomCom: "song1",
  categorie: "Download",
  reaction: "🎸"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/download/ytmp3?url=${encodeURIComponent(videoUrl)}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});
**/

const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
const BaseUrl = 'https://temp.giftedapis.us.kg';
const adamsapikey = 'ibrahimtech_ai';
adams({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URLhttps://api.prabath-md.tech/api/ytmp3?url=${encodeURIComponent(urlElement)}`);
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${adamsapikey}`);
      const apiResult = await apiResponse.json();


      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\n
> ©Ibrahim Adams`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4',
          
        }, { quoted: ms });

        repondre('Downloded Successfully ✅');
     } else {
        repondre('Searching...⏳');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('Searching...⏳');
  }
});

adams({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio downlhttps://abu-2f6def455bb4.herokuapp.com/download/ytmp3oad URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${adamsapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

adams({
  nomCom: "song",
  categorie: "Download",
  reaction: "🎸"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${adamsapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});
