const main = () => {
  const card = document.querySelector(".card");
  const navbar = document.querySelector(".navbar");
  const url = "http://localhost:88/users/v1/data";

  const navbarTemplate = (datas) => `<div class="brand">
        <i></i>
        <h2 class="nav-name">${datas.nama}</h2>
        <h3 class="username">${datas.username}</h3>
        <h4 class="ttl">${datas.ttl}</h4>
      </div>
      <div class="skill-container">
        <h1 class="skill">${datas.skill}</h1>
      </div>`;

  const cardTemplate = (datas) => `<h1 class="name">${datas.nama}</h1>
        <p class="description">
        ${datas.desc}
        </p>`;

  const fetchAPI = () =>
    new Promise((resolve, reject) => {
      try {
        resolve(fetch(`${url}`).then((res) => res.json()));
      } catch (e) {
        reject(console.error(e));
      }
    });

  const fetchNav = async () => {
    try {
      return await fetchAPI();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchCard = async () => {
    try {
      return await fetchAPI();
    } catch (e) {
      console.error(e);
    }
  };

  Promise.all([fetchNav(), fetchCard()]).then((res) => {
    const [fetchNav, fetchCard] = res;

    fetchNav.data.forEach((datas) => {
      navbar.innerHTML = navbarTemplate(datas);
    });

    fetchCard.data.forEach((datas) => {
      card.innerHTML = cardTemplate(datas);
    });
  });
};

main();
