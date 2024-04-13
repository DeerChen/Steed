/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:42:26
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 14:11:33
 * @Description  : 主入口
 */
import initEnv from "./src/initEnv";
import {
  createBase,
  loadWall,
  createCenterline,
  createParkingSpaces,
} from "./src/buildParkingLot";
import { scene, renderer, camera } from "./src/global/variables";
import { parkingLotArr, parkingSpacesArr } from "./src/abst";
import { drawNavLine, randomStage } from "./src/navLine";

initEnv(); // 初始化环境

createBase(); // 创建地面
loadWall(renderer, camera); // 加载墙壁
createCenterline(); // 创建中心线

createParkingSpaces(); // 创建停车位

renderer.render(scene, camera); // 渲染场景

// 监听按键事件
const randomStageBtn = document.getElementById("randomStageBtn")!;
const drawNavLineBtn = document.getElementById("drawNavLineBtn")!;

randomStageBtn.addEventListener("click", (_event) => {
  randomStage();
});

drawNavLineBtn.addEventListener("click", (_event) => {
  drawNavLine();
});
