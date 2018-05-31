function Enemy(){
    this.image = [game.R["feiji_3"],game.R["feiji_2"],game.R["feiji_4"]];
    this.baozha = [game.R["baozha_1"],game.R["baozha_2"],game.R["baozha_3"],game.R["baozha_4"],game.R["baozha_5"],game.R["baozha_6"]];

    if(game.f % 12 == 0 ){
        this.index = 1
    }else if (game.f % 500 == 0){
        this.index = 2
    }else {
        this.index = 0
    }
    this.x = ~~(Math.random()*(game.canvas.width-100));
    this.y = -43;
    this.dy = 10
    this.f = 0//敌机爆炸计数器
    this.idx = 0//我方爆炸计数器
    this.peng = 0
    game.EnemyArr.push(this);
}


Enemy.prototype.render = function(){
    game.ctx.drawImage(this.image[this.index],this.x,this.y);
}

Enemy.prototype.update = function(){
    this.y+=this.dy

    if(this.index == 0){
        this.dy = 10;
        this.x1 = this.x
        this.x2 = this.x+60
        this.y1= this.y
        this.y2= this.y+33
    }else if(this.index ==1){
        this.dy = 5
        this.x1 = this.x
        this.x2 = this.x+100
        this.y1= this.y
        this.y2= this.y+50
    }else if (this.index == 2){
        this.dy = 2
        this.x1 = this.x-32
        this.x2 = this.x+120
        this.y1= this.y
        this.y2= this.y+80
    }
    if(this.y > 768){
        this.goDie();
    }
    if(game.sm.smNumber == 2){
        if(game.sm.plane.type){
            if(this.x2 > game.sm.plane.x1 && this.x1 < game.sm.plane.x2 && this.y2 > game.sm.plane.y1 && this.y1 < game.sm.plane.y2){
                game.sm.plane.type = false;
                this.goDie();
                game.LIFE -=1
                var self = this
                this.times = setInterval(function(){
                    self.idx++
                    if(self.idx > 5){
                        self.idx = 5
                        clearInterval(self.times);
                    }
                    game.ctx.drawImage(self.baozha[self.idx],game.sm.plane.x-50,game.sm.plane.y)
                },40)
                if(game.LIFE < 0){
                    game.LIFE = 1
                    game.sm.smNumber = 3
                    game.sm.init(3);
                }
                setTimeout(function(){
                    game.sm.plane.type = true
                },1000)
            }
        }
    }


}
Enemy.prototype.goDie=function(){
    game.EnemyArr = _.without(game.EnemyArr,this);
    var self = this
    this.timer = setInterval(function(){
        self.f++
        if(self.f > 5){
            self.f = 5
            clearInterval(self.timer);
        }
        game.ctx.drawImage(self.baozha[self.f],self.x-80,self.y)
    },40);
}
