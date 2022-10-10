import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import React from "react";
import { LEVELS } from "./../../../models/levels.enum";
import { Task } from "./../../../models/task.class";

const TaskFormik = ({ add, length }) => {
  const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };

  const addTask = (values) => {
    const newTask = new Task(
      values.name,
      values.description,
      false,
      values.level
    );
    add(newTask);
  };

  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Task name too short")
      .max(20, "Task name too long")
      .required("Task name is required"),
    description: Yup.string()
      .min(3, "Task description too short")
      .required("Task description is required"),
    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],
        "You must select a Level"
      )
      .required("Level is required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          addTask(values);
          resetForm({ values: "" });
        }}
      >
        <Form>
          <div>
            <Field
              className="form-control form-control-lg"
              name="name"
              placeholder="Task Name"
              type="text"
            />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />

            <Field
              className="form-control form-control-lg"
              name="description"
              placeholder="Task Description"
              type="text"
            />
            <ErrorMessage
              name="description"
              component="div"
              style={{ color: "red" }}
            />

            <Field
              className="form-control form-control-lg"
              name="level"
              as="select"
            >
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </Field>
          </div>
          <button type="submit" className="btn btn-success btn-lg w-100">
            {length > 0 ? "Add New Task" : "Create your First Task"}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default TaskFormik;
