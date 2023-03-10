
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDataInput, 500));

function onFormSubmit(ev) {

ev.preventDefault();
ev.currentTarget.reset();
console.log(localStorage.getItem(STORAGE_KEY));
localStorage.removeItem(STORAGE_KEY);
formData = {};

}

function onFormDataInput(ev) {
    formData[ev.target.name] = ev.target.value;
    console.log(ev.target.name, ev.target.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getFormData () {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    formData = savedMessage;
    refs.input.value = savedMessage.email || '';
    refs.textarea.value = savedMessage.message || '';
}

getFormData();


