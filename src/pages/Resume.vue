<template>
  <div class="forum">
    <div class="main">
      <div class="search">
        <button class="search-btn">
          <img src="../assets/Forum/Searsh.svg" width="25px" alt="" />
        </button>
        <div class="search-set">
          <div class="search-bar">
            <input type="text" placeholder="Поиск" />
          </div>
          <nav class="nav-links">
            <a id="acruve" href="#">Проекты</a>
            <a href="#">Люди</a>
            <a href="#">Изображение</a>
          </nav>
        </div>
        <button class="search-filter">
          Фильтр <img src="../assets/Forum/Vector.svg" alt="" width="10px" />
        </button>
      </div>
      <div class="navig">
        <h1>Все потоки</h1>
        <div class="navig-nav">
          <ul>
            <a href="">Статьи</a>
            <p>+67</p>
          </ul>
          <ul>
            <a href="">Посты</a>
            <p>+13</p>
          </ul>
          <ul>
            <a href="">Новости</a>
            <p>+30</p>
          </ul>
          <ul>
            <a href="">Хабы</a>
            <p></p>
          </ul>
          <ul>
            <a href="">Авторы</a>
            <p></p>
          </ul>
          <ul>
            <a href="">Компании</a>
            <p></p>
          </ul>
        </div>
        <hr class="divider" />
        <button>
          Всё подряд
          <img src="../assets/Forum/Vector.svg" alt="" width="10px" />
        </button>
      </div>
      <div class="forum__container">
        <div class="forum__container_filter">
          <h3>Опыт работы в отрасли</h3>
          <button class="filter-button">Все отрасли</button>
          <select class="filter-select">
            <option value="all_time">За всё время работы</option>
          </select>
          <h3>Переезд</h3>
          <div v-for="option in filterData.relocation" :key="option.value">
            <input
              type="radio"
              :value="option.value"
              name="relocation"
              class="filter-radio"
            />
            <label>{{ option.label }}</label>
          </div>
          <h3>Тип занятости</h3>
          <div v-for="option in filterData.employmentType" :key="option.value">
            <input
              type="radio"
              :value="option.value"
              name="employmentType"
              class="filter-radio"
            />
            <label
              >{{ option.label }}
              <span class="count">{{ option.count }}</span></label
            >
          </div>
          <h3>Статус</h3>
          <div v-for="option in filterData.status" :key="option.value">
            <input
              type="radio"
              :value="option.value"
              name="status"
              class="filter-radio"
            />
            <label
              >{{ option.label }}
              <span class="count">{{ option.count }}</span></label
            >
          </div>
        </div>
        <div class="forum__container_card">
          <div v-for="card in cardData" :key="card.id" class="card">
            <div class="border-card"></div>
            <div class="card-header">
              <img :src="card.avatar" alt="Аватар" class="avatar" />
              <div class="card-info">
                <h3>{{ card.name }}</h3>
                <div class="meta">
                  <span>{{ card.age }} лет</span>
                  <span>•</span>
                  <span>{{ card.lastSeen }}</span>
                  <span>•</span>
                  <span>{{ card.updated }}</span>
                </div>
                <button class="status-btn">{{ card.status }}</button>
              </div>
            </div>
            <div class="card-body">
              <div class="info">
                <span>Опыт работы</span>
                <span>{{ card.experience }}</span>
              </div>
              <hr class="divider" />
              <div class="info">
                <span>Последнее место работы</span>
                <span>{{ card.lastJob }}</span>
              </div>
              <div class="info">
                <a href="" class="one_info"
                  >Подробнее о последнем месте
                  <img src="../assets/Forum/Vector.svg" alt="" width="10px"
                /></a>
              </div>
          
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Resume",
  data() {
    return {
      filterData: {
        experience: [
          { label: "Все отрасли", value: "all" },
          { label: "За всё время работы", value: "all_time" },
        ],
        relocation: [
          { label: "Живут в регионе", value: "in_region" },
          {
            label: "Не живут, но готовы переезжать в регион",
            value: "willing_to_move",
          },
          { label: "Готовы уехать из региона", value: "willing_to_leave" },
        ],
        employmentType: [
          { label: "Полная занятость", value: "full_time", count: 30466 },
          { label: "Частичная занятость", value: "part_time", count: 10092 },
          { label: "Проектная работа", value: "project_work", count: 1685 },
          { label: "Стажировка", value: "internship", count: 1685 },
          { label: "Волонтерство", value: "volunteering", count: 1431 },
        ],
        status: [
          { label: "Без статуса поиска", value: "no_status", count: 30466 },
          { label: "Не ищет работу", value: "not_looking", count: 10092 },
          { label: "Ищет предложения", value: "looking", count: 1685 },
          {
            label: "Активно ищет работу",
            value: "actively_looking",
            count: 1431,
          },
        ],
      },
      cardData: [
        {
          id: 1,
          avatar:
            "https://avatars.mds.yandex.net/i?id=200f475961f56764a0428cb1b8bb8e38ab3521f9-4571987-images-thumbs&n=13  ",
          name: "Дизайнер",
          age: 18,
          lastSeen: "Был вчера",
          updated: "Обновлено 12 мая",
          status: "ищет работу",
          experience: "1 месяц",
          lastJob: "KFC",
          moreResumes: "Ещё 3 резюме",
        },
        {
          id: 2,
          avatar:
            "https://avatars.mds.yandex.net/i?id=200f475961f56764a0428cb1b8bb8e38ab3521f9-4571987-images-thumbs&n=13 ",
          name: "Дизайнер",
          age: 18,
          lastSeen: "Был вчера",
          updated: "Обновлено 12 мая",
          status: "ищет работу",
          experience: "1 месяц",
          lastJob: "KFC",
          moreResumes: "Ещё 3 резюме",
        },
        {
          id: 3,
          avatar:
            "https://avatars.mds.yandex.net/i?id=200f475961f56764a0428cb1b8bb8e38ab3521f9-4571987-images-thumbs&n=13 ",
          name: "Дизайнер",
          age: 18,
          lastSeen: "Был вчера",
          updated: "Обновлено 12 мая",
          status: "ищет работу",
          experience: "1 месяц",
          lastJob: "KFC",
          moreResumes: "Ещё 3 резюме",
        },
      ],
    };
  },
};
</script>
<style scoped>
.forum {
  width: 100%;
  height: 1600px;
  background-color: #0f0b1f;
}
.divider {
  border: none;
  height: 1px;
  background-color: #8f8f8faa;
  margin: 2px 0;
}
.main {
  width: 87%;
  padding-top: 50px;
  height: 1000px;
  background-color: #0f0b1f;
  margin-left: auto;
  margin-right: auto;
}
.search {
  display: flex;
  height: 58px;
  width: 100%;
}
.search-btn {
  background-color: #7f5eff;
  width: 70px;
  height: 58px;
  z-index: 0;
  border-radius: 12px 0 0 12px;
  align-items: center;
  justify-content: center;
}
.search-set {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282828;
  width: 50%;
  border-radius: 12px;
  margin-left: -7px;
  border: 1px solid #7f5eff;
}
.search-bar {
  width: 100%;
}
.search-bar input {
  width: 90%;
  padding: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 16px;
}
.nav-links {
  display: flex;
  gap: 40px;
}
.nav-links a {
  text-decoration: none;
  color: #ffffff99;
  font-size: 16px;
  transition: color 0.3s ease;
}
#acruve {
  color: #ffffff;
}
.nav-links a:hover {
  color: #6c5dd3;
}
.search-filter {
  background-color: #1e1932;
  width: 143px;
  height: 58px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 18px;
  margin-left: 3%;
}
.navig {
  width: 100%;
  background-color: #272433;
  height: 205px;
  margin-top: 54px;
  border-radius: 10px;
  color: #ffffff;
}
.navig h1 {
  padding-top: 30px;
  margin-left: 100px;
}
.navig-nav {
  display: flex;
  margin-top: 30px;
  margin-left: 100px;
}
.navig button {
  width: 90px;
  margin-left: 100px;
  height: 16px;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  margin-top: 30px;
  cursor: pointer;
}
.navig-nav ul {
  display: flex;
  margin-right: 30px;
}
.navig-nav a {
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}
.navig-nav p {
  color: #7f5eff;
  font-size: 14px;
  margin-top: 3px;
}
.forum__container {
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: space-between;
  gap: 20px;
}
.forum__container_filter {
  width: 15%;
  background-color: #272433;
  border-radius: 10px;
  padding: 20px;
  color: #ffffff;
}
.forum__container_card {
  width: 84%;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  flex-direction: column;
  background-color: #272433;
}
.card {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
  color: #ffffff;
}
.border-card{
      border: 1px solid #7F5EFF;
      border-radius: 30px;
      position: absolute;
      width: 70%;
      margin-left: -10px;
      height: 295px;
      margin-top: -20px;
}

