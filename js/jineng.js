function Skills(){
    this.image = [game.R["zb1"],game.R["zb2"]];
    this.x = ~~(Math.random()*(game.canvas.width-100));
    this.y = -43;
    this.timer = 0
    this.index = ~~(Math.random()*this.image.length)
    this.idx = 0
    game.Skills.push(this);
}
Skills.prototype.render = function(){
    game.ctx.drawImage(this.image[this.index],this.x,this.y);
}
Skills.prototype.update= function(){
    this.y += 5
    if(this.y > 768){
        this.goDie();
    }
    // document.getElementById("she").play();
    this.x1 = this.x;
    this.x2 = this.x+20
    this.y1 = this.y;
    this.y2 = this.y+10

    if(game.sm.smNumber == 2){
            if(this.x2 > game.sm.plane.x1 && this.x1 < game.sm.plane.x2 && this.y2 > game.sm.plane.y1 && this.y1 < game.sm.plane.y2){
                if(this.index == 0){
                    game.index = 1
                }else if(this.index == 1){
                    game.index = 2
                }
                this.goDie();
            }
            if(game.index == 1 || game.index == 2){
                if(!game.lock){
                    return
                }
                game.lock = false
                setTimeout(function(){
                    game.index = 0
                    game.lock = true;
                },5000)
            }
    }
    for(var i = 0;i < game.zidanArr.length;i++){
        game.zidanArr[i].index = this.idx
    }
}

Skills.prototype.goDie = function(){
    game.Skills = _.without(game.Skills,this);
}