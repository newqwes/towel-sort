
module.exports = function towelSort (matrix) {

  if (matrix == undefined || matrix.length<1) return []; 
  // сначала проверяем приходит ли, что то затем только проверяем < 1 ;

  let towel = [];
  towel.push(matrix[0], matrix[1].reverse()); 
  // пушим сразу первые два массива, второй разворачивам reverse, так как по тесту нет матриц состоящий менее чем из 2-х массивов;

  if (matrix[2]) towel.push(matrix[2]); 
  // проверяем есть ли третий массив и пушим его;

  if (matrix[3]) towel.push(matrix[3].reverse());
  // проверяем есть ли 4-ый массив и зеркально пушим;

  return towel.flat();
  //далее по тесту нет более 4х массивов, значит возвращаем наш созданный массив, flat убирает вложенность по дефолту (одну), то что и нужно.
  }

