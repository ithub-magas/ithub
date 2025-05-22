<template>
  <div class="forum-page">
    <div class="forum-page__container">
      <div class="forum-page__main-content">
        <div class="forum-page__left-column">
          <div class="forum-search">
            <div class="forum-search__container">
              <div class="forum-search__input-group">
                <div class="forum-search__icon-wrapper">
                  <img src="../assets/PostCard/search.svg" alt="Search icon" />
                </div>
                <input
                  placeholder="Поиск"
                  class="forum-search__input"
                  type="text"
                />
                <div class="forum-search__filter-buttons">
                  <button class="forum-search__filter-button">Проекты</button>
                  <button class="forum-search__filter-button">Люди</button>
                  <button class="forum-search__filter-button">
                    Изображение
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="forum-filters">
            <div class="forum-filters__header">
              <h1 class="forum-filters__title">Все потоки</h1>
            </div>

            <div class="forum-filters__tabs">
              <div class="forum-filters__tabs-container">
                <span class="forum-filters__tab">Статьи</span>
                <span class="forum-filters__tab">Посты</span>
                <span class="forum-filters__tab">Новости</span>
                <span class="forum-filters__tab">Хабы</span>
                <span class="forum-filters__tab">Авторы</span>
                <span class="forum-filters__tab">Компании</span>
              </div>
            </div>
            <div class="forum-filters__sort">
              <div class="forum-filters__dropdown" ref="dropdown">
                <button
                  class="forum-filters__dropdown-button"
                  @click.stop="toggleDropdown"
                >
                  Все подряд
                  <svg
                    class="forum-filters__dropdown-arrow"
                    :class="{
                      'forum-filters__dropdown-arrow--rotated': isDropdownOpen,
                    }"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <div class="forum-filters__dropdown-menu" v-if="isDropdownOpen">
                  <a href="">Новые</a>
                  <a href="">Популярные</a>
                  <a href="">Лучшие за неделю</a>
                  <a href="">Лучшие за месяц</a>
                </div>
              </div>
            </div>
          </div>

          <div class="forum-posts">
            <div class="forum-post">
              <div class="forum-post__content">
                <div class="forum-post__author">
                  <div class="forum-post__avatar">
                    <div class="forum-post__avatar-image">
                      <img
                        src="https://image.winudf.com/v2/image/Y29tLndQcmVtaXVtSEROYXR1cmVXYWxscGFwZXJzX3NjcmVlbnNob3RzXzNfMjcxMmJjNTE/screen-3.jpg?fakeurl=1&type=.jpg"
                        class="forum-post__avatar-img"
                        alt="Author avatar"
                      />
                    </div>
                  </div>
                  <div class="forum-post__author-name">Jonny Dep</div>
                  <div class="forum-post__publish-time">11 минут назад</div>
                </div>
                <div class="forum-post__description">
                  JForge: Создаем свою мини-IDE на Java Swing с нуля (с темной
                  темой и подсветкой синтаксиса!)
                </div>
                <div class="forum-post__meta">
                  <div class="forum-post__reading-time">
                    <span class="forum-post__meta-item">
                      <img
                        src="../assets/PostCard/clock.png"
                        alt="Clock icon"
                      />
                      4 мин
                    </span>
                  </div>
                  <div class="forum-post__views">
                    <span class="forum-post__meta-item">
                      <img src="../assets/PostCard/eye.png" alt="Views icon" />
                      68
                    </span>
                  </div>
                </div>
                <div class="forum-post__tags">
                  <span class="forum-post__tag">Графический дизайн</span>
                  <span class="forum-post__tag">Программирование</span>
                </div>
                <div class="forum-post__image">
                  <div class="forum-post__image-wrapper">
                    <img
                      src="../assets/PostCard/PostImage.png"
                      alt="Post image"
                    />
                  </div>
                </div>
                <div class="forum-post__actions">
                  <div class="forum-post__action-buttons">
                    <div class="forum-post__action">
                      <img
                        class="forum-post__action-icon"
                        src="../assets/PostCard/like.png"
                        alt="Лайк"
                      />
                      <span class="forum-post__action-count">24</span>
                    </div>
                    <div class="forum-post__action">
                      <img
                        class="forum-post__action-icon"
                        src="../assets/PostCard/save.png"
                        alt="Сохранение"
                      />
                      <span class="forum-post__action-count">12</span>
                    </div>
                    <div class="forum-post__action">
                      <img
                        class="forum-post__action-icon"
                        src="../assets/PostCard/report.png"
                        alt="Поделиться"
                      />
                      <span class="forum-post__action-count">3</span>
                    </div>
                    <div class="forum-post__action">
                      <img
                        class="forum-post__action-icon"
                        src="../assets/PostCard/comments.png"
                        alt="Комментарии"
                      />
                      <span class="forum-post__action-count">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content__right_forum_list_main__box">
          <div
            class="filters_list_button"
            @click="toggleFilterDropdown"
            ref="filterButton"
          >
            <span class="filters_list_button_text">Фильтр</span>
            <svg
              class="filters_list_button_arrow"
              :class="{
                'filters_list_button_arrow--rotated': isFilterDropdownOpen,
              }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <div class="filters_dropdown" v-if="isFilterDropdownOpen">
              <div class="filters_dropdown_item" @click="selectFilter('all')">
                Все
              </div>
              <div
                class="filters_dropdown_item"
                @click="selectFilter('popular')"
              >
                Популярные
              </div>
              <div class="filters_dropdown_item" @click="selectFilter('new')">
                Новые
              </div>
              <div
                class="filters_dropdown_item"
                @click="selectFilter('commented')"
              >
                С комментариями
              </div>
              <div class="filters_dropdown_item" @click="selectFilter('saved')">
                Сохраненные
              </div>
            </div>
          </div>
          <div class="forum-page__right-column">
            <div class="popular-posts">
              <div class="popular-posts__content">
                <div class="popular-posts__header">
                  <h1>Популярное</h1>
                </div>
                <div class="popular-posts__list">
                  <div class="popular-posts__item">
                    <div class="popular-posts__text">
                      <span>
                        ООП не мертво. Вы просто пользуетесь им как молотком по
                        клавиатуре
                      </span>
                    </div>
                    <div class="popular-posts__stats">
                      <div class="popular-posts__stats-container">
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/counter-views.png"
                            alt="Просмотры"
                          />
                          <span class="popular-posts__stat-count">1.2K</span>
                        </div>
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/comments.png"
                            alt="Комментарии"
                          />
                          <span class="popular-posts__stat-count">48</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="popular-posts__item">
                    <div class="popular-posts__text">
                      <span>
                        От песка в глазах к панораме: как 49- дюймовый монитор
                        заменил два 27- дюймовых и сделал жизнь и работу
                        комфортнее
                      </span>
                    </div>
                    <div class="popular-posts__stats">
                      <div class="popular-posts__stats-container">
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/counter-views.png"
                            alt="Просмотры"
                          />
                          <span class="popular-posts__stat-count">1.2K</span>
                        </div>
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/comments.png"
                            alt="Комментарии"
                          />
                          <span class="popular-posts__stat-count">48</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="popular-posts__item">
                    <div class="popular-posts__text">
                      <span>
                        Fast Company: первым «убийственным приложением» для
                        генеративного ИИ станет программирование
                      </span>
                    </div>
                    <div class="popular-posts__stats">
                      <div class="popular-posts__stats-container">
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/counter-views.png"
                            alt="Просмотры"
                          />
                          <span class="popular-posts__stat-count">1.2K</span>
                        </div>
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/comments.png"
                            alt="Комментарии"
                          />
                          <span class="popular-posts__stat-count">48</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="popular-posts__item">
                    <div class="popular-posts__text">
                      <span> Больше нет входа в IT. Только выход </span>
                    </div>
                    <div class="popular-posts__stats">
                      <div class="popular-posts__stats-container">
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/counter-views.png"
                            alt="Просмотры"
                          />
                          <span class="popular-posts__stat-count">1.2K</span>
                        </div>
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/comments.png"
                            alt="Комментарии"
                          />
                          <span class="popular-posts__stat-count">48</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="popular-posts__item">
                    <div class="popular-posts__text">
                      <span>
                        Из-за тренда Chromebook Challenge в TikTok ученики
                        портят школьные ноутбуки, создавая нагрузку грифелем в
                        разъёме USB
                      </span>
                    </div>
                    <div class="popular-posts__stats">
                      <div class="popular-posts__stats-container">
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/counter-views.png"
                            alt="Просмотры"
                          />
                          <span class="popular-posts__stat-count">1.2K</span>
                        </div>
                        <div class="popular-posts__stat">
                          <img
                            class="popular-posts__stat-icon"
                            src="../assets/PostCard/comments.png"
                            alt="Комментарии"
                          />
                          <span class="popular-posts__stat-count">48</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Unbounded:wght@200..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Unbounded:wght@200..900&display=swap");

