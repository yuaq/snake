// 定义食物类
class Food {
    // 定义一个属性表示食物对应的元素
    element: HTMLElement;
    constructor() {
        // 获取页面中food元素并将其赋值给element
        this.element = document.getElementById("food")!
    }

    // 定义一个获取食物x轴坐标的方法
    get x() {
        return this.element.offsetLeft
    }

    // 定义一个获取食物y轴坐标的方法
    get y() {
        return this.element.offsetTop
    }

    // 修改食物位置的方法
    change() {
        // 生成随机位置
        // 食物位置最小为0，最大为290
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}
export default Food