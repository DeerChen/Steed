/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 08:41:56
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 10:52:39
 * @Description  : 场景环境初始化
 */
import * as THREE from "three";
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  GRID_SIZE,
  MAX_SIZE,
} from "./global/constants";
import { scene, camera, renderer } from "./global/variables";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const initEnv: (
  gridFlag?: boolean,
  ambientLightFlag?: boolean,
  directionalLightFlag?: boolean,
  pointLightFlag?: boolean,
  axesFlag?: boolean
) => OrbitControls = (
  gridFlag = false,
  ambientLightFlag = true,
  directionalLightFlag = true,
  pointLightFlag = false,
  axesFlag = false
) => {
  camera.position.set(90, MAX_SIZE, 180); // 相机位置
  camera.lookAt(0, 0, 0); // 相机指向坐标原点

  // 初始化环境光
  if (ambientLightFlag) {
    const ambientLight = new THREE.AmbientLight(0xf0f0f0, 1); // 环境光
    scene.add(ambientLight);
  }

  // 初始化平行光
  if (directionalLightFlag) {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 4); // 平行光
    directionalLight.position.set(0, 0, 100); // 平行光位置
    directionalLight.target.position.set(0, 0, -100); // 平行光目标位置
    scene.add(directionalLight);
    scene.add(directionalLight.target);
  }

  // 初始化点光源
  if (pointLightFlag) {
    const pointLight = new THREE.PointLight(0xf0f0f0, 5, 0, 0); // 点光源
    pointLight.position.set(0, 10, 0); // 点光源位置
    scene.add(pointLight);
  }

  // 初始化网格辅助线
  if (gridFlag) {
    const gridHelper = new THREE.GridHelper(
      MAX_SIZE, // 网格线条数
      MAX_SIZE / GRID_SIZE, // 网格线条宽度
      0x00ffff, // 网格线条颜色
      0x00ffff // 网格线条辅助颜色
    ); // 网格辅助线
    gridHelper.position.y = -0.5; // 网格辅助线位置
    scene.add(gridHelper);
  }

  // 坐标轴辅助线
  if (axesFlag) {
    const axesHelper = new THREE.AxesHelper(150);
    scene.add(axesHelper);
  }

  // 初始化渲染器
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT); // 设置渲染器大小
  document.body.appendChild(renderer.domElement); // 将渲染器添加到页面

  // 初始化控制器
  const controls: OrbitControls = new OrbitControls(
    camera,
    renderer.domElement
  );
  controls.minPolarAngle = 0; // 最小仰角
  controls.maxPolarAngle = Math.PI / 3; // 最大仰角

  controls.addEventListener("change", () => {
    renderer.render(scene, camera); // 实时渲染
  });

  return controls;
};

export default initEnv;