.card-header {
  display: flex;
  gap: 20px;
  align-items: center;
      margin-left: 20px;
}
.avatar {
  width: 150px;
  border-radius: 20%;
}
.card-info {
  display: flex;
  flex-direction: column;
  margin-left: 71px;
  height: 130px;
  justify-content: space-evenly;
      
}
.meta {
  font-size: 12px;
  width: 220px;
  color: #768694;
  display: flex;
  justify-content: space-between;
}
.status-btn {
  background-color: #fff3e6;
  color: #000000;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  width: 130px;
  height: 28px;
}
.card-body {
  margin-top: 20px;
  width: 93%;
  margin-left: 20px;
}
.info {
  display: flex;
  margin-bottom: 10px;
      margin-top: 10px; 
}
.info span {
  width: 240px;
}
.one_info {
  margin-left: 240px;
  color: #7F5EFF;
}
.forum__container_filter {
  padding: 20px;
}
h3 {

  color: #ffffff;
  margin-top: 10px;
}
.filter-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #00000000;
  color: #fff;
  border: none;
  border: 1px solid #7f5eff;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}
.filter-select {
  display: inline-block;
  padding: 8px 16px;
  background-color: #00000000;
  color: #fff;
  border: none;
  border: 1px solid #7f5eff;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  margin-bottom: 20px;
}
.forum__container_filter div {
  margin-top: 20px;
}
.filter-radio {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
}
.filter-radio:checked {
  background-color: #7f5eff;
  border-color: #7f5eff;
}
.filter-radio:checked::after {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.count {
  color: #7f5eff;
  font-size: 12px;
  margin-left: 5px;
}
</style>
