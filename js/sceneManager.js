function sceneManager(){

    this.smNumber = 1;
    this.init(1);
    this.bindEvent();
    this.feiji = 40
    this.lock = true;
}

sceneManager.prototype.init = function(number){
    switch(number){
        case 1:
            //1号场景：游戏封面 和 开始按钮
            this.background = new Background();
            this.plane = new Plane()// 实例化background背景类
            break;
        case 2:
            //2场景：
            this.background = new Background();
            this.plane = new Plane()// 实例化background背景类

            break;
        case 3:
            //2场景：
            this.background = new Background();
            break;
    }
}
sceneManager.prototype.render = function(){
    switch(this.smNumber){
        case 1:
            //渲染 和 更新background背景类
            this.lock = true;
            this.background.render();
            this.background.update();
            document.getElementById("bg").play();
            game.ctx.drawImage(game.R["kaishi_1"],50,-50);
            game.ctx.drawImage(game.R["kaishi_2"],game.canvas.width/2 -70,300);

            game.f % 20 == 0 && new Enemy();
                for(var i = 0;i < game.EnemyArr.length; i++){
                    game.EnemyArr[i].render();
                    game.EnemyArr[i].update();
                }
            break;
        case 2:
            //清空敌机数组
            if(this.lock){
                game.EnemyArr = [];
                game.f = 1;
                game.score = 0;
                this.lock = false;
            }
            //渲染 和 更新background背景类
            this.background.render();
            this.background.update();

            this.plane.render();
            document.getElementById("bg").play();

            if(game.score > 2000){
                this.feiji = 5
            }else if(game.score > 1000){
                this.feiji = 10
            }else if(game.score > 500){
                this.feiji = 20
            }else if(game.score > 200){
                this.feiji = 30
            }

            game.f % this.feiji == 0 && new Enemy();
                for(var i = 0;i < game.EnemyArr.length; i++){
                    game.EnemyArr[i].render();
                    game.EnemyArr[i].update();
                }
                //更新子弹
            game.f % 5 == 0 && new zidan();
                for(var i = 0;i < game.zidanArr.length; i++){
                    game.zidanArr[i].render();
                    game.zidanArr[i].update();
                }

            game.f % 50 == 0 && new Skills();
                for(var i = 0; i < game.Skills.length; i++){
                    game.Skills[i].render();
                    game.Skills[i].update();
                }
            game.ctx.font = "16px 微软雅黑";
            game.ctx.fillStyle = "#fff";
            game.ctx.fillText('帧编号：'+game.f,10,30);
            game.ctx.fillText('LIFE：'+game.LIFE,10,60);
            game.ctx.fillText("得分："+ game.score,10,90);
            break;
        case 3:
            game.EnemyArr = [];
            this.background.render();
            this.background.update();
            game.ctx.save();
            game.ctx.font = "bold 45px 微软雅黑";
            game.ctx.fillText("GAME  OVER",100,200);
            game.ctx.restore();
            game.ctx.font = "bold 20px 微软雅黑";
            game.ctx.fillText("你的得分是"+game.score+"分",180,300);
    }
}

sceneManager.prototype.bindEvent = function(){
    var self = this;

    game.canvas.onmousedown = function(event){
        var x = event.offsetX;
        var y = event.offsetY;
        switch(self.smNumber){
            case 1:
                var left = game.canvas.width/2 -70
                var right = game.canvas.width/2 +70
                var up = 320
                var down = 370
                if(x >= left && x <= right && y >= up && y <= down){
                    self.smNumber = 2;
                    self.init(2);
                }
            break;
            case 3:
                self.smNumber = 1;
                self.init(1);
            break;
        }
    }
}