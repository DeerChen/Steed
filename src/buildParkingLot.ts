/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:50:20
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 12:48:10
 * @Description  : 停车场创建
 */
import * as THREE from "three";
import {
  GRID_SIZE,
  PARKING_LOT_LENGTH,
  PARKING_LOT_WIDTH,
} from "./global/constants";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { scene } from "./global/variables";
import { parkingSpacesArr } from "./abst";
import ParkingSpace from "./parkingSpace";
import { PARKING_SPACES } from "./global/constants";

// 创建地面
const createBase: () => void = (): void => {
  const baseGeometry = new THREE.PlaneGeometry(
    PARKING_LOT_WIDTH,
    PARKING_LOT_LENGTH
  );
  baseGeometry.rotateX(-Math.PI / 2); // 旋转90度
  const baseMesh = new THREE.Mesh(
    baseGeometry,
    new THREE.MeshLambertMaterial({
      color: 0x808080,
      side: THREE.DoubleSide, // 双面渲染
    })
  ); // 地面网格
  baseMesh.name = "base";
  baseMesh.position.y = -0.5; // 地面位置
  baseMesh.receiveShadow = true; // 接收阴影
  scene.add(baseMesh);
};

// 加载墙壁
const loadWall: (
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
) => void = (
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
): void => {
  const loader = new GLTFLoader();
  loader.load("./assets/models/wall.gltf", (gltf) => {
    const wall = gltf.scene.clone();

    const wallBox = new THREE.Box3().setFromObject(wall);
    const wallLength = wallBox.max.x - wallBox.min.x;

    wall.scale.set(wallLength / GRID_SIZE, 1, 1);

    // 后墙
    for (let i = 0; i < PARKING_LOT_WIDTH / GRID_SIZE; i++) {
      const wallClone = wall.clone();

      wallClone.rotateY(Math.PI);

      wallClone.position.x =
        -(PARKING_LOT_WIDTH / 2 - GRID_SIZE / 2) + i * GRID_SIZE;
      wall.position.y = -0.5;
      wallClone.position.z = -PARKING_LOT_LENGTH / 2;

      scene.add(wallClone);
    }

    // 左墙
    for (let i = 0; i < PARKING_LOT_LENGTH / GRID_SIZE; i++) {
      const wallClone = wall.clone();

      wallClone.rotateY(Math.PI / 2);

      wallClone.position.x = -PARKING_LOT_WIDTH / 2;
      wall.position.y = -0.5;
      wallClone.position.z =
        -(PARKING_LOT_LENGTH / 2 - GRID_SIZE / 2) + i * GRID_SIZE;

      scene.add(wallClone);
    }

    // 右墙
    for (let i = 0; i < PARKING_LOT_LENGTH / GRID_SIZE; i++) {
      const wallClone = wall.clone();

      wallClone.rotateY(-Math.PI / 2);

      wallClone.position.x = PARKING_LOT_WIDTH / 2;
      wall.position.y = -0.5;
      wallClone.position.z =
        -(PARKING_LOT_LENGTH / 2 - GRID_SIZE / 2) + i * GRID_SIZE;

      scene.add(wallClone);
    }

    let wallNum = 0;
    // 前墙左侧
    for (let i = 0; i < PARKING_LOT_WIDTH / GRID_SIZE / 2 - 1; i++) {
      const wallClone = wall.clone();

      wallClone.position.x =
        -(PARKING_LOT_WIDTH / 2 - GRID_SIZE / 2) + i * GRID_SIZE;
      wall.position.y = -0.5;
      wallClone.position.z = PARKING_LOT_LENGTH / 2;

      scene.add(wallClone);

      wallNum++;
    }

    // 前墙右侧
    for (let i = 0; i < PARKING_LOT_WIDTH / GRID_SIZE / 2 - 1; i++) {
      const wallClone = wall.clone();

      wallClone.position.x =
        -(PARKING_LOT_WIDTH / 2 - GRID_SIZE / 2) +
        (i + wallNum + 2) * GRID_SIZE;
      wall.position.y = -0.5;
      wallClone.position.z = PARKING_LOT_LENGTH / 2;

      scene.add(wallClone);
    }
    renderer.render(scene, camera);
  });
};

// 道路中心线
const createCenterline = () => {
  const material = new THREE.LineDashedMaterial({
    color: 0xffffff,
    dashSize: 4, // 虚线段长度
    gapSize: 4, // 间隔长度
  });
  const points = [];
  points.push(new THREE.Vector3(0, 0, -GRID_SIZE * 2));
  points.push(new THREE.Vector3(0, 0, PARKING_LOT_LENGTH / 2));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  line.computeLineDistances();
  scene.add(line);
};

const createParkingSpaces = () => {
  Object.values(PARKING_SPACES).forEach((parkingSpaces) => {
    parkingSpaces.forEach((parkingSpace) => {
      const { name, position, direction } = parkingSpace;
      const parkingSpaceObj = new ParkingSpace({
        name,
        position,
        direction,
      });
      parkingSpacesArr.push(parkingSpaceObj);
      scene.add(parkingSpaceObj.group);
    });
  });
};

export { createBase, loadWall, createCenterline, createParkingSpaces };
