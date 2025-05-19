<template>
  <div class="main-container">

    <div class="content_up_search_posts">

      <div class="super_search_input_container">
        <div class="input_part_one_search_post">
          <div class="search_img_input_button">
            <img src="../assets/PostCard/search.png" alt="">
          </div>
        </div>
        <input placeholder="Поиск" class="input_main_part_search_post" type="text">
        <div class="input_part_two_search_post">
          <button class="search_filter_button">Проекты</button>
          <button class="search_filter_button">Люди</button>
          <button class="search_filter_button">Изображение</button>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="forum_box">
        <div class="filters_settings_forum_container">
          <div class="title_filters">
            <h1>Все потоки</h1>
          </div>

          <div class="panel_buttons_filters">
            <div class="main_panel_box">
              <span class="button_link_click_filter">Статьи</span>
              <span class="button_link_click_filter">Посты</span>
              <span class="button_link_click_filter">Новости</span>
              <span class="button_link_click_filter">Хабы</span>
              <span class="button_link_click_filter">Авторы</span>
              <span class="button_link_click_filter">Компании</span>
            </div>
          </div>
          <div class="show_more_button_filters">
            <div class="dropdown" ref="dropdown">
              <button class="dropbtn" @click.stop="toggleDropdown">
                Все подряд
                <svg class="dropdown-arrow" :class="{ 'rotated': isDropdownOpen }" width="12" height="8"
                  viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </button>
              <div class="dropdown-content" v-if="isDropdownOpen">
                <a href="">Новые</a>
                <a href="">Популярные</a>
                <a href="">Лучшие за неделю</a>
                <a href="">Лучшие за месяц</a>
              </div>
            </div>
          </div>
        </div>


        <div class="list_forum_posts">
          <div class="post_card_container">
            <div class="post_card_content">
              <div class="author_published">
                <div class="avatar_box">
                  <div class="avatar_user_post_box">
                    <img
                      src="https://image.winudf.com/v2/image/Y29tLndQcmVtaXVtSEROYXR1cmVXYWxscGFwZXJzX3NjcmVlbnNob3RzXzNfMjcxMmJjNTE/screen-3.jpg?fakeurl=1&type=.jpg"
                      class="avatar_user_post_image" alt="">
                  </div>
                </div>
                <div class="username_author_post">Jonny Dep</div>
                <div class="time_published_post">11 минут назад</div>
              </div>
              <div class="decription_post_content">JForge: Создаем свою мини-IDE на Java Swing с нуля (с темной темой и
                подсветкой синтаксиса!)</div>
              <div class="post_little_info_box">
                <div class="counter_time">
                  <span class="time_counter_post">
                    <img src="../assets/PostCard/clock.png" alt="">
                    4 мин
                  </span>
                </div>
                <div class="counter_views">
                  <span class="views_counter_post">
                    <img src="../assets/PostCard/eye.png" alt="">
                    68
                  </span>
                </div>
              </div>
              <div class="keywords_post_container">
                <span class="keyword_post">Графический дизайн</span>
                <span class="keyword_post">Программирование</span>
              </div>
              <div class="image_post_container">
                <div class="image_post_content">
                  <img src="../assets/PostCard/PostImage.png" alt="">
                </div>
              </div>
              <div class="post_set_status_panel">
                <div class="post_actions">
                  <div class="action_item">
                    <img class="like" src="../assets/PostCard/like.png" alt="Лайк">
                    <span class="counter_action_item">24</span>
                  </div>
                  <div class="action_item">
                    <img class="save" src="../assets/PostCard/save.png" alt="Сохранение">
                    <span class="counter_action_item">12</span>
                  </div>
                  <div class="action_item">
                    <img class="report" src="../assets/PostCard/report.png" alt="Поделиться">
                    <span class="counter_action_item">3</span>
                  </div>
                  <div class="action_item">
                    <img class="comments" src="../assets/PostCard/comments.png" alt="Комментарии">
                    <span class="counter_action_item">8</span>
                  </div>


                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="forum_last_posts"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');


.main-container {
  background-color: #0f0b1f;
  width: 100%;
  min-height: 100vh;
  padding-inline: 112px;
}

