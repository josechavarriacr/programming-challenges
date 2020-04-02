class Student {
    constructor(data) {
        this.name = data.name;
        this.grade = data.grade;
    };
    getPersonalInfo() {
        return `my name is: ${this.name} and I'm in ${this.grade}`;
    }
}

class University extends Student {
    constructor(data){
        const student = super(data);
        this.carrer = data.carrer;
        this.student = student;
    }
    getCarrer() {
        const info = this.student.getPersonalInfo();
        return `${info} and I'm coursing ${this.carrer}`;
    }
}

class Elemantary extends Student {
    constructor(data){
        const student = super(data);
        this.responsable = data.responsable;
        this.student = student;
    }
    getParents() {
        const info = this.student.getPersonalInfo();
        return `${info} and my mother's ${this.responsable}`;
    }
}

const printInfo = () => {
    const dataU = {
        name: 'jose',
        grade: 'University',
        carrer: 'software engenieer'
    }
    
    const dataC = {
        name: 'jose',
        grade: 'Elementary School',
        responsable: 'Olga CO'
    }
    const aux1 = new University(dataU);
    console.log(aux1.getCarrer());

    const aux2 = new Elemantary(dataC)
    console.log(aux2.getParents(dataC) );
    

    
}

printInfo()