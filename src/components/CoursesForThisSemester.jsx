import React, { useState, useEffect } from 'react';

const coursesData = [
    {
        code: "SOD1103",
        name: "Web Technology and Internet",
        time: "18:00 - 21:00"
    },
    {
        code: "SOD1102",
        name: "Software Testing",
        time: "18:00 - 21:00"
    }
];

function CoursesForThisSemester() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(coursesData);
    }, []);

    const boxStyle = {
        border: '1.5px solid #4a90e2',
        padding: '12px',
        margin: '12px auto',
        width: '65%',
        maxWidth: '600px',
        textAlign: 'center'
    };

    return (
        <div>
            <h3>All Courses</h3>
            {courses.map(course => (
                <div key={course.code} style={boxStyle}>
                    <div>{course.code}</div>
                    <div>{course.name}</div>
                    <div>{course.time}</div>
                </div>
            ))}
        </div>
    );
}

export default CoursesForThisSemester;
