function Game(){
    this.init(); //初始化游戏
    this.zidanArr = [];//子弹数组
    this.EnemyArr = [];//敌机数组
    this.Skills =[]
    this.score = 0; //分数
    this.LIFE = 1;
    this.index = 0

}
Game.prototype.init = function(){

    this.canvas = document.querySelector("canvas");

    this.ctx = this.canvas.getContext("2d");

    this.R = {
        "bg_1" : "images/bg1.jpg",
        "bg_2" : "images/bg2.jpg",
        "feiji_1" : "images/feiji_1.png",
        "kaishi_1" : "images/start.png",
        "kaishi_2" : "images/kaishi_1.png",
        "gameoverbg" : "images/gameoverbg.png",
        "feiji_2" : "images/feiji_2.png",
        "feiji_3" : "images/feiji_3.png",
        "feiji_4" : "images/feiji_4.png",
        "feiji_4" : "images/feiji_4.png",
        "zidan1" : "images/zidan1.png",
        "zidan2" : "images/wp2.png",
        "zidan3" : "images/wp3.png",
        "zb1" : "images/zb1.png",
        "zb2" : "images/zb2.png",
        "baozha_1":"images/baozha_1.png",
        "baozha_2":"images/baozha_2.png",
        "baozha_3":"images/baozha_3.png",
        "baozha_4":"images/baozha_4.png",
        "baozha_5":"images/baozha_5.png",
        "baozha_6":"images/baozha_6.png",

    }

    var self = this;
    var length = Object.keys(this.R).length; //所有资源图片的总数，使用了ES6的语法
    var count = 0; //已经加载完毕的图片的个数


    for(var k in this.R){
        var image = new Image();
        image.src = this.R[k];
        this.R[k] = image;

        //加载图片
        image.onload = function(){
            count++;
            //清屏
            self.clear();
            //显示提示用户文本
            self.ctx.save();
            self.ctx.font = "18px 微软雅黑";
            self.ctx.fillStyle = "blue";
            self.ctx.textAlign = "center";
            self.ctx.fillText(`加载中${count} / ${length}`, self.canvas.width / 2, 100);
            self.ctx.restore();

            if(count == length){
                self.start(); //加载完成后。可以开始游戏了。
            }
        }
    }
}

//清屏
Game.prototype.clear = function(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
}

//游戏开始
Game.prototype.start = function(){
    var self = this;
    //实例化背景
    this.sm = new sceneManager();
    //实例化飞机
    this.f = 0; //帧编号初始值
        this.timer = setInterval(function(){
         self.f ++;
         //清屏
         self.clear();

         self.sm.render();
        // //更新背景
        // self.background.render();
        // self.background.update();
        // //更新飞机
        // self.plane.render();
        // //更新敌机
        // self.f % 40 == 0 && new Enemy();
        // for(var i = 0;i < self.EnemyArr.length; i++){
        //     self.EnemyArr[i].render();
        //     self.EnemyArr[i].update();
        // }
        // //更新子弹
        // self.f % 20 == 0 && new zidan();
        // for(var i = 0;i < self.zidanArr.length; i++){
        //     self.zidanArr[i].render();
        //     self.zidanArr[i].update();
        // }
        //显示帧编号
        // self.ctx.font = "16px 微软雅黑";
        // self.ctx.fillStyle = "#fff";
        // self.ctx.fillText('帧编号：'+self.f,10,30);
        // self.ctx.fillText('LIFE：'+self.LIFE,10,60);
        // self.ctx.fillText("得分："+ self.score,10,90);
        },20);
}
