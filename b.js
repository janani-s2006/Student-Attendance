import streamlit as st

st.title("Simple To-Do List")

if "tasks" not in st.session_state:
    st.session_state.tasks = []

task = st.text_input("Enter a task:")
if st.button("Add") and task:
    st.session_state.tasks.append(task)

for t in st.session_state.tasks:
    st.write("✅", t)
