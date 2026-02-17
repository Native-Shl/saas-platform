// school.ts

// Define types for a complete school management system

// Type definition for a student
export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    grade: string;
    enrolledCourses: Course[];
}

// Type definition for a course
export interface Course {
    id: string;
    name: string;
    description: string;
    credits: number;
    instructor: Instructor;
}

// Type definition for an instructor
export interface Instructor {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    coursesTaught: Course[];
}

// Type definition for a parent
export interface Parent {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    children: Student[];
}

// Type definition for school
export interface School {
    id: string;
    name: string;
    address: string;
    students: Student[];
    courses: Course[];
    instructors: Instructor[];
}