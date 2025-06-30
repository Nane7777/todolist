/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export type TaskItem = {
  id: number;
  title: string;
  description: string;
  done: boolean;
  detailed: boolean;
  priority: string;
};

type TaskContextType = {
  tasks: TaskItem[];
  addNewTask: (
    task: string,
    description: string,
    done: boolean,
    priority: string
  ) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  updateTaskPriority: (id: number, newPriority: string) => void;
  doneCount: number;
  totalCount: number;
};

const TaskContext = React.createContext<TaskContextType>(null!);

export const TaskContextProvider = ({ children }: React.PropsWithChildren) => {
  //USe LocaleStorage
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  // last id registered storage to avoid duplication of id
  const [lastId, setLastId] = useState<number>(0);
  const [isStorageLoaded, setIsStorageLoaded] = useState<boolean>(false);

  //UseMOunt or use EffectOnce
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    const storedLastId = localStorage.getItem('lastId');

    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        if (!Array.isArray(parsedTasks)) {
          throw new Error('Local storage value invalid : ' + storedTasks);
        }
        setTasks(parsedTasks);
        setIsStorageLoaded(true);
      } catch (error) {
        console.error('Parsing error: ', error);
      }
    }

    if (storedLastId) {
      const parsedLastId = parseInt(storedLastId, 10);
      if (!isNaN(parsedLastId)) {
        setLastId(parsedLastId);
      }
    }
  }, []);

  //Sync locale storage with current state
  useEffect(() => {
    if (isStorageLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('lastId', lastId.toString());
    }
  }, [tasks, lastId, isStorageLoaded]);

  const handleAddTask = useCallback(
    (task: string, description: string, done: boolean, priority: string) => {
      setTasks((prevTasks) => {
        const newTask: TaskItem = {
          id: lastId,
          title: task,
          description: description,
          done: done,
          detailed: true,
          priority: priority,
        };
        const newTasks = [...prevTasks, newTask];
        return newTasks;
      });
      setLastId((prev) => prev + 1);
    },
    [lastId]
  );

  function handleDeleteTask(id: number) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      return updatedTasks;
    });
  }

  function handleToggleTask(id: number) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
      return updatedTasks;
    });
  }

  function handleUpdateTaskPriority(id: number, newPriority: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, priority: newPriority } : task
      )
    );
  }

  const doneCount = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks]
  );
  const totalCount = tasks.length;

  return (
    <TaskContext.Provider
      value={{
        addNewTask: handleAddTask,
        deleteTask: handleDeleteTask,
        toggleTask: handleToggleTask,
        updateTaskPriority: handleUpdateTaskPriority,
        tasks,
        doneCount,
        totalCount,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => React.useContext(TaskContext);
