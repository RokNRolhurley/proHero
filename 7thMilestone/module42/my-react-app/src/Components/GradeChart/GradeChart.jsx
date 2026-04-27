import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const GradeChart = ({marksPromise}) => {
    
    const marksDataRes = use(marksPromise);
    const marksData= marksDataRes.data;
    // console.log(marksData)

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.studentName,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math: studentData.math,
            grade: studentData.grade
        }
        const avg = (studentData.physics + studentData.chemistry + studentData.math) / 3; 
        student.avg = avg;
        return student;
    })
    console.log(marksChartData);

    return (
        <div>
            <BarChart width={700} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='chemistry' fill='yellow'></Bar>
                <Bar dataKey='math' fill='blue'></Bar>
                <Bar dataKey='physics' fill='red'></Bar>
            </BarChart>
            
        </div>
    );
};

export default GradeChart;