
export const updateTheme = temp => {
  if (temp <= 12) {
    document.body.style = "background-color: #54A1CB"
  } else if (temp > 12 && temp <= 21 ) {
    document.body.style = "background-color: #50D96D"
  } else {
    document.body.style = "background-color: tomato"
  }
}
