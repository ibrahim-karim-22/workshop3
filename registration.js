class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }  
    //Bonus Task 3:
    getInfoStudent() {
        return `Student Name: ${this.name}, Email ${this.email}`;
    }
}
//object test Student class
    testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
    console.log(testStudent);
    if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
        console.log('TASK 1: PASS');
    }

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

        registerStudent(studentToRegister) {
            if (!studentToRegister.name || !studentToRegister.email) {
                console.log('Invalid name or email');
                return false
            }else {
                let i; // if i dont do this im getting i is undefined. maaybe use a for in loop here?
                for (i = 0; i < this.students.length; i++) {
                    if (this.students[i].email === studentToRegister.email) {
                        console.log(`The email address ${studentToRegister.email} is already registered!`);
                        return false;
                    }
                } /// the reaon you don't need an else statmenet here is because there i a return statment which would immediatly exit function if true
                        this.students.push(studentToRegister);
                        console.log(`Registering ${studentToRegister.name} to the React bootcamp.`);
                        return true;
                    }
                }
                listStudents() {
                    if (this.students.length === 0) {
                        console.log(`No students are registered to ${this.name} bootcamp.`);
                        return false;
                    } 
                        console.log(`The students registered in ${this.name} are:`)
                        for (const student of this.students) { //or forEach() array method.
                            console.log(`Name: ${student.name}, ${student.email}`);
                            return true;
                        }
                }
                //Bonus Task 1:
                getInfoBootcamp() {
                    return `Bootcamp Name: ${this.name}, Level: ${this.level}`;
                }

                //Bonus Task 2:
                removeStudent(email) {
                    this.students = this.students.filter(student => student.email !== email);
                }
            }
        
    //object test for Bootcamp class
    reactBootcamp = new Bootcamp("React", "Advanced");
    console.log(reactBootcamp);
    if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
        console.log('Task 2: Pass');

    }
    //arrow function definition 
    const runTest = (bootcamp, student) => {
        const attemptOne = bootcamp.registerStudent(student);
        const attemptTwo = bootcamp.registerStudent(student);
        const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
        if ( attemptOne && !attemptTwo && !attemptThree) {
            console.log("Task 3: Pass");
        }

        bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
        if (bootcamp.listStudents()) {
            console.log("TASK 4: Pass 1/2");
        }
        bootcamp.students = [];
        if (!bootcamp.listStudents()) {
            console.log("Task 4: PASS 2/2");
        }
    };

    //bonus Task 1:
    const bootcampInfo = new Bootcamp("Full-Stack Bootcamp", "Beginner");
    console.log(bootcampInfo.getInfoBootcamp());

    //bonus task 3:
    const studentKristine = new Student("Kristine Kristine", "kristine@kristine.com");
    console.log(studentKristine.getInfoStudent());

    //bonus Task 2: 
    Bootcamp.removeStudent(studentKristine.email);

    

    runTest(reactBootcamp, testStudent);