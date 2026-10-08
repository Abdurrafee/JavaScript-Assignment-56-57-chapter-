function highlightNotices() {
  let notices = document.getElementsByTagName("p");

  for (let i = 0; i < notices.length; i++) {
    notices[i].innerHTML = notices[i].innerHTML;

    notices[i].className = "highlight";
  }
}
