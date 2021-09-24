/**
 * Функция-конструктор объекта post.
 * @param {string} author, автор поста.
 * @param {string} text, текст поста.
 * @param {date} date, дата поста.
 * */
function post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

/**
 * Функция изменяет текст поста.
 * @param {string} text, новый текст поста.
 * */
post.prototype.edit = function (text) {
    this.text = text;
}

/**
 * Функция-конструктор объекта attachedPost.
 * @param {string} author, автор поста.
 * @param {string} text, текст поста.
 * @param {date} date, дата поста.
 * */
function attachedPost(author, text, date) {
    post.call(this, author, text, date);
    this.highlighted = false;
}

/** Функция изменяет свойство highlighted на true. **/
attachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}