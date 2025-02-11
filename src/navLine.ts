/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:59:16
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 16:16:47
 * @Description  : 导航线
 */
import { abst, parkingLotArr, parkingSpacesArr } from "./abst";
import { scene, renderer, camera } from "./global/variables";
import * as THREE from "three";
import { bfsFindPath, dfsFindPath } from "./pathfinding";
import {
  GRID_SIZE,
  PARKING_LOT_LENGTH,
  PARKING_LOT_WIDTH,
} from "./global/constants";

const generateRandomNumbers = (freeSpacesNum: number): number[] => {
  const randomNumbers = [];
  for (var i = 0; i < freeSpacesNum; i++) {
    var randomNumber = Math.floor(Math.random() * parkingSpacesArr.length);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

// 重置场景
const resetStage = () => {
  scene.remove(line);

  parkingSpacesArr.forEach((parkingSpaceObj) => {
    parkingSpaceObj.setPlaced(true);
  });
};

// 随机场景
const randomStage = (): void => {
  resetStage();

  const randomNumbers = generateRandomNumbers(10);

  randomNumbers.forEach((randomNumber) => {
    parkingSpacesArr[randomNumber].setPlaced(false);
  });
};

let line: THREE.Object3D<THREE.Object3DEventMap>;

const drawNavLine = () => {
  abst();

  const points: THREE.Vector3[] = [];

  const bfsPaths = bfsFindPath(parkingLotArr);
  const dfsPaths = dfsFindPath(parkingLotArr);

  const paths = bfsPaths.length <= dfsPaths.length ? bfsPaths : dfsPaths;

  if (paths === "无") return;

  paths.forEach((item: number[]) => {
    points.push(
      new THREE.Vector3(
        -PARKING_LOT_WIDTH / 2 + (2 * item[1] + 1) * (GRID_SIZE / 2),
        0,
        -PARKING_LOT_LENGTH / 2 + (2 * item[0] + 1) * (GRID_SIZE / 2)
      )
    );
  });

  // 创建路径线
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
  line = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(line);

  renderer.render(scene, camera);
};

export { randomStage, drawNavLine };
