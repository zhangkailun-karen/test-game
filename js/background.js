function Background(){
    this.image = [game.R["bg_1"],game.R["bg_2"]]; //自己的背景图
    this.x = 0; //图片的初始位置
    this.y = 0;

}

Background.prototype.render = function(){

    game.ctx.save();
    game.ctx.drawImage(this.image[0], this.x , this.y);
    game.ctx.drawImage(this.image[0], this.x, this.y-768);
    game.ctx.restore();
}

Background.prototype.update = function(){
    this.y++;
    if(this.y > 768){
        this.y = 0;
    }
}