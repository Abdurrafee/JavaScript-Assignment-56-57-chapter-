function highlightRules() {
  let rules = document.getElementById("rules");

  let paragraphs = rules.getElementsByTagName("p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "important" + paragraphs[i].innerHTML;

    paragraphs[i].className = "highlight";
  }
}

function highlightCourse() {
  let courseSection = document.getElementById("course");

  let paragraphs = courseSection.getElementsByTagName("p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "important" + paragraphs[i].innerHTML;

    paragraphs[i].className = "highlightCourse";
  }
}
