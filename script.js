// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcDKsrAosMmOm0bBYX_S1RKaMNc-NaHow",
    authDomain: "answers-63e2f.firebaseapp.com",
    databaseURL: "https://answers-63e2f-default-rtdb.firebaseio.com",
    projectId: "answers-63e2f",
    storageBucket: "answers-63e2f.firebasestorage.app",
    messagingSenderId: "591324937083",
    appId: "1:591324937083:web:66f3694726b43f9b239bde",
    measurementId: "G-X8ZP4RPK6C"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  console.log("Firebase инициализирован"); // Проверка инициализации
  
  const topics = [
    "Разработка мобильного приложения для фитнеса", "Сайт для туристических услуг",
    "Чат-бот для поддержки клиентов", "Приложение для расходов", 
    "Платформа для обмена книгами", "Кулинарный сайт",
    "Органайзер домашних задач", "Платформа для изучения языков",
    "Планировщик тренировок", "Платформа для фрилансеров",
    "Соцсеть для фото", "Сайт для управления проектами",
    "Приложение для заметок", "Приложение для заказа еды",
    "Платформа для обучения", "Портфолио для художников",
    "Онлайн-магазин", "Приложение для медитации",
    "Сайт для путешественников", "Приложение для управления привычками"
  ];
  
  function openModal() {
    console.log("Открытие модального окна"); // Проверка выполнения
    document.getElementById("modal").style.display = "block";
    const topicList = document.getElementById("topicList");
    topicList.innerHTML = ""; // Очистка списка перед добавлением
  
    topics.forEach(topic => {
      const listItem = document.createElement("li");
      listItem.textContent = topic;
      topicList.appendChild(listItem);
    });
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function openTaskModal() {
    console.log("Открытие модального окна задания"); // Проверка выполнения
    document.getElementById("taskModal").style.display = "block";
  }
  
  function closeTaskModal() {
    document.getElementById("taskModal").style.display = "none";
  }
  
  function submitTask() {
    const studentName = document.getElementById("studentName").value;
    const figmaLink = document.getElementById("figmaLink").value;
  
    if (studentName && figmaLink) {
      const taskRef = database.ref("tasks").push();
      taskRef.set({
        studentName: studentName,
        figmaLink: figmaLink
      }).then(() => {
        alert("Задание успешно отправлено!"); // Уведомление об успешной отправке
        closeTaskModal();
        // Очистим поля после отправки
        document.getElementById("studentName").value = "";
        document.getElementById("figmaLink").value = "";
      }).catch(error => {
        console.error("Ошибка отправки данных в Firebase:", error);
        alert("Произошла ошибка при отправке задания. Попробуйте снова.");
      });
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  }
  
  