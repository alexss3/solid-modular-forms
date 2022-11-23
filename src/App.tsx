import type { Component } from 'solid-js';
import { Form, createForm, Field } from '@modular-forms/solid';

import styles from './App.module.css';

type MyForm = {
  email: string;
  password: string;
}

const App: Component = () => {

  const myForm = createForm<MyForm>();

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Form of={myForm} onSubmit={(values) => console.log(values)}>
          <Field of={myForm} name="email">
            {(field) => <input {...field.props} type="email" />}
          </Field>
          <Field of={myForm} name="password">
            {(field) => <input {...field.props} type="password" />}
          </Field>
          <button type='submit'>Sign up</button>
        </Form>
      </header>
    </div>
  );
};

export default App;
