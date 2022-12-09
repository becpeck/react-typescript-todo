import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useTaskState, useSortState, useThemeColorState, useThemeModeState } from '../../hooks/useLocalStorage';

import TaskButtons from './TaskButtons';
import TaskItemList from './TaskItemList';
import TaskInput from './TaskInput';
import SortToggle from './SortToggle';
import ThemePalette from './ThemePalette/ThemePalette';

import { Task, ThemeColor, ThemeMode } from './TodoList.interface';

import { sampleTasks, initialNewTaskInput, initialThemeColors, initialThemeMode, THEME_MODES } from './constants';


export default function TodoList() {
  const [tasks, setTasks] = useTaskState(sampleTasks)
  const [newTaskInput, setNewTaskInput] = useState(initialNewTaskInput);
  const [sortOn, setSortOn] = useSortState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [themeColors, setThemeColors] = useThemeColorState(initialThemeColors);
  const [themeMode, setThemeMode] = useThemeModeState(initialThemeMode);


  useEffect(() => {
    const color = getColorTag(themeColors);
    document.body.setAttribute('data-theme-color', color);
  }, [themeColors]);
  
  useEffect(() => {
    const mode = getModeTag(themeMode);
    document.body.setAttribute('data-theme-mode', mode);
  }, [themeMode])


  // useEffect helper functions
  const getColorTag = (themeColors: ThemeColor[]) => {
    const activeThemeColor = themeColors.filter(themeColor => themeColor.active);
    return activeThemeColor[0].color;
  }

  const getModeTag = (themeMode: ThemeMode) => {
    if (themeMode === THEME_MODES.AUTO) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? THEME_MODES.DARK : THEME_MODES.LIGHT;
    } else {
      return themeMode;
    }
  }


  // Theme State functions
  const togglePaletteOpen = () => {
    setPaletteOpen(!paletteOpen);
  }

  const handleChangeColor = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setThemeColors(themeColors.map(themeColor => (
      themeColor.color === evt.target.value
        ? {...themeColor, active: true}
        : {...themeColor, active: false}
    )));
  }

  const setMode = (mode: ThemeMode) => {
    setThemeMode(mode);
  }


  // Task State functions
  const checkAllTasks = () => {
    setTasks(tasks.map(task => ({...task, completed: true})));
  }

  const uncheckAllTasks = () => {
    setTasks(tasks.map(task => ({...task, completed: false})));
  }

  const removeAllTasks = () => {
    setTasks([]);
  }
  
  const toggleComplete = (id: Task['id']) => {
    let updatedTasks = tasks.map(task => {
      return task.id === id 
        ? {...task, completed: !task.completed} 
        : task;
    });
    if (sortOn) {
      const [ toggledTask ] = updatedTasks.filter((task) => task.id === id)
      updatedTasks = updatedTasks.filter((task) => task.id !== id)
      updatedTasks = sortTask(toggledTask, updatedTasks)
    }
    setTasks(updatedTasks)
  }

  const removeTask = (id: Task['id']) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleEditTask = (id: Task['id']) => {
    setTasks(tasks.map(task => (
      task.id === id
        ? {...task, editOn: !task.editOn}
        : task
    )));
  }

  const handleChangeTask = (id: Task['id']) => (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTasks(tasks.map(task => (
      task.id === id
        ? {...task, text: evt.target.value}
        : task
    )));
  }


  // Input state functions
  const toggleEditInput = () => {
    setNewTaskInput({...newTaskInput, editOn: !newTaskInput.editOn})
  }

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setNewTaskInput({...newTaskInput, text: value});
  }

  const addNewTask = () => {
    const newTask: Task = {id: uuid(), text: newTaskInput.text, completed: false, editOn: false}
    const updatedTasks = sortOn ? sortTask(newTask, [...tasks]) : [...tasks, newTask]
    setTasks(updatedTasks)
    setNewTaskInput(initialNewTaskInput)
  }


  // Sort state functions
  const toggleSort = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSortOn(evt.target.checked)
    if (evt.target.checked) {
      sortTasks()
    }
  }

  const sortTasks = () => {
    const completed = tasks.filter((task) => task.completed)
    const uncompleted = tasks.filter((task) => !(task.completed))
    setTasks(uncompleted.concat(completed))
  }

  const sortTask = (targetTask: Task, otherTasks: Task[]): Task[] => {
    if (!targetTask.completed && otherTasks.every((task) => task.completed)) {
      return [targetTask].concat(otherTasks)
    } else {
      const completed = otherTasks.filter((task) => task.completed)
      const uncompleted = otherTasks.filter((task) => !(task.completed))
      return uncompleted.concat(targetTask, completed)
    }
  }


  return (
    <div className='widget-todo container'>
      <ThemePalette
        paletteOpen={paletteOpen}
        themeColors={themeColors}
        themeMode={themeMode}
        togglePaletteOpen={togglePaletteOpen}
        handleChangeColor={handleChangeColor}
        setMode={setMode}
      />
      <h2>To-do List</h2>
      <SortToggle 
        sortOn={sortOn}
        toggleSort={toggleSort}
      />
      <TaskButtons 
        tasks={tasks}
        checkAll={checkAllTasks}
        uncheckAll={uncheckAllTasks}
        removeAll={removeAllTasks}
      />
      <div id='tasks-container'>
        <TaskItemList 
          tasks={tasks}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
          toggleEditOn={toggleEditTask}
          handleChange={handleChangeTask}
        />
        <TaskInput 
          newTaskInput={newTaskInput}
          toggleEditOn={toggleEditInput}
          handleChange={handleChangeInput}
          addNewTask={addNewTask}
        />
      </div>
    </div>
  );
}
