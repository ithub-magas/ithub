<template>
  <div class="post-container">
    <div class="forum-post">
      <div class="forum-post__content">
        <div class="forum-post__author">
          <div class="forum-post__avatar">
            <div class="forum-post__avatar-image">
              <img
                :src="avatarImage"
                class="forum-post__avatar-img"
                alt="Author avatar"
              />
            </div>
          </div>
          <div class="forum-post__author-name">{{ authorName }}</div>
          <div class="forum-post__publish-time">{{ publishTime }}</div>
        </div>
        <div class="forum-post__description">{{ description }}</div>
        <div class="forum-post__image" v-if="imageUrl">
          <div class="forum-post__image-wrapper">
            <img :src="imageUrl" alt="Post image" />
          </div>
        </div>
      </div>
    </div>

    <div class="actions-panel">
      <div class="action-button channel">
        <img :src="avatarImage" alt="Channel" class="action-icon" />
        <div class="channel-add-button"></div>
      </div>
      <div class="action-button">
        <img
          src="../assets/PostCard/messagePost.png"
          alt="Message"
          class="action-icon"
        />
      </div>
      <div class="action-button">
        <img
          src="../assets/PostCard/savePost.png"
          alt="Save"
          class="action-icon"
        />
      </div>
      <div class="action-button">
        <img
          src="../assets/PostCard/share.png"
          alt="Share"
          class="action-icon"
        />
      </div>
      <div class="action-button-like">
        <img
          src="../assets/PostCard/likeWhite.png"
          alt="Appreciate"
          class="action-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarImage: {
      type: String,
      default:
        "https://image.winudf.com/v2/image/Y29tLndQcmVtaXVtSEROYXR1cmVXYWxscGFwZXJzX3NjcmVlbnNob3RzXzNfMjcxMmJjNTE/screen-3.jpg?fakeurl=1&type=.jpg",
    },
    authorName: {
      type: String,
      default: "Jonny Dep",
    },
    publishTime: {
      type: String,
      default: "11 минут назад",
    },
    description: {
      type: String,
      default:
        "JForge: Создаем свою мини-IDE на Java Swing с нуля (с темной темой и подсветкой синтаксиса!)",
    },
    imageUrl: {
      type: String,
      default: "https://avatars.mds.yandex.net/i?id=a0c0a1184696e2c1bc5ad5cb3970b589_l-5435996-images-thumbs&n=13",
    },
  },
};
</script>

<style>
body {
  background: #0f0b1f;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.post-container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}

.forum-post {
  width: 100%;
  min-height: 400px;
  border-radius: 10px;
  background-color: rgba(30, 25, 50, 1);
  padding: 38px 5%;
  flex-grow: 1;
}

.forum-post__avatar-image {
  width: 26px;
  height: 26px;
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

.actions-panel {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.action-button {
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: 1px solid #e8e8e8;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.action-button-like {
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: 1px solid #e8e8e8;
  background: #7f5eff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  transform: scale(1.05);
  background: rgba(232, 232, 232, 0.1);
}

.action-button-like:hover {
  transform: scale(1.05);
  background: rgba(127, 94, 255, 0.8);
}

.action-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.channel {
  position: relative;
  padding: 0;
}

.channel .action-icon {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.channel-add-button {
  position: absolute;
  bottom: -1px;
  right: 3px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #7f5eff;
  display: flex;
  justify-content: center;
  align-items: center;

}

.channel-add-button::before,
.channel-add-button::after {
  content: "";
  position: absolute;
  background: white;
  border-radius: 2px;
}

.channel-add-button::before {
  width: 8px;
  height: 2px;
}

.channel-add-button::after {
  width: 2px;
  height: 8px;
}
</style>
