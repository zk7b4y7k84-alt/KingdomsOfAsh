export class GameScene extends Phaser.Scene{
constructor(){super('GameScene');}
create(){this.add.text(40,40,'Kingdoms of Ash',{fontSize:'32px',color:'#ffffff'});
this.add.text(40,90,'Version 0.1.0',{fontSize:'20px',color:'#dddddd'});}
}