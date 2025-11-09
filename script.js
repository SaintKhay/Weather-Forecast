const btn = document.querySelectorAll(".dropdown-btn");
const menu = document.querySelector(".dropdown-content");
// const forecastBtn = document.querySelector(".forecast-Btn");

btn.forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  window.addEventListener("click", (e) => {
    if (!e.target.matches(".dropdown-btn")) {
      menu.classList.remove("show");
    }
  });
});
console.log(btn);

const getData = async function () {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m,wind_speed_10m,relative_humidity_2m&current=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,apparent_temperature,wind_speed_10m`
    );
    console.log(res);
    if (!res.ok) return;

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
// getData();
