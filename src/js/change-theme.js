import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (!localStorage.getItem('class')) {
  localStorage.setItem('class', Theme.LIGHT);
  refs.body.classList.add(Theme.LIGHT);
} else {
  refs.body.classList.add(localStorage.getItem('class'));
  if (localStorage.getItem('class') === Theme.LIGHT) {
    refs.inputCheckbox.checked = false;
  } else {
    refs.inputCheckbox.checked = true;
  }
}

refs.inputCheckbox.addEventListener('change', () => {
  if (localStorage.getItem('class') === Theme.LIGHT) {
    localStorage.setItem('class', Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem('class', Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
});
