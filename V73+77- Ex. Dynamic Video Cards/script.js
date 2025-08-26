// Function to format views nicely (e.g., 560000 → 560K, 1200000 → 1.2M)
function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M views";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(0) + "K views";
  } else {
    return views + " views";
  }
}

// Function to create a video card dynamically
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  return `
        <div class="card">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="${title}">
                <span class="duration">${duration}</span>
            </div>
            <div class="video-info">
                <h3 class="title">${title}</h3>
                <p class="channel">${cName}</p>
                <p class="meta">${formatViews(
                  views
                )} • ${monthsOld} months ago</p>
            </div>
        </div>
    `;
}

// Get container
const container = document.getElementById("videoContainer");

// Add video cards dynamically

container.insertAdjacentHTML(
  "beforeend",
  createCard(
    "HTML Crash Course | Video #1",
    "Sample Channel",
    300000,
    12,
    "25:30",
    "https://i.ytimg.com/vi/qz0aGYrrlhU/hqdefault.jpg"
  )
);
container.insertAdjacentHTML(
  "beforeend",
  createCard(
    "CSS Flexbox Tutorial | Video #4",
    "Sample Channel",
    150000,
    4,
    "20:15",
    "https://i.ytimg.com/vi/JJSoEo8JSnc/hqdefault.jpg"
  )
);
container.insertAdjacentHTML(
  "beforeend",
  createCard(
    "Node.js Basics | Video #8",
    "Sample Channel",
    80000,
    6,
    "30:00",
    "https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg"
  )
);
container.insertAdjacentHTML(
  "beforeend",
  createCard(
    "Python for Beginners | Video #3",
    "Sample Channel",
    450000,
    8,
    "35:50",
    "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg"
  )
);
container.insertAdjacentHTML(
  "beforeend",
  createCard(
    "Django Framework Overview | Video #9",
    "Sample Channel",
    60000,
    2,
    "28:40",
    "https://i.ytimg.com/vi/F5mRW0jo-U4/hqdefault.jpg"
  )
);
container.insertAdjacentHTML(
  "beforeend",
  createCard(
    "Database Management | Video #6",
    "Sample Channel",
    110000,
    9,
    "22:10",
    "https://i.ytimg.com/vi/HXV3zeQKqGY/hqdefault.jpg"
  )
);
container.insertAdjacentHTML(
  "beforeend",
  createCard(
    "APIs Explained | Video #7",
    "Sample Channel",
    70000,
    1,
    "26:30",
    "https://i.ytimg.com/vi/GZvSYJDk-us/hqdefault.jpg"
  )
);
