const { adams } = require("../Ibrahim/adams");
adams({nomCom:"bebe",categorie: "Conversion", reaction: "👨🏿‍💻"},async(origineMessage,zk,commandeOptions)=>{

let {ms,mtype,arg,repondre,nomAuteurMessage}=commandeOptions
const buttons = [
    {
        id: 'button1',
        text: 'Button 1',
        event: 'Button 1 Clicked'
    },
    {
        id: 'button2',
        text: 'Button 2',
        event: 'Button 2 Clicked'
    },
    {
        id: 'button3',
        text: 'Button 3',
        event: 'Button 3 Clicked'
    }
];

buttons.forEach(button => {
    document.getElementById('yourDivId').innerHTML += `<button onclick="${button.event}">${button.text}</button>`;
});

function button1Clicked() {
    // Add your logic for button 1 here
    console.log('Button 1 Clicked');
}

function button2Clicked() {
    // Add your logic for button 2 here
    console.log('Button 2 Clicked');
}

function button3Clicked() {
    // Add your logic for button 3 here
    console.log('Button 3 Clicked');
}
