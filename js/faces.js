if (document.querySelector('.loading')) {
  const $loading = document.querySelector('.loading');

  console.log('$loading', $loading);

  const $img = '<img src="./img/avatar.png" alt="karel\'s head">';
  const $rows = [];

  for (var i = 0; i < 5; i++) {
    const $row = document.createElement('div');
    for (var j = 0; j < 5; j++) {
      $row.innerHTML += $img;
    }
    // console.log('$img', $img);
    $rows[i] = $row;
    console.log('$row 1', $row);
  }

  console.log('$rows', $rows);

  for (var i = 0; i < 5; i++) {
    $loading.appendChild($rows[i]);
    console.log('$rows', $rows[i]);
    console.log('$rows', $rows);
  }
}
