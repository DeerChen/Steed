/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:49:18
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 10:52:12
 * @Description  : 全局变量
 */
import * as THREE from "three";
import {
  GRID_SIZE,
  PARKING_LOT_LENGTH,
  PARKING_LOT_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "./constants";
import type ParkingSpace from "../parkingSpace";

// 初始化场景
const scene: THREE.Scene = new THREE.Scene();

// 初始化相机
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  45, // 视角度
  SCREEN_WIDTH / SCREEN_HEIGHT, // 宽高比
  0.1, // 近裁剪面
  1000 // 远裁剪面
);

// 初始化渲染器
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true, // 抗锯齿
  logarithmicDepthBuffer: true, // 开启对数深度缓存
});

export { scene, camera, renderer };
