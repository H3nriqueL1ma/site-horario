import $ from "jquery";

const text: JQuery<HTMLElement> = $("#text");
const body: JQuery<HTMLBodyElement> = $("body");
const image: JQuery<HTMLImageElement> = $("#img");
const text_box: JQuery<HTMLInputElement> = $("#text-box");
const button: JQuery<HTMLButtonElement> = $(".button");
const button2: JQuery<HTMLButtonElement> = $(".button2");

const date: Date = new Date();

function change_text(custom_time: number = date.getHours()): void {
  const time: number = custom_time;

  if (time > 24 || time < 0) {
    alert("[ERROR]: HORÁRIO INVÁLIDO!");
  } else {
    if (text && body && image) {
      text.text(() => `${time} HORAS`);

      if (time >= 6 && time < 12) {
        body.css("backgroundColor", "#87CEFA");
        image.attr("src", "images/img1.png");
      } else if (time >= 12 && time < 18) {
        body.css("backgroundColor", "#FFA500");
        image.attr("src", "images/img2.jpg");
      } else if (time >= 18 && time < 24) {
        body.css("backgroundColor", "#191970");
        image.attr("src", "images/img3.png");
      } else if (time >= 0 && time < 6) {
        body.css("backgroundColor", "#6A5ACD");
        image.attr("src", "images/img4.jpg");
      }
    }
  }
}

change_text();

if (button && text_box) {
  button.on("click", () => {
    const new_time = Number(text_box.val());
    if (isNaN(new_time)) {
      alert("[ERROR]: HORÁRIO INVÁLIDO!");
    } else {
      change_text(new_time);
    }
  });
}

if (button2) {
  button2.on("click", () => {
    location.reload();
    text_box.val("");
  });
}
