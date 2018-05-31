function zidan(){
    this.image = [game.R["zidan1"],game.R["zidan2"],game.R["zidan3"]];
    this.x = game.sm.plane.x+40;
    this.y = game.sm.plane.y-20
    if(game.index == 1){
        this.x = game.sm.plane.x+25;
    }else if(game.index == 2){
        this.x = game.sm.plane.x+25;
        this.y = game.sm.plane.y-50;
    }
    game.zidanArr.push(this);
}
zidan.prototype.render = function(){
    game.ctx.drawImage(this.image[game.index],this.x,this.y);
}
zidan.prototype.update= function(){
    this.y -= 20;
    if(this.y < -768){
        this.goDie();
    }
    //document.getElementById("she").play();
    this.x1 = this.x;
    this.x2 = this.x+20
    this.y1 = this.y;
    this.y2 = this.y+10

    for(var i = 0;i <game.EnemyArr.length;i++){
        if((this.x2 > game.EnemyArr[i].x1 || this.x2+60 > game.EnemyArr[i].x1) &&
            (this.x1 < game.EnemyArr[i].x2 || this.x1+60 < game.EnemyArr[i].x2)
            && this.y2 > game.EnemyArr[i].y1 && this.y1 < game.EnemyArr[i].y2){
            document.getElementById("baozha").play();
            game.EnemyArr[i].peng++
            if(game.index == 1){
                game.EnemyArr[i].peng+=2
            }else if(game.index == 2){
                game.EnemyArr[i].peng+=3
            }
            if(game.EnemyArr[i].index == 0){
                if(game.EnemyArr[i].peng > 1){
                    game.EnemyArr[i].goDie();
                    game.score+=10;

                }
            }else if(game.EnemyArr[i].index == 1){

                if(game.EnemyArr[i].peng > 3){
                    game.EnemyArr[i].goDie();
                    game.score+=30;
                }
            }else if (game.EnemyArr[i].index == 2){
                if(game.EnemyArr[i].peng > 10){
                    game.EnemyArr[i].goDie();
                    game.score+=50;
                }
            }
            this.goDie();
        }
    }
};



zidan.prototype.goDie = function(){
    game.zidanArr = _.without(game.zidanArr,this);
}