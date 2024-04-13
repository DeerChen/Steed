/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:05:45
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 16:03:46
 * @Description  : 车位类
 */
import * as THREE from "three";
import {
  FontLoader,
  GLTFLoader,
  TextGeometry,
} from "three/examples/jsm/Addons.js";
import {
  PARKING_SPACE_LENGTH,
  PARKING_LOT_LENGTH,
  PARKING_LOT_WIDTH,
  PARKING_SPACE_WIDTH,
} from "./global/constants";
import { scene, camera, renderer } from "./global/variables";

class ParkingSpace {
  name: string;
  postion: { x: number; y: number };
  placed: boolean;
  group!: THREE.Group<THREE.Object3DEventMap>;
  direction: string;
  carInstance?: THREE.Group<THREE.Object3DEventMap>;

  constructor(props: {
    name: string;
    position: { x: number; y: number };
    direction: string;
  }) {
    this.name = props.name;
    this.postion = props.position;
    this.direction = props.direction;
    this.placed = true;

    this.create();
  }

  create(): void {
    // 车位顶点
    const points = [
      new THREE.Vector3(PARKING_SPACE_WIDTH / 2, -PARKING_SPACE_LENGTH / 2, 0),
      new THREE.Vector3(-PARKING_SPACE_WIDTH / 2, -PARKING_SPACE_LENGTH / 2, 0),
      new THREE.Vector3(-PARKING_SPACE_WIDTH / 2, PARKING_SPACE_LENGTH / 2, 0),
      new THREE.Vector3(PARKING_SPACE_WIDTH / 2, PARKING_SPACE_LENGTH / 2, 0),
    ];

    // 车位边线
    const line = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({
        color: 0xe6b464,
      })
    );

    // 车位区块
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(PARKING_SPACE_WIDTH, PARKING_SPACE_LENGTH),
      new THREE.MeshBasicMaterial({ color: 0x6b6f72, side: THREE.DoubleSide })
    );

    // 车位文字
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const text = new THREE.Mesh(
          new TextGeometry(this.name, {
            font: font,
            size: 2,
            depth: 0,
          }),
          new THREE.MeshBasicMaterial({ color: 0xc9392b })
        );
        text.position.x = -PARKING_SPACE_WIDTH / 4;
        text.position.y = -PARKING_SPACE_LENGTH / 3;
        text.position.z = 0.1;

        group.add(text);
      }
    );

    const group = new THREE.Group();
    group.add(line);
    group.add(plane);

    group.rotateX(-Math.PI / 2);

    const loader = new GLTFLoader();

    loader.load("./assets/models/car.gltf", (gltf) => {
      const car = gltf.scene.clone();

      car.rotateX(Math.PI / 2);

      car.scale.set(1.8, 1.8, 1.8);
      car.position.z = 3;

      if (this.placed) {
        this.group.add(car);
        this.carInstance = car;
      } else {
        this.group.remove(this.carInstance!);
      }

      renderer.render(scene, camera);
    });

    switch (this.direction) {
      case "left":
        // 左转
        group.rotateZ(Math.PI / 2);

        group.position.set(
          -PARKING_LOT_WIDTH / 2 + (PARKING_SPACE_LENGTH / 2) * this.postion.x,
          0,
          -PARKING_LOT_LENGTH / 2 +
            (PARKING_SPACE_WIDTH / 2) * (this.postion.y * 2 - 1)
        );
        break;

      case "right":
        // 右转
        group.rotateZ(-Math.PI / 2);

        group.position.set(
          -PARKING_LOT_WIDTH / 2 +
            (PARKING_SPACE_WIDTH / 2) * this.postion.x * 2,
          0,
          -PARKING_LOT_LENGTH / 2 +
            (PARKING_SPACE_LENGTH / 2) * (this.postion.y - 0.5)
        );
        break;

      case "reverse":
        group.rotateZ(-Math.PI);

        group.position.set(
          -PARKING_LOT_WIDTH / 2 +
            (PARKING_SPACE_WIDTH / 2) * (this.postion.x * 2 - 1),
          0,
          -PARKING_LOT_LENGTH / 2 + (PARKING_SPACE_LENGTH / 2) * this.postion.y
        );
        break;

      default:
        // 默认位置
        group.position.set(
          -PARKING_LOT_WIDTH / 2 +
            (PARKING_SPACE_WIDTH / 2) * (this.postion.x * 2 - 1),
          0,
          -PARKING_LOT_LENGTH / 2 + (PARKING_SPACE_LENGTH / 2) * this.postion.y
        );
        break;
    }

    this.group = group;
  }

  setPlaced = (placed: boolean): void => {
    this.placed = placed;

    // 如果placed为true且carInstance未定义，加载并添加汽车模型
    if (this.placed && !this.carInstance) {
      const loader = new GLTFLoader();
      loader.load("./assets/models/car.gltf", (gltf) => {
        const car = gltf.scene.clone();
        car.rotateX(Math.PI / 2);

        car.scale.set(1.8, 1.8, 1.8);
        car.position.z = 3;

        this.group.add(car);
        this.carInstance = car;

        renderer.render(scene, camera);
      });
    } else if (!this.placed && this.carInstance) {
      // 如果placed为false且carInstance已定义，从组中移除汽车模型
      this.group.remove(this.carInstance);
      this.carInstance = undefined;

      renderer.render(scene, camera);
    }
  };

  getCoord = () => {
    switch (this.direction) {
      case "left":
        return {
          head: { x: this.postion.x + 1, y: this.postion.y },
          tail: { x: this.postion.x, y: this.postion.y },
        };

      case "right":
        return {
          head: { x: this.postion.x, y: this.postion.y },
          tail: { x: this.postion.x + 1, y: this.postion.y },
        };

      case "reverse":
        return {
          head: { x: this.postion.x, y: this.postion.y },
          tail: { x: this.postion.x, y: this.postion.y + 1 },
        };

      default:
        return {
          head: { x: this.postion.x, y: this.postion.y + 1 },
          tail: { x: this.postion.x, y: this.postion.y },
        };
    }
  };
}

export default ParkingSpace;
