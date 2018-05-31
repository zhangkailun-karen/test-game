function Plane(){
    this.image = [game.R["feiji_1"],game.R["feiji1_1"]];
    this.x = 100;
    this.y = 500-85;
    this.type = true;
    this.idx = 0
    this.update();
}

//渲染飞机
Plane.prototype.render = function(){
    game.ctx.save();
    game.ctx.drawImage(this.image[this.idx],this.x,this.y);
    game.ctx.restore();


     // game.ctx.fillStyle = "blue";
     // game.ctx.fillText(this.x1,this.x, this.y);
     // game.ctx.fillText(this.x2,this.x + 80, this.y);
     // game.ctx.fillText(~~(this.y1),this.x + 40, this.y);
     // game.ctx.fillText(~~(this.y2),this.x + 40, this.y+85);

}

Plane.prototype.update = function(){
    var self = this;
    game.canvas.onmousemove = function(){
        var x = event.clientX - game.canvas.offsetLeft-50;
        var y = event.clientY-42
        self.x = x;
        self.y = y;
        self.x1 = self.x+20;
        self.x2 = self.x+80
        self.y1 = self.y ;
        self.y2 = self.y+85

    }
}
