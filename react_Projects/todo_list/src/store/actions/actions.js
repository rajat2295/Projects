

 export const addTask = (task)=>{
     return{
         type:'ADD_TASK',
         payload:task
     }
 }
 export const deleteTask = (taskId) =>{
     
     return{
         
         type:'DELETE_TASK',
         payload:taskId
     }

 }



 export const ADD_TASK='ADD_TASK';
 export const DELETE_TASK='DELETE_TASK';
