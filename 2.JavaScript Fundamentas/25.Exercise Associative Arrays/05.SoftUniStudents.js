function softUniStudents(input) {

    class Course {
        constructor(capacity) {
            this.capacity = Number(capacity);
            this.students = [];
        }

        addStudent(student) {
            if (this.capacity > 0) {
                this.students.push(student);
                this.capacity--;
            }
        }
    }

    class Student {
        constructor(name, email, credits) {
            this.name = name;
            this.email = email;
            this.credits = Number(credits);
        }
    }

    let dataBase = {}

    for (let line of input) {
        if (line.split(' ').length == 2) {
            const [courceName, capacity] = line.split(': ');
            if (dataBase.hasOwnProperty(courceName)) {
                dataBase[courceName].capacity += Number(capacity);
            } else {
                dataBase[courceName] = new Course(capacity);
            }
        } else {
            const [userName, userCredits, email, courceName] = line
                .replace('] with email ', '$')
                .replace('[', '$')
                .replace(' joins ', '$')
                .split('$');

            if (dataBase.hasOwnProperty(courceName)) {
                if (dataBase[courceName].capacity > 0) {

                    for (let student of dataBase[courceName].students) {
                        if (student.name === userName) {
                            continue;
                        }
                    }
                    dataBase[courceName].addStudent(new Student(userName, email, userCredits));

                }
            }
        }

    }
    let sortedCourses = Object.entries(dataBase)
        .sort((a, b) => b[1].students.length - a[1].students.length);

    for (let [courseName, courseInfo] of sortedCourses) {
        console.log(`${courseName}: ${courseInfo.capacity} places left`);
        let currentStudents = courseInfo.students.sort((a, b) => b.credits - a.credits);
        for (let currentStudent of currentStudents) {
            console.log(`--- ${currentStudent.credits}: ${currentStudent.name}, ${currentStudent.email}`);
        }

    }

}


softUniStudents(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);
console.log('-------------------');
softUniStudents(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']);