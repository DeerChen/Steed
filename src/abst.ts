/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:48:22
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 16:08:14
 * @Description  : 抽象
 */
import {
  GRID_SIZE,
  PARKING_LOT_LENGTH,
  PARKING_LOT_WIDTH,
  ROADS,
} from "./global/constants";
import type ParkingSpace from "./parkingSpace";

const parkingSpacesArr: ParkingSpace[] = []; // 车位数组

let parkingLotArr = new Array(PARKING_LOT_LENGTH / GRID_SIZE)
  .fill(-1)
  .map(() => new Array(PARKING_LOT_WIDTH / GRID_SIZE).fill(-1));

const abst = () => {
  parkingLotArr = new Array(PARKING_LOT_LENGTH / GRID_SIZE)
    .fill(-1)
    .map(() => new Array(PARKING_LOT_WIDTH / GRID_SIZE).fill(-1));

  // 道路抽象
  ROADS.forEach((road) => {
    parkingLotArr[road.coord.y - 1][road.coord.x - 1] = road.val;
  });

  // 停车位抽象
  parkingSpacesArr.forEach((parkingSpaceObj) => {
    const { getCoord, placed } = parkingSpaceObj;

    const { head, tail } = getCoord();
    parkingLotArr[tail.y - 1][tail.x - 1] = -1;

    if (!placed) parkingLotArr[head.y - 1][head.x - 1] = 0;
    else parkingLotArr[head.y - 1][head.x - 1] = -1;
  });
};

export { parkingSpacesArr, abst, parkingLotArr };
