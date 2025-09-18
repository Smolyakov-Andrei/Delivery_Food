<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/" class="footer-logo logo">
          <img src="../assets/images/logo.png" alt="logo" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <li>
              <a href="/for-restaurants" class="footer-link">Ресторанам</a>
            </li>
            <li>
              <a href="/for-couriers" class="footer-link">Курьерам</a>
            </li>
            <li>
              <a href="/press" class="footer-link">Пресс-центр</a>
            </li>
            <li>
              <a href="/contacts" class="footer-link">Контакты</a>
            </li>
          </ul>
        </div>
        <div class="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/images/social/INSTAGRAM.png" alt="INSTAGRAM" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/images/social/FACEBOOK.png" alt="FACEBOOK" />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/social/VK.png" alt="VK" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  min-height: 156px;
  padding: 60px 0px;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}

.footer-nav {
  flex-grow: 1;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
}

.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #000;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.footer-social a {
  display: flex;
  transition: opacity 0.3s ease;
}

.footer-social a:hover {
  opacity: 0.7;
}
</style>