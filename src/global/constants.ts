/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:51:14
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 13:55:06
 * @Description  : 全局常量
 */
const SCREEN_WIDTH = window.innerWidth; // 屏幕宽度
const SCREEN_HEIGHT = window.innerHeight; // 屏幕高度

const PARKING_LOT_WIDTH = 180; // 停车场宽度
const PARKING_LOT_LENGTH = 100; // 停车场长度

const MAX_SIZE = Math.max(PARKING_LOT_WIDTH, PARKING_LOT_LENGTH);

const GRID_SIZE = 10; // 网格大小

const PARKING_SPACE_LENGTH = GRID_SIZE * 2; // 停车位长度
const PARKING_SPACE_WIDTH = GRID_SIZE * 1; // 停车位宽度

// 停车位数组
const PARKING_SPACES = {
  A: [
    {
      name: "A01",
      position: { x: 4, y: 6 },
      direction: "default",
    },
    {
      name: "A02",
      position: { x: 5, y: 6 },
      direction: "default",
    },
    {
      name: "A03",
      position: { x: 6, y: 6 },
      direction: "default",
    },
    {
      name: "A04",
      position: { x: 7, y: 6 },
      direction: "default",
    },
    {
      name: "A05",
      position: { x: 8, y: 6 },
      direction: "default",
    },
    {
      name: "A06",
      position: { x: 8, y: 4 },
      direction: "reverse",
    },
    {
      name: "A07",
      position: { x: 7, y: 4 },
      direction: "reverse",
    },
    {
      name: "A08",
      position: { x: 6, y: 4 },
      direction: "reverse",
    },
    {
      name: "A09",
      position: { x: 5, y: 4 },
      direction: "reverse",
    },
    {
      name: "A10",
      position: { x: 4, y: 4 },
      direction: "reverse",
    },
  ],
  B: [
    {
      name: "B01",
      position: { x: 11, y: 6 },
      direction: "default",
    },
    {
      name: "B02",
      position: { x: 12, y: 6 },
      direction: "default",
    },
    {
      name: "B03",
      position: { x: 13, y: 6 },
      direction: "default",
    },
    {
      name: "B04",
      position: { x: 14, y: 6 },
      direction: "default",
    },
    {
      name: "B05",
      position: { x: 15, y: 6 },
      direction: "default",
    },
    {
      name: "B06",
      position: { x: 15, y: 4 },
      direction: "reverse",
    },
    {
      name: "B07",
      position: { x: 14, y: 4 },
      direction: "reverse",
    },
    {
      name: "B08",
      position: { x: 13, y: 4 },
      direction: "reverse",
    },
    {
      name: "B09",
      position: { x: 12, y: 4 },
      direction: "reverse",
    },
    {
      name: "B10",
      position: { x: 11, y: 4 },
      direction: "reverse",
    },
  ],
  C: [
    {
      name: "C01",
      position: { x: 11, y: 9 },
      direction: "reverse",
    },
    {
      name: "C02",
      position: { x: 12, y: 9 },
      direction: "reverse",
    },
    {
      name: "C03",
      position: { x: 13, y: 9 },
      direction: "reverse",
    },
    {
      name: "C04",
      position: { x: 14, y: 9 },
      direction: "reverse",
    },
    {
      name: "C05",
      position: { x: 15, y: 9 },
      direction: "reverse",
    },
    {
      name: "C06",
      position: { x: 16, y: 9 },
      direction: "reverse",
    },
    {
      name: "C07",
      position: { x: 17, y: 9 },
      direction: "reverse",
    },
    {
      name: "C08",
      position: { x: 18, y: 9 },
      direction: "reverse",
    },
    {
      name: "C09",
      position: { x: 17, y: 7 },
      direction: "right",
    },
    {
      name: "C10",
      position: { x: 17, y: 6 },
      direction: "right",
    },
  ],
  D: [
    {
      name: "D01",
      position: { x: 17, y: 5 },
      direction: "right",
    },
    {
      name: "D02",
      position: { x: 17, y: 4 },
      direction: "right",
    },
    {
      name: "D03",
      position: { x: 17, y: 3 },
      direction: "right",
    },
    {
      name: "D04",
      position: { x: 17, y: 2 },
      direction: "right",
    },
    {
      name: "D05",
      position: { x: 17, y: 1 },
      direction: "right",
    },
    {
      name: "D06",
      position: { x: 15, y: 1 },
      direction: "default",
    },
    {
      name: "D07",
      position: { x: 14, y: 1 },
      direction: "default",
    },
    {
      name: "D08",
      position: { x: 13, y: 1 },
      direction: "default",
    },
    {
      name: "D09",
      position: { x: 12, y: 1 },
      direction: "default",
    },
    {
      name: "D10",
      position: { x: 11, y: 1 },
      direction: "default",
    },
    {
      name: "D11",
      position: { x: 10, y: 1 },
      direction: "default",
    },
  ],
  E: [
    {
      name: "E01",
      position: { x: 9, y: 1 },
      direction: "default",
    },
    {
      name: "E02",
      position: { x: 8, y: 1 },
      direction: "default",
    },
    {
      name: "E03",
      position: { x: 7, y: 1 },
      direction: "default",
    },
    {
      name: "E04",
      position: { x: 6, y: 1 },
      direction: "default",
    },
    {
      name: "E05",
      position: { x: 5, y: 1 },
      direction: "default",
    },
    {
      name: "E06",
      position: { x: 4, y: 1 },
      direction: "default",
    },
    {
      name: "E07",
      position: { x: 3, y: 1 },
      direction: "default",
    },
    {
      name: "E08",
      position: { x: 2, y: 1 },
      direction: "default",
    },
    {
      name: "E09",
      position: { x: 1, y: 1 },
      direction: "default",
    },
    {
      name: "E10",
      position: { x: 1, y: 4 },
      direction: "left",
    },
    {
      name: "E11",
      position: { x: 1, y: 5 },
      direction: "left",
    },
  ],
  F: [
    {
      name: "F01",
      position: { x: 1, y: 6 },
      direction: "left",
    },
    {
      name: "F02",
      position: { x: 1, y: 7 },
      direction: "left",
    },
    {
      name: "F03",
      position: { x: 1, y: 8 },
      direction: "left",
    },
    {
      name: "F04",
      position: { x: 1, y: 9 },
      direction: "left",
    },
    {
      name: "F05",
      position: { x: 1, y: 10 },
      direction: "left",
    },
    {
      name: "F06",
      position: { x: 4, y: 9 },
      direction: "reverse",
    },
    {
      name: "F07",
      position: { x: 5, y: 9 },
      direction: "reverse",
    },
    {
      name: "F08",
      position: { x: 6, y: 9 },
      direction: "reverse",
    },
    {
      name: "F09",
      position: { x: 7, y: 9 },
      direction: "reverse",
    },
    {
      name: "F10",
      position: { x: 8, y: 9 },
      direction: "reverse",
    },
  ],
};

