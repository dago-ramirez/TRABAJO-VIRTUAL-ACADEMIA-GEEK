const lista = document.querySelector('.lista-perros');
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

lista.innerHTML = ` <li>
                      <img src="${firstDogImage}" alt="">
                      <h3>${firstDogName}</h3>
                    </li>
                    <li>
                      <img src="${secondDogImage}" alt="">
                      <h3>${secondDogName}</h3>
                    </li>
                    <li>
                      <img src="${thirdDogImage}" alt="">
                      <h3>${thirdDogName}</h3>
                    </li>`