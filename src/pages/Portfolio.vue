<template>
  <div class="container__main_content">
    <div class="container__search_box">
      <div class="forum-search">
        <div class="forum-search__container">
          <div class="forum-search__input-group">
            <div class="forum-search__icon-wrapper">
              <img src="../assets/PostCard/search.svg" alt="Search icon" />
            </div>
            <input placeholder="Поиск" class="forum-search__input" type="text" />
            <div class="forum-search__filter-buttons">
              <button class="forum-search__filter-button">Проекты</button>
              <button class="forum-search__filter-button">Люди</button>
              <button class="forum-search__filter-button">Изображение</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container__bottom_main_content">
      <aside class="container__left_content">
        <div class="main_container__left_contents">
          <div class="container__left_content_top_box">
            <div class="title__box_left_content">
              <span class="title__text_left_content">Опыт работы в отрасли</span>
            </div>
            <div class="container__big_buttons_filter_left_content">
              <div class="big_buttons_filter_all">
                <span>Все отрасли</span>
                <div class="logotypes_filter_button">
                  <img src="../assets/Portfolio\burger_filter_left.png" alt="" />
                </div>
              </div>
              <div class="big_buttons_filter">
                <span>За всё время работы</span>
                <div class="logotypes_filter_button">
                  <img src="../assets/Portfolio\arrow_down.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="container__left_content_center_box">
            <div class="title__box_left_content">
              <span class="title__text_left_content_center">Переезд</span>
            </div>
            <div class="container__inputs_checkbox">
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option1" />
                <span>Живут в регионе</span>
              </label>
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option2" />
                <span>Не живут, но готовы переехать в регион</span>
              </label>
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option3" />
                <span>Готовы уехать из регионаа</span>
              </label>
            </div>
          </div>
          <div class="container__left_content_bottom_box">
            <div class="title__box_left_content">
              <span class="title__text_left_content_center">Тип занятости</span>
            </div>
            <div class="container__inputs_checkbox">
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option1" />
                <span>Полная занятость</span>
              </label>
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option2" />
                <span>Частичная занятость</span>
              </label>
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option3" />
                <span>Проектная работа</span>
              </label>
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option1" />
                <span>Стажировка</span>
              </label>
              <label class="left__content_inputs_checkbox">
                <input type="checkbox" name="option1" />
                <span>Волонтерство</span>
              </label>
            </div>
          </div>
          <div class="container__left_content_child_bottom_box">
            <div class="container__inputs_checkbox_child">
              <label class="left__content_inputs_checkbox_child">
                <div class="container__input_click_box_child_content">
                  <input type="checkbox" name="filter1" class="checkbox_child" />
                  <span class="checkbox_text_child">Без статуса поиска</span>
                </div>

                <span class="counter_filter_list_child">30 466</span>
              </label>
              <label class="left__content_inputs_checkbox_child">
                <div class="container__input_click_box_child_content">
                  <input type="checkbox" name="filter2" class="checkbox_child" />
                  <span class="checkbox_text_child">Не ищет работу</span>
                </div>

                <span class="counter_filter_list_child">10 092</span>
              </label>
              <label class="left__content_inputs_checkbox_child">
                <div class="container__input_click_box_child_content">
                  <input type="checkbox" name="filter3" class="checkbox_child" />
                  <span class="checkbox_text_child">Ищет предложения</span>
                </div>

                <span class="counter_filter_list_child">1 885</span>
              </label>
              <label class="left__content_inputs_checkbox_child">
                <div class="container__input_click_box_child_content">
                  <input type="checkbox" name="filter4" class="checkbox_child" />
                  <span class="checkbox_text_child">Активно ищет работу</span>
                </div>

                <span class="counter_filter_list_child">1 431</span>
              </label>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <div class="container__main_content_right">


          <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!Карточка пользователя!!!!!!!!!!!!!!!!!!!!!!!!! -->
          <div class="container_card_user_main_content">
            <div class="container__top_content_user_card">
              <div class="box__card_user_avatar">
                <img src="../assets/Portfolio/user_avatar.png" alt="" />
              </div>
              <div class="box__card_user_information_right">
                <div class="title__profession_user_card">
                  <h1>Графический дизайнер</h1>
                </div>
                <div class="user__parameters_box_card">
                  <span class="parameter_text_user_age">18 лет</span>
                  <span class="parameter_text_user_visiting">Был вчера</span>
                  <span class="parameter_text_user_update">Обновлено 12 мая
                  </span>
                </div>
                <div class="type__post_user_card_box">
                  <div class="type_post_user">
                    <h1>ищет работу</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="container__bottom_content_user_card">
              <div class="container__statistics_user">
                <div class="container__statistic_parameters_user" id="work_expperiance_user">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Опыт работы</span>
                    <span class="statistic_counter_text_span">1 месяц</span>
                  </div>
                </div>
                <div class="container__statistic_parameters_user" id="last_work_user">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Последнее место работы</span>
                    <div class="container__last_work_list">
                      <span class="statistic_counter_text_span">KFC</span>
                      <div @click="openLastWork" class="container__open_last_work" ref="lastWorkButton">
                        <span class="text__show_more_last_work">Подробнее о последнем месте </span>
                        <img src="../assets/Portfolio/show_more_work.svg" alt="" :class="{ rotated: showLastWork }">
                      </div>
                      <div v-if="showLastWork" class="last_work_details_container" ref="lastWorkDetails">
                        <div class="work-details-content">
                          <p class="work-detail-item"><strong>Должность:</strong> Кассир</p>
                          <p class="work-detail-item"><strong>Период:</strong> июнь 2022 - август 2023</p>
                          <p class="work-detail-item"><strong>Обязанности:</strong> Обслуживание клиентов, работа с
                            кассой</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="container__show_more">
                    <button class="show_more_last_work">Подробнее</button>
                  </div>
                </div>
                <div class="container__statistic_parameters_user" id="show_more_resume">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Другие резюме</span>
                    <span class="statistic_counter_text_span">Еще 3 резюме</span>
                  </div>
                  <div class="container__hire_user">
                    <button class="button__hire_user">Нанять</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!Карточка пользователя!!!!!!!!!!!!!!!!!!!!!!!!! -->
           <div class="container_card_user_main_content">
            <div class="container__top_content_user_card">
              <div class="box__card_user_avatar">
                <img src="../assets/Portfolio/user_avatar.png" alt="" />
              </div>
              <div class="box__card_user_information_right">
                <div class="title__profession_user_card">
                  <h1>Графический дизайнер</h1>
                </div>
                <div class="user__parameters_box_card">
                  <span class="parameter_text_user_age">18 лет</span>
                  <span class="parameter_text_user_visiting">Был вчера</span>
                  <span class="parameter_text_user_update">Обновлено 12 мая
                  </span>
                </div>
                <div class="type__post_user_card_box">
                  <div class="type_post_user">
                    <h1>ищет работу</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="container__bottom_content_user_card">
              <div class="container__statistics_user">
                <div class="container__statistic_parameters_user" id="work_expperiance_user">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Опыт работы</span>
                    <span class="statistic_counter_text_span">1 месяц</span>
                  </div>
                </div>
                <div class="container__statistic_parameters_user" id="last_work_user">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Последнее место работы</span>
                    <div class="container__last_work_list">
                      <span class="statistic_counter_text_span">KFC</span>
                      <div @click="openLastWork" class="container__open_last_work" ref="lastWorkButton">
                        <span class="text__show_more_last_work">Подробнее о последнем месте </span>
                        <img src="../assets/Portfolio/show_more_work.svg" alt="" :class="{ rotated: showLastWork }">
                      </div>
                      <div v-if="showLastWork" class="last_work_details_container" ref="lastWorkDetails">
                        <div class="work-details-content">
                          <p class="work-detail-item"><strong>Должность:</strong> Кассир</p>
                          <p class="work-detail-item"><strong>Период:</strong> июнь 2022 - август 2023</p>
                          <p class="work-detail-item"><strong>Обязанности:</strong> Обслуживание клиентов, работа с
                            кассой</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="container__show_more">
                    <button class="show_more_last_work">Подробнее</button>
                  </div>
                </div>
                <div class="container__statistic_parameters_user" id="show_more_resume">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Другие резюме</span>
                    <span class="statistic_counter_text_span">Еще 3 резюме</span>
                  </div>
                  <div class="container__hire_user">
                    <button class="button__hire_user">Нанять</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container_card_user_main_content">
            <div class="container__top_content_user_card">
              <div class="box__card_user_avatar">
                <img src="../assets/Portfolio/user_avatar.png" alt="" />
              </div>
              <div class="box__card_user_information_right">
                <div class="title__profession_user_card">
                  <h1>Графический дизайнер</h1>
                </div>
                <div class="user__parameters_box_card">
                  <span class="parameter_text_user_age">18 лет</span>
                  <span class="parameter_text_user_visiting">Был вчера</span>
                  <span class="parameter_text_user_update">Обновлено 12 мая
                  </span>
                </div>
                <div class="type__post_user_card_box">
                  <div class="type_post_user">
                    <h1>ищет работу</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="container__bottom_content_user_card">
              <div class="container__statistics_user">
                <div class="container__statistic_parameters_user" id="work_expperiance_user">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Опыт работы</span>
                    <span class="statistic_counter_text_span">1 месяц</span>
                  </div>
                </div>
                <div class="container__statistic_parameters_user" id="last_work_user">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Последнее место работы</span>
                    <div class="container__last_work_list">
                      <span class="statistic_counter_text_span">KFC</span>
                      <div @click="openLastWork" class="container__open_last_work" ref="lastWorkButton">
                        <span class="text__show_more_last_work">Подробнее о последнем месте </span>
                        <img src="../assets/Portfolio/show_more_work.svg" alt="" :class="{ rotated: showLastWork }">
                      </div>
                      <div v-if="showLastWork" class="last_work_details_container" ref="lastWorkDetails">
                        <div class="work-details-content">
                          <p class="work-detail-item"><strong>Должность:</strong> Кассир</p>
                          <p class="work-detail-item"><strong>Период:</strong> июнь 2022 - август 2023</p>
                          <p class="work-detail-item"><strong>Обязанности:</strong> Обслуживание клиентов, работа с
                            кассой</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="container__show_more">
                    <button class="show_more_last_work">Подробнее</button>
                  </div>
                </div>
                <div class="container__statistic_parameters_user" id="show_more_resume">
                  <div class="container_statistic_span_elements">
                    <span class="statistic_title_text">Другие резюме</span>
                    <span class="statistic_counter_text_span">Еще 3 резюме</span>
                  </div>
                  <div class="container__hire_user">
                    <button class="button__hire_user">Нанять</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      showLastWork: false
    }

  },
  methods: {
    openLastWork(event) {
      event.stopPropagation()
      this.showLastWork = !this.showLastWork
    },
    clickOutsideList(event){
      if(this.showLastWork && !this.$refs.lastWorkDetails?.contains(event.target) && !this.$refs.lastWorkButton?.contains(event.target)) {
        this.showLastWork = false;
      }
    }
  },
  mounted(){
    document.addEventListener("click", this.clickOutsideList)
  },
  beforeUnmount(){
    document.removeEventListener("click", this.clickOutsideList)
  }

}
</script>
<style scoped>
main {
  width: 100%;
}

