const phoneInput = document.getElementById('phone');
const countrySelect = document.getElementById('country');

const maskOptions = {
  mask: '+{7} (000) 000-00-00',
  lazy: false
};
const phoneMask = IMask(phoneInput, maskOptions);

function getMaskByCountryCode(countryCode) {
  switch (countryCode) {
    case '1':
      return '+{1} (000) 000-00-00';
    case '44':
      return '+{44} (000) 000-00-00';
    case '33':
      return '+{33} (000) 000-00-00';
    default:
      return '+{7} (000) 000-00-00';
  }
}



const customSelects = document.querySelectorAll(".form__select");

customSelects.forEach(function (select) {
  const selected = select.querySelector(".selected-item");
  const selectedImage = selected.querySelector(".selected-image");
  const selectedText = selected.querySelector(".selected-text");
  const options = select.querySelector(".options");
  const optionItems = options.querySelectorAll(".option");

  selected.addEventListener("click", function () {
    options.style.display = options.style.display === "none" ? "block" : "none";
  });

  optionItems.forEach(function (option) {
    option.addEventListener("click", function (e) {
      const countryCode = e.currentTarget.dataset.value;
      const newMask = getMaskByCountryCode(countryCode);
      phoneMask.updateOptions({
        mask: newMask
      });
      selectedImage.src = option.querySelector("img").src;
      options.style.display = "none";
    });
  });

  document.addEventListener("click", function (e) {
    if (!select.contains(e.target)) {
      options.style.display = "none";
    }
  });
});



const input = document.getElementById('seacrh');
const dropdownList = document.querySelector('.dropdown__list');

input.addEventListener('keydown', () => {
  const inputText = input.value.toLowerCase();
  const options = dropdownList.querySelectorAll('li');

  options.forEach(option => {
    const optionText = option.textContent.toLowerCase();
    if (optionText.indexOf(inputText) !== 0) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    };
    option.addEventListener('click', (e) => {
      input.value = e.currentTarget.innerText;
      dropdownList.classList.remove('show');
    })
  });

  dropdownList.classList.add('show');

  

});

document.addEventListener('click', () => {
  dropdownList.classList.remove('show');
})

function myFunction() {
  
  const input = document.getElementById('seacrh');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById('dropdowns');
  const li = ul.getElementsByTagName('li');

  // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
