document.addEventListener("DOMContentLoaded", () => {
  const top = document.querySelector("#top");
  const mid = document.querySelector("#mid");
  const jungle = document.querySelector("#jungle");
  const bot = document.querySelector("#bot");
  const sp = document.querySelector("#sp");
  const all = document.querySelector("#all");
  const agentAvatar = document.querySelector(".agent .avatar");
  let topChamp = document.querySelectorAll(".top");
  let midChamp = document.querySelectorAll(".mid");
  let botChamp = document.querySelectorAll(".bot");
  let spChamp = document.querySelectorAll(".support");
  let jungleChamp = document.querySelectorAll(".jungle");
  let Champs = document.querySelectorAll(".champs a img");
  let champsClass = document.querySelector(".champs");
  const allChampsCount = Champs.length;
  const topChampsCount = topChamp.length;
  const midChampsCount = midChamp.length;
  const jungleChampsCount = jungleChamp.length;
  const botChampsCount = botChamp.length;
  const spChampsCount = spChamp.length;
  const pick_1 = document.querySelector("#pick-1");
  const pickTeam = document.querySelector("#pick-team");
  const avatar = document.querySelector(".avatar");
  const avatars = document.querySelector(".avatars");
  let imgs = document.querySelectorAll(".avatars img");

  let startBtnEnabled = true;
  let randomIndex = 0;
  let startBtn = document.querySelector(".agent-start");
  let isPickTeam = false;
  pick_1.addEventListener("click", () => {
    startBtn.addEventListener("click", (e) => {
      e.preventDefault();
      randomOne(allChampsCount, Champs);
    });
    

    avatar.classList.toggle("active-box");
    avatars.classList.remove("active-box");
  });
  const randomOne = (champsCount, arr, index = 0) => {
    Champs.forEach((x) => {
      x.classList.remove("active");
    });

    if (index < 9) {
      index++;
      const randomIndex = Math.floor(Math.random() * champsCount);
      const selectedItem = arr[randomIndex];
      selectedItem.classList.add("active");
      agentAvatar.src = selectedItem.src;

      setTimeout(() => {
        randomOne(champsCount, arr, index);
      }, 500);
    }
  };
  const randomTeam = (champsCount, arr) => {
    const usedImagePaths = [];
    Champs.forEach((x) => {
      x.classList.remove("active");
    });

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < imgs.length) {
        let randomIndex;
        let selectedItem;

        do {
          randomIndex = Math.floor(Math.random() * champsCount);
          selectedItem = arr[randomIndex];
        } while (usedImagePaths.includes(selectedItem.src));

        usedImagePaths.push(selectedItem.src);
        imgs[index].src = selectedItem.src;
        selectedItem.classList.add("active");

        index++;
      } else {
        clearInterval(intervalId); // Dừng interval khi đã thêm class cho tất cả các phần tử
      }
    }, 500);
  };

  pickTeam.addEventListener("click", () => {
    isPickTeam = true;
    startBtnEnabled = true;
    avatars.classList.toggle("active-box");
    avatar.classList.remove("active-box");
    startBtn.addEventListener("click", (e) => {
      if (startBtnEnabled) {
        e.preventDefault();
        randomTeam(allChampsCount, Champs);
      }
    });
  });
  let i = 0;
  Champs.forEach((x) => {
    x.addEventListener("click", (e) => {
      e.preventDefault();
      agentAvatar.src = x.src;
      imgs[i].src = x.src;
      i++;
      if (i === imgs.length) {
        i = 0;
      }
    });
  });

  Champs = Array.from(Champs);
  all.addEventListener("click", (e) => {
    e.preventDefault();
    Champs.forEach((x) => {
      x.classList.remove("active");
    });
    champsClass.style.display = "grid";
    Champs.forEach((x) => {
      x.style.display = "block";
    });
  });
  top.addEventListener("click", (e) => {
    e.preventDefault();
    topChamp.forEach((x) => {
      x.classList.remove("active");
    });
    startBtnEnabled = false;
    //randomTeam(topChampsCount, topChamp);
    champsClass.style.display = "flex";
    champsClass.style.justifyContent = "center";
    startBtn.addEventListener("click", (e) => {
      randomOne(topChampsCount, topChamp);
      if (pickTeam) {
        randomTeam(topChampsCount, topChamp);
      }
    });
    Champs.forEach((x) => {
      x.style.display = "none";
    });

    topChamp.forEach((x) => {
      x.style.display = "block";
      x.style.marginRight = "20px";
    });
  });
  mid.addEventListener("click", (e) => {
    e.preventDefault();
    midChamp.forEach((x) => {
      x.classList.remove("active");
    });
    startBtnEnabled = false;
    champsClass.style.display = "flex";
    champsClass.style.justifyContent = "center";
    champsClass.style.flexWrap = "wrap";
    startBtn.addEventListener("click", (e) => {
      randomOne(midChampsCount, midChamp);
      if (pickTeam) {
        randomTeam(midChampsCount, midChamp);
      }
    });
    Champs.forEach((x) => {
      x.style.display = "none";
    });

    midChamp.forEach((x) => {
      x.style.display = "block";
      x.style.marginRight = "20px";
    });
  });
  jungle.addEventListener("click", (e) => {
    e.preventDefault();
    jungleChamp.forEach((x) => {
      x.classList.remove("active");
    });
    startBtnEnabled = false;
    champsClass.style.display = "flex";
    champsClass.style.justifyContent = "center";
    champsClass.style.flexWrap = "wrap";
    startBtn.addEventListener("click", (e) => {
      randomOne(jungleChampsCount, jungleChamp);
      if (pickTeam) {
        randomTeam(jungleChampsCount, jungleChamp);
      }
    });
    Champs.forEach((x) => {
      x.style.display = "none";
    });

    jungleChamp.forEach((x) => {
      x.style.display = "block";
      x.style.marginRight = "20px";
    });
  });
  bot.addEventListener("click", (e) => {
    e.preventDefault();
    botChamp.forEach((x) => {
      x.classList.remove("active");
    });
    startBtnEnabled = false;
    champsClass.style.display = "flex";
    champsClass.style.justifyContent = "center";
    champsClass.style.flexWrap = "wrap";
    startBtn.addEventListener("click", (e) => {
      randomOne(botChampsCount, botChamp);
      if (pickTeam) {
        randomTeam(botChampsCount, botChamp);
      }
    });
    Champs.forEach((x) => {
      x.style.display = "none";
    });

    botChamp.forEach((x) => {
      x.style.display = "block";
      x.style.marginRight = "20px";
    });
  });
  sp.addEventListener("click", (e) => {
    e.preventDefault();
    spChamp.forEach((x) => {
      x.classList.remove("active");
    });
    startBtnEnabled = false;
    champsClass.style.display = "flex";
    champsClass.style.justifyContent = "center";
    champsClass.style.flexWrap = "wrap";
    startBtn.addEventListener("click", (e) => {
      randomOne(spChampsCount, spChamp);
      if (pickTeam) {
        randomTeam(spChampsCount, spChamp);
      }
    });
    Champs.forEach((x) => {
      x.style.display = "none";
    });

    spChamp.forEach((x) => {
      x.style.display = "block";
      x.style.marginRight = "20px";
    });
  });
});
