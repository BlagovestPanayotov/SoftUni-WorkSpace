function comments(input) {

    let dataBase = { users: [], articles: [], comments: {} };

    for (let line of input) {
        if (line.split(' ').length == 2) {
            let [command, name] = line.split(' ');
            if (command == 'user') {
                dataBase.users.push(name);
            } else {
                dataBase.articles.push(name);
            }
        } else {
            let [userName, articleName, title, comment] = line
                .replace(' posts on ', '$')
                .replace(': ', '$')
                .replace(', ', '$')
                .split('$');

            if (dataBase.users.includes(userName)
                && dataBase.articles.includes(articleName)) {
                if (dataBase.comments.hasOwnProperty(articleName)) {
                    dataBase.comments[articleName].push({ [userName]: `--- From user ${userName}: ${title} - ${comment}` });
                } else {
                    dataBase.comments[articleName] = [{ [userName]: `--- From user ${userName}: ${title} - ${comment}` }];
                }
            }

           
        }
    }

    let sorted = Object.entries(dataBase.comments).sort((a, b) => b[1].length - a[1].length);


    for (let [name, comments] of sorted) {
        console.log(`Comments on ${name}`);
        let sortedUsers = comments
            .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
        for (let line of sortedUsers) {
            let [user,comment] = Object.entries(line)[0];
            console.log(comment);
        }
    }


}


comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);
// comments(['user Mark',
//     'Mark posts on someArticle: NoTitle, stupidComment',
//     'article Bobby',
//     'article Steven',
//     'user Liam',
//     'user Henry',
//     'Mark posts on Bobby: Is, I do really like them',
//     'Mark posts on Steven: title, Run',
//     'someUser posts on Movies: Like']);