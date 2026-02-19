// export default function ToDo({task, isDone}){
//     return (
        
//         <li>Task: {task}</li>
//     )
// }
// export default function ToDo({task, isDone, time =0}){
   
//     return isDone ? 
//         <li>Task: {task} time: {time}</li> 
//             :  <li>Not Done</li>

//    if(isDone === true){
//     return   <li>Task: {task}</li>
//    }
//     return <li>Pending: {task}</li>
// }

// export default function ToDo({task, isDone, time =0}){
    // return isDone && <li>Done Tasks: {task} time: {time}</li>
    // return !isDone && <li>Pending Tasks: {task}  </li>
// }

// export default function ToDo({task, isDone, time =0}){
//     return isDone || <li>Not Done Tasks: {task} time: {time}</li>
    
// }

// export default function ToDo({task, isDone, time =0}){
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }
export default function ToDo({task, isDone, time}){
    
    let listItem; 
    const displayTime = time ? time : null ;

    if (isDone === true) {
        listItem = <li>Done: {task} {displayTime}</li>
    }
    else {
        listItem = <li>Pending: {task} {displayTime}</li>
    }
    return listItem
}