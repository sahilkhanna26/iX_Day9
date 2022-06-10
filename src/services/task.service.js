import {
    collection, addDoc, getDocs, query, deleteDoc, updateDoc, doc
}from 'firebase/firestore'

import {db} from '../firebase/firebase'
import { Task } from '../models/task';


class TaskService{
    constructor(){
        this.collection = 'tasks';
    }
    async createTask(task){

        const collectionRef = collection(db, this.collection);

        const docRef = await addDoc(collectionRef,{
            name: task.name,
            complete : task.complete,
        });

        task.id = docRef.id;
        return task;
    }

    async fetchTasks(){
        const collectionRef = collection(db, this.collection);
        const q = query(collectionRef);
        const querySnapShot = await getDocs(query(q));
        const tasks = [];
        querySnapShot.forEach((doc)=>{
            const data = doc.data();
            const task = new Task(
                doc.id,
                data.name,
                data.complete
            );
            tasks.push(task);
        });
        return tasks
    }

    async updateTask(task){
        const docRef = doc(db, this.collection, task.id);

        await updateDoc(docRef, {
            name:task.name,
            complete:task.complete
        });
        return task;
    }

    async deleteTask(taskid){
        const docRef = doc(db, this.collection, taskid);

        await deleteDoc(docRef);
    }


}

const service = new TaskService();
export default service;