.filters_list_button {
  width: 143px;
  height: 58px;
  background: #7f5eff54;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;
}

.filters_list_button:hover {
  background: #7f5eff70;
}
.filters_list_button_text {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #ffffff;
}
.filters_list_button_arrow {
  transition: transform 0.2s ease;
}
.filters_list_button_arrow--rotated {
  transform: rotate(180deg);
}

.filters_dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #1e1932;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  z-index: 10;
  margin-top: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid #544e6c;
}

.filters_dropdown_item {
  padding: 12px 20px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #ffffff;
  transition: background 0.2s ease;
}

.filters_dropdown_item:hover {
  background: #7f5eff30;
}

.filters_dropdown_item:not(:last-child) {
  border-bottom: 1px solid #544e6c;
}

.popular-posts__text span {
  font-family: "ABeeZee", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  letter-spacing: 0%;
}

.forum-page__main-content {
  display: flex;
  flex-wrap: wrap;
  gap: 59px;
}

.forum-search__container {
  display: grid;
  gap: 51px;
}

.popular-posts__stats {
  margin-top: 12px;
}

.popular-posts__stats-container {
  display: flex;
  gap: 25px;
  align-items: center;
}

.popular-posts__stat {
  display: flex;
  align-items: center;
  gap: 6px;
}

