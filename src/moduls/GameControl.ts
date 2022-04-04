// 引入食物类
import Food from "./Food";
// 引入记分牌类
import ScorePanel from "./ScorePanel";
// 引入蛇类
import Snake from "./Snake";

// 游戏控制器 控制其它类
class GameControl {
    // 定义三个属性
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 记分牌
    Scorepanel: ScorePanel;

    // 定义一个变量存储蛇的移动方向（按键方向）
    direction: string = '';
    // 创建一个属性记录游戏是否结束
    islive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.Scorepanel = new ScorePanel();
        this.init()
    }

    // 游戏初始化, 调用后游戏开始
    init() {
        // 绑定按键按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 调用run方法
        this.run();
    }

    // 创建键盘按下响应函数
    keydownHandler(event: KeyboardEvent) {
        // 检查用户是否按下的为方向键

        // 修改direction属性
        this.direction = event.key
    }

    // 创建一个蛇移动的方法
    run() {
        // 根据方向使蛇移动

        // 获取蛇当前坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                //向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                //向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                //向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                //向右移动 left 增加
                X += 10;
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X, Y)

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            // 游戏结束，弹出提示信息
            alert(e.message + ' GAME OVER! ');
            this.islive = false;
        }

        // 开启定时器
        this.islive && setTimeout(this.run.bind(this), 300 - (this.Scorepanel.level - 1) * 30);
    }

    // 检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.x && Y === this.food.y) {
            // 食物位置重置
            this.food.change();
            // 分数增加
            this.Scorepanel.addScore();
            // 蛇增加
            this.snake.addBody();
        }
    }



}
export default GameControl