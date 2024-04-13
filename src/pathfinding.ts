/*
 * @Author       : Senkita
 * @Date         : 2024-04-13 10:16:12
 * @LastEditors  : Senkita
 * @LastEditTime : 2024-04-13 13:16:36
 * @Description  : 寻路算法
 */
// 广度优先搜索
const bfsFindPath = (matrix: number[][]) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 右，下，左，上
  let start = null;

  // 找到起点1的位置
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        start = [i, j];
        break;
      }
    }
    if (start !== null) break;
  }

  if (!start) return "无";

  const queue = [[start, [start]]]; // 队列中存储（当前位置，路径）

  while (queue.length > 0) {
    const [[x, y], path] = queue.shift();
    const currentValue = matrix[x][y];

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // 检查左侧和右侧是否有0
      const leftX = x - dy;
      const leftY = y + dx;
      if (
        leftX >= 0 &&
        leftX < rows &&
        leftY >= 0 &&
        leftY < cols &&
        matrix[leftX][leftY] === 0
      ) {
        return path.concat([[leftX, leftY]]);
      }

      const rightX = x + dy;
      const rightY = y - dx;
      if (
        rightX >= 0 &&
        rightX < rows &&
        rightY >= 0 &&
        rightY < cols &&
        matrix[rightX][rightY] === 0
      ) {
        return path.concat([[rightX, rightY]]);
      }

      // 如果新位置有效且数字更大，则加入队列
      if (
        newX >= 0 &&
        newX < rows &&
        newY >= 0 &&
        newY < cols &&
        matrix[newX][newY] > currentValue
      ) {
        queue.push([[newX, newY], path.concat([[newX, newY]])]);
      }
    }
  }

  return "无";
};

// 深度优先搜索
const dfsFindPath = (matrix: number[][]) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 右，下，左，上
  const path: any[][] = [];

  const isValid = (x: number, y: number, current: any) => {
    return x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y] > current;
  };

  const dfs = (
    x: number,
    y: number,
    _current: number,
    visited: Set<unknown>
  ) => {
    if (matrix[x][y] === 0) {
      return true;
    }
    visited.add(`${x},${y}`);
    path.push([x, y]);

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // 检查左侧和右侧是否有0
      const sideX = x - dy;
      const sideY = y + dx;
      if (
        sideX >= 0 &&
        sideX < rows &&
        sideY >= 0 &&
        sideY < cols &&
        matrix[sideX][sideY] === 0
      ) {
        path.push([sideX, sideY]);
        return true;
      }

      const sideX2 = x + dy;
      const sideY2 = y - dx;
      if (
        sideX2 >= 0 &&
        sideX2 < rows &&
        sideY2 >= 0 &&
        sideY2 < cols &&
        matrix[sideX2][sideY2] === 0
      ) {
        path.push([sideX2, sideY2]);
        return true;
      }

      if (
        !visited.has(`${newX},${newY}`) &&
        isValid(newX, newY, matrix[x][y])
      ) {
        if (dfs(newX, newY, matrix[x][y], visited)) {
          return true;
        }
      }
    }

    visited.delete(`${x},${y}`);
    path.pop();
    return false;
  };

  // 找到起点1的位置
  let startX, startY;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        startX = i;
        startY = j;
        break;
      }
    }
    if (startX !== undefined && startY !== undefined) {
      break;
    }
  }

  if (startX === undefined || startY === undefined) {
    return "无";
  }

  const visited = new Set();
  if (dfs(startX, startY, -1, visited)) {
    return path;
  } else {
    return "无";
  }
};

export { bfsFindPath, dfsFindPath };