.container__main_content_right {
  padding: 46px 41px 128px 41px;
  background: #1e1932;
  border-radius: 10px;
  display: grid;
  gap: 40px;
}

.user__parameters_box_card span {
  position: relative;
  color: #768694;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.container__last_work_list {
  position: relative;
}

.last_work_details_container {
  position: absolute;
  left: 105px;
  top: 100%;
  margin-top: 10px;
  background: #2A2347;
  border: 1px solid #7F5EFF;
  border-radius: 10px;
  padding: 16px;
  width: 300px;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.work-details-content {
  display: grid;
  gap: 8px;
}

.work-detail-item {
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #FFFFFF;
  margin: 0;
}

.work-detail-item strong {
  color: #7F5EFF;
  font-weight: 600;
}

.container__show_more {
  width: 136px;
  height: 37px;
  top: 486px;
  left: 1173px;
  border-width: 1px;
  border-radius: 12px;
  border: 1px solid rgba(127, 94, 255, 1);
}

.show_more_last_work {
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.07px;
  color: rgba(127, 94, 255, 1);
}

.main_container__left_contents {
  height: fit-content;
  display: grid;
  gap: 37px;
}

.text__show_more_last_work {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 0.07px;
  color: rgba(127, 94, 255, 1);
}

.container__hire_user {
  width: 136px;
  height: 37px;
  top: 486px;
  left: 1173px;
  border-width: 1px;
  border-radius: 12px;
  border: 1px solid rgba(127, 94, 255, 1);
  background: rgba(127, 94, 255, 1);
}

.button__hire_user {
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.07px;
  color: #ffffff;
}



.box__card_user_information_right {
  display: grid;
  align-content: space-between;
}

.container__statistic_parameters_user {
  padding-bottom: 1px;
  width: 100%;
  background: linear-gradient(90deg,
      rgba(127, 94, 255, 0.25) 38.46%,
      rgba(30, 25, 50, 0.5) 100%) bottom / 100% 1px no-repeat;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  gap: 44px;
  align-items: center;
}

.type__post_user_card_box {
  width: 130px;
  height: 28px;
  top: 89px;
  left: 182px;
  background-color: #7f5eff;
  border-radius: 8px;
  display: grid;
  justify-content: center;
  align-items: center;
}

.container__statistics_user {
  display: grid;
  justify-items: start;
}

.type__post_user_card_box h1 {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.07px;
  color: #ffffff;
}

.statistic_counter_text_span {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.07px;
  color: #ffffff;

}

.container__open_last_work {
  user-select: none;
}

.container__open_last_work .rotated {
  transform: rotate(180deg);
}

.user__parameters_box_card span:not(:last-child)::after {
  content: "•";
  margin-inline: 5px;
  color: #768694;
}

.container__main_content {
  padding-inline: 112px;
  padding-top: 58px;
}

.container_card_user_main_content {
  width: 100%;
  border: 1px solid #7f5eff;
  padding: 24px;
  height: 334px;
  top: 288px;
  left: 423px;
  border-radius: 10px;
  border-width: 1px;
}

.box__card_user_avatar {
  width: 96px;
  height: 96px;
  border-radius: 10px;
}

.title__profession_user_card h1 {
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0%;
  color: #ffffff;
}

.container__top_content_user_card {
  display: flex;
  gap: 62px;
}

.container_statistic_span_elements {
  display: flex;
  gap: 44px;
  align-items: center;
}

.statistic_title_text {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.07px;
  color: #ffffff;
  max-width: 120px;
  width: 120px;
}

.box__card_user_avatar img {
  width: 100%;
  height: 100%;
}

.big_buttons_filter {
  display: flex;
  padding: 14px 16px 14px 16px;
  justify-content: space-between;
  border: 1px solid #7f5eff;
  border-radius: 12px;
  color: #ffffff;
  align-items: center;
}

.title__box_left_content {
  padding-bottom: 15px;
}

.left__content_inputs_checkbox {
  display: flex;
  align-items: center;
  gap: 13px;
}

.left__content_inputs_checkbox span {
  font-family: sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: #ffffff;
}

.left__content_inputs_checkbox {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  width: 100%;
}

.left__content_inputs_checkbox span {
  font-family: sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: #ffffff;
  word-break: break-word;
  flex: 1;
}


.counter_filter_list {
  color: #7f5eff;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  letter-spacing: 0%;
}

.left__content_inputs_checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border: 1px solid #dce3eb;
  background: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.container__input_click_box_child_content {
  display: flex;
  align-items: center;
  gap: 9px;
}

.left__content_inputs_checkbox input[type="checkbox"]:checked {
  background-color: #ffffff;
  border-color: #4a90e2;
  border: 7px solid #7f5eff;
}

.container__inputs_checkbox {
  display: grid;
  gap: 10px;
}

.container__big_buttons_filter_left_content {
  display: grid;
  gap: 19px;
}

.logotypes_filter_button {
  display: grid;
  align-items: center;
}

.container__left_content_child_bottom_box {
  padding-top: 20px;
}

.title__box_left_content_child {
  padding-bottom: 15px;
}

.container__inputs_checkbox_child {
  display: grid;
  gap: 10px;
}

.left__content_inputs_checkbox_child {
  display: flex;
  align-items: center;
  gap: 13px;
  justify-content: space-between;
  padding-right: 22px;
}

.checkbox_text_child {
  font-family: sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: #ffffff;
}

.counter_filter_list_child {
  color: #7f5eff;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0%;
}

.checkbox_child {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border: 1px solid #dce3eb;
  background: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.checkbox_child:checked {
  background-color: #ffffff;
  border-color: #4a90e2;
  border: 7px solid #7f5eff;
}

.title__text_left_content_center_child {
  color: #ffffff;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
}

.big_buttons_filter span {
  font-family: sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
}

.big_buttons_filter_all {
  display: flex;
  padding: 16px;
  max-width: 205px;
  font-family: sans-serif;
  justify-content: space-between;
  border: 1px solid #7f5eff;
  border-radius: 12px;
  color: #ffffff;
}

.container__bottom_main_content {
  display: flex;
  gap: 12px;
}

.title__text_left_content_center {
  color: #ffffff;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
}

.title__text_left_content {
  font-family: sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
  color: #ffffff;
}

.container__left_content {
  padding: 29px 13px 13px 13px;
  background: #1e1932;
  display: grid;
  gap: 37px;
  border-radius: 10px;
  max-width: 300px;
}

.forum-search {
  width: 100%;
  margin-bottom: 26px;
}

.forum-search__container {
  display: grid;
  gap: 51px;
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

.forum-search__icon-wrapper img {
  width: 25px;
  height: 25px;
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

@media (max-width: 767px) {
  .forum-search__filter-buttons {
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
  }

  .forum-search__filter-button {
    font-size: 12px;
  }
}
</style>
