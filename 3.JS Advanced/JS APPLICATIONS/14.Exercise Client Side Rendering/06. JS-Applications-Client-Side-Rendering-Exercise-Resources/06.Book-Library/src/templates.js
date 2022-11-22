import { html } from '../../node_modules/lit-html/lit-html.js';

export const tableTemplate = (books, ctx) => {
    console.log(books);
    return html`
    <button @click=${ctx.renderAllBooks} id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${books.map(x => tableRowTemplate(x, ctx))}
        </tbody>
    </table>
    ${formTemplate('add-form', 'Add', ctx)}

    ${formTemplate('edit-form', 'Edit', ctx)}
    `;
}

const tableRowTemplate = ([id, book], ctx) => {
    console.log(book);
    return html`<tr>
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>
        <button @click=${ev => ctx.editBook(ev, book, id)} _id=${id}>Edit</button>
        <button @click=${ev => ctx.deleteBook(ev, book, id)} _id=${id}>Delete</button>
    </td>
    </tr>`};

const formTemplate = (id, text, ctx) =>
    html`<form id=${id} @submit=${text == 'Add' ? ctx.addBook : ctx.upBook}>
            ${text == 'Edit' ? html`<input type="hidden" _id="" name="id">` : ''}
            <h3>${text} book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Save">
        </form>`


