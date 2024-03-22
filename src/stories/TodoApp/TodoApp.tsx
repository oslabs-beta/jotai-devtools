import React from 'react';
import type { FormEvent } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { a, useTransition } from '@react-spring/web';
import { Radio } from 'antd';
import { atom, createStore, useAtom, useSetAtom } from 'jotai';
import type { PrimitiveAtom } from 'jotai';
import { Provider } from 'jotai/react';
import { DevTools, DevToolsProps } from '../../../';
import './todoStyles.css';

type Todo = {
  title: string;
  completed: boolean;
};

const filterAtom = atom('all');
filterAtom.debugLabel = 'filterAtom';

const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
todosAtom.debugLabel = 'todosAtom';

const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === 'all') return todos;
  else if (filter === 'completed')
    return todos.filter((atom) => get(atom).completed);
  else return todos.filter((atom) => !get(atom).completed);
});
filteredAtom.debugLabel = 'filteredAtom';

type RemoveFn = (item: PrimitiveAtom<Todo>) => void;
type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
};
const TodoItem = ({ atom, remove }: TodoItemProps) => {
  const [item, setItem] = useAtom(atom);
  const toggleCompleted = () =>
    setItem((props) => ({ ...props, completed: !props.completed }));
  return (
    <>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>
        {item.title}
      </span>
      <CloseOutlined onClick={() => remove(atom)} />
    </>
  );
};

const Filter = () => {
  const [filter, set] = useAtom(filterAtom);
  return (
    <Radio.Group onChange={(e) => set(e.target.value)} value={filter}>
      <Radio value="all">All</Radio>
      <Radio value="completed">Completed</Radio>
      <Radio value="incompleted">Incompleted</Radio>
    </Radio.Group>
  );
};

type FilteredType = {
  remove: RemoveFn;
};
const Filtered = (props: FilteredType) => {
  const [todos] = useAtom(filteredAtom);
  const transitions = useTransition(todos, {
    keys: (todo) => todo.toString(),
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
  });
  return transitions((style, atom) => (
    <a.div className="item" style={style}>
      <TodoItem atom={atom} {...props} />
    </a.div>
  ));
};

const TodoList = () => {
  // const [tasks, ] = useAtom(todosAtom)
  const setTodos = useSetAtom(todosAtom);
  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = '';
    const newTodoAtom = atom<Todo>({ title, completed: false });
    newTodoAtom.debugLabel = `todoAtom-${title}`;
    setTodos((prev) => [...prev, newTodoAtom]);
  };

  return (
    <form id="todoForm" onSubmit={add}>
      <Filter />
      <input id="todo-input" name="inputTitle" placeholder="Type ..." />
      <Filtered remove={remove} />
    </form>
  );
};
const customStore = createStore();

export default function TodoApp() {
  return (
    <div style={{ height: '700px' }}>
      <Provider store={customStore}>
        <h1 id="todoTitle">Todo List</h1>
        <TodoList />
        <DevTools store={customStore} />
      </Provider>
    </div>
  );
}
