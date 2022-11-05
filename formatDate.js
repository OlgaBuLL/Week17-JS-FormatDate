let now = new Date();
console.log(now);

function formatDate(date) {
  if (now - date < 1000) {
    console.log("прямо сейчас");
  } else if (now - date < 30 * 1000) {
    console.log("30 сек. назад");
  } else if (now - date < 5 * 60 * 1000) {
    console.log("5 мин. назад");
  } else if (now - date < 24 * 3600 * 1000) {
    console.log("Вчера");
  } else console.log("Более суток");
}
console.log(new Date(new Date() - 1000));
formatDate(new Date(new Date() - 1000));

console.log(new Date(new Date() - 30000));
formatDate(new Date(new Date() - 30000));

console.log(new Date(new Date() - 5 * 60 * 1000));
formatDate(new Date(new Date() - 5 * 60 * 1000));

console.log(new Date(new Date() - 24 * 3600 * 1000));
formatDate(new Date(new Date() - 24 * 3600 * 1000));

console.log(new Date(new Date() - 48 * 3600 * 1000));
formatDate(new Date(new Date() - 48 * 3600 * 1000));
