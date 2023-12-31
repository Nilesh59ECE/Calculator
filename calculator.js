var screen = document.querySelector("#screen");
    var btn = document.querySelectorAll(".btn");

    for (item of btn) {
      item.addEventListener("click", (e) => {
        btntext = e.target.innerText;

        if (btntext == "×") {
          btntext = "*";
        }

        if (btntext == "÷") {
          btntext = "/";
        }
        screen.value += btntext;
      });
    }

    function sin() {
      screen.value = Math.sin(screen.value* Math.PI/180);
    }

    function cos() {
      screen.value = Math.cos(screen.value* Math.PI/180);
    }

    function tan() {
      screen.value = Math.tan(screen.value * Math.PI/180);
    }
    function pow() {
      screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
      screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
      screen.value = Math.log10(screen.value);
    }

    function ln() {
      screen.value = Math.log(screen.value);
    }

    function pi() {
      // screen.value = screen.value * 3.14159265;
      screen.value = screen.value * Math.PI;
    }

    function percent() {
      screen.value = screen.value / 100;
    }

    function e() {
      screen.value = screen.value * Math.E;
    }

    function rad() {
      screen.value = screen.value * (Math.PI / 180);
    }

    function deg() {
      screen.value = screen.value * (180 / Math.PI);
    }

    function asin() {
      screen.value = Math.asin(screen.value);
    }

    function acos() {
      screen.value = Math.acos(screen.value);
    }

    function atan() {
      screen.value = Math.atan(screen.value);
    }
    function fact() {
      var i, num, f;
      f = 1;
      num = screen.value;
      for (i = 1; i <= num; i++) {
        f = f * i;
      }

      i = i - 1;

      screen.value = f;
    }

    function backspc() {
      screen.value = screen.value.substr(0, screen.value.length - 1);
    }