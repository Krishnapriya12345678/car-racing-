class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

play(){
console.log("play")

form.hide()
textSize(30)
text("GAME START",120,100)
Player.getPlayerInfo()
//console.log(allPlayers)
if(allPlayers!=undefined){

var dpos=130
for(var plr in allPlayers){
  if(plr=="player"+player.index){
    fill("red")
  }else {
    fill("black")
  }
  console.log(plr)
  dpos+=20
  text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,dpos)





}




}


if(keyIsDown(UP_ARROW)){
player.distance+=50
player.update()
}






}




}
