export const getExampleTasks = async () => {
  const response = await fetch("/ToDo-List--DE-CRMS--ReactApp/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};