.popular-posts__stat-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.popular-posts__stat-count {
  font-family: Arial;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
}

.popular-posts__item {
  border-top: 1px solid #544e6c;
  border-bottom: 1px solid #544e6c;
  padding-top: 22px;
  padding-bottom: 22px;
}

.popular-posts {
  padding: 21px;
  border-radius: 15px;
  background: #1e1932;
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-left: 0;
}

.popular-posts__header {
  font-family: "ABeeZee", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 68px;
  letter-spacing: 0.8px;
  vertical-align: middle;
  color: #ffffff;
}

.forum-page {
  background-color: #0f0b1f;
  width: 100%;
  min-height: 100vh;
  padding-inline: 5vw;
}

.forum-page__container {
  max-width: 1600px;
  margin-inline: auto;
  display: flex;
}

.forum-search {
  width: 100%;
  margin-bottom: 26px;
}

.forum-search__input-group {
  width: 100%;
  height: 58px;
  border-radius: 12px;
  display: flex;
  border: 1px solid rgba(127, 94, 255, 1);
  overflow: hidden;
}

.forum-search__icon-wrapper {
  background-color: rgba(127, 94, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  flex-shrink: 0;
}

.forum-page__right-column {
  padding-top: 20px;
  width: 100%;
}

.forum-search__icon-wrapper img {
  width: 25px;
  height: 25px;
}

.forum-page {
  display: flex;
  flex-direction: column;
}

.forum-search__input {
  background-color: rgba(15, 11, 31, 1);
  width: 100%;
  height: 56px;
  padding-left: 34px;
  border: none;
  outline: none;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
}

.forum-search__input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.forum-search__filter-buttons {
  display: flex;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 0 15px;
  gap: 25px;
  flex-shrink: 0;
}

.forum-search__filter-button {
  background: transparent;
  border: none;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
}

.forum-search__filter-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.forum-posts {
  display: grid;
  gap: 43px;
}

.forum-filters {
  width: 100%;
  min-height: 205px;
  border-radius: 10px;
  background: rgba(30, 25, 50, 1);
  position: relative;
  margin-bottom: 43px;
}

.forum-filters__header {
  padding: 40px 0px 0px 5%;
}

.forum-filters__title {
  color: rgba(255, 255, 255, 1);
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
}

.forum-filters__tabs {
  width: 100%;
  border-bottom: 1px solid rgba(84, 78, 108, 1);
  padding: 20px 0px 3px 0px;
}

.forum-filters__tabs-container {
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.forum-filters__sort {
  margin-left: 5%;
  min-height: 60px;
  display: flex;
  align-items: center;
}

.forum-filters__tab {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.8px;
  vertical-align: middle;
  cursor: pointer;
  transition: color 0.2s ease;
  margin-bottom: 10px;
}

.forum-filters__tab:hover {
  color: rgba(127, 94, 255, 1);
}

.forum-filters__dropdown {
  position: relative;
  display: inline-block;
}

.forum-filters__dropdown-button {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 1);
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  padding: 6px 12px;
}

.forum-filters__dropdown-button:hover {
  background: rgba(84, 78, 108, 0.3);
}

.forum-filters__dropdown-arrow {
  transition: transform 0.2s ease;
}

.forum-filters__dropdown-arrow--rotated {
  transform: rotate(180deg);
}

.forum-filters__dropdown-menu {
  position: absolute;
  background-color: rgba(40, 35, 70, 1);
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 6px;
  overflow: hidden;
  left: 0;
  top: 100%;
  margin-top: 4px;
  border: 1px solid rgba(84, 78, 108, 0.5);
}

.forum-filters__dropdown-menu a {
  color: white;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  transition: background 0.2s ease;
}

.forum-filters__dropdown-menu a:hover {
  background-color: rgba(84, 78, 108, 0.5);
}

.forum-post {
  width: 100%;
  min-height: 400px;
  border-radius: 10px;
  background-color: rgba(30, 25, 50, 1);
  padding: 38px 5%;
}

.forum-post__avatar-image {
  width: 26px;
  height: 26px;
  max-width: 26px;
  max-height: 26px;
  border-radius: 3px;
  overflow: hidden;
}

.forum-post__avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.forum-post__author {
  display: flex;
  align-items: center;
  gap: 13px;
}

.forum-post__author-name {
  font-family: Arial;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
}

.forum-post__publish-time {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.55);
  padding-left: 4px;
}

