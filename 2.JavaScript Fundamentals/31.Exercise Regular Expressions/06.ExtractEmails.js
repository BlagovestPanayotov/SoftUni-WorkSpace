function extractEmails(input) {
    let emailPattern = /(?<user> [A-Za-z0-9]+[-.\w]*)@(?<host>[a-zA-Z-]+\.[A-Za-z-]+[A-Za-z-.]*)\b/g;
    
    let validEmails = input.match(emailPattern)
        .map(email => email.trim());

    console.log(validEmails.join('\n'));
}
extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.   ');