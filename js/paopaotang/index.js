function Player(name,teamColor) {
    this.name = name;
    this.enemies = [];
    this.partners = [];
    this.state = 'live';
    this.teamColor = teamColor; //队伍的颜色
    // this.enemy = null;
}

//赢与输
Player.prototype.win = function() {
    console.log(`${this.name}win!`);
}
Player.prototype.lose = function () {
    console.log(`${this.name}lose!`);
}

Player.prototype.die = function() {
    // this.lose();
    let all_dead = true;
    this.state = 'die';
    for(let i = 0; i<this.partners.length; i++ ) {
        if (this.partners[i].state === 'live') {
            all_dead = false;
            break;
        }
    }
    if(all_dead) {
        this.lose();
        for(let i = 0; i < this.partners.length; i++) {
            this.partners[i].lose();
        }
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].win();
        }
    }
    
    // 判断游戏是否结束？ state live | dead
    // for this.partner 4个 dead
    // 游戏结束 我方输， 对方赢
    
    

}

// 流程 太多了， 规律 red blue 另一队
//// 工厂模式
const players = [];

function playerFactory(name, teamColor) {
    // 实例化， 分配队伍
    var newPlayer = new Player(name, teamColor);
    for(var i = 0; i<players.length; i++) {
        const player = players[i];
        if(player.teamColor === newPlayer.teamColor) {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);

        }else {
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
} 

const player1 = playerFactory('皮蛋','red');
const player2 = playerFactory('小乖', 'red');
const player3 = playerFactory('宝宝', 'red');
const player4 = playerFactory('小强', 'red');


const player5 = playerFactory('黑妞', 'blue');
const player6 = playerFactory('葱头', 'blue');
const player7 = playerFactory('胖墩', 'blue');
const player8 = playerFactory('海盗', 'blue');

player1.die();
player2.die();
player3.die();
player4.die();




// const player1 = new Player('皮蛋','red');
// const player2 = new Player('小乖', 'blue');
// player2.die();


// 上线了，互成敌人， 匹配到一局了。

// prototype.win = Player() {
//     console.log('你赢了！');
// }
// prototype.lose = Player() {
//     console.log('你输了!');
// }


// enemy  实例 instanceof /=> new Player