.forum-post__description {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
  margin-top: 5px;
}

.forum-post__meta {
  display: flex;
  gap: 17px;
  margin-top: 10px;
}

.forum-post__reading-time {
  display: flex;
}

.forum-post__meta-item {
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: Arial;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
}

.forum-post__views {
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: Arial;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
}

.forum-post__tags {
  display: flex;
  gap: 25px;
  margin-top: 15px;
}

.forum-post__tag {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
  background: rgba(127, 94, 255, 0.2);
  padding: 2px 10px;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.forum-post__tag:hover {
  background: rgba(127, 94, 255, 0.4);
}

.forum-post__content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.forum-post__image {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.forum-post__image-wrapper {
  width: 100%;
  max-width: 740px;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
}

.forum-post__image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.forum-post__actions {
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid rgba(84, 78, 108, 0.5);
}

.forum-post__action-buttons {
  display: flex;
  gap: 26px;
  align-items: center;
}

.forum-post__action {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.forum-post__action:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.forum-post__action-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.forum-post__action:hover img {
  transform: scale(1.1);
}

.forum-post__action-count {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: rgba(255, 255, 255, 1);
  margin-left: 2px;
}

@media (min-width: 768px) {
  .forum-page__container {
    flex-direction: row;
  }

  .forum-page__main-content {
    flex-wrap: nowrap;
  }

  .forum-page__left-column {
    flex: 3;
  }

  .forum-page__right-column {
    flex: 1;
  }
}

@media (max-width: 767px) {
  .forum-search__filter-buttons {
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
  }

  .forum-search__filter-button {
    font-size: 12px;
  }

  .forum-post {
    padding: 20px;
  }

  .forum-filters__header {
    padding: 20px 0 0 3%;
  }

  .forum-filters__tabs-container {
    padding: 0 3%;
    gap: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isFilterDropdownOpen: false,
      selectedFilter: 'all'
    };
  },
  methods: {
    toggleFilterDropdown() {
      this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
    },
    closeFilterDropdown(event) {
      if (this.$refs.filterButton && !this.$refs.filterButton.contains(event.target)) {
        this.isFilterDropdownOpen = false;
      }
    },
    selectFilter(filter) {
      this.selectedFilter = filter;
      this.isFilterDropdownOpen = false;
      console.log('Selected filter:', filter);
    }
  },
  mounted() {
    document.addEventListener('click', this.closeFilterDropdown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeFilterDropdown);
  }
};
</script>
