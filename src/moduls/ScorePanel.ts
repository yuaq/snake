// 定义记分牌的类
class ScorePanel {
    // score和level用来记录分数和等级
    score = 0;
    level = 1;

    // 设置限制等级
    MaxLevel: number;
    // 设置一个变量表示多少分升级
    upScore: number;

    // 分数和等级所在的元素，在构造函数中初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor(MaxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        console.log(this.scoreEle);
        this.MaxLevel = MaxLevel;
        this.upScore = upScore;
    }

    // 定义加分方法
    addScore() {
        // 分数增加
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数是多少
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 等级提升方法
    levelUp() {
        // 限制等级
        if (this.level < this.MaxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}
export default ScorePanel