.main-content {
  width: 100%;
  margin-top: 51px;
  display: flex;
}


.content_up_search_posts {
  width: 100%;
  margin-bottom: 30px;
}

.super_search_input_container {
  width: 856px;
  height: 58px;
  border-radius: 12px;
  display: flex;
  border: 1px solid rgba(127, 94, 255, 1);
  overflow: hidden;
}

.input_part_one_search_post {
  background-color: rgba(127, 94, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  flex-shrink: 0;
}

.search_img_input_button {
  width: 25px;
  height: 25px;
}

.search_img_input_button img {
  width: 100%;
  height: 100%;
}

.input_main_part_search_post {
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

.input_main_part_search_post::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.input_part_two_search_post {
  display: flex;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 0 15px;
  gap: 25px;
  flex-shrink: 0;
}

.search_filter_button {
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

.search_filter_button:hover {
  background: rgba(255, 255, 255, 0.1);
}



.forum_box {
  display: grid;
  gap: 43px;
}

.filters_settings_forum_container {
  width: 100%;
  min-width: 856px;
  min-height: 205px;
  border-radius: 10px;
  background: rgba(30, 25, 50, 1);
  position: relative;
}

.title_filters {
  padding: 40px 0px 0px 65px;
}

.filters_settings_forum_container h1 {
  color: rgba(255, 255, 255, 1);
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
}

.panel_buttons_filters {
  width: 100%;
  border-bottom: 1px solid rgba(84, 78, 108, 1);
  padding: 20px 0px 3px 0px;
}

.main_panel_box {
  padding-left: 65px;
  padding-right: 116px;
  display: flex;
  justify-content: space-between;
}

.show_more_button_filters {
  margin-left: 65px;
  min-height: 60px;
  display: flex;
  align-items: center;
}

.button_link_click_filter {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.8px;
  vertical-align: middle;
  cursor: pointer;
  transition: color 0.2s ease;
}

.button_link_click_filter:hover {
  color: rgba(127, 94, 255, 1);
}

/* Стили для выпадающего меню */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
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

.dropbtn:hover {
  background: rgba(84, 78, 108, 0.3);
}

.dropdown-arrow {
  transition: transform 0.2s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-content {
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

.dropdown-content a {
  color: white;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  transition: background 0.2s ease;
}

.dropdown-content a:hover {
  background-color: rgba(84, 78, 108, 0.5);
}

/* Стили для карточки поста */
.post_card_container {
  min-width: 856px;
  min-height: 747px;
  border-radius: 10px;
  background-color: rgba(30, 25, 50, 1);
  padding: 38px 55px 38px 55px;
}

.avatar_user_post_box {
  width: 26px;
  height: 26px;
  max-width: 26px;
  max-height: 26px;
  border-radius: 3px;
  overflow: hidden;
}

.avatar_user_post_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author_published {
  display: flex;
  align-items: center;
  gap: 13px;
}

.username_author_post {
  font-family: Arial;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
}

.time_published_post {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.55);
  padding-left: 4px;
}

.decription_post_content {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
  margin-top: 5px;
}

.post_little_info_box {
  display: flex;
  gap: 17px;
  margin-top: 10px;
}

.counter_time {
  display: flex;
}

.time_counter_post {
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

.views_counter_post {
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

.keywords_post_container {
  display: flex;
  gap: 25px;
  margin-top: 15px;
}

.keyword_post {
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

.keyword_post:hover {
  background: rgba(127, 94, 255, 0.4);
}

.post_card_content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.image_post_container {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.image_post_content {
  width: 740px;
  height: 417px;
  min-height: 417px;
  min-width: 740px;
  border-radius: 8px;
  overflow: hidden;
}

.image_post_content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Стили для панели действий с постом */
.post_set_status_panel {
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid rgba(84, 78, 108, 0.5);
}

.post_actions {
  display: flex;
  gap: 26px;
  align-items: center;
}

.action_item {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action_item:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.action_item img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.action_item:hover img {
  transform: scale(1.1);
}

.counter_action_item {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: rgba(255, 255, 255, 1);
  margin-left: 2px;
}
</style>

<script>
export default {
  name: 'ForumComponent',
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }
}
</script>