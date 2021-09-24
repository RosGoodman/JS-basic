/** Класс описывающий объект пост (сообщение).**/
class Post {
    author = "";
    text = "";
    date = null;

    /**
     * @param {string} author, автор поста.
     * @param {string} text, текст поста.
     * @param {date} date, дата поста.
     * */
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    /**
     * Функция изменяет текст поста.
     * @param {string} text, новый текст поста.
     * */
    edit(text) {
        this.text = text;
    }
}

/** Класс описывающий объект пост (сообщение) c изенением подсветки... наверно).**/
class AttachedPost extends Post {
    highlighted = false;

    /**
     * @param {string} author, автор поста.
     * @param {string} text, текст поста.
     * @param {date} date, дата поста.
     * */
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false; //строка не обязательная т.к. выше в св-ве описано дефолтное значение. Оставил для галочки.
    }

    /** Функция изменяет свойство highlighted на true. **/
    makeTextHighlighted() {
        this.highlighted = true;
    }
}