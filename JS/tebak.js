let changeToPlay = 3;
let counter;
let autoReload;

const resultNumber = function () {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  number.sort(function () {
    return Math.random() - 0.5;
  });

  let index = Math.floor(Math.random() * number.length - 1);

  return number[index];
};

const resultGame = function (user, comp) {
  console.log({ user, comp });
  if (user === comp) {
    alert(
      `Selamat kamu menebak angka dengan BENAR. \nNilai yang kamu pilih adalah ( ${user} ). \nDan nilai dari komputer adalah ( ${comp} ).`
    );

    autoReload = confirm("Mau mengulang game ? ");
    return (counter = 0);
  }

  if (user < comp) {
    if (comp - user <= 3 && comp - user > 1) {
      alert(`Angkamu terlalu kecil. \nNamun sudah mendekati`);
    } else if (comp - user <= 1) {
      alert(`Angka kamu terlalu kecil. \nNamun sudah sangat dekat`);
    } else {
      alert(`Angka kamu terlalu kecil`);
    }
  }

  if (user > comp) {
    if (user - comp <= 3 && user - comp > 1) {
      alert(`Angkamu terlalu besar. \nNamun sudah mendekati`);
    } else if (user - comp <= 1) {
      alert(`Angka kamu terlalu besar. \nNamun sudah sangat dekat`);
    } else {
      alert(`Angka kamu terlalu besar`);
    }
  }

  counter--;

  if (counter === 0) {
    alert(
      `Game selesai!\nKamu tidak bisa menebak angka dengan benar.\nAngka komputer adalah ( ${comp} )`
    );

    autoReload = confirm("Mau mengulang game ?");
  }
};

do {
  let compValue = resultNumber();
  console.log({ compValue });

  counter = changeToPlay;

  while (counter > 0) {
    if (counter === changeToPlay) {
      resultGame(
        parseInt(prompt(`Masukkan angka yang kamu tebak.`)),
        compValue
      );
    } else {
      resultGame(
        parseInt(
          prompt(
            `Masukkan angka yang kamu tebak. Tersisa ( ${counter} ) percobaan`
          )
        ),
        compValue
      );
    }
  }
} while (autoReload);