// 道路权重
const ROADS = [
  { coord: { y: 10, x: 10 }, val: 1 },
  { coord: { y: 9, x: 10 }, val: 2 },
  { coord: { y: 8, x: 10 }, val: 3 },
  { coord: { y: 7, x: 10 }, val: 4 },
  { coord: { y: 6, x: 10 }, val: 5 },
  { coord: { y: 5, x: 10 }, val: 6 },
  { coord: { y: 4, x: 10 }, val: 7 },

  { coord: { y: 8, x: 11 }, val: 4 },
  { coord: { y: 8, x: 12 }, val: 5 },
  { coord: { y: 8, x: 13 }, val: 6 },
  { coord: { y: 8, x: 14 }, val: 7 },
  { coord: { y: 8, x: 15 }, val: 8 },
  { coord: { y: 8, x: 16 }, val: 9 },
  { coord: { y: 8, x: 17 }, val: 10 },
  { coord: { y: 8, x: 18 }, val: 11 },

  { coord: { y: 7, x: 16 }, val: 10 },
  { coord: { y: 6, x: 16 }, val: 11 },
  { coord: { y: 5, x: 16 }, val: 12 },
  { coord: { y: 4, x: 16 }, val: 13 },
  { coord: { y: 3, x: 16 }, val: 14 },
  { coord: { y: 2, x: 16 }, val: 15 },
  { coord: { y: 1, x: 16 }, val: 16 },

  { coord: { y: 3, x: 15 }, val: 15 },
  { coord: { y: 3, x: 14 }, val: 16 },
  { coord: { y: 3, x: 14 }, val: 17 },
  { coord: { y: 3, x: 12 }, val: 18 },
  { coord: { y: 3, x: 11 }, val: 19 },
  { coord: { y: 3, x: 10 }, val: 20 },
  { coord: { y: 3, x: 9 }, val: 21 },
  { coord: { y: 3, x: 8 }, val: 22 },
  { coord: { y: 3, x: 7 }, val: 23 },
  { coord: { y: 3, x: 6 }, val: 24 },
  { coord: { y: 3, x: 5 }, val: 25 },
  { coord: { y: 3, x: 4 }, val: 26 },
  { coord: { y: 3, x: 3 }, val: 27 },
  { coord: { y: 3, x: 2 }, val: 28 },
  { coord: { y: 3, x: 1 }, val: 29 },

  { coord: { y: 4, x: 9 }, val: 22 },
  { coord: { y: 5, x: 9 }, val: 23 },
  { coord: { y: 6, x: 9 }, val: 24 },
  { coord: { y: 7, x: 9 }, val: 25 },

  { coord: { y: 4, x: 3 }, val: 28 },
  { coord: { y: 5, x: 3 }, val: 29 },
  { coord: { y: 6, x: 3 }, val: 30 },
  { coord: { y: 7, x: 3 }, val: 31 },
  { coord: { y: 8, x: 3 }, val: 32 },
  { coord: { y: 9, x: 3 }, val: 33 },
  { coord: { y: 10, x: 3 }, val: 34 },

  { coord: { y: 8, x: 4 }, val: 33 },
  { coord: { y: 8, x: 5 }, val: 34 },
  { coord: { y: 8, x: 6 }, val: 35 },
  { coord: { y: 8, x: 7 }, val: 36 },
  { coord: { y: 8, x: 8 }, val: 37 },
  { coord: { y: 8, x: 9 }, val: 38 },

  { coord: { y: 9, x: 9 }, val: 39 },
  { coord: { y: 10, x: 9 }, val: 40 },
];

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PARKING_LOT_WIDTH,
  PARKING_LOT_LENGTH,
  GRID_SIZE,
  MAX_SIZE,
  PARKING_SPACE_LENGTH,
  PARKING_SPACE_WIDTH,
  PARKING_SPACES,
  ROADS,
};
